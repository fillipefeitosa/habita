import { Meteor } from "meteor/meteor";
import { Consults } from "/imports/api/consults/consults.js";

import "./aflist.html";

Template.aflist.onCreated(function () {
  //   Meteor.subscribe("Consults.byColaborator");
});

// Templates for Colaboradores
Template.consultsColaborador.onCreated(function () {
  Meteor.subscribe("Consults.byColaborator");
});

Template.consultsColaborador.helpers({
  consults() {
    return Consults.find({});
  },
  getConsult(docId) {
    return Consults.findOne({ docId });
  },
});

// Templates for ADMIN

Template.consultsAdmin.onCreated(function () {
  Meteor.subscribe("Consults.all");
});

Template.consultsAdmin.helpers({
  consults() {
    return Consults.find({});
  },
  getConsult(docId) {
    return Consults.findOne({ docId });
  },
});
