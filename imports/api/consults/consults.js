import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { AutoForm } from 'meteor/aldeed:autoform';

SimpleSchema.extendOptions(['autoform']);

export const Consults = new Mongo.Collection("Consults");

let states = [
    "Açores",
    "Aldeia Rica",
    "Baraçal",
    "Cortegada",
    "Cadafaz",
    "Soutomoninho",
    "Carrapichana",
    "Cortiçô da Serra",
    "Mourela",
    "Porteira",
    "Casas do Rio",
    "Celorico Gare",
    "Forno Telheiro",
    "Quinta do Salgueiro",
    "Lajeosa do Mondego",
    "Assanhas",
    "Linhares da Beira",
    "Quintãs de Cima",
    "Maçal do Chão",
    "Carvalheda",
    "Mesquitela",
    "Mogadouro",
    "Vale da Ribeira",
    "Minhocal",
    "Prados",
    "Rapa",
    "Ratoeira",
    "Salgueirais",
    "Celorico da Beira",
    "Espinheiro",
    "Lameiras",
    "Aldeia da Serra",
    "Casas do Soeiro",
    "Fonte Arcada",
    "Grichoso",
    "Mourilhe",
    "Soutinho",
    "Velosa",
    "Galisteu",
    "Vide entre Vinhas",
    "Vila Boa do Mondego",
    "Termas de Santo António",
    "Quintãs de Baixo",
];

let qualifications = [
    {label:"Não qualificado (analfabeto)",value:0},
    {label:"Não qualificado mas sabe ler / escrever",value:1},
    {label:"1º ciclo",value:2},
    {label:"2º ciclo",value:3},
    {label:"3º ciclo",value:4},
    {label:"Ensino secundário ou Profissional",value:5},
    {label:"Ensino superior",value:6},
];

let vulnerableTypes = [
    {label:"Crianças em idade pré escolar com problemas de saúde crónicos",value:0},
    {label:"Idosos com mobilidade reduzida",value:1},
    {label:"Portadores de doenças crónicas e / ou incapacidade permanente / deficiência reconhecidas",value:2},
    {label:"Consumo aditivo de álcool e/ou drogas ilícitas",value:3},
    {label:"Isolamento territorial",value:4},
    {label:"Carências económicas",value:5},
    {label:"Isolamento social",value:6},
    {label:"Identificação com grupo socio-cultural minoritário",value:7},
];

let yesNoRadio = [{label:"Sim",value:1},{label:"Não",value:0}];

let neighborhoodTypology = [
    {label:"Acampamento clandestino",value:0},
    {label:"Area de risco (ex.: leito cheia, ",value:1},
    {label:"Bairro clandestino",value:2},
    {label:"Bairro social",value:3},
    {label:"Barracas e construções precárias",value:4},
    {label:"Conjunto urbano consolidado degradado",value:5},
    {label:"Parque de campismo",value:6},
    {label:"Nenhuma das anteriores / Área urbana convencional",value:7},
];

let residenceType = [
    {label:"Convencionais",value:0},
    {label:"Não convencionais de pedra, alvenaria ou tijolo ",value:1},
    {label:"Prefabricados ",value:2},
    {label:"Móveis / caravanas",value:3},
    {label:"Tendas",value:4},
    {label:"Barracas ",value:5},
    {label:"Construção assente em elementos naturais ",value:6},
];

let residenceOcupationType = [
    {label:"Arrendatários privados ",value:0},
    {label:"Arrendatários públicos ",value:1},
    {label:"Cedências ",value:2},
    {label:"Clandestina ",value:3},
    {label:"Concessionários ",value:4},
    {label:"Proprietários sem empréstimo bancário",value:5},
    {label:"Proprietários com empréstimo bancário",value:6},
];

let habObjectiveDepravation = [
    {label:"Alojamento s/ instalações sanitárias",value:0},
    {label:"Alojamento s/ pelo menos uma das infraestruturas / serviços básicos (eletricidade, água, saneamento)",value:1},
    {label:"Alojamento a necessitar de obras reparação em elementos estruturantes (telhado, placa divisória entre pisos, …)",value:2},
    {label:"Alojamento inadequado face às condições de saúde dos residentes (mobilidade - acesso interior / com o exterior, problemas de saúde crónicos e respetivos requisitos para prestação de assistência, ...)",value:3},
    {label:"Alojamento de dimensão inadequada ao tamanho do AF",value:4},
    {label:"Alojamento adaptado de estruturas não convencionais (incluindo adaptação de antigas lojas de animais, de garagens, de anexos / arrumos, de espaços comerciais, entre outras situações não convencionais)",value:5},
    {label:"Alojamento localizado em área urbana com riscos ambientais e sociais (níveis de poluentes e/ou ruído acima dos valores permitidos, problemas de saúde epidémicos / de saúde pública recorrentes).",value:6},
    {label:"Alojamento sem uma manutenção considerada adequada / convencional face às características do AF (limpeza, privacidade entre os ocupantes, funcionamento dos dispositivos / mecanismos estruturais - elementos da instalação elétrica ou da canalização entre outros)",value:7},
];

let significativeSocialProblems = [
    {label:"Existência no AF de doenças crónicas",value:0},
    {label:"Existência no AF de doença mental",value:1},
    {label:"Existência no AF de incapacidades físicas",value:2},
    {label:"Existência de problemas de dependências (Alcoolismo, droga, …)",value:3},
    {label:"Situações de violência doméstica",value:4},
    {label:"Conflitos familiares no AF",value:5},
    {label:"Incapacidade de fazer face às despesas com o alojamento",value:6},
    {label:"Absentismo escolar dos elementos em idade escolar do AF",value:7},
    {label:"Desemprego de longa duração ou inatividade socioeconomica",value:8},
];

let generalAFSocialPerception = [
    {label:"AF em situação de carência social e económica visível / declarada / sinalizada", value: 0},
    {label: "AF em situação de carência social e económica escondida / suspeita de / não sinalizada", value: 1}
];

let socialServicesToAfFromSource = [
    {label:"Institucionalização de elemento do AF",value:0},
    {label:"Apoio alimentar",value:1},
    {label:"Apoio domiciliário",value:2},
    {label:"Ocupação de idosos / Centro de dia",value:3},
    {label:"Ocupação de crianças e jovens (pós horário escolar)",value:4},
    {label:"Apoio financeiro",value:5},
];

let sourcesAndTotalValuesAF = [
    {label:"Pensoes sociais - RSI",value:0},
    {label:"Pensoes sociais - Pensão de reforma",value:1},
    {label:"Pensoes sociais - Pensão de invalidez",value:2},
    {label:"Pensoes sociais - Subsídio de desemprego (período normal)",value:3},
    {label:"Pensoes sociais - Subsídio de desemprego (longa duração)",value:4},
    {label:"Pensoes sociais - Complemento solidário para idosos",value:5},
    {label:"Atividade Profissional",value:6},
    {label:"Outra situação",value:7},
    {label:"Sem rendimentos conhecidos",value:8},
];

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
