import { states } from "../../../api/consults/formData";
import "bootstrap-multiselect";
import "bootstrap-multiselect/dist/css/bootstrap-multiselect.min.css";
import { selectpicker } from "bootstrap-select";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./profile.html";

Template.profile.onRendered(function () {
  $("#sites").multiselect({
    enableFiltering: true,
    templates: {
      filter:
        '<div class="multiselect-filter"><div class="input-group input-group-sm p-1"><div class="input-group-prepend"><i class="input-group-text fas fa-search fa-sm"></i></div><input class="form-control multiselect-search" type="text" /><div class="input-group-append"><button class="multiselect-clear-filter input-group-text" type="button"><i class="fas fa-times"></i></button></div></div></div>',
    },
  });
  // $(function () {
  //   $("#headquarters").selectpicker();
  // });
});

Template.profile.helpers({
  // Avoids error while profile is being loaded
  userProfile: function () {
    if (Meteor.user()) {
      const userProfile = Meteor.user().profile;
      if (!Meteor.loggingIn()) {
        return userProfile;
      }
    }
  },
  userHasStateSelected: function (site) {
    if (Meteor.user()) {
      let userSites = Meteor.user().profile.sites;
      let test = userSites.includes(site);
      return test;
    }
  },
  states() {
    stateArray = states;
    return stateArray.sort();
  },
});

Template.profile.events({
  "keyup [name=name]": function (event) {
    const name = $(event.target).val();
    Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.name": name } }
    );
  },
  "keyup [name=institution]": function (event) {
    const institution = $(event.target).val();
    Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.institution": institution } }
    );
  },
  "keyup [name=profession]": function (event) {
    const profession = $(event.target).val();
    Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.profession": profession } }
    );
  },
  "change [name=headquarters]": function (event) {
    const headquarters = $(event.target).val();
    Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.headquarters": headquarters } }
    );
  },
  "change [name=sites]": function (event) {
    const sites = $(event.target).val();
    Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.sites": sites } }
    );
  },
});
