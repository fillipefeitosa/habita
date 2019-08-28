import { Template } from 'meteor/templating';

import './login.html';

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        let emailVar = event.target.email.value;
        let passVar = event.target.password.value;
        Meteor.loginWithPassword(emailVar, passVar);
    }
});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var userObject = { 
            email: event.target.email.value, 
            password: event.target.email.value
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