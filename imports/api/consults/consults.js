import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { AutoForm } from "meteor/aldeed:autoform";
import {
  residenceTypeOptions,
  residenceUrbanOptions,
  residenceConstructionOptions,
  residenceProblemOptions,
  relationship,
  vulnerableTypes,
  yesNoRadio,
  habObjectiveDepravation,
  firstOptions_1,
  firstOptions_2,
  firstOptions_4,
} from "./formData.js";
import {
  neighborhoodTypology,
  residenceType,
  residenceOcupationType,
} from "./formData.js";
import {
  significativeSocialProblems,
  generalAFSocialPerception,
} from "./formData.js";
import {
  socialServicesToAfFromSource,
  sourcesAndTotalValuesAF,
  afLivesInBadComunity,
} from "./formData.js";

SimpleSchema.extendOptions(["autoform"]);

export const Consults = new Mongo.Collection("Consults");

Consults.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
});

ConsultSchema = new SimpleSchema(
  {
    //  User ID of the responsible
    submitedBy: {
      type: String,
      autoValue: function () {
        return this.userId;
      },
      autoform: { type: "hidden", label: false },
    },
    // 1. Caracterização e Localização do AF
    generalPerception: {
      type: SimpleSchema.Integer,
      label:
        "1. Identifique qual a sua percepção geral sobre a existência de carências sociais e económicas no Agregado Familiar.",
      optional: false,
      autoform: {
        type: "select-radio",
        options: function () {
          perceptionOptions = [
            {
              label:
                "AF em situação de carência social e económica visível / declarada / sinalizada",
              value: 0,
            },
            {
              label:
                "AF em situação de carência social e económica escondida / suspeita de / não sinalizada",
              value: 1,
            },
          ];
          return perceptionOptions;
        },
      },
    },
    site: {
      type: String,
      label:
        "2. Localização da residência do Agregado Familiar - Freguesia/Lugar",
      optional: false,
    },
    size: {
      type: SimpleSchema.Integer,
      label: "3. Dimensão(nº de pessoas)",
      min: 1,
    },
    element: {
      type: Array,
      optional: true,
      label: "Membros da Família",
      maxCount: 9,
    },
    "element.$": {
      type: Object,
      optional: true,
      label: "Membro da Família",
    },
    "element.$.name": {
      type: String,
      max: 200,
      label: "Nome",
      optional: true,
    },
    "element.$.age": {
      type: SimpleSchema.Integer,
      optional: true,
      label: "Idade",
      optional: true,
    },
    "element.$.relationship": {
      type: String,
      optional: true,
      label: "Parentesco",
      autoform: {
        type: "select",
        options: function () {
          return relationship;
        },
      },
    },
    // Part 2 - AF Residence
    residencetypeOf: {
      type: String,
      optional: false,
      label:
        "1. Identifique a tipologia da habitação ocupada (número de quartos da habitação onde reside o Agregado Familiar).",
      autoform: {
        type: "select",
        options: function () {
          return residenceTypeOptions;
        },
      },
    },
    residenceOcupationType: {
      type: String,
      optional: true,
      label:
        "2. Identifique o regime de ocupação da habitação onde reside o Agregado Familiar.",
      autoform: {
        type: "select",
        options: function () {
          return residenceOcupationType;
        },
      },
    },
    residenceUrbanSpace: {
      type: SimpleSchema.Integer,
      optional: true,
      label:
        "3. Identifique o tipo de espaço urbano onde se localiza a residência do Agregado Familiar.",
      autoform: {
        type: "select",
        options: function () {
          return residenceUrbanOptions;
        },
      },
    },
    residenceConstructionType: {
      type: SimpleSchema.Integer,
      optional: true,
      label:
        "4. Identifique o tipo de construção da habitação onde reside o Agregado Familiar.",
      autoform: {
        type: "select",
        options: function () {
          return residenceConstructionOptions;
        },
      },
    },
    residenceProblems: {
      type: SimpleSchema.Integer,
      optional: true,
      label:
        "5. Identifique quais os problemas principais de enquadramento/integração territorial relativos à habitação ocupada pelo AF",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return residenceProblemOptions;
        },
      },
    },

    // End of Part 2

    // Begin of Part 3 - Primeiro Direito
    firstPrecary: {
      type: SimpleSchema.Integer,
      label:
        "1. Assinale as situações de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a PRECARIEDADE (pode assinalar mais do que uma opção)",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_1;
        },
      },
    },
    firstUnsafe: {
      type: SimpleSchema.Integer,
      label:
        "2. Assinale as opções de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a INSALUBRIDADE e INSEGURANÇA (pode assinalar mais do que uma opção)",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_2;
        },
      },
    },
    firstLotation: {
      type: SimpleSchema.Integer,
      label:
        "3. Assinale as opções de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a SOBRELOTAÇÃO",
      autoform: {
        type: "select",
        options: {
          function() {
            let firstOptions_3 = [
              {
                label:
                  "Alojamento de dimensão inadequada face ao tamanho do agregado familiar (falta de 2 ou mais divisões)",
                value: 0,
              },
              { label: "Nenhuma", value: 1 },
            ];
            return firstOptions_3;
          },
        },
      },
    },
    firstInadequate: {
      type: SimpleSchema.Integer,
      label:
        "4. Assinale as opções de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a INADEQUAÇÃO (pode assinalar mais do que uma opção)",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_4;
        },
      },
    },
    firstDescription: {
      type: SimpleSchema.Integer,
      label:
        "5. Existem outras situaçoes de vulnerabilidade socioeconomica a assinalar?",
    },
    firstMoreVulnerabilities: {
      type: SimpleSchema.Integer,
      label:
        "6. Se respondeu afirmativamente, indique que outro tipo vulnerabilidade socieconómica está associada ao agregado familiar (pode selecionar mais do que uma opção)",
    },
    firstDetails: {
      type: String,
      label:
        "7. Caso considere relevante, descreva com maior detalhe as situações assinaladas nas questões anteriores.",
    },
    firstSalary: {
      type: SimpleSchema.Integer,
      label:
        "8. Indique, se possível, de entre as seguintes opções, as fontes dos rendimentos mensais dos agregados familiares",
    },
    firstSalaryMain: {
      type: SimpleSchema.Integer,
      label:
        "9. Indique, se possível, os valores do rendimento mensal do agregado familiar",
    },
    firstSocialSuport: {
      type: SimpleSchema.Integer,
      label:
        "10. Identifique, caso existam, os apoios sociais prestados pela instituição ao agregado familiar.",
    },

    // End of Part 3
  },
  { tracker: Tracker }
);

Consults.attachSchema(ConsultSchema);
