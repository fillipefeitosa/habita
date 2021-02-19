import { Meteor } from "meteor/meteor";
import { Consults } from "/imports/api/consults/consults.js";
import swal from "sweetalert";

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
  Meteor.subscribe("Colaborators.all");
});

function getColaboratorProfile(colaboratorId) {
  let colaboratorProfile = Meteor.users.findOne(
    { _id: colaboratorId },
    { fields: { emails: 1, profile: 1 } }
  );
  return colaboratorProfile;
}

Template.consultsAdmin.events({
  "click [name=colaboratorProfileModal]": function (event, template) {
    const colaboratorId = event.currentTarget.id;
    let profileObj = getColaboratorProfile(colaboratorId);
    let profile = profileObj.profile;
    let emails = profileObj.emails;
    console.log(profileObj);
    let text = `\nNome: ${profile.name} \n
    Email: ${emails[0].address} \n
    Profissão: ${profile.profession} \n
    Instituição: ${profile.institution} \n
    Sede: ${profile.headquarters} \n
    `;

    swal("Perfil do Colaborador", text, "info");
  },
});

Template.consultsAdmin.helpers({
  consults() {
    return Consults.find({});
  },
  getColaboratorName(colaboratorId) {
    let colaborator = Meteor.users.findOne(
      { _id: colaboratorId },
      {
        fields: { profile: 1 },
      }
    );
    return colaborator.profile.name;
  },
  getConsult(docId) {
    return Consults.findOne({ docId });
  },
});
