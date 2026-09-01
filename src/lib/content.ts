// Camada de conteúdo — separada da apresentação.
// Todo o conteúdo abaixo é derivado exclusivamente do briefing (Comando.txt)
// e dos catálogos técnicos fornecidos (Actuator_Catalog.pdf / Portifólio_EJMR_Valves.pdf).
// Nenhum dado (norma, material, certificação, cliente, fabricante) foi inventado.

export type ValveFamily = {
  slug: string;
  nome: string;
  serie?: string;
  imagem: string;
  imagemAlt: string;
  descricao: string;
  tipos?: string[];
  tamanho?: string;
  corpo?: string;
  internos?: string;
  sede?: string;
  normas?: string[];
  temperatura?: string;
  destaqueImagem?: boolean;
};

export const valveFamilies: ValveFamily[] = [
  {
    slug: "esfera",
    nome: "Válvulas de Esfera",
    serie: "Série BV",
    imagem: "/images/cat-esfera.jpg",
    imagemAlt: "Válvulas de esfera EJMR rosqueadas e flangeadas em bancada industrial",
    descricao:
      "Linha completa de válvulas de esfera para bloqueio e vedação, em configurações rosqueadas, flangeadas e soldadas.",
    tipos: [
      "1PC / 2PC / 3PC rosqueada (1000–6000 PSI)",
      "Floating flangeada (150Lb–900Lb)",
      "Trunnion flangeada (150Lb–2500Lb, 2\"–48\")",
      "Totalmente soldada (fully welded BW)",
      "Selo metálico",
      "DBB / SBB (double / single block and bleed)",
      "Isolamento térmico integrado",
      "Revestida em flúor para meios altamente corrosivos",
    ],
    tamanho: "1/2\" – 24\" (trunnion wafer até 48\")",
    corpo: "A105N / F304 / F316 (forjada) ou WCB / CF8 / CF8M (fundida)",
    internos: "Esfera e haste em SS304 / SS316",
    sede: "PTFE / RPTFE / PPL (ou PEEK)",
    normas: [
      "Projeto conforme API608 / API6D",
      "Flange conforme ASME B16.5",
      "Face-a-face conforme ASME B16.10",
      "Teste conforme API598",
      "Fire safe conforme API607",
    ],
    temperatura: "-27°C a 220°C",
    destaqueImagem: true,
  },
  {
    slug: "gaveta",
    nome: "Válvulas Gaveta",
    serie: "Série GV",
    imagem: "/images/cat-gaveta.jpg",
    imagemAlt: "Válvulas gaveta em aço fundido dispostas em galpão industrial",
    descricao:
      "Válvulas gaveta em aço fundido e inoxidável para bloqueio, com opções pressure sealed e disco duplo.",
    tipos: [
      "API600 flangeada",
      "JIS, DIN, GOST",
      "API603 (inox)",
      "BW (extremidade soldada)",
      "Pressure sealed (BW / flange)",
      "API6D disco único / duplo",
      "Bellows (API600 / DIN)",
    ],
    tamanho: "2\" – 48\" (pressure seal 900Lb–2500Lb)",
    corpo: "WCB / CF8 / CF8M (ou CF8 / CF8M / CF3M inox)",
    normas: [
      "Conforme API600 / ASME B16.34",
      "Flange conforme ASME B16.5",
      "Face-a-face conforme ASME B16.10",
      "Teste conforme API598",
      "Fire safe conforme API6FA",
    ],
    temperatura: "-27°C a 425°C",
  },
  {
    slug: "globo",
    nome: "Válvulas Globo",
    serie: "Série GL",
    imagem: "/images/cat-globo.jpg",
    imagemAlt: "Válvulas globo em aço fundido suspensas em galpão industrial",
    descricao:
      "Válvulas globo para regulagem e bloqueio, disponíveis em configuração reta, angular e tipo Y.",
    tipos: [
      "ANSI / JIS / DIN / GOST flangeada",
      "Angular (angle)",
      "Angular com fole (bellows)",
      "Tipo Y",
      "Tipo BW",
      "Bellows (ANSI / DIN)",
      "Pressure seal (flange / BW)",
    ],
    tamanho: "2\" – 48\" (pressure seal 900Lb–1500Lb)",
    corpo: "WCB / CF8 / CF8M — designação API623",
    normas: [
      "Conforme ASME B16.5 / B16.10",
      "Teste conforme API598",
      "Fire safe conforme API6FA",
    ],
    temperatura: "-27°C a 425°C",
  },
  {
    slug: "retencao",
    nome: "Válvulas de Retenção",
    serie: "Série CV",
    imagem: "/images/cat-retencao.jpg",
    imagemAlt: "Válvula de retenção em aço fundido em galpão industrial",
    descricao:
      "Válvulas de retenção para prevenção de refluxo, em configurações swing, lift, duplo flap e pé de sucção.",
    tipos: [
      "Swing (ANSI / DIN / JIS / GOST)",
      "Lift (ANSI / DIN)",
      "Fluxo axial",
      "Pé de sucção com flange (foot valve)",
      "Duplo flap wafer",
      "Duplo flap lug",
      "Pressure seal (flange / BW)",
    ],
    tamanho: "2\" – 48\" (classe 150Lb–2500Lb)",
    corpo: "WCB / CF8 / CF8M — designação API6D / API594",
    normas: [
      "Conforme ASME B16.5 / B16.10",
      "Teste conforme API598",
      "Fire safe conforme API6FA",
    ],
  },
  {
    slug: "forjadas",
    nome: "Válvulas Forjadas",
    imagem: "/images/cat-forjadas.jpg",
    imagemAlt: "Válvulas forjadas de pequeno diâmetro sobre fundo escuro",
    descricao:
      "Linha completa em aço forjado — gaveta, globo, retenção e coadores — para aplicações de alta classe de pressão.",
    tipos: [
      "Gaveta, globo e retenção (swing / lift)",
      "Coador tipo Y",
      "Gaveta / globo / retenção com flange soldada ou flange integral",
      "Gaveta com fole (bellows)",
      "Pressure sealed",
      "Coador com flange integral",
    ],
    tamanho: "1/2\" – 2\" (classe 800Lb–2500Lb)",
    corpo: "A105N / F304 / F316 — designação API602",
    normas: [
      "Conforme ASME B16.10",
      "Teste conforme API598",
      "Fire safe conforme API6FA",
    ],
    temperatura: "-27°C a 425°C",
  },
  {
    slug: "borboleta",
    nome: "Válvulas Borboleta",
    serie: "Série BT",
    imagem: "/images/cat-borboleta.jpg",
    imagemAlt: "Corpos de válvulas borboleta de grande diâmetro em galpão industrial",
    descricao:
      "Válvulas borboleta tripla excêntrica e de alta performance, com sede metálica ou soft seal, para grandes diâmetros.",
    tipos: [
      "Tripla excêntrica (flange / wafer / lug / BW)",
      "Alta temperatura",
      "Alta performance (flange / wafer / lug)",
      "Duplo disco com selo a ar (gás, acionamento pneumático ou elétrico)",
      "Soft seal centerline (flange / wafer / lug)",
    ],
    tamanho: "2\" – 88\" (duplo disco até 152\")",
    corpo: "WCB / CF8 / CF8M (ou CI para soft seal) — designação API609",
    sede: "Selo metálico e selo soft, ou EPDM / NBR / PTFE",
    normas: [
      "Conforme ASME B16.5 / B16.10",
      "Teste conforme API598",
      "Fire safe conforme API607 / API6FA",
    ],
    temperatura: "-27°C a 425°C (soft seal -27°C a 150/220°C)",
  },
  {
    slug: "bronze",
    nome: "Válvulas de Bronze",
    imagem: "/images/cat-bronze.jpg",
    imagemAlt: "Válvula de bronze EJMR sobre fundo escuro",
    descricao:
      "Válvulas fundidas ou forjadas em bronze C95800 para aplicações de menor diâmetro e classe de pressão.",
    tipos: [
      "Esfera (floating / trunnion flange, rosqueada 2PC / 3PC)",
      "Gaveta flangeada",
      "Globo flangeada",
      "Retenção (swing / duplo flap lug)",
      "Borboleta tripla excêntrica (wafer / lug)",
      "Torneira em inox rosqueada",
      "Coador rosqueado",
    ],
    tamanho: "1/2\" – 10\" (classe 150Lb–300Lb)",
    corpo: "Material C95800",
    temperatura: "-27°C a 220°C",
  },
  {
    slug: "controle",
    nome: "Válvulas de Controle",
    imagem: "/images/cat-controle.jpg",
    imagemAlt: "Válvulas de controle com acionamento pneumático em linha de produção",
    descricao:
      "Válvulas de esfera, borboleta, gaveta, globo e gaveta-guilhotina com acionamento pneumático ou elétrico para automação de processo.",
    tipos: [
      "Acionamento pneumático — simples ou dupla ação, montagem ISO5211",
      "Acionamento elétrico — 220V / 380V / 440V",
      "Esfera, borboleta, gaveta, globo e gaveta-guilhotina (knife gate)",
    ],
    tamanho: "1/2\" – 24\" (borboleta até 48\")",
    normas: [
      "Conforme API608 / API6D / API609",
      "Conforme ASME B16.5 / B16.10",
      "Teste conforme API598",
      "Fire safe conforme API607",
    ],
  },
  {
    slug: "api6a",
    nome: "Válvulas API 6A",
    imagem: "/images/cat-api6a.jpg",
    imagemAlt: "Conjuntos de válvulas de cabeça de poço API 6A empilhados",
    descricao:
      "Linha para wellhead e poços de petróleo, com corpos de alta resistência e classes de pressão elevadas.",
    tipos: [
      "Gate valve",
      "Slab gate valve",
      "Check valve",
      "Throttle valve",
      "Ball valve",
      "Mud gate valve",
    ],
    tamanho: "1-13/16\" a 7-1/16\"",
    corpo: "ANSI4130 / SS304 / SS316",
    sede: "Sede metálica (algumas versões com DEVLON / PEEK)",
    temperatura: "-60°C a 121°C",
    normas: ["Classe de pressão de 2000 PSI a 15000 PSI"],
  },
  {
    slug: "inox-rosqueada",
    nome: "Válvulas em Aço Inoxidável",
    imagem: "/images/cat-esfera.jpg",
    imagemAlt: "Válvulas compactas em aço inoxidável",
    descricao: "Linha rosqueada compacta em aço inoxidável — gaveta, globo e retenção.",
    tipos: ["Gaveta rosqueada", "Globo rosqueada", "Retenção rosqueada"],
  },
  {
    slug: "acessorios",
    nome: "Acessórios para Válvulas",
    imagem: "/images/cat-acessorios.jpg",
    imagemAlt: "Coador tipo Y EJMR sobre fundo branco",
    descricao:
      "Coadores, flanges, sedes, juntas, volantes e engrenagens redutoras para complementar a instalação das válvulas.",
    tipos: [
      "Coadores tipo Y (flangeado, BW, DIN, cesto/basket, tipo T, duplex)",
      "Flanges",
      "Parafusos e porcas",
      "Sedes",
      "Juntas espirais (metal wound gasket)",
      "Volantes (handwheel)",
      "Alavancas (lever)",
      "Engrenagens redutoras (gear 90° / 360°)",
    ],
    tamanho: "Coadores: 1/2\" – 48\"",
    corpo: "WCB / CF8 / CF8M (ou Q235 / SS304 / SS316)",
    internos: "Filtro em SS304 / SS316, malha (mesh) 2,5–400",
    normas: ["Conforme ASME B16.34 / B16.5 / B16.10", "Teste conforme API598"],
  },
  {
    slug: "sanitarias",
    nome: "Válvulas Sanitárias / Diafragma",
    imagem: "/images/cat-esfera.jpg",
    imagemAlt: "Válvula sanitária tipo clamp",
    descricao:
      "Válvulas para aplicações sanitárias e de processo — esfera, borboleta, retenção clamp/BW, diafragma e assento pneumático.",
    tipos: [
      "Esfera, borboleta e retenção sanitárias (clamp / BW)",
      "Válvula diafragma",
      "Válvula de assento pneumática angular (angle seat)",
    ],
  },
  {
    slug: "sob-consulta",
    nome: "Equipamentos Sob Consulta",
    imagem: "/images/cat-controle.jpg",
    imagemAlt: "Equipamentos industriais em linha de produção",
    descricao:
      "Válvulas e equipamentos industriais com especificação particular, avaliados individualmente pela equipe técnica da EJMR conforme o projeto do cliente.",
  },
];

export type AtuadorConfig = {
  nome: "Basic" | "Integration" | "Intelligent";
  descricao: string;
  recursos: string[];
};

export const atuadorConfigs: AtuadorConfig[] = [
  {
    nome: "Basic",
    descricao: "Configuração padrão, com indicação mecânica de posição e proteção completa do motor.",
    recursos: [
      "Indicador mecânico de posição",
      "Proteção do motor (classe F, dupla chave de temperatura)",
      "Proteção anti-umidade",
      "Override manual seguro (embreagem manual)",
    ],
  },
  {
    nome: "Integration",
    descricao: "Adiciona realimentação digital e configuração não intrusiva para integração com automação.",
    recursos: [
      "Display LCD digital de posição e torque",
      "Encoder absoluto de 24 bits (até 1024 posições)",
      "Configuração não intrusiva",
      "Controle remoto por infravermelho",
      "Controle local / remoto",
    ],
  },
  {
    nome: "Intelligent",
    descricao: "Versão com processador de alto desempenho para operação modulante e sinais analógicos.",
    recursos: [
      "Processador de alto desempenho",
      "Operação modulante (S4-25%)",
      "Entrada 4-20mA / 0-10V / 2-10V",
      "Display LCD digital de posição e torque",
      "Encoder absoluto de 24 bits",
      "Configuração não intrusiva",
      "Controle remoto por infravermelho",
    ],
  },
];

export const atuadorSeries = [
  {
    nome: "EMT",
    descricao:
      "Alto torque e velocidade combinados, indicada para válvulas de grande diâmetro. Disponível com opção à prova de explosão.",
  },
  {
    nome: "EMD",
    descricao: "Indicada para operação de controle padrão.",
  },
];

export const atuadorEspecificacoes: { label: string; valor: string }[] = [
  { label: "Torque", valor: "35 – 3000 N·m" },
  { label: "Velocidade", valor: "18 – 230 rpm (variável por modelo e frequência 50/60Hz)" },
  { label: "Temperatura ambiente", valor: "-30°C a 70°C (opcional -40°C~+60°C ou -60°C~60°C)" },
  { label: "Ruído", valor: "≤ 75dB a 1m" },
  { label: "Entradas de cabo", valor: "2× NPT3/4 + 1× NPT1-1/2" },
  { label: "Proteção", valor: "IP67 padrão (IP68 opcional — 7m submerso até 72h)" },
  { label: "Montagem", valor: "ISO5210 (haste ascendente ou não ascendente)" },
  { label: "Isolamento do motor", valor: "Classe F com dupla proteção de temperatura (135°C); classe H sob consulta" },
  { label: "Ciclo de trabalho", valor: "On-Off S2-15min (600 partidas/hora); Modulante S4-25% (Intelligent)" },
  { label: "Tensão", valor: "Trifásico 380VAC ±10% 50/60Hz (padrão); monofásico 220VAC opcional; Intelligent 20–60VAC/DC ou 60–120VAC" },
  { label: "Sinal de entrada", valor: "Contato seco (On-Off, 5A@250VAC); 4-20mA / 0-10V / 2-10V (modulante)" },
];

export const atuadorRecursos = [
  "Proteção do Motor",
  "Proteção Anti-Umidade",
  "Override Manual Seguro",
  "Controle Remoto por Infravermelho",
  "Encoder Absoluto 24 bits",
  "Engrenagem / Eixo Sem-Fim de Alta Resistência",
  "Alta Rotação (RPM)",
  "Configuração Não Intrusiva",
  "Processador de Alto Desempenho",
  "Proteção IP67 / IP68",
  "Controle Local / Remoto",
];

export const atuadorModelos = [
  { modelo: "EMT11", torque: "até 100 N·m", haste: "Φ22mm" },
  { modelo: "EMT12", torque: "até 150 N·m", haste: "Φ28mm" },
  { modelo: "EMT13", torque: "até 200 N·m", haste: "Φ32mm" },
  { modelo: "EMT21", torque: "até 250 N·m", haste: "Φ36mm" },
  { modelo: "EMT22", torque: "até 320 N·m", haste: "Φ40mm" },
  { modelo: "EMT23", torque: "até 400 N·m", haste: "Φ43mm" },
];

export const protocolosIndustriais = ["Modbus", "Profibus-DP", "HART"];

export const bombasCategorias = [
  {
    nome: "Bombas Industriais",
    descricao: "Identificação e fornecimento de bombas conforme os requisitos técnicos do projeto.",
  },
  {
    nome: "Equipamentos Mecânicos",
    descricao: "Prospecção e especificação de equipamentos mecânicos sob demanda do cliente.",
  },
  {
    nome: "Equipamentos para Processos",
    descricao: "Suporte técnico na aquisição de equipamentos aplicados a processos industriais.",
  },
  {
    nome: "Equipamentos Sob Especificação",
    descricao: "Avaliação e fornecimento de equipamentos conforme especificação técnica particular.",
  },
];

export const consultoriaCards = [
  {
    titulo: "ANÁLISE DE ESPECIFICAÇÕES",
    descricao: "Avaliação dos requisitos técnicos necessários ao equipamento.",
  },
  {
    titulo: "BUSCA DE FORNECEDORES",
    descricao: "Pesquisa e desenvolvimento de fornecedores compatíveis com a necessidade do projeto.",
  },
  {
    titulo: "EQUALIZAÇÃO TÉCNICA",
    descricao: "Comparação entre requisitos do cliente e propostas recebidas.",
  },
  {
    titulo: "ANÁLISE DE PROPOSTAS",
    descricao: "Avaliação técnica das alternativas apresentadas pelos fornecedores.",
  },
  {
    titulo: "DOCUMENTAÇÃO TÉCNICA",
    descricao: "Análise de datasheets, desenhos, certificados e documentação do fornecimento.",
  },
  {
    titulo: "ACOMPANHAMENTO",
    descricao: "Suporte durante as diferentes etapas do processo de fornecimento.",
  },
];

export const processoTimeline = [
  { numero: "01", titulo: "Entendimento da Demanda" },
  { numero: "02", titulo: "Análise da Especificação" },
  { numero: "03", titulo: "Pesquisa de Fornecedores" },
  { numero: "04", titulo: "Equalização Técnica" },
  { numero: "05", titulo: "Negociação e Fornecimento" },
  { numero: "06", titulo: "Documentação e Acompanhamento" },
];

export const areasAtuacao = [
  {
    numero: "01",
    titulo: "Fornecimento de Equipamentos",
    descricao:
      "Identificação, especificação e fornecimento de equipamentos industriais conforme os requisitos técnicos de cada projeto.",
    href: "/produtos",
    cta: "Ver produtos",
  },
  {
    numero: "02",
    titulo: "Válvulas e Atuadores",
    descricao:
      "Portfólio completo de válvulas industriais e atuadores elétricos para bloqueio, regulagem e automação de processo.",
    href: "/produtos/valvulas",
    cta: "Ver válvulas",
  },
  {
    numero: "03",
    titulo: "Bombas e Equipamentos Industriais",
    descricao:
      "Prospecção e fornecimento de bombas e equipamentos mecânicos de acordo com a especificação técnica do cliente.",
    href: "/produtos/bombas",
    cta: "Ver equipamentos",
  },
  {
    numero: "04",
    titulo: "Consultoria para Importação",
    descricao:
      "Suporte técnico completo para aquisição e importação de equipamentos industriais no mercado internacional.",
    href: "/importacao",
    cta: "Ver consultoria",
  },
];

export type Documento = {
  nome: string;
  categoria: string;
  tipo: string;
  href?: string;
  disponivel: boolean;
};

export const documentos: Documento[] = [
  {
    nome: "Portfólio de Válvulas Industriais EJMR",
    categoria: "Catálogo de Válvulas",
    tipo: "PDF",
    href: "/docs/EJMR-Portfolio-Valvulas-Industriais.pdf",
    disponivel: true,
  },
  {
    nome: "Catálogo de Atuadores EMT / EMD",
    categoria: "Catálogo de Atuadores",
    tipo: "PDF",
    href: "/docs/EJMR-Catalogo-Atuadores-EMT-EMD.pdf",
    disponivel: true,
  },
  {
    nome: "Datasheets técnicos por família de válvula",
    categoria: "Datasheets",
    tipo: "PDF",
    disponivel: false,
  },
  {
    nome: "Documentação técnica de fornecimento",
    categoria: "Documentação Técnica",
    tipo: "PDF",
    disponivel: false,
  },
  {
    nome: "Manuais de operação e manutenção",
    categoria: "Manuais",
    tipo: "PDF",
    disponivel: false,
  },
  {
    nome: "Certificados de qualidade e conformidade",
    categoria: "Certificados",
    tipo: "PDF",
    disponivel: false,
  },
];

export const equipamentoOptions = [
  "Válvula de Esfera",
  "Válvula Gaveta",
  "Válvula Globo",
  "Válvula de Retenção",
  "Válvula Borboleta",
  "Válvula Forjada",
  "Válvula de Bronze",
  "Válvula de Controle",
  "Válvula API 6A",
  "Acessórios para Válvulas",
  "Atuador Elétrico EMT",
  "Atuador Elétrico EMD",
  "Bombas Industriais",
  "Outro equipamento industrial",
];

export const filtroOpcoes = {
  tipo: ["Esfera", "Gaveta", "Globo", "Retenção", "Borboleta", "Forjada", "Bronze", "Controle", "API 6A"],
  diametro: ["1/2\" – 2\"", "2\" – 12\"", "12\" – 24\"", "24\" – 48\"", "Acima de 48\""],
  classe: ["150Lb", "300Lb", "600Lb", "900Lb", "1500Lb", "2500Lb"],
  material: ["WCB", "CF8 / CF8M", "A105N", "F304 / F316", "C95800 (Bronze)"],
  conexao: ["Rosqueada", "Flangeada", "Wafer / Lug", "Solda de topo (BW)"],
  aplicacao: ["Bloqueio", "Regulagem", "Retenção", "Automação / Controle", "Oil & Gas"],
};

export const nav = [
  { label: "Início", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Produtos", href: "/produtos" },
  { label: "Importação", href: "/importacao" },
  { label: "Biblioteca Técnica", href: "/biblioteca-tecnica" },
  { label: "Contato", href: "/contato" },
];

export const footerProdutos = [
  { label: "Válvulas", href: "/produtos/valvulas" },
  { label: "Atuadores", href: "/produtos/atuadores" },
  { label: "Bombas", href: "/produtos/bombas" },
  { label: "Outros Equipamentos", href: "/produtos/bombas" },
];

export const footerMenu = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Produtos", href: "/produtos" },
  { label: "Importação", href: "/importacao" },
  { label: "Biblioteca Técnica", href: "/biblioteca-tecnica" },
  { label: "Contato", href: "/contato" },
];

export const areasTrabalho = [
  "Válvulas industriais",
  "Atuadores elétricos",
  "Bombas industriais",
  "Equipamentos industriais sob consulta",
  "Consultoria técnica para importação",
  "Análise de especificações",
  "Pesquisa e desenvolvimento de fornecedores",
  "Equalização técnica",
  "Análise de propostas técnicas",
  "Análise documental",
  "Acompanhamento de fornecimento",
];
