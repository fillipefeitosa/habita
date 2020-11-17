import { Template } from "meteor/templating";

import "./login.html";

Template.login.events({
  "submit form": function (event) {
    event.preventDefault();
    let emailVar = event.target.email.value;
    let passVar = event.target.password.value;
    Meteor.loginWithPassword(emailVar, passVar);
  },
});

Template.register.events({
<<<<<<< HEAD
  "submit form": function (event) {
    event.preventDefault();
    var userObject = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    Accounts.createUser(userObject, function (err) {
      if (err) {
        console.log(err);
        window.alert(err.reason);
      } else {
        // Default Behavior. User should LogIn
      }
    });
  },
});
=======
    'submit form': function(event){
        event.preventDefault();
        var userObject = { 
            email: event.target.email.value, 
            password: event.target.password.value
        }; 
         
        Accounts.createUser(userObject, function(err) { 
            if(err){
                console.log(err);
                window.alert(err.reason)
            } else {
                // Default Behavior. User should LogIn
            }
        });
    }
})
>>>>>>> 539ed00fd7ec666c3b53ca12266356d4bbeb12d5
