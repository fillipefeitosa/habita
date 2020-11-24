import { Template } from "meteor/templating";
import 'jquery-validation';
import "./login.html";

$.validator.setDefaults({
  rules: {
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 6,
    },
    passwordConfirm: {
      required: true,
      equalTo: "#password"
    }
  },
  messages: {
    email: {
      required: "Por favor insira um email válido.",
      email: "Você inseriu um e-mail inválido.",
    },
    password: {
      required: "Por favor insira sua password.",
      minlength: "Sua password deve possuir ao menos {0} caracteres.",
    },
  },
});

Template.login.onRendered(function () {
  var validator = $("#login").validate({
    submitHandler: function (event) {
      let emailVar = $("[name=email]").val();
      let passVar = $("[name=password]").val();
      Meteor.loginWithPassword(emailVar, passVar, function (error) {
        if (error) {
          // For secutiry reasons, do not show what is the exact user error
          if (
            error.reason == "User not found" ||
            error.reason == "Incorrect password"
          ) {
            validator.showErrors({
              password: "Verifique suas credenciais e tente novamente.",
            });
          }
        } else {
          // Default Behavior. Should Login and redirect to maintenance page
        }
      });
    },
  });
});

Template.register.onRendered(function () {
  var validator = $("#register").validate({
    submitHandler: function (event) {
      var userObject = {
        email: $("[name=email]").val(),
        password: $("[name=password").val(),
      };
      Accounts.createUser(userObject, function (error) {
        console.log(error);
        console.log("tentei criar o usuário")
        if (error) {
          if (error.reason == "Email already exists.") {
            validator.showErrors({
              email: "Já existe uma conta de usuário com esse email registrado.",
            });
          }
        } else {
          // Default Behavior. User should LogIn
        }
      });
    },
  });
});

Template.login.events({
  "submit form": function (event) {
    event.preventDefault();
  },
});

Template.register.events({
  "submit form": function (event) {
    event.preventDefault();
  },
});