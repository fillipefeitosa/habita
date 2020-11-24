import { Consults } from "/imports/api/consults/consults.js";
import "sweetalert";
import "./consults.html";
import swal from "sweetalert";

// Autoform Hooks
AutoForm.addHooks(null, {
  onError: function (name, error, template) {
    console.log(name + " error:", error);
    // swal("Registo Incompleto", "Campo Obrigatório:" + error, "error");
    swal("Registo Incompleto", "Por favor, confirme o preenchimento dos campos obrigatórios.","error")
  },
  onSuccess: function (formType, result) {
    AutoForm.resetForm("consultsForm");
    swal("Sucesso", "Agregado familiar inserido com sucesso", "success");
  },
});

Template.consults.onCreated(function () {
  Meteor.subscribe("Consults.byColaborator");
});

Template.consults.events({
  "click #elementInstructions"(event){
    let text = `Nos campos de texto livre evite indicar nomes ou dados afins que possam remeter para si ou para outras pessoas. 
    De acordo com o disposto pelo RGPD, de forma a que os dados pessoais não sejam colocados em causa, sugerimos que seja
    utilizado um código para o preenchimento do campo ‘nome’ dos elementos do agregado familiar. Este código deverá ser
    composto pelas duas letras iniciais do primeiro e do último nome de cada elemento do agregado familiar (por exemplo,
    se o nome do elemento do agregado familiar fosse 'André Silva' teria de preencher 'AnSi').`;
    swal("Preenchimento do campo Nome do Agregado Familiar", text, "info");
  }
})

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
