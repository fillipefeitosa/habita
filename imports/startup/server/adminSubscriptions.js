import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";

Meteor.publish("Colaborators.all", function () {
  if (this.userId && Roles.userIsInRole(Meteor.user(), "Administrador")) {
    return Meteor.users.find();
  }
});
