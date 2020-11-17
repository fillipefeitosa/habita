// All links-related publications

import { Meteor } from "meteor/meteor";
import { Consults } from "../consults.js";
import { Roles } from "meteor/alanning:roles";

Meteor.publish("Consults.all", function () {
  return Consults.find();
});

// Double Verification for security: Group and Ordered by
Meteor.publish("Consults.byColaborator", function () {
  if (this.userId) {
    return Consults.find({ submitedBy: this.userId });
  } else {
    this.ready();
  }
});

Meteor.publish("Consults.single", function (documentId) {
  return Consults.find({ _id: documentId });
});
