import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { AutoForm } from 'meteor/aldeed:autoform';
import { states, qualifications, vulnerableTypes, yesNoRadio, habObjectiveDepravation } from './formData.js';
import { neighborhoodTypology, residenceType, residenceOcupationType } from './formData.js';
import { significativeSocialProblems, generalAFSocialPerception } from './formData.js';
import { socialServicesToAfFromSource, sourcesAndTotalValuesAF, afLivesInBadComunity } from './formData.js';

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
    //  User ID of the responsible
    submitedBy: {
        type: String,
        autoValue: function(){ return this.userId },
        autoform: { type: "hidden", label: false }
    },
    // 2. Caracterização e Localização do AF
    site: {
        type: String,
        label: "2.1 Localização da residência do Agregado Familiar - Lugar",
        allowedValues: states
    },
    size: {
        type: SimpleSchema.Integer,
        label: "2.2 Tamanho da Família",
        minCount: 1,
    },
    element: {
        type: Array,
        optional: true,
        label: "2.3 Membros da Família",
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
        label: "2.4.1 O Agregado Familiar pode ser associado a um ou mais grupos sociais vulneráveis? (a definição de grupos sociais vulneráveis é aberta, podendo ser consultada algumas propostas de definição na questão abaixo)",
        optional: true,
        autoform: {
            type: 'select-radio',
            options: function(){return yesNoRadio}
        }
    },
    vulnerableTypes: {
        type: Array,
        label: "2.4.2 Quais os tipos de grupo social vulnerável em que se enquadram os membros do Agregado Familiar?",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return vulnerableTypes}
        }
    },
    'vulnerableTypes.$': SimpleSchema.Integer,
    vulnerableTypesObs: {
        type: String,
        label: "2.4.3 Caso considere necessário, identifique outras tipologias de grupo social vulnerável em que podemos enquadrar o Agregado Familiar.",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
    afLivesInBadComunity: {
        type: SimpleSchema.Integer,
        label: '2.5 O Agregado Familiar reside em território de comunidade desfavorecida, identificado no "plano de ação integrado para comunidades / agregados desfavorecidos" do Município de Celorico da Beira?' ,
        optional: true,
        autoform: {
            type: 'select',
            options: function(){return afLivesInBadComunity}
        }
    },
    // 3. Caraterização geral do alojamento do AF
    neighborhoodTypology: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "3.1 Identifique o tipo de espaço urbano onde se localiza a residência do Agregado Familiar.",
        autoform: {
            type: 'select',
            options: function(){return neighborhoodTypology}
        }
    },
    residenceType: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "3.2 Identifique o tipo de construção da habitação onde reside o Agregado Familiar. ",
        autoform: {
            type: 'select',
            options: function(){return residenceType}
        }
    },
    roomsQuantity: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "3.3 Identifique o número de quartos da habitação onde reside o Agregado Familiar. ",
        min: 1,
    },
    residenceOcupationType: {
        type: SimpleSchema.Integer,
        optional: true,
        label: "3.4.1 Identifique o regime de ocupação da habitação onde reside o Agregado Familiar.",
        autoform: {
            type: 'select',
            options: function(){return residenceOcupationType}
        }
    },
    residenceOcupationTypeObs: {
        type: String,
        label: "3.4.2 Informações adicionais relevantes sobre o regime de ocupação da habitação onde reside o Agregado Familiar. (preenchimento opcional)",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
    roomsQuantity: {
        type: Number,
        optional: true,
        label: "3.4.3 Identifique, se possível, o valor de renda ou de prestação bancária (para os casos aplicáveis) suportado pelo Agregado Familiar. (valor mensal)",
        min: 1,
        max: 20
    },
    habObjectiveDepravation: {
        type: Array,
        label: "3.5.1 Assinale as situações de carências habitacionais objetivas que podem ser associadas ao Agregado Familiar (podem ser assinaladas múltiplas opções)",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return habObjectiveDepravation}
        }
    },
    'habObjectiveDepravation.$': SimpleSchema.Integer,
    habObjectiveDepravationObs: {
        type: String,
        label: "3.5.2 Descreva outras situações (não mencionadas na questão anterior) que considere relevantes para a descrição e identificação de carências habitacionais. (preenchimento opcional)",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },

    // 4. Situação social e económica do agregado familiar
    significativeSocialProblems: {
        type: Array,
        label: "4.1.1 Assinale o conjunto de problemas sócio-económicos (sinalizados oficialmente ou dos quais existem 'suspeitas' de que ocorrem), que considere explicativos das situações de carências habitacionais enfrentadas pelo Agregado Familiar. (podem ser assinaladas múltiplas opções)",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return significativeSocialProblems}
        }
    },
    'significativeSocialProblems.$': SimpleSchema.Integer,
    significativeSocialProblemsObs: {
        type: String,
        label: "4.1.2 Descreva outros problemas sociais e económicos que considere relevantes mas não assinalados na questão anterior.",
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
        label: "4.2 Identifique qual a sua percepção geral sobre a existência de carências sociais e económicas no Agregado Familiar.",
        autoform: {
            type: 'select',
            options: function(){return generalAFSocialPerception}
        }
    },
    // Número de elementos do AF utentes de estruturas das rede social / IPSSs?
    afUtenteNumber: {
        type: Number,
        optional: true,
        label: "4.3 Identifique o número de elementos do Agregado Familiar que sejam utentes de pelo menos um serviço oferecido por instituições da rede social (IPSSs, ...).",
        min: 1,
        max: 20
    },
    socialServicesToAfFromSource: {
        type: Array,
        label: "4.4.1 Identifique os apoios sociais prestados pela instituição (do respondente deste inquérito) a elementos do Agregado Familiar. (podem ser assinaladas múltiplas opções)",
        optional: true,
        autoform: {
            type: 'select-checkbox',
            options: function(){return socialServicesToAfFromSource}
        }
    },
    'socialServicesToAfFromSource.$': SimpleSchema.Integer,
    socialServicesToAfFromSourceObs: {
        type: String,
        label: "4.4.2 Descreva outros apoios sociais, não descritos na questão anterior, prestados pela instituição (do respondente) a elementos do Agregado Familiar. (preenchimento opcional)",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
    sourcesAndTotalValuesAF: {
        type: Array,
        optional: true,
        label: "4.5 Descreva, na medida do possível, as fontes e valores dos rendimentos mensais do Agregado Familiar.",
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
    subjectiveEvaluationPercent: {
        type: Number,
        optional: true,
        label: "4.6 Avaliação subjetiva do grau de esforço económico do Agregado Familiar com a habitação - incluindo despesas com serviços básicos essenciais - electricidade, água, saneamento; indique a percentagem estimada do do rendimento total do Agregado Familiar a que correspondem as despesas referidas,",
        min: 1,
        max: 500
    },
    aditionalInformation: {
        type: String,
        label: "5 Informação complementar / Observações",
        optional: true,
        max: 500,
        autoform: {
            type: 'textarea'
        }
    },
});

Consults.attachSchema(ConsultSchema);
