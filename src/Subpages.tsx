import { ArrowLeft, ArrowRight, Clock3, Compass, MapPin, Plane, Ship, Star, Waves } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import CircularMenu from './components/ui/circular-menu'
import { accommodations } from './data/accommodations'
import BoiPeopleSection from './components/ui/boi-people-section'
import PartnersGrid from './components/ui/partners-grid'

export type SubpageKey = 'como-chegar' | 'onde-ficar' | 'programacao' | 'experiencia' | 'midia' | 'historias' | 'boi-people'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export interface ReviewItem {
  quote: string
  author: string
  name?: string
  role?: string
  verified?: boolean
  initials?: string
  tag?: string
}

export const reviews: ReviewItem[] = [
  {
    quote: 'Foi tudooooo 🙌❤️',
    author: 'brunamarquezine',
    name: 'Bruna Marquezine',
    role: 'Atriz & Convidada',
    verified: true,
    initials: 'BM',
    tag: 'Boipeba',
  },
  {
    quote: 'pra ficar na memória!! 👌',
    author: 'bertolazzi',
    name: 'Carlos Bertolazzi',
    role: 'Chef & Apresentador',
    verified: true,
    initials: 'CB',
    tag: 'Edição Anterior',
  },
  {
    quote: 'O MELHOR EVENTO DO NORDESTE',
    author: 'ricardobrautigam',
    name: 'Ricardo Brautigam',
    role: 'Diretor Criativo',
    verified: true,
    initials: 'RB',
    tag: 'Boipeba',
  },
  {
    quote: 'Energia surreal!!! Foi maravilhoso e perfeito cada momento 🤍',
    author: 'polly.penoni',
    name: 'Pollyanna Penoni',
    role: 'Hóspede ALMA',
    verified: false,
    initials: 'PP',
    tag: 'Praia da Cueira',
  },
  {
    quote: 'Foi sensacional 🏝️😍🙏🇧🇷',
    author: 'belanogueira__',
    name: 'Bela Nogueira',
    role: 'Hóspede ALMA',
    verified: false,
    initials: 'BN',
    tag: 'Boipeba',
  },
  {
    quote: 'Saudade desses dias já! 😢 foi incrível!! 🔥',
    author: 'lilotune',
    name: 'Lilo Tune',
    role: 'Convidado ALMA',
    verified: false,
    initials: 'LT',
    tag: 'Edição Anterior',
  },
  {
    quote: 'Sem palavras! Eita como foi incrível 🤍',
    author: 'camilagondimfonseca',
    name: 'Camila Gondim',
    role: 'Hóspede ALMA',
    verified: false,
    initials: 'CG',
    tag: 'Boipeba',
  },
  {
    quote: 'Bom demais, ta malucooo 🙌🙌',
    author: 'joaopedroblemos',
    name: 'João Pedro Lemos',
    role: 'Convidado ALMA',
    verified: false,
    initials: 'JP',
    tag: 'Edição Anterior',
  },
  {
    quote: 'Eu amei o @almareveillonboipeba, foi demais!!!! 😍😍😍😍',
    author: 'julianitzsche',
    name: 'Julia Nitzsche',
    role: 'Hóspede ALMA',
    verified: false,
    initials: 'JN',
    tag: 'Praia da Cueira',
  },
  {
    quote: 'Foi épico!!!',
    author: 'kaicms',
    name: 'Kaique Silva',
    role: 'Convidado ALMA',
    verified: false,
    initials: 'KS',
    tag: 'Boipeba',
  },
]

const nights = [
  ['27/ — DOMINGO', 'RODA DE PRAIA COM +5521', '23H - 06H · Open Bar Premium'],
  ['28/ — SEGUNDA', 'ISSO NÃO É UM SUNRISE', '23H - 06H · Open Bar Premium'],
  ['29/ — TERÇA', 'MOMO & BIRIBIRI', '23H - 06H · Open Bar Premium'],
  ['30/ — QUARTA', 'LUAU DO DDP', '23H - 06H · Open Bar Premium'],
  ['31/ — QUINTA', 'ALMA REVEILLON', '22H - 06H · Open Bar Premium · A Grande Virada'],
]

function Shell({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <main className="alma-subpage">
      <header className="nav nav--hero alma-subpage-nav">
        <a href="/" className="alma-subpage-back" aria-label="Voltar para a home"><ArrowLeft size={20} /></a>
        <a className="wordmark wordmark--hero" href="/" aria-label="ALMA Réveillon 2027">
          <img className="wordmark-layer wordmark-layer--dark" src={asset('/brand/alma-logo-dark.png')} alt="ALMA Réveillon 2027" />
          <img className="wordmark-layer wordmark-layer--diff" src={asset('/brand/alma-logo-trimmed.png')} alt="ALMA Réveillon 2027" />
        </a>
        <CircularMenu />
      </header>
      <section className="alma-subpage-hero">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
      </section>
      <div className="alma-subpage-content">{children}</div>
      <footer className="alma-subpage-footer"><a href="/">ALMA Réveillon 2027</a><span>Ilha de Boipeba · Bahia</span></footer>
    </main>
  )
}

function HowToArrivePage() {
  return (
    <Shell eyebrow="COMO CHEGAR AO PARAÍSO" title="Rotas para a Ilha de Boipeba">
      <p className="alma-subpage-lead">
        A Ilha de Boipeba é um destino preservado onde não entram carros. A travessia pelo ar ou pelo mar já faz parte do ritual de desaceleração. Escolha a sua melhor rota de chegada.
      </p>

      {/* Saindo de Salvador */}
      <div className="alma-route-section-header">
        <span className="alma-route-kicker">SAINDO DE SALVADOR</span>
        <h2>Opções de translado</h2>
      </div>

      <div className="alma-route-grid">
        <article>
          <Plane size={24} className="text-[#57d2f4]" />
          <small>VOO COMERCIAL · MAIS RÁPIDO</small>
          <h2>Voo Comercial</h2>
          <strong>35 min</strong>
          <p>Operado pela Abaeté Linhas Aéreas saindo do Aeroporto Internacional de Salvador direto para a pista em frente à ilha.</p>
        </article>

        <article>
          <Ship size={24} className="text-[#57d2f4]" />
          <small>TRANSFER MARÍTIMO · PELO MAR</small>
          <h2>Transfer Marítimo</h2>
          <strong>2h</strong>
          <p>Uber até a Marina Porto de Salvador &gt; Lancha rápida direto para o cais de Boipeba pelo mar aberto.</p>
        </article>

        <article>
          <MapPin size={24} className="text-[#57d2f4]" />
          <small>TRANSFER FRETADO · CONFORTÁVEL</small>
          <h2>Transfer Semi-Terrestre</h2>
          <strong>5h</strong>
          <p>Translado fretado completo com van e lancha rápida combinados, cuidando de toda a logística até a ilha.</p>
        </article>

        <article>
          <Ship size={24} className="text-[#57d2f4]" />
          <small>TRAVESSIA CONVENCIONAL · ECONÔMICA</small>
          <h2>Travessia Convencional</h2>
          <strong>4h30</strong>
          <p>Uber ao Terminal de Mar Grande &gt; Barco à Itaparica &gt; Táxi a Valença &gt; Lancha rápida até Boipeba.</p>
        </article>

        <article>
          <Ship size={24} className="text-[#57d2f4]" />
          <small>TRAVESSIA FERRY BOAT</small>
          <h2>Travessia Ferry Boat</h2>
          <strong>5h</strong>
          <p>Uber ao Terminal São Joaquim &gt; Ferry a Bom Despacho &gt; Táxi ou ônibus até Valença &gt; Lancha até Boipeba.</p>
        </article>
      </div>

      {/* Saindo de Morro de SP */}
      <div className="alma-route-section-header" style={{ marginTop: '50px' }}>
        <span className="alma-route-kicker">SAINDO DE MORRO DE SÃO PAULO</span>
        <h2>Opções de translado</h2>
      </div>

      <div className="alma-route-grid">
        <article>
          <Ship size={24} className="text-[#80eeb4]" />
          <small>LANCHA FRETADA · NÁUTICO</small>
          <h2>Lancha Fretada</h2>
          <strong>50 min</strong>
          <p>Trajeto náutico privativo saindo da Terceira Praia de Morro de SP direto ao cais de Boipeba.</p>
        </article>

        <article>
          <Compass size={24} className="text-[#80eeb4]" />
          <small>JEEP + LANCHA · OPÇÃO MAIS SEGURA</small>
          <h2>Jeep Lancha</h2>
          <strong>1h</strong>
          <p>Jeep off-road até a Fazenda Pontal + travessia de lancha protegida de 5 minutos até Boipeba.</p>
        </article>
      </div>

      {/* Translados e Passeios Locais */}
      <section className="alma-info-panel" style={{ marginTop: '50px' }}>
        <span>TRANSLADO E PASSEIOS LOCAIS RECOMENDADOS</span>
        <h2>Explore a ilha com confiança.</h2>
        <p>
          Contatos e agências locais recomendadas pelo ALMA:<br />
          <strong>@AGENCIADANTOUR • @BAHIA TERRA_TURISMO • @BOIPEBABEACH_COCOLOUCO • @LANCHALIBERDADE_ • @MARTOURBOIPEBA</strong>
        </p>
        <a href="https://www.google.com/maps/search/?api=1&query=Praia+da+Cueira,+Boipeba,+BA" target="_blank" rel="noreferrer">
          Abrir Praia da Cueira no mapa <ArrowRight size={15} />
        </a>
      </section>
    </Shell>
  )
}

function WhereToStayPage() {
  return (
    <Shell eyebrow="LOCAIS PERTO DA GENTE" title="Onde ficar em Boipeba">
      <p className="alma-subpage-lead">
        Boipeba oferece vilas charmosas e praias deslumbrantes. Conheça as melhores localizações para se hospedar perto do ALMA e os bairros mais convenientes.
      </p>

      <div className="alma-locations-guide">
        <div className="alma-locations-box">
          <h3>Melhores Localizações na Ilha</h3>
          <ul>
            <li><strong>Vila de Boipeba:</strong> Centro charmoso, restaurantes, comércio e agito noturno.</li>
            <li><strong>Marina ou Rua do Porto:</strong> Perto do cais e chegada das lanchas, fácil acesso aos passeios.</li>
            <li><strong>Rua das Pedras:</strong> Rua charmosa com opções gastronômicas e pousadas aconchegantes.</li>
            <li><strong>Praça de Santo Antônio:</strong> Ponto histórico no coração da vila.</li>
            <li><strong>Rua do Ribeirinho:</strong> Tranquilidade à beira do rio.</li>
            <li><strong>Tiririca ou Areal:</strong> Bairros mais econômicos pela distância das praias.</li>
          </ul>
        </div>

        <div className="alma-locations-box">
          <h3>Praias &amp; Proximidades</h3>
          <ul>
            <li><strong>Praia da Cueira:</strong> Palco sagrado do ALMA Réveillon, coqueirais e areia dourada.</li>
            <li><strong>Boca da Barra:</strong> Próxima à vila, mar calmo e pôr do sol inesquecível.</li>
            <li><strong>Tassimirim e arredores:</strong> Arrecifes de corais, piscinas naturais e sossego.</li>
            <li><strong>Moreré:</strong> Famosa por suas piscinas naturais cristalinas e atmosfera rústica.</li>
          </ul>
        </div>
      </div>

      <div className="alma-stay-grid" style={{ marginTop: '40px' }}>
        {accommodations.map((item) => (
          <article className="alma-stay-card" key={item.id}>
            <img src={item.coverImage} alt={item.name} />
            <div>
              <span className={`alma-status ${item.status === 'available' ? 'is-available' : ''}`}>{item.statusLabel}</span>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <small>{item.location}</small>
              <ul>{item.amenities.slice(0, 4).map((a) => <li key={a}>{a}</li>)}</ul>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}`} target="_blank" rel="noreferrer">
                Ver localização <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Shell>
  )
}

function ProgramPage() {
  return (
    <Shell eyebrow="PROGRAMAÇÃO OFICIAL" title="Cinco noites para viver a ilha">
      <p className="alma-subpage-lead">
        De 27 a 31 de dezembro, cinco festas temáticas e exclusivas com Open Bar Premium completo na Praia da Cueira.
      </p>

      <div className="alma-night-list">
        {nights.map(([date, name, desc]) => (
          <article key={date}>
            <span>{date}</span>
            <div>
              <h2>{name}</h2>
              <p>{desc}</p>
            </div>
            <Clock3 size={20} className="text-[#57d2f4]" />
          </article>
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <PartnersGrid title="PATROCINADORES & MARCAS DO OPEN BAR" />
      </div>
    </Shell>
  )
}

function ExperiencePage() {
  return (
    <Shell eyebrow="A EXPERIÊNCIA" title="Aqui o luxo é outro.">
      <p className="alma-subpage-lead">
        Boipeba é uma área de proteção ambiental (APA), reserva da biosfera e patrimônio da humanidade pela UNESCO. Uma ilha paradisíaca na Bahia, onde os carros ficam para trás e chegar é só o começo de uma aventura inesquecível.
      </p>

      {/* Bloco O festival acontece na praia da Cueira com background da imagem solicitada */}
      <div
        className="alma-cueira-banner"
        style={{
          backgroundImage: `url(${asset('/media/Boipeba-Island-Brazil-Best-time.jpg')})`,
        }}
      >
        <div className="alma-cueira-banner-overlay" />
        <div className="alma-cueira-banner-content">
          <span className="alma-cueira-tag">PRAIA DA CUEIRA · ILHA DE BOIPEBA</span>
          <h2>O festival acontece na Praia da Cueira.</h2>
          <p className="alma-cueira-p">
            Aqueles que buscam novos ares e um destino pé na areia celebram a época mais charmosa do ano em uma ilha paradisíaca no coração da Bahia. Repleta de belezas naturais incomparáveis, encanto e poesia, com uma vibe intimista e atmosfera hippie chic única no Brasil.
          </p>
          <div className="alma-cueira-stats">
            <div><strong>5 Noites</strong><span>Open Bar Premium</span></div>
            <div><strong>5 Edições</strong><span>2016, 2017, 2018, 2019 e 2023</span></div>
            <div><strong>~2.000</strong><span>Pessoas anualmente</span></div>
            <div><strong>0 Carros</strong><span>Pés na areia e quadriciclos</span></div>
          </div>
        </div>
      </div>

      {/* Sustentabilidade */}
      <section className="alma-sustainability-box" style={{ marginTop: '50px' }}>
        <div className="alma-sustainability-header">
          <span className="kicker">SUSTENTABILIDADE &amp; PRESERVAÇÃO</span>
          <h2>Menos Lixo = Mais Animais</h2>
          <p>Nosso compromisso inegociável com a Ilha de Boipeba e a comunidade local.</p>
        </div>
        <div className="alma-sustainability-grid">
          <article>
            <strong>1 Copo &amp; 1 Pulseira</strong>
            <p>Distribuição de apenas 1 copo retornável e 1 pulseira por cliente para os 5 dias de festival, minimizando a geração de resíduos.</p>
          </article>
          <article>
            <strong>Coleta Seletiva Responsável</strong>
            <p>Destinação adequada no continente de todos os resíduos gerados no complexo, realizada pela empresa parceira Copa Engenharia Ambiental.</p>
          </article>
          <article>
            <strong>100% Reciclagem de Latinhas</strong>
            <p>Doação integral de todas as latinhas de alumínio para os catadores locais, fomentando a renda de famílias da região.</p>
          </article>
          <article>
            <strong>Limpeza &amp; Compensação</strong>
            <p>Operação minuciosa de limpeza pós-evento na praia e arredores, além da compra de materiais de compensação ambiental junto à Prefeitura de Cairu-BA.</p>
          </article>
        </div>
      </section>

      {/* Boi People Showcase */}
      <div style={{ marginTop: '60px' }}>
        <BoiPeopleSection />
      </div>
    </Shell>
  )
}

function StoriesPage() {
  return (
    <Shell eyebrow="BOI PEOPLE" title="Aqui o luxo é outro.">
      <p className="alma-subpage-lead">
        Comentários e momentos de quem viveu a energia do ALMA Réveillon na mágica Ilha de Boipeba.
      </p>

      <BoiPeopleSection />

      <div className="alma-review-grid" style={{ marginTop: '50px' }}>
        {reviews.map((review) => (
          <article key={review.author + review.quote}>
            <Star size={16} className="text-[#57d2f4]" />
            <blockquote>“{review.quote}”</blockquote>
            <div className="alma-review-author-row">
              <FaInstagram size={14} className="text-[#57d2f4]" />
              <span>@{review.author}</span>
            </div>
            {review.name && <small>{review.name} · {review.role}</small>}
          </article>
        ))}
      </div>
    </Shell>
  )
}

export default function Subpage({ path }: { path: SubpageKey }) {
  if (path === 'como-chegar') return <HowToArrivePage />
  if (path === 'onde-ficar') return <WhereToStayPage />
  if (path === 'programacao') return <ProgramPage />
  if (path === 'midia' || path === 'historias' || path === 'boi-people') return <StoriesPage />
  return <ExperiencePage />
}