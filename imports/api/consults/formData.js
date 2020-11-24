export const states = [
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

export const sitesBasto = [
  "Agilde",
  "Arnoia",
  "Borba da Montanha",
  "Britelo, Gémeos e Ourilhe",
  "Caçarilhe e Infesta",
  "Canedo de Basto e Corgo",
  "Carvalho e Basto (S. Tecla)",
  "Codessoso,Fervença",
  "Moreira do Castelo",
  "Rego",
  "Ribas",
  "Basto (S. Clemente)",
  "Vale de Bouro",
  "Veade",
  "Gagos e Molares",
];

export const qualifications = [
  { label: "Não qualificado (analfabeto)", value: 0 },
  { label: "Não qualificado mas sabe ler / escrever", value: 1 },
  { label: "1º ciclo", value: 2 },
  { label: "2º ciclo", value: 3 },
  { label: "3º ciclo", value: 4 },
  { label: "Ensino secundário ou Profissional", value: 5 },
  { label: "Ensino superior", value: 6 },
];
export const relationship = [
  { label: "Representante", value: "representante" },
  { label: "pai", value: "pai" },
  { label: "mãe", value: "mãe" },
  { label: "filho/a", value: "filho/a" },
  { label: "irmão/ã", value: "irmão/ã" },
  { label: "tio/a", value: "tio/a" },
  { label: "sobrinho/a", value: "sobrinho/a" },
  { label: "parente distante", value: "parente distante" },
  { label: "outro/a", value: "outro/a" },
];

export const vulnerableTypes = [
  {
    label: "Crianças em idade pré escolar com problemas de saúde crónicos",
    value: 0,
  },
  { label: "Idosos com mobilidade reduzida", value: 1 },
  {
    label:
      "Portadores de doenças crónicas e / ou incapacidade permanente / deficiência reconhecidas",
    value: 2,
  },
  { label: "Consumo aditivo de álcool e/ou drogas ilícitas", value: 3 },
  { label: "Isolamento territorial", value: 4 },
  { label: "Carências económicas", value: 5 },
  { label: "Isolamento social", value: 6 },
  { label: "Identificação com grupo socio-cultural minoritário", value: 7 },
];

export const yesNoRadio = [
  { label: "Sim", value: 1 },
  { label: "Não", value: 0 },
];

export const neighborhoodTypology = [
  { label: "Acampamento clandestino", value: 0 },
  { label: "Area de risco (ex.: leito cheia, ", value: 1 },
  { label: "Bairro clandestino", value: 2 },
  { label: "Bairro social", value: 3 },
  { label: "Barracas e construções precárias", value: 4 },
  { label: "Conjunto urbano consolidado degradado", value: 5 },
  { label: "Parque de campismo", value: 6 },
  { label: "Nenhuma das anteriores / Área urbana convencional", value: 7 },
];

export const residenceType = [
  { label: "Convencionais", value: 0 },
  { label: "Não convencionais de pedra, alvenaria ou tijolo ", value: 1 },
  { label: "Prefabricados ", value: 2 },
  { label: "Móveis / caravanas", value: 3 },
  { label: "Tendas", value: 4 },
  { label: "Barracas ", value: 5 },
  { label: "Construção assente em elementos naturais ", value: 6 },
];

export const residenceProblemOptions = [
  {
    label:
      "Ausência de abastecimento de infrastruturas (electricidade, água da rede pública, escoamento de esgotos domésticos e pluviais, linha de telefone, acesso TV e Internet, gás, …)",
    value: 0,
  },
  {
    label:
      "Problemas decorrentes de mau ordenamento urbanístico (localização em áreas de risco, má exposição solar da habitação, fraca qualidade visual/paisagística do espaço urbano envolvente à habitação, etc…)",
    value: 1,
  },
  {
    label: "Ausência ou acesso inadequado aos eixos viários principais",
    value: 2,
  },
  {
    label: "Ausência ou insuficiente cobertura a nível de transportes públicos",
    value: 3,
  },
  {
    label:
      "Ausência ou insuficiência a nível de parqueamento público (lugares de estacionamento)",
    value: 4,
  },
  ,
  {
    label:
      "Não proximidade  ou dificuldades de acesso a equipamentos públicos, comércio e outros locais necessários à vida quotidiana",
    value: 5,
  },
  {
    label: "Existência de poluição sonora no local residência/área envolvente",
    value: 6,
  },
  {
    label:
      "Ausência ou Insuficiências a nível do sistema de recolha de resíduos sólidos",
    value: 7,
  },
  { label: "Falta ou má qualidade de espaços exteriores públicos", value: 8 },
  { label: "Outro problema. Qual? (Especificar no campo 6)", value: 9 },
];
export const residenceConstructionOptions = [
  { label: "Convencional", value: 0 },
  { label: "Não convencional de pedra, alvenaria ou tijolo", value: 1 },
  { label: "Hotel e similares", value: 2 },
  { label: "Prefabricado", value: 3 },
  { label: "Móveis/caravanas", value: 4 },
  { label: "Tenda", value: 5 },
  { label: "Barraca", value: 6 },
  { label: "Construção assente em elementos naturais", value: 7 },
  { label: "Outra, qual? (especificar no campo 6)", value: 8 },
];

export const residenceTypeOptions = [
  { label: "T0", value: 0 },
  { label: "T1", value: 1 },
  { label: "T2", value: 2 },
  { label: "T3", value: 3 },
  { label: "T4", value: 4 },
  { label: "T5", value: 5 },
  { label: "Outro, qual?", value: 6 },
];
export const residenceUrbanOptions = [
  {
    label: "Área de risco (leito, cheia)",
    value: 0,
  },
  { label: "Bairro clandestino", value: 1 },
  { label: "Bairro social", value: 2 },
  { label: "Barracas ou construções precárias", value: 3 },
  { label: "Conjunto urbano consolidado degradado", value: 4 },
  { label: "Parque de campismo", value: 5 },
  { label: "Área urbana convencional", value: 6 },
  { label: "Nenhuma das anteriores", value: 7 },
];

export const residenceOcupationType = [
  { label: "Arrendatários privados", value: "Arrendatários privados" },
  { label: "Arrendatários públicos", value: "Arrendatários públicos" },
  { label: "Cedências", value: "Cedências" },
  { label: "Clandestina", value: "Clandestina" },
  { label: "Concessionários", value: "Concessionários" },
  {
    label: "Proprietários sem empréstimo bancário",
    value: "Proprietários sem empréstimo bancário",
  },
  {
    label: "Proprietários com empréstimo bancário",
    value: "Proprietários com empréstimo bancário",
  },
];

export const habObjectiveDepravation = [
  { label: "Alojamento s/ instalações sanitárias", value: 0 },
  {
    label:
      "Alojamento s/ pelo menos uma das infraestruturas / serviços básicos (eletricidade, água, saneamento)",
    value: 1,
  },
  {
    label:
      "Alojamento a necessitar de obras reparação em elementos estruturantes (telhado, placa divisória entre pisos, …)",
    value: 2,
  },
  {
    label:
      "Alojamento inadequado face às condições de saúde dos residentes (mobilidade - acesso interior / com o exterior, problemas de saúde crónicos e respetivos requisitos para prestação de assistência, ...)",
    value: 3,
  },
  {
    label: "Alojamento de dimensão inadequada ao tamanho do Agregado Familiar",
    value: 4,
  },
  {
    label:
      "Alojamento adaptado de estruturas não convencionais (incluindo adaptação de antigas lojas de animais, de garagens, de anexos / arrumos, de espaços comerciais, entre outras situações não convencionais)",
    value: 5,
  },
  {
    label:
      "Alojamento localizado em área urbana com riscos ambientais e sociais (níveis de poluentes e/ou ruído acima dos valores permitidos, problemas de saúde epidémicos / de saúde pública recorrentes - incluindo níveis de ruído críticos em vários períodos do dia ).",
    value: 6,
  },
  {
    label:
      "Alojamento sem uma manutenção considerada adequada / convencional face às características do Agregado Familiar (limpeza, privacidade entre os ocupantes, funcionamento dos dispositivos / mecanismos estruturais - elementos da instalação elétrica ou da canalização entre outros)",
    value: 7,
  },
  {
    label:
      "Alojamento com condições inadequadas de conforto térmico (Inverno e/ou Verão)",
    value: 8,
  },
];

export const firstOptions_1 = [
  { label: "Pessoas sem abrigo", value: 0 },
  { label: "Pessoas vítimas de violência doméstica", value: 1 },
  {
    label:
      "Pessoas em risco de perda da residência permanente (em risco de despejo, em situação de insolvência, …)",
    value: 2,
  },
  { label: "Reside em Núcleo Precário", value: 3 },
  { label: "Reside em Núcleo Degradado", value: 4 },
  {
    label:
      "Habitação sem licença de habitabilidade (sem licença de utilização para habitação)",
    value: 5,
  },
  { label: "Outra. (Especificar no campo 11)", value: 6 },
  { label: "Nenhuma", value: 7 },
];

export const firstOptions_2 = [
  { value: 0, label: "Alojamento s/ instalações sanitárias" },
  {
    value: 1,
    label:
      "Alojamento s/ pelo menos uma das infraestruturas/serviços básicos (eletricidade, água, saneamento)",
  },
  {
    value: 2,
    label:
      "Alojamento a necessitar de  obras reparação em elementos de estanquidade e segurança estrutural  (telhado, placa divisória entre pisos, pavimentos, portas e janelas, paredes exteriores, …)",
  },
  {
    value: 3,
    label:
      "Alojamento a necessitar de  obras de reparação em dispositivos/mecanismos estruturais - elementos da instalação elétrica, da canalização entre outros)",
  },
  {
    value: 4,
    label:
      "Alojamento s/condições a nível de conforto térmico e/ou de eficiência energética",
  },
  {
    value: 5,
    label:
      "Alojamento sem uma manutenção adequada  a nível de limpeza e higiene ",
  },
  { value: 6, label: "Outra. (Especificar no campo 11)" },
  { value: 7, label: "Nenhuma" },
];

export const firstOptions_3 = [
  {
    value: 0,
    label:
      "Alojamento de dimensão inadequada face ao tamanho do agregado familiar (ver DL Nº81/2020, art. nº 5)",
  },
  { value: 1, label: "Nenhuma" },
];

export const firstOptions_4 = [
  {
    value: 0,
    label:
      "Alojamento adaptado de estruturas não convencionais (incluindo adaptação de antigas 'lojas' de animais, de garagens, de anexos / arrumos, de espaços comerciais, entre outras situações não convencionais)",
  },
  {
    value: 1,
    label:
      "Alojamento inadequado face  às caraterísticas específicas dos residentes nomeadamente com incapacidade ou deficiência  - Barreiras exteriores à habitação (barreiras no acesso ao piso/local onde se situa a habitação)",
  },
  {
    value: 2,
    label:
      "Alojamento inadequado face  às caraterísticas específicas dos residentes nomeadamente com incapacidade ou deficiência  - Barreiras internas à habitação (medidas de vãos e áreas interiores impedem uma circulação e utilização ajustadas ás caraterísticas dos ocupantes da habitação)",
  },
  { value: 3, label: "Nenhuma" },
];

export const firstOptions_6 = [
  { value: 0, label: "Pessoas pertencentes a minorias etnicas" },
  { value: 1, label: "Pessoas imigrantes" },
  {
    value: 2,
    label:
      "Pessoas portadoras de deficiência / incapacidade permanente/ doenças crónicas",
  },
  { value: 3, label: "Pessoas com problemas de dependência (alcool, drogas)" },
  { value: 4, label: "Agregado monoparental com dependentes" },
  {
    value: 5,
    label:
      "reside em território de comunidade desfavorecida, identificado no 'plano de ação integrado para comunidades / agregados desfavorecidos'",
  },
  { value: 6, label: "Em situação de carência financeira" },
  { value: 7, label: "Outra. (Especificar no campo 7)" },
];

export const significativeSocialProblems = [
  { label: "Existência no Agregado Familiar de doenças crónicas", value: 0 },
  { label: "Existência no Agregado Familiar de doença mental", value: 1 },
  {
    label: "Existência no Agregado Familiar de incapacidades físicas",
    value: 2,
  },
  {
    label: "Existência de problemas de dependências (Alcoolismo, droga, …)",
    value: 3,
  },
  { label: "Situações de violência doméstica", value: 4 },
  { label: "Conflitos familiares no Agregado Familiar", value: 5 },
  {
    label: "Incapacidade de fazer face às despesas com o alojamento",
    value: 6,
  },
  {
    label:
      "Absentismo escolar dos elementos em idade escolar do Agregado Familiar",
    value: 7,
  },
  {
    label: "Desemprego de longa duração ou inatividade socioeconomica",
    value: 8,
  },
];

export const firstOptions_8 = [
  { value: 0, label: "Pensoes sociais - RSI" },
  { value: 1, label: "Pensões sociais - Pensão de reforma" },
  { value: 2, label: "Pensões sociais - Pensão de invalidez" },
  {
    value: 3,
    label: "Pensões sociais - Subsídio de desemprego (período normal)",
  },
  {
    value: 4,
    label: "Pensões sociais -  Subsídio de desemprego (longa duração)",
  },
  { value: 5, label: "Pensões sociais - Complemento solidário para idosos" },
  { value: 6, label: "Atividade Profissional - tempo parcial" },
  { value: 7, label: "Atividade Profissional - tempo inteiro" },
  { value: 8, label: "Sem rendimentos conhecidos" },
  { value: 9, label: "Outro. qual? (Preencher no campo 9)" },
];
export const firstOptions_10 = [
  { value: 0, label: "Institucionalização de membro do agregado familiar" },
  { value: 1, label: "Apoio alimentar" },
  { value: 2, label: "Apoio domiciliário" },
  { value: 3, label: "Ocupação de idosos/centro do dia" },
  { value: 4, label: "Ocupação de crianças e jovens (horário pós escolar)" },
  { value: 5, label: "Apoio financeiro" },
  { value: 6, label: "Outros." },
];
export const generalAFSocialPerception = [
  {
    label:
      "Agregado Familiar em situação de carência social e económica visível / declarada / sinalizada",
    value: 0,
  },
  {
    label:
      "Agregado Familiar em situação de carência social e económica escondida / suspeita de / não sinalizada",
    value: 1,
  },
];

export const socialServicesToAfFromSource = [
  { label: "Institucionalização de elemento do Agregado Familiar", value: 0 },
  { label: "Apoio alimentar", value: 1 },
  { label: "Apoio domiciliário", value: 2 },
  { label: "Ocupação de idosos / Centro de dia", value: 3 },
  { label: "Ocupação de crianças e jovens (pós horário escolar)", value: 4 },
  { label: "Apoio financeiro", value: 5 },
];

export const sourcesAndTotalValuesAF = [
  { label: "Pensoes sociais - RSI", value: 0 },
  { label: "Pensoes sociais - Pensão de reforma", value: 1 },
  { label: "Pensoes sociais - Pensão de invalidez", value: 2 },
  {
    label: "Pensoes sociais - Subsídio de desemprego (período normal)",
    value: 3,
  },
  {
    label: "Pensoes sociais - Subsídio de desemprego (longa duração)",
    value: 4,
  },
  { label: "Pensoes sociais - Complemento solidário para idosos", value: 5 },
  { label: "Atividade Profissional", value: 6 },
  { label: "Outra situação", value: 7 },
  { label: "Sem rendimentos conhecidos", value: 8 },
];

export const afLivesInBadComunity = [
  { label: "Sim, na comunidade localizada na Rua do Picoto", value: 0 },
  { label: "Sim, na comunidade localizada na Rua da Fonte da Pipa", value: 1 },
  { label: "Sim, na comunidade localizada no Bairro de Santa Luzia", value: 2 },
  { label: "Não", value: 3 },
  { label: "Não Sei", value: 4 },
];
