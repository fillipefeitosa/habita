import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { AutoForm } from 'meteor/aldeed:autoform';
import { states, qualifications, vulnerableTypes, yesNoRadio, habObjectiveDepravation } from './formData.js';
import { neighborhoodTypology, residenceType, residenceOcupationType } from './formData.js';
import { significativeSocialProblems, generalAFSocialPerception } from './formData.js';
import { socialServicesToAfFromSource, sourcesAndTotalValuesAF } from './formData.js';

SimpleSchema.extendOptions(['autoform']);

export const Consults = new Mongo.Collection("Consults");

Consults.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

ConsultSchema = new SimpleSchema({
    // 2. Caracterização e Localização do AF
    site: {
        type: String,
        label: "Freguesia",
        allowedValues: states
    },
    size: {
        type: SimpleSchema.Integer,
        label: "Tamanho da Família",
        minCount: 1,
    },
    element: {
        type: Array,
        optional: true,
        label: "Membros da Família",
        maxCount: 9
    },
    "element.$": {
        type: Object,
        optional: true,
        label: "Membro da Família",
    },
    "element.$.name": {
        type: String,
        max: 200,
        label: 'Nome',
        optional: true,
    },
    "element.$.age": {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Idade",
        optional: true,
    },
    "element.$.qualifications": {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Escolaridade",
        autoform: {
            type: 'select',
            options: function(){return qualifications}
        }
    },
    elementIsVulnerable: {
        type: SimpleSchema.Integer,
        label: "Membros do Agregado Familiar pertencem a grupo social vulnerável?",
        optional: true,
        autoform: {
            type: 'select-radio',
            options: function(){return yesNoRadio}
        }
    },
    vulnerableTypes: {
        type: Array,
        label: "Quais os tipos de grupo social vulnerável em que se enquadram os membros do agregado familiar?",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return vulnerableTypes}
        }
    },
    'vulnerableTypes.$': SimpleSchema.Integer,
    vulnerableTypesObs: {
        type: String,
        label: "Quais os tipos de grupo social vulnerável em que se enquadram os membros do agregado familiar?, Outro",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
    afLivesInBadComunity: {
        type: SimpleSchema.Integer,
        label: "O Agregado Familiar reside na área territorial de comunidades desfavorecidas?",
        optional: true,
        autoform: {
            type: 'select-radio',
            options: function(){return yesNoRadio}
        }
    },
    // 3. Caraterização geral do alojamento do AF
    neighborhoodTypology: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Tipologia do espaço urbano onde se localiza a residência",
        autoform: {
            type: 'select',
            options: function(){return neighborhoodTypology}
        }
    },
    residenceType: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Tipo de Construção do alojamento",
        autoform: {
            type: 'select',
            options: function(){return residenceType}
        }
    },
    roomsQuantity: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Número de Quartos do Alojamento",
        min: 1,
    },
    residenceOcupationType: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Tipo de ocupação do alojamento",
        autoform: {
            type: 'select',
            options: function(){return residenceOcupationType}
        }
    },
    residenceOcupationTypeObs: {
        type: String,
        label: "Tipo de ocupação do alojamento, outros?",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
    roomsQuantity: {
        type: Number,
        optional: true,
        label: "Número de Quartos do Alojamento",
        min: 1,
        max: 20
    },
    habObjectiveDepravation: {
        type: Array,
        label: "Situações de carência habitacional objetivas? Quais?",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return habObjectiveDepravation}
        }
    },
    'habObjectiveDepravation.$': SimpleSchema.Integer,
    habObjectiveDepravationObs: {
        type: String,
        label: "Outra situação de carência habitacional. Qual?",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },

    // 4. Situação social e económica do agregado familiar
    significativeSocialProblems: {
        type: Array,
        label: "Problemas sociais e económicos mais significativos (suspeitos e sinalizados)?",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return significativeSocialProblems}
        }
    },
    'significativeSocialProblems.$': SimpleSchema.Integer,
    significativeSocialProblemsObs: {
        type: String,
        label: "Outros problemas sociais e económicos?",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
    // Percepção geral sobre Carências Sociais e Económicas do AF
    generalAFSocialPerception: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Percepção geral sobre Carências Sociais e Económicas do AF",
        autoform: {
            type: 'select',
            options: function(){return generalAFSocialPerception}
        }
    },
    // Número de elementos do AF utentes de estruturas das rede social / IPSSs?
    afUtenteNumber: {
        type: Number,
        optional: true,
        label: "Número de elementos do AF utentes de estruturas das rede social / IPSSs?",
        min: 1,
        max: 20
    },
    socialServicesToAfFromSource: {
        type: Array,
        label: "Apoios sociais prestados pela instituição do respondente a elementos do AF?",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return socialServicesToAfFromSource}
        }
    },
    'socialServicesToAfFromSource.$': SimpleSchema.Integer,
    socialServicesToAfFromSourceObs: {
        type: String,
        label: "Outros apoios sociais prestados pela instituição do respondente a elementos do AF?, quais?",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
    sourcesAndTotalValuesAF: {
        type: Array,
        optional: true,
        label: "Fonte e valores totais dos rendimentos mensais conhecidos do AF",
        maxCount: 9
    },
    "sourcesAndTotalValuesAF.$": {
        type: Object,
        optional: true,
        label: "Fonte",
    },
    "sourcesAndTotalValuesAF.$.sources": {
        type: SimpleSchema.Integer,
        optional: true,
        label: "Fontes",
        autoform: {
            type: 'select',
            options: function(){return sourcesAndTotalValuesAF}
        }
    },
    "sourcesAndTotalValuesAF.$.value": {
        type: Number,
        optional: true,
        label: "Valor Aproximado",
        optional: true,
    },
    "sourcesAndTotalValuesAF.$.details": {
        type: String,
        max: 200,
        label: 'Detalhes',
        optional: true,
    },
});

Consults.attachSchema(ConsultSchema);
