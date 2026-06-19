export interface HouseDescription {
  id: number;
  name: string;
  theme: string;
  generalMeaning: string;
  retrogradeMeaning: string;
}

export interface SignTransitDescription {
  id: string;
  name: string;
  climateTitle: string;
  climateDesc: string;
  revise: string;
  avoid: string;
}

export const generalMercuryIntro = {
  title: "Mercúrio Retrógrado",
  subtitle: "Conceitos Aprofundados & Guia Prático",
  whatIsIt: "Mercúrio fica retrógrado de 3 a 4 vezes por ano, nos momentos da sua órbita em que está mais próximo da Terra — o que dá a impressão óptica de que ele está andando para trás.",
  generalEffect: "No geral, é uma fase de lentidão e confusão em relação ao nosso intelecto. Funciona como uma permissão do universo para desacelerar. Programe-se para fazer menos e contar menos com sistemas, reuniões importantes e assinaturas de contratos nessas datas.",
  mercuryKeywords: ["comunicação", "intelecto", "pensamentos", "expressão", "notícias", "informação", "curiosidade", "aprendizagem", "negociação", "estradas", "deslocamento", "comércio", "trocas", "eletrônicos"],
  retrogradeKeywords: [
    { word: "Rever", desc: "Reexaminar escolhas, projetos e ideias com mente fresca." },
    { word: "Refazer", desc: "Corrigir falhas de processos ou refazer tarefas pendentes." },
    { word: "Repensar", desc: "Desacelerar e dar tempo para o cérebro processar opções." },
    { word: "Reorganizar", desc: "Arrumar gavetas, arquivos, rotinas e fluxos." },
    { word: "Reconciliar", desc: "Resolver dinâmicas mal resolvidas do passado." }
  ],
  postShadow: "O Pós-Sombra: Lembre-se que o efeito de confusão pode durar alguns dias após Mercúrio voltar ao movimento direto, até que ele recupere o grau exato onde começou a retrogradar."
};

export const housesData: HouseDescription[] = [
  {
    id: 1,
    name: "Casa 1",
    theme: "Identidade e Aparência",
    generalMeaning: "Representa você: sua saúde, vitalidade, aparência física e a forma como o mundo te percebe. Fala sobre sua energia de nascimento, como você inicia a vida e se apresenta.",
    retrogradeMeaning: "Rever a autoimagem: Momento de repensar como você se apresenta. Evite mudar o visual de forma radical; prefira refletir profundamente sobre sua própria identidade."
  },
  {
    id: 2,
    name: "Casa 2",
    theme: "Finanças e Valores",
    generalMeaning: "Fala sobre seu dinheiro, bens materiais, autoestima e senso de valor pessoal. Mostra como você lida com recursos, ganhos, gastos e sua relação com estabilidade.",
    retrogradeMeaning: "Rever as finanças: Ótimo período para reorganizar o orçamento e identificar gastos desnecessários. Evite compras grandes, investimentos de alto impacto ou impulsivos."
  },
  {
    id: 3,
    name: "Casa 3",
    theme: "Comunicação e Aprendizado",
    generalMeaning: "Relacionada com irmãos, parentes, vizinhos, escola básica e expressão. Abrange trajetos curtos, pequenos aprendizados do dia a dia e estilo mental.",
    retrogradeMeaning: "Rever a comunicação: Redobre a atenção com e-mails, mensagens, contratos e conversas gerais. É o clássico período de mal-entendidos e falhas em aparelhos eletrônicos."
  },
  {
    id: 4,
    name: "Casa 4",
    theme: "Família e Raízes",
    generalMeaning: "Conecta você às suas bases emocionais, seu lar, família de origem e infância. Representa memórias profundas e a figura parental mais influente.",
    retrogradeMeaning: "Rever o lar: Momento excelente para resolver pendências domésticas acumuladas ou mal-entendidos familiares. Evite iniciar reformas do zero; foque em consertos."
  },
  {
    id: 5,
    name: "Casa 5",
    theme: "Prazer, Amor e Criatividade",
    generalMeaning: "Fala sobre romances, filhos, criatividade, lazer, expressão alegre de viver e hobbies.",
    retrogradeMeaning: "Rever o prazer: Retorno de antigos passatempos ou o reaparecimento de pessoas do passado (os famosos 'ex'). Hora de reavaliar o que realmente te traz alegria genuína."
  },
  {
    id: 6,
    name: "Casa 6",
    theme: "Rotina e Bem-Estar",
    generalMeaning: "Trabalho cotidiano, saúde física, deveres diários e a relação pragmática com o corpo, tarefas práticas e imprevistos diários.",
    retrogradeMeaning: "Rever a rotina: Excelente para check-ups médicos, reavaliação de métodos de trabalho e organização minuciosa de arquivos ou fluxos de tarefas bagunçados."
  },
  {
    id: 7,
    name: "Casa 7",
    theme: "Relacionamentos e Parcerias",
    generalMeaning: "Relacionamentos sérios, casamento, sociedades comerciais, parcerias e inimigos declarados. Representa o outro e a convivência.",
    retrogradeMeaning: "Rever parcerias: Período voltado para discutir cláusulas contratuais já existentes ou ter as chamadas 'DRs' (discutir relação) para clarear dúvidas que ficaram nubladas."
  },
  {
    id: 8,
    name: "Casa 8",
    theme: "Transformações e Profundezas",
    generalMeaning: "Grandes mudanças, perdas, heranças, sexualidade, medos, transformações pessoais profundas, temas ocultos e recursos compartilhados.",
    retrogradeMeaning: "Rever crises e impostos: Excelente período para auditar contas conjuntas, inventários e dar andamento a processos terapêuticos. Olhe para o que está varrido para debaixo do tapete."
  },
  {
    id: 9,
    name: "Casa 9",
    theme: "Espiritualidade e Sabedoria",
    generalMeaning: "Busca por sentido na vida, espiritualidade, crenças filosóficas, religião, ensino superior, viagens longas e expansão de horizontes.",
    retrogradeMeaning: "Rever ideais e viagens: Muito cuidado com burocracias acadêmicas e atrasos significativos em viagens de longa distância. Ótimo momento para retomar estudos abandonados."
  },
  {
    id: 10,
    name: "Casa 10",
    theme: "Carreira e Propósito",
    generalMeaning: "Imagem pública, status, carreira profissional, metas de longo prazo, relação com autoridade e reconhecimento social.",
    retrogradeMeaning: "Rever a carreira: Reavaliação de metas profissionais estruturais. Evite lançar grandes projetos ou empresas novas agora; prefira refinar de forma minuciosa os planos atuais."
  },
  {
    id: 11,
    name: "Casa 11",
    theme: "Amizades e Sonhos",
    generalMeaning: "Grupos sociais, amizades verdadeiras, causas coletivas, rede de apoio social e aspirações para o futuro.",
    retrogradeMeaning: "Rever grupos e amigos: Probabilidade de mal-entendidos e fofocas em grupos de WhatsApp ou associações. Hora de verificar se você e seus amigos ainda compartilham dos mesmos valores."
  },
  {
    id: 12,
    name: "Casa 12",
    theme: "Interior e Espiritualidade Profunda",
    generalMeaning: "Trata do inconsciente, medos profundos, autossabotagem, solidão produtiva, intuições e cura secreta em recolhimento espiritual.",
    retrogradeMeaning: "Rever o inconsciente: Exige recolhimento e silêncio mental severos. Sonhos podem estar intensificados. É um convite excelente à limpeza psíquica profunda."
  }
];

export const signsTransitData: SignTransitDescription[] = [
  {
    id: "aries",
    name: "Áries",
    climateTitle: "Mente Impaciente",
    climateDesc: "A pressa gera erros grosseiros de processamento. A comunicação verbal pode soar desnecessariamente agressiva ou rude, mesmo sem qualquer intenção real de magoar.",
    revise: "Sua impulsividade bruta e a forma estabanada como inicia seus novos projetos.",
    avoid: "Discussões acaloradas no calor do momento e tomada de decisões sem reflexão."
  },
  {
    id: "taurus",
    name: "Touro",
    climateTitle: "Mente Teimosa",
    climateDesc: "Processos financeiros e burocráticos caminham de forma exasperante. Há uma resistência exacerbada em ceder ou mudar de opinião perante os outros.",
    revise: "Seus padrões de gastos financeiros pessoais e valores fundamentais de segurança.",
    avoid: "Grandes investimentos, compras de bens duráveis adicionais ou teimosia em acordos."
  },
  {
    id: "gemini",
    name: "Gêmeos",
    climateTitle: "Mente Caótica",
    climateDesc: "Excesso avassalador de informação dispersa, boatos infundados, panes em aparelhos e fofocas. Dificuldades extremas com internet e sistemas de dados.",
    revise: "Seus textos, contratos, formas cotidianas de expressão e redes de contato.",
    avoid: "Espalhar notícias de terceiros ou informações cruas sem checar exaustivamente as fontes."
  },
  {
    id: "cancer",
    name: "Câncer",
    climateTitle: "Mente Nostálgica",
    climateDesc: "Mal-entendidos intensos baseados em mágoas guardadas há muito tempo. A fala fica hipersensível e altamente emocional à menor crítica.",
    revise: "Assuntos familiares mal resolvidos e feridas emocionais não digeridas de infância.",
    avoid: "Levar absolutamente tudo para o lado estritamente pessoal durante as conversas."
  },
  {
    id: "leo",
    name: "Leão",
    climateTitle: "Mente Dramática",
    climateDesc: "A necessidade egóica de validação ou atenção pode inflar mal-entendidos básicos sobre hierarquia, gerando brigas por disputa de comando.",
    revise: "Sua expressão criativa, autoexpressão dramática e forma de criar autoridade autêntica.",
    avoid: "Posturas arrogantes, orgulho bobo ou drama teatral excessivo na comunicação do dia a dia."
  },
  {
    id: "virgo",
    name: "Virgem",
    climateTitle: "Mente Crítica",
    climateDesc: "Obsessão milimétrica por detalhes insignificantes que atrasa entregas reais, compromissos diários e sobrecarrega a rotina laboral.",
    revise: "Seus métodos operacionais de trabalho diário e hábitos de cuidados com a saúde física.",
    avoid: "Críticas excessivamente perfeccionistas a si mesmo, aos colegas de trabalho e aos outros."
  },
  {
    id: "libra",
    name: "Libra",
    climateTitle: "Mente Indecisa",
    climateDesc: "Dificuldade avassaladora em chegar a um acordo ou consenso equilibrado. Contratos em andamento podem sofrer constantes revisões e vaivéns.",
    revise: "O ponto de equilíbrio, reciprocidade e harmonia real nos relacionamentos principais.",
    avoid: "Assinar contratos definitivos de parceria comercial ou casamento durante este trânsito."
  },
  {
    id: "scorpio",
    name: "Escorpião",
    climateTitle: "Mente Investigativa",
    climateDesc: "Segredos ocultos e verdades doentias podem emergir à luz. Há uma atmosfera pesada de desconfiança exacerbada ou obsessão e paranoia mental.",
    revise: "Suas próprias sombras psicológicas, medos secretos e a gestão de recursos compartilhados.",
    avoid: "Jogos psicológicos de poder oculto, manipulação verbal silenciosa e acusações sem provas."
  },
  {
    id: "sagittarius",
    name: "Sagitário",
    climateTitle: "Mente Arrogante",
    climateDesc: "Promessas fanfarronas e planos de expansão gigantescos que se revelam impossíveis de se cumprir na prática. Falhas e atrasos em viagens e questões judiciais.",
    revise: "Seus sistemas filosóficos de crenças essenciais e planos de desenvolvimento pessoal.",
    avoid: "Dar sermões paternalistas em terceiros e planejar roteiros de viagem extensos sem um plano B."
  },
  {
    id: "capricorn",
    name: "Capricórnio",
    climateTitle: "Mente Rígida",
    climateDesc: "Burocracia pesada e irritante que trava o dia. Erros chatos de administração em estruturas profissionais ou ambientes altamente hierárquicos.",
    revise: "Suas metas profissionais a longo prazo, estrutura de carreira e compromissos.",
    avoid: "Rigidez excessiva com planos e prazos que estão completamente fora de seu controle direto."
  },
  {
    id: "aquarius",
    name: "Aquário",
    climateTitle: "Mente Rebelde",
    climateDesc: "Falhas em softwares, roteadores de rede e problemas em causas coletivas. Ruídos e divisões súbitas de opiniões em grupos de amigos.",
    revise: "Seus grandes ideais sociais de futuro e o papel que você desempenha em suas comunidades.",
    avoid: "Romper laços duradouros de amizade ou sair de grupos devido a mal-entendidos exclusivamente técnicos."
  },
  {
    id: "pisces",
    name: "Peixes",
    climateTitle: "Mente Confusa",
    climateDesc: "Perda drástica de objetividade factual. Crises de forte distração, esquecimento crônico de compromissos rotineiros, senhas e chaves perdidas.",
    revise: "Sua própria intuição interior profunda e as bases sagradas de sua conexão espiritual.",
    avoid: "Assumir responsabilidades ou tomar decisões urgentes que exijam raciocínio puramente matemático."
  }
];

export const doAndDontList = {
  do: [
    "Revisar detalhadamente cada papel, documento e decisão importante antes de fechar.",
    "Redobrar a cautela ao dirigir e se antecipar aos comprimissos. Saia de casa mais cedo pra compromissos que exigem pontualidade.",
    "Aproveitar o momento para revisar e concluir tarefas inacabadas.",
    "Desacelerar o ritmo, repensar planos de ação e reavaliar hábitos rotineiros.",
    "Ser exaustivamente clara, paciente e didática na sua comunicação."
  ],
  dont: [
    "Tomar decisões impulsivas, incluindo assinar contratos complexos ou fechar acordos no calor do momento.",
    "Fazer transações financeiras de alto valor sem revisar as taxas e dados do destinatário.",
    "Iniciar reformas residenciais de grande porte estrutural completamente do zero.",
    "Comprar eletrônicos caros (celulares, computadores, carros) ou atualizar softwares críticos de operação.",
    "Viajar longas distâncias sem confirmar horários, passagens e revisar bagagens três vezes.",
    "Agendar cirurgias plásticas ou procedimentos cirúrgicos de grande porte."
  ]
};

export const contextComparison = {
  geral: "A comunicação é precedida por uma intensa revisão interna. Há uma forte tendência a decodificar as entrelinhas e o que não foi dito, mas pode haver lentidão ao tentar transmitir ideias óbvias dadas como certas.",
  signos: "O estilo do signo se torna muito mais introspectivo. Em domicílios de Mercúrio (Gêmeos ou Virgem), a análise intelectual é brilhante, mas tão profunda e minuciosa que gera forte hesitação. Em signos de Fogo, a impulsividade verbal é contida por uma dúvida interna imediata; em signos de Água, a intuição interna fica ainda mais silenciosa, intuitiva e profunda.",
  casas: "Indica a área da vida em que o indivíduo necessita temporariamente 'parar e pensar' com uma seriedade amplificada em relação às outras esferas. É um laboratório existencial que pede constantes reavaliações, resgates e no qual o aprendizado ocorre através da repetição consciente."
};
