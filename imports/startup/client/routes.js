import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/login/login.js';


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

// Exposed group
exposed = FlowRouter.group({});
exposed.route('/login', {
    name: 'login',
    action: function(){
        BlazeLayout.render('login', { main: "App_home"});
    }
});


// Internal App routes
// Logged Routes
loggedIn = FlowRouter.group({
    triggersEnter: [
        function(){
            var route;
            if(!(Meteor.loggingIn() || Meteor.userId())){
                route = FlowRouter.current();
                if (route.route.name !== 'login') {
                    // Adicionar Mensagem de Redirecionamento
                    Session.set('redirectAfterLogin',route.path);
                }
                return FlowRouter.go('login');
            }
        }
    ]
});

loggedIn.route("/", {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'App_home', pageContent: "profile", sidemenu: 'sidemenu' });
    },
});

loggedIn.route('/consult', {
    name: 'consult',
    action: function(){
        BlazeLayout.render('App_body', { main: "App_home", pageContent:'consults', sidemenu:'sidemenu'});
    }
});

loggedIn.route('/report', {
    name: 'report',
    action: function(){
        BlazeLayout.render('App_body', { main: "App_home", pageContent:'aflist', sidemenu:'sidemenu'});
    }
});
