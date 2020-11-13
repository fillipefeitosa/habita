import { Consults } from "/imports/api/consults/consults.js";

import "./consults.html";

Template.consults.onCreated(function () {
  Meteor.subscribe("Consults.byColaborator");
});

Template.consults.helpers({
  formCollection() {
    return Consults;
  },
  sitesOptions() {
    let options = {
      Agilde: "Agilde",
      Arnoia: "Arnoia",
      "Borba da Montanha": "Borba da Montanha",
      "Britelo, Gémeos e Ourilhe": "Britelo, Gémeos e Ourilhe",
      "Caçarilhe e Infesta": "Caçarilhe e Infesta",
    };

    return options;
  },
});
