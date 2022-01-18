import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { AutoForm } from "meteor/aldeed:autoform";
import {
  residenceTypeOptions,
  residenceUrbanOptions,
  residenceConstructionOptions,
  residenceProblemOptions,
  relationship,
  mainFirstOptions,
  firstOptions_1,
  firstOptions_2,
  firstOptions_3,
  firstOptions_4,
  firstOptions_6,
  firstOptions_8,
  firstOptions_10,
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

SimpleSchema.debug = true;

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
      type: String,
      label:
        "1. Identifique qual a sua percepção geral sobre a existência de carências sociais e económicas no Agregado Familiar.",
      optional: true,
      autoform: {
        type: "select-radio",
        options: function () {
          perceptionOptions = [
            {
              label:
                "AF em situação de carência social e económica visível / declarada / sinalizada",
              value:
                "AF em situação de carência social e económica visível / declarada / sinalizada",
            },
            {
              label:
                "AF em situação de carência social e económica escondida / suspeita de / não sinalizada",
              value:
                "AF em situação de carência social e económica escondida / suspeita de / não sinalizada",
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
      optional: false,
      min: 1,
    },
    element: {
      type: Array,
      optional: false,
      label: "Membros da Família",
      maxCount: 12,
      minCount: 1,
    },
    "element.$": {
      type: Object,
      optional: false,
      label: "Membro da Família",
    },
    "element.$.name": {
      type: String,
      max: 200,
      label: "Nome",
      optional: false,
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
      optional: false,
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
      optional: false,
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
      type: Array,
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
    "residenceProblems.$": SimpleSchema.Integer,

    residenceObs: {
      type: String,
      optional: true,
      label:
        "6. Campo reservado para detalhes adicionais, ou caso tenha selecionado 'Outro, quais?' nos campos anteriores.",
      autoform: {
        rows: 3,
      },
    },

    // End of Part 2

    // Begin of Part 3 - Primeiro Direito

    mainPrecary: {
      type: String,
      optional: false,
      label:
        "1. Qual a carência habitacional principal? O agregado familiar enquadra-se em alguma das seguintes situações específicas? (ver art. 11º e 12º, DL 37/2018, na sua redação atual )",
      autoform: {
        type: "select",
        options: function () {
          return mainFirstOptions;
        },
      },
    },

    firstPrecary: {
      type: Array,
      optional: true,
      label:
        "2. Assinale as situações de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a PRECARIEDADE (pode assinalar mais do que uma opção)",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_1;
        },
      },
    },
    "firstPrecary.$": SimpleSchema.Integer,

    firstUnsafe: {
      type: Array,
      optional: true,
      label:
        "3. Assinale as opções de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a INSALUBRIDADE e INSEGURANÇA (pode assinalar mais do que uma opção)",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_2;
        },
      },
    },
    "firstUnsafe.$": SimpleSchema.Integer,

    firstLotation: {
      type: SimpleSchema.Integer,
      optional: true,
      label:
        "4. Assinale as opções de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a SOBRELOTAÇÃO",
      autoform: {
        type: "select",
        options: function () {
          return firstOptions_3;
        },
      },
    },
    firstInadequate: {
      type: Array,
      optional: true,
      label:
        "5. Assinale as opções de carências habitacionais objetivas que podem ser associadas ao agregado familiar relacionadas com a INADEQUAÇÃO (pode assinalar mais do que uma opção)",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_4;
        },
      },
    },
    "firstInadequate.$": SimpleSchema.Integer,

    firstDescription: {
      type: SimpleSchema.Integer,
      optional: true,
      label:
        "6. Existem outras situaçoes de vulnerabilidade socioeconomica a assinalar?",
      autoform: {
        type: "select-radio",
        options: function () {
          let options = [
            { label: "Sim", value: 1 },
            { label: "Não", value: 0 },
          ];
          return options;
        },
      },
    },
    firstMoreVulnerabilities: {
      type: Array,
      optional: true,
      label:
        "7. Se respondeu afirmativamente, indique que outro tipo vulnerabilidade socieconómica está associada ao agregado familiar (pode selecionar mais do que uma opção)",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_6;
        },
      },
    },
    "firstMoreVulnerabilities.$": SimpleSchema.Integer,

    firstDetails: {
      type: String,
      optional: true,
      label:
        "8. Caso considere relevante, descreva com maior detalhe as situações assinaladas nas questões anteriores.",
    },
    firstSalary: {
      type: Array,
      optional: true,
      label:
        "9. Indique, se possível, de entre as seguintes opções, as fontes dos rendimentos mensais dos agregados familiares",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_8;
        },
      },
    },
    "firstSalary.$": SimpleSchema.Integer,
    firstSalaryMain: {
      type: Array,
      optional: true,
      label:
        "10. Indique, se possível, os valores do rendimento mensal do agregado familiar",
      maxCount: 9,
    },
    "firstSalaryMain.$": {
      type: Object,
      optional: true,
      label: "rendimento",
    },
    "firstSalaryMain.$.source": {
      type: String,
      max: 200,
      label: "Fonte do Rendimento",
      optional: true,
    },
    "firstSalaryMain.$.value": {
      type: Number,
      label: "Valor (€)",
    },
    firstSocialSuport: {
      type: Array,
      optional: true,
      label:
        "11. dentifique, caso existam, apoios sociais prestados ao agregado familiar.",
      autoform: {
        type: "select-checkbox",
        options: function () {
          return firstOptions_10;
        },
      },
    },
    "firstSocialSuport.$": SimpleSchema.Integer,
    firstObs: {
      type: String,
      optional: true,
      label:
        "12. Campo reservado para detalhes adicionais, ou caso tenha selecionado 'Outro, quais?' nos campos anteriores.",
      autoform: {
        rows: 3,
      },
    },
    // End of Part 3
  },
  { tracker: Tracker }
);

Consults.attachSchema(ConsultSchema);
