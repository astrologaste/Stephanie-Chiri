import React, { useState } from 'react';
import { 
  generalMercuryIntro, 
  housesData, 
  signsTransitData, 
  doAndDontList 
} from '../data/mercuryData';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Compass, 
  Layout, 
  RefreshCw, 
  Search,
  Sparkles,
  Info,
  Milestone,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion } from 'motion/react';

export default function MercuryGuide() {
  const [selectedHouse, setSelectedHouse] = useState<number>(1);
  const [selectedSign, setSelectedSign] = useState<string>('aries');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [checklistTab, setChecklistTab] = useState<'do' | 'dont'>('do');
  const [isRoteiroOpen, setIsRoteiroOpen] = useState<boolean>(false);

  const currentHouseDetails = housesData.find(h => h.id === selectedHouse) || housesData[0];
  const currentSignDetails = signsTransitData.find(s => s.id === selectedSign) || signsTransitData[0];

  return (
    <div className="space-y-8" id="mercury-retrograde-portal">
      
      {/* 1. HERO HEADER WITH MOOD FIRST BACKGROUND & 5 ANCHORS SIDE-BY-SIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="portal-hero-grid">
        {/* Left Column: Hero Intro (lg:col-span-7) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative lg:col-span-7 overflow-hidden rounded-2xl bg-violet-50 border border-violet-200/85 p-8 text-slate-850 shadow-md flex flex-col justify-between"
          id="portal-hero-banner"
        >
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-100/60 border border-indigo-200/80 text-indigo-800 text-xs px-3 py-1 rounded-full font-mono font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-650 animate-pulse" />
              Central de Inteligência Astrológica
            </div>
            <h1 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-slate-900 leading-tight">
              Mercúrio Retrógrado <span className="text-indigo-650 font-light block md:inline">desvendado</span>
            </h1>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-2xl">
              Mercúrio fica retrógrado de 3 a 4 vezes por ano, e nesses momentos sua órbita está mais próxima da Terra — o que dá a impressão óptica de que ele está andando para trás.
            </p>

            <div className="bg-white/95 backdrop-blur-3xs border border-violet-150 p-4 rounded-xl space-y-2 mt-6 shadow-3xs">
              <div className="flex gap-2 items-center text-indigo-800 font-bold text-xs font-mono uppercase tracking-wider">
                <Info className="w-4 h-4 shrink-0 text-indigo-600" />
                Sintoma Comum no Cotidiano
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                No geral, é uma fase de lentidão e confusão em relação ao nosso intelecto. Pense que é como uma permissão do universo para desacelerar. Programe-se para fazer menos e contar menos com sistemas, reuniões importantes e assinaturas de contratos nesse período.
              </p>
            </div>
          </div>
          {/* Abstract background art representing orbit paths */}
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full border border-indigo-205/10 pointer-events-none" />
          <div className="absolute right-12 top-12 w-2 h-2 rounded-full bg-indigo-400/30 shadow-2xl animate-ping" />
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
        </motion.div>

        {/* Right Column: The 5 Anchors of 'RE-' (lg:col-span-5) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 bg-indigo-50/40 border border-indigo-150 p-6 rounded-2xl flex flex-col justify-between" 
          id="retrograde-anchors-hero-card"
        >
          <div>
            <div className="text-xs font-bold text-indigo-900 uppercase font-mono mb-4 tracking-wide flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              As 5 Âncoras do Efeito "RE" (Revisão e Prática)
            </div>
            <div className="space-y-3">
              {generalMercuryIntro.retrogradeKeywords.map((kw, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-indigo-100 p-3 rounded-xl hover:border-indigo-350 transition-colors shadow-3xs flex gap-3 items-center"
                >
                  <div className="bg-indigo-50 text-indigo-700 font-mono font-black text-xs min-w-[32px] h-8 rounded-lg flex items-center justify-center">
                    #{i+1}
                  </div>
                  <div>
                    <div className="text-indigo-850 font-sans font-bold text-xs uppercase tracking-tight">
                      {kw.word}
                    </div>
                    <div className="text-[10px] text-slate-500 leading-tight">
                      {kw.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[9px] text-indigo-600/70 text-right mt-4 font-mono">
            * revisão, resgate, internalização e reflexão profunda; hora de desacelerar.
          </p>
        </motion.div>
      </div>

      {/* 2. THE THREE PASSAGES CONCEPTUAL BOX (DYNAMICA DAS 3 PASSAGENS) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-6" id="three-passages-card">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase tracking-wider">
            <RefreshCw className="w-4 h-4 text-indigo-500 animate-spin-slow" />
            Mecânica Celeste e Reflexão
          </div>
          <h2 className="text-xl md:text-2xl font-sans font-extrabold text-slate-900 tracking-tight">
            A Dinâmica das Três Passagens: Sintonizando o Recado
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Pela perspectiva geométrica da Terra, o planeta parece andar para a frente, parar, recuar sobre seus próprios passos e, por fim, retomar o caminho original. Ele cruza <strong>ele cruza a mesma região do seu mapa exatas 3 vezes</strong>, mas o bold não aconteceu. O recado é que essa área da sua vida está precisando de revisão, e durante esse tempo você terá oportunidade de entender melhor o que está acontecendo.
          </p>
        </div>

        {/* Triple Passage Visualization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl space-y-3 relative hover:shadow-2xs transition-shadow">
            <div className="absolute -top-3 left-4 bg-indigo-600 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm font-sans pt-1">1ª Passagem: O Impacto Direto</h3>
            <p className="text-slate-505 text-[11px] md:text-xs leading-relaxed">
              O planeta passa pela primeira vez em movimento rápido, plantando sementes, iniciando diálogos ou transações que mais tarde precisarão de ajustes cirúrgicos.
            </p>
          </div>

          <div className="bg-indigo-50/20 border-2 border-indigo-250 p-5 rounded-xl space-y-3 relative hover:shadow-2xs transition-shadow">
            <div className="absolute -top-3 left-4 bg-indigo-600 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm font-sans pt-1 flex items-center gap-1.5">
              2ª Passagem: Retrogradação
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 block animate-pulse"></span>
            </h3>
            <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed">
              O planeta estagna e volta de ré sobre as mesmas coordenadas. Os erros ocultos aparecem e os sistemas caem, forçando uma desaceleração saudável e mandando o recado de revisão.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl space-y-3 relative hover:shadow-2xs transition-shadow">
            <div className="absolute -top-3 left-4 bg-slate-700 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm font-sans pt-1">3ª Passagem: Retomada e Alinhamento</h3>
            <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed">
              Após recuperar o passo direto e atravessar a sua zona de sombra, Mercúrio sela os acordos com a maturidade adquirida após três tentativas completas e conscientes.
            </p>
          </div>

        </div>
      </div>

      {/* 3. THE CHAT BALLOON FOR NATAL MERCURY RETROGRADE */}
      <div className="flex items-start gap-4 max-w-3xl" id="natal-mercury-privilege-balloon">
        {/* Charming Icon Badge simulating active dialogue bubble avatar */}
        <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 shrink-0 flex items-center justify-center text-emerald-800 font-bold text-base shadow-2xs">
          ☿
        </div>
        <div className="relative bg-emerald-50 text-emerald-950 border border-emerald-200 p-5 rounded-2xl rounded-tl-none shadow-3xs">
          {/* Bubble tail triangle effect */}
          <div className="absolute top-0 -left-2.5 w-0 h-0 border-t-[12px] border-t-emerald-200 border-r-[12px] border-r-transparent pointer-events-none" />
          <div className="absolute top-[1px] -left-1.5 w-0 h-0 border-t-[11px] border-t-emerald-50 border-r-[11px] border-r-transparent pointer-events-none" />
          
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
              Você nasceu com Mercúrio Retrógrado?
            </h3>
            <p className="text-emerald-900 text-xs md:text-sm leading-relaxed font-sans">
              <strong>Obs importante sobre o seu Mapa:</strong> Para pessoas que já nasceram com Mercúrio Retrógrado no seu mapa astrológico de nascimento, elas tendem a se sentir <strong>extremamente familiarizadas</strong> durante esses períodos gerais de trânsito. O compasso de desaceleração se alinha ao fluxo de raciocínio natural delas, fazendo com que não sofram tanto com os efeitos e as turbulências do clima mundano.
            </p>
          </div>
        </div>
      </div>

      {/* 4. GUIDELINES DO'S AND DONT'S TAB CONTROL (DICAS DE SOBREVIVÊNCIA) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-5" id="guidelines-checklists-wrapper">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-3">
          <div className="space-y-1">
            <h2 className="text-lg font-sans font-semibold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Dicas de Sobrevivência
            </h2>
            <p className="text-slate-550 text-xs">O que fazer e evitar ativamente durante o trânsito planetário</p>
          </div>

          {/* Toggle Tab bar */}
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setChecklistTab('do')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold font-sans transition-all cursor-pointer ${
                checklistTab === 'do' 
                  ? 'bg-white text-emerald-700 shadow-2xs border border-slate-200/50' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Fazer (Recomendado)
            </button>
            <button
              onClick={() => setChecklistTab('dont')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold font-sans transition-all cursor-pointer ${
                checklistTab === 'dont' 
                  ? 'bg-white text-rose-700 shadow-2xs border border-slate-200/50' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-rose-500" />
              Evitar (Não Recomendado)
            </button>
          </div>
        </div>

        {/* Output checklists */}
        <div className="space-y-3 min-h-[160px]">
          {checklistTab === 'do' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {doAndDontList.do.map((item, index) => (
                <div 
                   key={index} 
                   className="flex items-start gap-3 bg-emerald-50/10 border border-emerald-100 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs md:text-sm leading-relaxed font-sans">{item}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {doAndDontList.dont.map((item, index) => (
                <div 
                   key={index} 
                   className="flex items-start gap-3 bg-rose-50/10 border border-rose-100 p-4 rounded-xl"
                >
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs md:text-sm leading-relaxed font-sans">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 5. INTERACTIVE SECTION: HOUSE & SIGN EXPLORERS */}
      <div 
        className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-6" 
        id="interactive-explorers"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-sans font-extrabold text-slate-900 tracking-tight">
              Buscador Dinâmico de Trânsitos (Casas & Signos)
            </h3>
            <p className="text-slate-500 text-xs">Selecione onde Mercúrio está transitando no momento para decifrar as predições técnicas</p>
          </div>

          {/* Clean utility search filter bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filtrar temas astrológicos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* HOUSES COLUMN (XL: 6 columns) */}
          <div className="xl:col-span-6 space-y-4">
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 font-sans flex items-center gap-2">
                <Layout className="w-4 h-4 text-indigo-600" />
                Selecione a Casa Astrológica
              </span>
              <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-sm">
                Casa {selectedHouse} Ativa
              </span>
            </div>

            {/* Grid selector buttons */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {housesData.map((h) => {
                const isSelected = selectedHouse === h.id;
                const isFiltered = searchQuery === '' || 
                  h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  h.theme.toLowerCase().includes(searchQuery.toLowerCase());
                
                return (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHouse(h.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all border ${
                      !isFiltered ? 'opacity-30' : ''
                    } ${
                      isSelected 
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs scale-102' 
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    C{h.id}
                  </button>
                );
              })}
            </div>

            {/* Details panel */}
            <div className="bg-indigo-50/30 border border-indigo-100 rounded-xl p-5 space-y-3">
              <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                {currentHouseDetails.name}: <span className="text-indigo-750 font-normal">{currentHouseDetails.theme}</span>
              </h4>
              <p className="text-slate-605 text-xs leading-relaxed">
                {currentHouseDetails.generalMeaning}
              </p>
              <div className="border-t border-indigo-100 pt-3 mt-2 space-y-1.5">
                <div className="text-[10px] font-mono text-amber-700 uppercase font-semibold tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                  Efeito de Correção Exigido (☿ R):
                </div>
                <p className="text-slate-700 text-xs font-semibold leading-relaxed bg-amber-55 p-3 rounded-lg border border-amber-100">
                  {currentHouseDetails.retrogradeMeaning}
                </p>
              </div>
            </div>
          </div>

          {/* SIGNS COLUMN (XL: 6 columns) */}
          <div className="xl:col-span-6 space-y-4">
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 font-sans flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                Selecione o Signo de Trânsito
              </span>
              <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-sm capitalize">
                {currentSignDetails.name} Ativo
              </span>
            </div>

            {/* Grid selector buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {signsTransitData.map((s) => {
                const isSelected = selectedSign === s.id;
                const isFiltered = searchQuery === '' || 
                  s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  s.climateTitle.toLowerCase().includes(searchQuery.toLowerCase());

                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSign(s.id)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-sans font-medium transition-all capitalize border ${
                      !isFiltered ? 'opacity-35' : ''
                    } ${
                      isSelected 
                        ? 'bg-amber-500 border-amber-500 text-white shadow-xs scale-102' 
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>

            {/* Details panel */}
            <div className="bg-amber-50/30 border border-amber-100 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                <h4 className="text-base font-extrabold text-slate-900 uppercase">Mercúrio em {currentSignDetails.name}</h4>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-100 font-mono px-2 py-0.5 rounded-md">
                  {currentSignDetails.climateTitle}
                </span>
              </div>
              <p className="text-slate-650 text-xs leading-relaxed">
                {currentSignDetails.climateDesc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-lg space-y-1">
                  <div className="text-[9px] font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    O que revisar:
                  </div>
                  <p className="text-slate-650 text-[11px] leading-relaxed">
                    {currentSignDetails.revise}
                  </p>
                </div>
                <div className="bg-rose-50/50 border border-rose-100 p-3 rounded-lg space-y-1">
                  <div className="text-[9px] font-mono font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1">
                    <XCircle className="w-3 h-3 text-rose-500" />
                    O que evitar:
                  </div>
                  <p className="text-slate-650 text-[11px] leading-relaxed">
                    {currentSignDetails.avoid}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 6. EXCLUSIVE HERMES ROADMAP FOR ANALYSIS (ROTEIRO CLICÁVEL & EXPANSÍVEL) */}
      <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4" id="hermes-roadmap-timeline">
        <div 
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => setIsRoteiroOpen(!isRoteiroOpen)}
        >
          <div className="space-y-1.5">
            <div className="text-xs font-mono font-bold text-indigo-700 tracking-widest uppercase flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-indigo-600" />
              Decifrando MR
            </div>
            <h2 className="text-lg md:text-xl font-sans font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              Roteiro de Análise de Mercúrio Retrógrado
              <span className="text-[10px] font-semibold px-2 py-0.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-md font-mono">
                {isRoteiroOpen ? 'Ver menos' : 'Ver roteiro completo'}
              </span>
            </h2>
            <p className="text-slate-500 text-xs">
              A ordem de verificação ideal para o seu próprio mapa astrológico. Clique para {isRoteiroOpen ? 'recolher' : 'expandir'}.
            </p>
          </div>
          <div className="p-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100/80 rounded-full transition-colors text-indigo-700 shrink-0">
            {isRoteiroOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>

        {/* 6-Step Order Flow List with Elegant White Cards (Render if isRoteiroOpen is true) */}
        {isRoteiroOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 pt-4 border-t border-slate-200/60"
          >
            
            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-3 flex flex-col justify-between shadow-2xs hover:border-indigo-200 transition-colors">
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-indigo-640 uppercase tracking-widest border-b border-slate-100 pb-1.5 flex items-center justify-between">
                  <span>Passo 1</span>
                  <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">01</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight leading-snug">Em que signo Mercúrio está retrogradando?</h4>
                <div className="text-[10px] text-indigo-600 font-mono font-medium">(Tom desse Mercúrio)</div>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Identifique a atmosfera do signo onde ocorre o trânsito. Isso define o "tom" intelectual, o estilo comunicativo e o filtro mental predominante no período.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-3 flex flex-col justify-between shadow-2xs hover:border-indigo-200 transition-colors">
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-indigo-640 uppercase tracking-widest border-b border-slate-100 pb-1.5 flex items-center justify-between">
                  <span>Passo 2</span>
                  <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">02</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight leading-snug">Por qual casa ele está passando?</h4>
                <div className="text-[10px] text-indigo-600 font-mono font-medium">(Área da vida afetada)</div>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Localize a casa astrológica do seu mapa natal que recebe o trânsito. Essa é a área concreta da vida onde revisões e ajustes serão exigidos de forma ativa.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-3 flex flex-col justify-between shadow-xs hover:border-indigo-200 transition-colors">
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-indigo-640 uppercase tracking-widest border-b border-slate-100 pb-1.5 flex items-center justify-between">
                  <span>Passo 3</span>
                  <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">03</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight leading-snug">Que aspectos ele faz?</h4>
                <div className="text-[10px] text-indigo-600 font-mono font-medium">(Dinâmica psicológica)</div>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Mapeie as conexões (aspectos) aos seus planetas natais. Elas determinam como a energia retrógrada interage com sua mente natal, gerando fricção ou facilitação.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-3 flex flex-col justify-between shadow-xs hover:border-indigo-200 transition-colors">
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-indigo-640 uppercase tracking-widest border-b border-slate-100 pb-1.5 flex items-center justify-between">
                  <span>Passo 4</span>
                  <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">04</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight leading-snug">Como é o seu Mercúrio Natal?</h4>
                <div className="text-[10px] text-indigo-600 font-mono font-medium">(Seu filtro original)</div>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Avalie o seu Mercúrio de nascimento. Se você já nasceu com Mercúrio Retrógrado, sentirá esses períodos gerais de trânsito de forma natural e produtiva.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-3 flex flex-col justify-between shadow-xs hover:border-indigo-200 transition-colors">
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-indigo-640 uppercase tracking-widest border-b border-slate-100 pb-1.5 flex items-center justify-between">
                  <span>Passo 5</span>
                  <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">05</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight leading-snug">Qual tema está sendo revisado?</h4>
                <div className="text-[10px] text-indigo-600 font-mono font-medium">(Sentido psicológico)</div>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Reflita sobre o propósito mais profundo do ciclo: que tipo de padrões, velhos diálogos ou projetos passados estão vindo à tona para serem saneados?
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-3 flex flex-col justify-between shadow-xs hover:border-indigo-200 transition-colors">
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-indigo-640 uppercase tracking-widest border-b border-slate-100 pb-1.5 flex items-center justify-between">
                  <span>Passo 6</span>
                  <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">06</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight leading-snug">Que casas ele rege?</h4>
                <div className="text-[10px] text-indigo-600 font-mono font-medium">(Gêmeos e Virgem)</div>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                As casas onde você possui Gêmeos e Virgem no mapa natal também entram em modo de espera orquestrado, pois o regente delas está temporariamente mudando de marcha.
              </p>
            </div>

          </motion.div>
        )}
      </div>

    </div>
  );
}
