FROM phusion/passenger-nodejs:1.0.19

# Set correct environment variables
ENV HOME /root
EXPOSE 80
# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]


## Correct the certificates for older versions
RUN mv /etc/apt/sources.list.d /etc/apt/sources.list.d.bak
RUN apt update && apt install -y ca-certificates
RUN mv /etc/apt/sources.list.d.bak /etc/apt/sources.list.d


## Download necessary packages and libs
RUN  DEBIAN_FRONTEND=noninteractive apt update \
  && DEBIAN_FRONTEND=noninteractive apt install -qq -y \ 
  software-properties-common curl git build-essential \ 
  net-tools g++

# Remove Default configuration and Copy Drivitup-WEB Nginx service
RUN rm -f /etc/nginx/sites-enabled/default  
COPY ./habita.conf /etc/nginx/sites-enabled

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Copy meteorapp bundle to container with APP user permissions and ownership
COPY --chown=app:app ./bundle/ /home/app/meteorapp/

# Update NPM to avoid npm install error
RUN npm install npm@latest -g

# Install meteorapp 
WORKDIR /home/app/meteorapp/programs/server
RUN npm install --production

# Activate nginx
RUN rm -f /etc/service/nginx/down
# RUN service nginx restart


