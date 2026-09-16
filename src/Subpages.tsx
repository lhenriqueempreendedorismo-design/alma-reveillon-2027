import { ArrowLeft, ArrowRight, Clock3, MapPin, Plane, Ship, Star } from 'lucide-react'
import CircularMenu from './components/ui/circular-menu'
import { accommodations } from './data/accommodations'

export type SubpageKey = 'como-chegar' | 'onde-ficar' | 'programacao' | 'experiencia'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const reviews = [
  { quote: 'Energia surreal!!! Foi maravilhoso e perfeito cada momento 🤍', author: 'polly.penoni' },
  { quote: 'O MELHOR EVENTO DO NORDESTE', author: 'ricardobrautigam' },
  { quote: 'Saudade desses dias já! 😢 foi incrível!! 🔥', author: 'lilotune' },
  { quote: 'Foi sensacional 🏝️😍🙏🇧🇷', author: 'belanogueira__' },
  { quote: 'Foi épico!!!', author: 'kaicms' },
  { quote: 'Eu amei o @almareveillonboipeba, foi demais!!!! 😍😍😍😍', author: 'julianitzsche' },
  { quote: 'Sem palavras! Eita como foi incrível 🤍', author: 'camilagondimfonseca' },
  { quote: 'Bom demais, ta malucooo 🙌🙌', author: 'joaopedroblemos' },
  { quote: 'pra ficar na memória!! 👌', author: 'bertolazzi' },
  { quote: 'Foi tudooooo 🙌❤️', author: 'brunamarquezine' },
]

const nights = [
  ['27 DEZ', 'Abertura ALMA', 'A primeira noite na ilha.'],
  ['28 DEZ', 'Roda de Praia', 'Sol, areia e música perto do mar.'],
  ['29 DEZ', 'Isso Não É Um Sunrise', 'Uma experiência para atravessar a noite.'],
  ['30 DEZ', 'Luau do DDP', 'O encontro entre a ilha e a pista.'],
  ['31 DEZ', 'A Virada', 'O ano novo começa com toda ALMA.'],
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
      <footer className="alma-subpage-footer"><a href="/">ALMA Réveillon 2027</a><span>Boipeba · Bahia</span></footer>
    </main>
  )
}

function HowToArrivePage() {
  return <Shell eyebrow="GUIA DA ILHA" title="Como chegar em Boipeba">
    <p className="alma-subpage-lead">A chegada também faz parte da experiência. Saindo de Salvador, existem diferentes caminhos para entrar no ritmo da ilha.</p>
    <div className="alma-route-grid">
      <article><Plane size={22}/><small>MAIS RÁPIDO</small><h2>Voo comercial</h2><strong>35 min</strong><p>Uma opção para quem quer reduzir o tempo de deslocamento até a região.</p></article>
      <article><Ship size={22}/><small>PELO MAR</small><h2>Transfer marítimo</h2><strong>2h</strong><p>O caminho pelo mar já começa a desacelerar a viagem.</p></article>
      <article><MapPin size={22}/><small>TERRESTRE + MAR</small><h2>Transfer semi-terrestre</h2><strong>5h</strong><p>Uma alternativa combinando estrada e travessia.</p></article>
      <article><Ship size={22}/><small>TRAVESSIA</small><h2>Ferry boat</h2><strong>5h</strong><p>Outra opção de travessia para chegar a Boipeba.</p></article>
    </div>
    <section className="alma-info-panel"><span>TRANSLADOS E PASSEIOS LOCAIS</span><h2>Chegue pelo mar. Explore a ilha.</h2><p>Os destaques do Instagram indicam referências locais para translados e passeios: @agenciadantour, @bahia_terra_turismo, @boipebabeach_cocoluco, @lanchaliberdade_, @martourboipeba.</p><a href="https://www.google.com/maps/search/?api=1&query=Praia+da+Cueira,+Boipeba,+BA" target="_blank" rel="noreferrer">Abrir Praia da Cueira no mapa <ArrowRight size={15}/></a></section>
  </Shell>
}

function WhereToStayPage() {
  return <Shell eyebrow="HOSPEDAGEM" title="Onde ficar em Boipeba">
    <p className="alma-subpage-lead">Opções de hospedagem próximas ao evento, organizadas para você escolher o ritmo e a localização que combinam com a sua viagem.</p>
    <div className="alma-stay-grid">
      {accommodations.map(item => <article className="alma-stay-card" key={item.id}>
        <img src={item.coverImage} alt={item.name}/><div><span className={`alma-status ${item.status === 'available' ? 'is-available' : ''}`}>{item.statusLabel}</span><h2>{item.name}</h2><p>{item.description}</p><small>{item.location}</small><ul>{item.amenities.slice(0, 4).map(a => <li key={a}>{a}</li>)}</ul><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}`} target="_blank" rel="noreferrer">Ver localização <ArrowRight size={14}/></a></div>
      </article>)}
    </div>
  </Shell>
}

function ProgramPage() {
  return <Shell eyebrow="PROGRAMAÇÃO" title="Cinco noites para viver a ilha">
    <p className="alma-subpage-lead">De 27 a 31 de dezembro, cinco festas Open Bar Premium temáticas e exclusivas na Praia da Cueira.</p>
    <div className="alma-night-list">{nights.map(([date, name, desc]) => <article key={date}><span>{date}</span><div><h2>{name}</h2><p>{desc}</p></div><Clock3 size={18}/></article>)}</div>
  </Shell>
}

function ExperiencePage() {
  return <Shell eyebrow="A EXPERIÊNCIA" title="Uma ilha. Uma virada. Toda ALMA.">
    <p className="alma-subpage-lead">Boipeba é uma ilha paradisíaca e APA no coração da Bahia, onde não entram carros e o meio de transporte são jardineiras, quadriciclos e nossos pés.</p>
    <div className="alma-experience-grid"><img src={asset('/media/curadoria/paraiso-fullscreen.webp')} alt="Paisagem de Boipeba"/><div><h2>O festival acontece na Praia da Cueira.</h2><p>Uma atmosfera hippie chic, pé na areia e cinco noites de Open Bar Premium. O ALMA já realizou edições em 2016, 2017, 2018, 2019 e voltou em 2023.</p><p>Mais de 200 mil reais são investidos em ações de inclusão e na criação de postos de trabalho por edição, beneficiando direta e indiretamente mais de 1.000 nativos, autônomos e empreendedores locais anualmente.</p></div></div>
  </Shell>
}

function StoriesPage() {
  return <Shell eyebrow="BOI PEOPLE" title="Quem viveu, conta.">
    <p className="alma-subpage-lead">Reviews e comentários publicados nos materiais oficiais do ALMA. Depoimentos preservados sem inventar nomes ou frases.</p>
    <div className="alma-review-grid">{reviews.map(review => <article key={review.author + review.quote}><Star size={16}/><blockquote>“{review.quote}”</blockquote><span>@{review.author}</span></article>)}</div>
    <p className="alma-source-note">Fonte: prints de comentários e publicações reunidos no PDF “A L M A Réveillon ~ Boipeba 2027”.</p>
  </Shell>
}

export default function Subpage({ path }: { path: SubpageKey }) {
  if (path === 'como-chegar') return <HowToArrivePage />
  if (path === 'onde-ficar') return <WhereToStayPage />
  if (path === 'programacao') return <ProgramPage />
  return <ExperiencePage />
}
