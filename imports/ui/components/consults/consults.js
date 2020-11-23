import { Consults } from "/imports/api/consults/consults.js";
import "sweetalert";
import "./consults.html";
import swal from "sweetalert";

// Autoform Hooks
AutoForm.addHooks(null, {
  onError: function (name, error, template) {
    console.log(name + " error:", error);
    swal("Registo Incompleto", "Campo Obrigatório:" + error, "error");
  },
  onSuccess: function (formType, result) {
    AutoForm.resetForm("consultsForm");
    swal("Sucesso", "Agregado familiar inserido com sucesso", "success");
  },
});

Template.consults.onCreated(function () {
  Meteor.subscribe("Consults.byColaborator");
});

Template.consults.helpers({
  formCollection() {
    return Consults;
  },
  verifyConsent() {
    userConsent = Meteor.user().profile.consent;
    return userConsent;
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
