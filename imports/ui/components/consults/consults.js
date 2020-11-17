import { Consults } from "/imports/api/consults/consults.js";

import "./consults.html";

// Autoform Hooks
AutoForm.addHooks(null, {
  onError: function (name, error, template) {
    console.log(name + " error:", error);
  },
  onSuccess: function (formType, result) {
    AutoForm.resetForm("consultsForm");
    console.log("SUBMETIDO!1");
    console.log(result);
    console.log(formType);
  },

  consultsForm: {
    onSuccess: function (formType, result) {
      console.log("FORM SUBMETIDO!!!");
    },
  },
});

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
      "Canedo de Basto e Corgo": "Canedo de Basto e Corgo",
      "Carvalho e Basto (Santa Tecla)": "Carvalho e Basto (Santa Tecla)",
      Codeçoso: "Codeçoso",
      Fervença: "Fervença",
      "Moreira do Castelo": "Moreira do Castelo",
      Rego: "Rego",
      Ribas: "Ribas",
      "São Clemente de Basto": "São Clemente de Basto",
      "Vale de Bouro": "Vale de Bouro",
      "Veade, Gagos e Molares": "Veade, Gagos e Molares",
    };
    return options;
  },
});
