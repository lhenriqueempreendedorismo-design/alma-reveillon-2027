import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { ArrowDown, ArrowRight, Menu, X } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import ExpandableGallery from './components/ui/gallery-animation'
import PipVideoPlayer from './components/ui/pip-video-player'

const TICKETS = 'https://www.sympla.com.br/evento/a-l-m-a-reveillon-2027-boipeba/3254347?referrer=www.google.com'
const trackTicketClick = (placement: string) => {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq
  fbq?.('track', 'InitiateCheckout', { content_name: 'ALMA Réveillon 2027', content_category: 'ingresso', placement }, { eventID: `alma-ticket-${placement}-${Date.now()}` })
  const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer || ((window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer = [])
  dataLayer.push({ event: 'ticket_click', placement, content_name: 'ALMA Réveillon 2027' })
}
const INSTAGRAM = 'https://www.instagram.com/almareveillonboipeba/'
const nights = [
  ['27.12', 'Roda de Praia', '+5521'],
  ['28.12', 'Isso Não É Um Sunrise', 'Uma noite que atravessa a madrugada'],
  ['29.12', 'MOMO & Biribiri', 'Afrobeats sob o céu da Bahia'],
  ['30.12', 'Luau do DDP', 'Pagode, funk, pop e eletrônico'],
  ['31.12', 'ALMA Réveillon', 'A virada, à beira-mar'],
]
const gallery = [
  ['/media/curadoria/slideshow-mare-aerea.webp', 'Recifes e águas claras vistos do alto em Boipeba'],
  ['/media/curadoria/slideshow-ilha-aerea.webp', 'Praia e coqueiral vistos do alto'],
  ['/media/curadoria/slideshow-praia.webp', 'Faixa de areia e mar azul na ilha'],
  ['/media/curadoria/slideshow-reflexo.webp', 'Coqueiros refletidos nas águas da ilha'],
]
const experienceCards = [
  { title: 'O caminho', subtitle: 'Chegar a Boipeba já muda o ritmo. O trecho final acontece entre estrada, mar e caminhos de areia.', image: '/media/curadoria/carrossel-caminho.webp', alt: 'Chegada à ilha pelo cais e pelo mar' },
  { title: 'O dia', subtitle: 'Praias, mata e água morna antes de a primeira batida atravessar a noite.', image: '/media/curadoria/carrossel-dia.webp', alt: 'Praia de areia clara, coqueiros e mar azul' },
  { title: 'A noite', subtitle: 'Luzes, música e o mar como cenário até o amanhecer.', image: '/media/curadoria/card-noite.webp', alt: 'Pista do ALMA iluminada à noite, vista de cima' },
  { title: 'A virada', subtitle: 'Fogos sobre a Praia da Cueira para brindar a chegada de 2027.', image: '/media/curadoria/card-virada-fogos.webp', alt: 'Fogos de artifício sobre a festa do ALMA na praia' },
]
const faqs = [
  ['Onde e quando acontece o ALMA Réveillon 2027?', 'Na Praia da Cueira, em Cairu, Bahia, entre 27 e 31 de dezembro de 2026. A programação publicada começa às 23h nas quatro primeiras noites; no dia 31, às 22h.'],
  ['O passaporte inclui todas as noites?', 'A página oficial apresenta cinco festas Open Bar Premium. As categorias, lotes e disponibilidade devem ser conferidos no fluxo atualizado da Sympla antes da compra.'],
  ['O que está incluído no Open Bar Premium?', 'A carta publicada inclui Beefeater, Absolut, Jameson, cerveja premium, Aperol Spritz, Red Bull, tônica, refrigerantes, sucos, água de coco e água. Na virada, também há Prosecco Ponto Nero Brut by Casa Valduga.'],
  ['Como chegar e onde se hospedar em Boipeba?', 'Boipeba exige planejamento de deslocamento. Há opções por lancha e transfer semiterrestre. Hospedagem e transporte não estão incluídos nesta landing page; reserve cedo e confirme tudo diretamente com os fornecedores.'],
  ['Posso transferir ou cancelar meu ingresso?', 'A Sympla informa cancelamento dentro das condições da plataforma e uma edição de participante até 24 horas antes do evento. Consulte as regras exibidas no ingresso no momento da compra. O evento é exclusivo para maiores de 18 anos.'],
]

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SqueezeCarousel() {
  return <section className="squeeze-section" aria-labelledby="squeeze-title">
    <Reveal><span className="kicker">A EXPERIÊNCIA EM QUATRO MOVIMENTOS</span><h2 id="squeeze-title">Antes da festa,<br/><em>já é ALMA.</em></h2></Reveal>
    <ExpandableGallery items={experienceCards} />
  </section>
}

const menuItems = [
  ['experiencia', 'Experiência'], ['programacao', 'Programação'], ['ilha', 'Boipeba'],
  ['/como-chegar', 'Como chegar'], ['/onde-ficar', 'Onde ficar'], ['/sustentabilidade', 'Sustentabilidade'],
  ['/historias', 'Histórias'], ['/faq', 'FAQ'],
]

const pageContent: Record<string, { kicker: string; title: React.ReactNode; intro: string; blocks: Array<[string, string]> }> = {
  '/como-chegar': {
    kicker: 'CHEGANDO AO PARAÍSO', title: <>O caminho<br/><em>também é ALMA.</em></>,
    intro: 'Boipeba começa antes da ilha: o deslocamento desacelera a cidade e prepara o corpo para os dias à beira-mar.',
    blocks: [
      ['Saindo de Salvador', 'Voo comercial · 35 min\nTransfer marítimo · 2h\nTransfer semi-terrestre · 5h\nTravessia convencional · 4h30\nTravessia ferry boat · 5h'],
      ['Translado e passeios locais', 'O destaque oficial recomenda organizar o translado e os passeios com antecedência. Entre as referências apresentadas estão @agenciadantour, @bahia_terra_turismo, @boipebabeach_cocoluco, @lanchaliberdade_ e @martourboipeba.'],
      ['Antes de sair', 'Confirme horários, maré, ponto de embarque e disponibilidade diretamente com o fornecedor escolhido. As opções podem variar conforme a data e as condições de navegação.'],
    ],
  },
  '/onde-ficar': {
    kicker: 'A ILHA PEDE TEMPO', title: <>Fique perto<br/><em>do seu ritmo.</em></>,
    intro: 'Hospedar-se em Boipeba é parte da experiência: escolha a região pensando no acesso à praia, na distância do festival e no tempo que você quer viver fora da pista.',
    blocks: [
      ['Reserve cedo', 'O Réveillon acontece em uma ilha com oferta limitada de hospedagem. Consulte pousadas e casas locais com antecedência e confirme política de check-in, transporte de bagagem e distância do cais.'],
      ['Escolha com calma', 'Compare localização, acesso, café da manhã, ar-condicionado, gerador e formas de chegada. Em Boipeba, a logística faz parte da viagem — não deixe para resolver na última hora.'],
      ['Uma base para cinco noites', 'O festival ocupa cinco noites, de 27 a 31 de dezembro. Uma hospedagem bem localizada permite alternar praia, mata, descanso e festa sem transformar a ilha em uma corrida.'],
    ],
  },
  '/sustentabilidade': {
    kicker: 'UMA FESTA QUE DEVOLVE', title: <>Cuidar da ilha<br/><em>faz parte.</em></>,
    intro: 'O ALMA foi pensado para celebrar a paisagem sem ignorar o território que recebe o festival.',
    blocks: [
      ['Impacto local', 'Mais de R$ 200 mil são investidos por edição em ações de inclusão e na criação de postos de trabalho, beneficiando direta e indiretamente mais de 1.000 nativos, autônomos e empreendedores locais.'],
      ['Menos resíduos', 'Um copo retornável e uma pulseira por cliente para os cinco dias, coleta seletiva, doação de 100% das latinhas para reciclagem e limpeza da praia depois do evento.'],
      ['Estrutura consciente', 'Banheiros ecológicos com compostagem, materiais nativos legalizados e reutilizáveis, geradores próprios e compra de materiais de compensação ambiental definidos pela Secretaria do Meio Ambiente de Cairu.'],
    ],
  },
  '/historias': {
    kicker: 'O QUE FICA DEPOIS', title: <>Cinco noites.<br/><em>Uma memória inteira.</em></>,
    intro: 'Antes de falar da próxima virada, vale lembrar o que faz o ALMA permanecer: a ilha, as pessoas e a sensação de ter encontrado um lugar raro.',
    blocks: [
      ['Uma história que retorna', 'O festival reúne cinco edições realizadas — 2016, 2017, 2018, 2019 e o retorno em 2023 — e volta a Boipeba para a virada de 2026 para 2027.'],
      ['Boi People', 'Um público de 25 a 32 anos, majoritariamente das classes A e AA, chega de diferentes lugares do Brasil e do exterior em busca de novos ares, pé na areia e uma experiência fora do óbvio.'],
      ['Não é só uma festa', 'É o caminho pelo mar, a praia durante o dia, a música atravessando a madrugada e a virada diante da paisagem da Praia da Cueira.'],
    ],
  },
  '/faq': {
    kicker: 'ANTES DE IR', title: <>Tudo o que<br/><em>você precisa saber.</em></>,
    intro: 'Informações essenciais para planejar a chegada, a hospedagem e os cinco dias do ALMA.',
    blocks: faqs.map(([q, a]) => [q, a]),
  },
}

function InternalPage({ path }: { path: string }) {
  const page = pageContent[path] || pageContent['/faq']
  return <main className="internal-page">
    <header className="internal-nav"><a className="wordmark" href="/"><img src="/brand/alma-logo-trimmed.png" alt="ALMA Réveillon 2027"/></a><a className="ticket ticket-small" href={TICKETS} target="_blank" rel="noreferrer" onClick={() => trackTicketClick('internal-nav')}>Ingressos <ArrowRight size={15}/></a></header>
    <section className="internal-hero"><span className="kicker">{page.kicker}</span><h1>{page.title}</h1><p>{page.intro}</p></section>
    <section className="internal-grid">{page.blocks.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="internal-cta"><span className="kicker">ALMA RÉVEILLON 2027</span><h2>Seu próximo ano<br/><em>pode começar aqui.</em></h2><a className="ticket" href={TICKETS} target="_blank" rel="noreferrer" onClick={() => trackTicketClick('internal-cta')}>Comprar no Sympla <ArrowRight size={18}/></a></section>
    <footer><a className="wordmark" href="/"><img src="/brand/alma-logo-trimmed.png" alt="ALMA Réveillon 2027"/></a><p>RÉVEILLON 2027 · BOIPEBA</p></footer>
  </main>
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path !== '/') return <InternalPage path={path} />
  const [menuOpen, setMenuOpen] = useState(false)
  const [dockTop, setDockTop] = useState(false)
  const [logoLight, setLogoLight] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const cloudY = useTransform(scrollYProgress, [0, 1], ['0%', '32%'])
  const titleY = useSpring(useTransform(scrollYProgress, [0, .8], ['0%', '12%']), { stiffness: 55, damping: 28 })
  const titleOpacity = useTransform(scrollYProgress, [0, .7], [1, 0])

  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])
  useEffect(() => {
    const updateDock = () => {
      setDockTop(window.scrollY >= window.innerHeight * .82)
      const mid = window.innerHeight * .48
      const cinema = document.querySelector('.cinema')?.getBoundingClientRect()
      const gallery = document.querySelector('.gallery')?.getBoundingClientRect()
      setLogoLight(Boolean((cinema && cinema.top <= mid && cinema.bottom >= mid) || (gallery && gallery.top <= mid && gallery.bottom >= mid)))
    }
    updateDock()
    window.addEventListener('scroll', updateDock, { passive: true })
    window.addEventListener('resize', updateDock)
    return () => { window.removeEventListener('scroll', updateDock); window.removeEventListener('resize', updateDock) }
  }, [])

  return <main>
    <header className={`nav ${dockTop ? 'nav--scrolled' : ''} ${logoLight ? 'nav--light-logo' : ''}`}>
      <a className="wordmark" href="#top" aria-label="ALMA, início"><img src="/brand/alma-logo-trimmed.png" alt="ALMA Réveillon 2027"/></a>
      <div className={`nav-dock ${dockTop ? 'nav-dock--top' : ''}`}>
        <nav className="nav-links" aria-label="Navegação principal">
          {menuItems.slice(0, 3).map(([href, label]) => <a key={href} href={href.startsWith('/') ? href : `#${href}`}>{label}</a>)}
        </nav>
        <div className="social-links" aria-label="Rede social do ALMA">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="ALMA Réveillon no Instagram"><FaInstagram size={17}/></a>
        </div>
        <a className="ticket ticket-small" href={TICKETS} onClick={() => trackTicketClick('nav')} target="_blank" rel="noreferrer"><span className="ticket-label">Ingressos</span> <ArrowRight size={15}/></a>
      </div>
      <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu /></button>
    </header>

    {menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X /></button>
      {menuItems.map(([href, label]) => <a key={href} href={href.startsWith('/') ? href : `#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <div className="mobile-socials"><a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram/></a></div>
      <a href={TICKETS} onClick={() => trackTicketClick('cta')} target="_blank" rel="noreferrer">Comprar ingresso</a>
    </motion.div>}

    <section className="hero" id="top" ref={heroRef}>
      <video autoPlay muted loop playsInline preload="auto" poster="/media/alma-hero-poster.jpg" aria-label="Paisagens de Boipeba entre nuvens ensolaradas">
        <source src="/media/alma-hero-web.mp4" type="video/mp4" />
      </video>
      <motion.div className="cloud cloud-a" style={{ y: cloudY }}/><motion.div className="cloud cloud-b" style={{ y: cloudY }}/>
      <div className="hero-wash" />
      <motion.div className="hero-copy" style={{ y: titleY, opacity: titleOpacity }}>
        <span className="eyebrow">27 — 31 DEZ 2026 · PRAIA DA CUEIRA</span>
        <h1>O ano novo<br/>nasce com<br/><em>toda ALMA.</em></h1>
        <p>Cinco noites na ilha. O mar por perto. O pé na areia. E a sensação rara de estar exatamente onde você queria estar.</p>
        <a className="ticket" href={TICKETS} target="_blank" rel="noreferrer"><span className="ticket-label">Viver o ALMA</span> <ArrowRight size={18}/></a>
      </motion.div>
      <a className="scroll-cue" href="#experiencia" aria-label="Continuar"><span>DESCER</span><ArrowDown size={17}/></a>
    </section>

    <section className="manifesto light" id="experiencia">
      <Reveal><span className="kicker">UM CONVITE DA ILHA</span><h2>Há viradas que mudam a data.<br/><em>Esta muda o estado de espírito.</em></h2></Reveal>
      <Reveal className="manifesto-grid" delay={.1}>
        <p className="lead">Boipeba não se atravessa com pressa. A chegada já muda o ritmo: a cidade fica para trás, o mar abre caminho e o tempo passa a obedecer à maré.</p>
        <p>Na Praia da Cueira, o ALMA ocupa cinco noites entre 27 e 31 de dezembro. Música, areia, encontros e Open Bar Premium compõem uma experiência desenhada para terminar o ano leve e começar 2027 inteiro.</p>
      </Reveal>
    </section>

    <section className="cinema" id="ilha">
      <div className="cinema-bg" />
      <Reveal className="cinema-copy"><span className="kicker">BOIPEBA, BAHIA</span><h2>Primeiro,<br/>o paraíso.</h2><p>Uma ilha alcançada pelo mar. Praia, mata, caminhos de areia e noites que começam quando o sol baixa.</p></Reveal>
    </section>

    <SqueezeCarousel />

    <section className="gallery" aria-hidden="true">
      {gallery.map(([src, alt], i) => <motion.figure key={src} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: .45 }} transition={{ duration: 1.1 }}><img src={src} alt={alt} loading={i ? 'lazy' : 'eager'}/><figcaption>0{i+1} / 04</figcaption></motion.figure>)}
    </section>

    <section className="nights light" id="programacao">
      <Reveal><span className="kicker">CINCO NOITES · OPEN BAR PREMIUM</span><h2>Cada noite,<br/><em>uma nova maré.</em></h2></Reveal>
      <div className="night-list">{nights.map((n, i) => <Reveal className="night" key={n[0]} delay={i*.04}><span>{n[0]}</span><h3>{n[1]}</h3><p>{n[2]}</p></Reveal>)}</div>
      <p className="source-note">Programação publicada nas páginas de referência. Alterações devem ser confirmadas no canal oficial do evento.</p>
    </section>

    <section className="bar-section">
      <Reveal className="bar-copy"><span className="kicker">SEM INTERROMPER O MOMENTO</span><h2>Open Bar<br/>Premium.</h2><p>Nas cinco noites, uma seleção premium de gin, vodka, whiskey, cerveja, cocktails, energéticos e bebidas não alcoólicas. Na virada, Prosecco Ponto Nero Brut para o primeiro brinde de 2027.</p><div className="bar-brands" aria-label="Marcas do Open Bar Premium"><span>Beefeater</span><span>Absolut</span><span>Jameson</span><span>Sol Premium</span><span>Aperol Spritz</span><span>Red Bull</span></div><div className="bar-highlight">Virada com Prosecco Ponto Nero Brut by Casa Valduga</div></Reveal>
      <div className="orb" aria-hidden="true"><span>27 — 31</span><strong>DEZ</strong></div>
    </section>

    <section className="stories light" id="historias">
      <Reveal><span className="kicker">HISTÓRIAS DE OUTRAS MARÉS</span><h2>O que fica<br/><em>depois da virada.</em></h2></Reveal>
      <div className="story-grid">
        <Reveal className="story-card"><span>CHEGADA</span><h3>A cidade termina no cais.</h3><p>O deslocamento não é um intervalo. É o primeiro capítulo: quando o caminho encontra o mar, a pressa começa a perder importância.</p></Reveal>
        <Reveal className="story-card" delay={.1}><span>ENCONTRO</span><h3>A pista não tem paredes.</h3><p>A Praia da Cueira muda a escala da festa. O horizonte permanece à vista enquanto a música atravessa a madrugada.</p></Reveal>
        <Reveal className="story-card" delay={.2}><span>MEMÓRIA</span><h3>O sol encerra a noite.</h3><p>As imagens de edições anteriores guardam o que uma lista de atrações não explica: gente que chegou para uma festa e saiu levando uma paisagem inteira.</p></Reveal>
      </div>
      <p className="source-note">Storytelling editorial construído a partir do acervo visual local. Não representa depoimentos atribuídos a participantes.</p>
    </section>

    <section className="faq light" id="faq">
      <Reveal><span className="kicker">ANTES DE IR</span><h2>As cinco maiores<br/><em>objeções, respondidas.</em></h2></Reveal>
      <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="finale">
      <div className="finale-bg" />
      <Reveal className="finale-copy"><span className="kicker">HAPPY NEW ILHA</span><h2>Seu próximo ano<br/>pode começar aqui.</h2><p>Praia da Cueira · Cairu, Bahia<br/>27 de dezembro, 23h — 1º de janeiro, 6h</p><a className="ticket light-ticket" href={TICKETS} onClick={() => trackTicketClick('finale')} target="_blank" rel="noreferrer"><span className="ticket-label">Comprar no Sympla</span> <ArrowRight size={18}/></a><small>Evento para maiores de 18 anos. Compra e regras pela plataforma oficial.</small></Reveal>
    </section>

    <footer><a className="wordmark" href="#top"><img src="/brand/alma-logo-trimmed.png" alt="ALMA Réveillon 2027"/></a><p>RÉVEILLON 2027 · BOIPEBA</p><div className="footer-actions"><div className="social-links social-links--footer"><a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={18}/></a></div><a href={TICKETS} onClick={() => trackTicketClick('cta')} target="_blank" rel="noreferrer"><img className="sympla" src="/brand/sympla-logo.png" alt="Comprar pela Sympla"/></a></div></footer>

    <PipVideoPlayer />
  </main>
}
export default App
