import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Waves,
  CheckCircle2,
  MoreHorizontal,
} from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export interface InstagramPostItem {
  id: string
  name: string
  handle: string
  verified: boolean
  location: string
  image: string
  badgeText?: string
  likes: string
  caption: string
  comments: string
}

const INSTAGRAM_POSTS: InstagramPostItem[] = [
  {
    id: 'bruna',
    name: 'Bruna Marquezine',
    handle: 'brunamarquezine',
    verified: true,
    location: 'Boipeba, Bahia',
    image: asset('/media/post-bruna.webp'),
    badgeText: '1/10',
    likes: '412.580 curtidas',
    caption: 'Foi tudooooo 🙌❤️ Alma lavada em Boipeba!',
    comments: '4.821 comentários',
  },
  {
    id: 'sasha',
    name: 'Sasha Meneghel',
    handle: 'sashameneghel',
    verified: true,
    location: 'Ilha de Boipeba',
    image: asset('/media/post-sasha.webp'),
    badgeText: '1/8',
    likes: '287.410 curtidas',
    caption: 'dias de sol, mar morno e paz com as melhores companhias 🐚🌴',
    comments: '3.190 comentários',
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo Simas',
    handle: 'simasrodrigo',
    verified: true,
    location: 'Praia da Cueira, Boipeba',
    image: asset('/media/post-rodrigo.webp'),
    badgeText: '1/6',
    likes: '198.320 curtidas',
    caption: 'Boipeba na alma. Que energia surreal desse lugar! ☀️',
    comments: '1.840 comentários',
  },
  {
    id: 'agatha',
    name: 'Agatha Moreira',
    handle: 'agathaamoreiraa',
    verified: true,
    location: 'Praia de Moreré',
    image: asset('/media/post-agatha.webp'),
    badgeText: 'REELS',
    likes: '67,9 mil reproduções',
    caption: 'um pouquinho de Moreré ... 🌊✨',
    comments: '307 comentários',
  },
  {
    id: 'loreto',
    name: 'José Loreto',
    handle: 'joseloreto',
    verified: true,
    location: 'Moreré, Bahia, Brazil',
    image: asset('/media/post-loreto.webp'),
    badgeText: '1/4',
    likes: '145.200 curtidas',
    caption: 'Sorriso largo de quem começou o ano no verdadeiro paraíso! ☀️🌴',
    comments: '1.250 comentários',
  },
  {
    id: 'fepa',
    name: 'Fernanda Paes Leme',
    handle: 'fepaesleme',
    verified: true,
    location: 'Boipeba, Bahia',
    image: asset('/media/post-fepa.webp'),
    badgeText: '1/5',
    likes: '183.900 curtidas',
    caption: 'Andar na maré baixa e esquecer que a pressa existe 🌊🤍',
    comments: '2.140 comentários',
  },
  {
    id: 'nathalia',
    name: 'Nathalia Arcuri',
    handle: 'nathaliaarcuri',
    verified: true,
    location: 'Boipeba',
    image: asset('/media/post-nathalia.webp'),
    badgeText: '2/2',
    likes: '92.400 curtidas',
    caption: 'Descanso merecido na rede mais charmosa da Bahia 🏝️',
    comments: '890 comentários',
  },
]

const PARADISE_BEACHES = [
  {
    name: 'Piscinas Naturais de Moreré',
    description: 'Águas mornas e cristalinas em meio a recifes de corais preservados, ideais para mergulho na maré baixa.',
    highlight: 'Água Cristalina',
  },
  {
    name: 'Ponta dos Castelhanos',
    description: 'Encontro mágico do rio com o mar, com bancos de areia dourada e os famosos pastéis de lagosta.',
    highlight: 'Ponto Icônico',
  },
  {
    name: 'Praia de Tassimirim',
    description: 'Arrecifes que formam piscinas calmas e preservadas, margeadas por coqueirais nativos intocados.',
    highlight: 'Refúgio Natural',
  },
  {
    name: 'Praia de Bainema',
    description: 'Quilômetros de faixa de areia deserta e coqueiros sinuosos, transmitindo a verdadeira paz baiana.',
    highlight: 'Paraíso Deserto',
  },
  {
    name: 'Praia da Cueira',
    description: 'O palco sagrado do ALMA Réveillon. Coqueiral denso, mar azul e atmosfera pé na areia incomparável.',
    highlight: 'Casa do ALMA',
  },
  {
    name: 'Boca da Barra',
    description: 'Encontro do Rio do Inferno com o oceano, onde os barcos chegam e o pôr do sol colore toda a vila.',
    highlight: 'Pôr do Sol Mágico',
  },
]

export default function BoiPeopleSection() {
  const railRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const reduceMotion = useReducedMotion()

  const updateScrollState = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const scrollLeft = rail.scrollLeft
    const maxScroll = rail.scrollWidth - rail.clientWidth
    setCanScrollPrev(scrollLeft > 10)
    setCanScrollNext(scrollLeft < maxScroll - 10)

    const firstCard = rail.firstElementChild as HTMLElement | null
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20
      const idx = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.max(0, Math.min(INSTAGRAM_POSTS.length - 1, idx)))
    }
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    updateScrollState()
    const handleScroll = () => updateScrollState()
    rail.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      rail.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [updateScrollState])

  const scrollToIndex = (index: number) => {
    const rail = railRef.current
    if (!rail) return
    const firstCard = rail.firstElementChild as HTMLElement | null
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 320
    rail.scrollTo({
      left: index * cardWidth,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  const handlePrev = () => {
    const rail = railRef.current
    if (!rail) return
    const firstCard = rail.firstElementChild as HTMLElement | null
    const step = firstCard ? firstCard.offsetWidth + 20 : 320
    rail.scrollBy({ left: -step, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const handleNext = () => {
    const rail = railRef.current
    if (!rail) return
    const firstCard = rail.firstElementChild as HTMLElement | null
    const step = firstCard ? firstCard.offsetWidth + 20 : 320
    rail.scrollBy({ left: step, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <section className="boi-people-section relative-section" id="boi-people">
      <div
        className="shader-bg-overlay"
        style={{
          background: 'linear-gradient(180deg, rgba(3, 18, 24, 0.95) 0%, rgba(6, 32, 42, 0.98) 50%, rgba(3, 18, 24, 0.96) 100%)',
        }}
      />

      <div className="shader-content-layer">
        {/* Header */}
        <div className="boi-people-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="boi-people-badge">
              <Waves size={14} className="text-[#57d2f4]" />
              <span>BOI PEOPLE · QUEM VIVEU, CONTA</span>
            </div>
            <h2 className="boi-people-title">
              Aqui o luxo é outro.<br />
              <em>eat · beach · dance · repeat</em>
            </h2>
            <p className="boi-people-lead">
              A energia autêntica e pé na areia de Boipeba reúne amigos, artistas e viajantes em busca de novas marés. Sem salto alto, sem pressa, apenas mar morno, coqueirais e música até o amanhecer.
            </p>
          </motion.div>
        </div>

        {/* Carousel Controls Header */}
        <div className="ig-carousel-top-bar">
          <div className="ig-carousel-counter">
            <FaInstagram size={16} className="text-[#57d2f4]" />
            <span>POSTS DE QUEM JÁ PASSOU POR AQUI</span>
          </div>
          <div className="ig-carousel-nav-btns">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollPrev}
              className="ig-carousel-btn"
              aria-label="Post anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollNext}
              className="ig-carousel-btn"
              aria-label="Próximo post"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Interactive Instagram Posts Carousel */}
        <div className="ig-carousel-container">
          <div ref={railRef} className="ig-carousel-rail" tabIndex={0} aria-label="Carrossel de posts do Instagram de celebridades">
            {INSTAGRAM_POSTS.map((post) => (
              <article key={post.id} className="ig-post-card">
                {/* Header */}
                <header className="ig-post-header">
                  <div className="ig-post-avatar-ring">
                    <div className="ig-post-avatar-inner">
                      <span>{post.handle.slice(0, 2).toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="ig-post-user-info">
                    <div className="ig-post-name-row">
                      <a
                        href={`https://www.instagram.com/${post.handle}/`}
                        target="_blank"
                        rel="noreferrer"
                        className="ig-post-username"
                      >
                        {post.handle}
                      </a>
                      {post.verified && (
                        <CheckCircle2 size={13} className="text-[#0095f6] fill-[#0095f6] text-white" />
                      )}
                    </div>
                    <span className="ig-post-location">{post.location}</span>
                  </div>
                  <MoreHorizontal size={16} className="ig-post-more" />
                </header>

                {/* Media Image */}
                <div className="ig-post-media">
                  <img
                    src={post.image}
                    alt={`Post de ${post.name} em Boipeba`}
                    className="ig-post-img"
                    loading="lazy"
                  />
                  {post.badgeText && (
                    <span className="ig-post-counter-badge">{post.badgeText}</span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="ig-post-actions">
                  <div className="ig-post-actions-left">
                    <button type="button" aria-label="Curtir post" className="ig-icon-btn">
                      <Heart size={19} className="text-red-400 fill-red-400/20" />
                    </button>
                    <button type="button" aria-label="Comentários" className="ig-icon-btn">
                      <MessageCircle size={18} />
                    </button>
                    <button type="button" aria-label="Compartilhar" className="ig-icon-btn">
                      <Send size={17} />
                    </button>
                  </div>
                  <button type="button" aria-label="Salvar" className="ig-icon-btn">
                    <Bookmark size={18} />
                  </button>
                </div>

                {/* Likes & Caption */}
                <div className="ig-post-details">
                  <strong className="ig-post-likes">{post.likes}</strong>
                  <p className="ig-post-caption">
                    <span className="ig-caption-author">{post.handle}</span> {post.caption}
                  </p>
                  <span className="ig-post-comments-count">{post.comments}</span>
                  <a
                    href={`https://www.instagram.com/${post.handle}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="ig-post-link"
                  >
                    <span>Ver no Instagram</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="ig-carousel-dots">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <button
                key={post.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`ig-carousel-dot ${activeIndex === idx ? 'ig-carousel-dot--active' : ''}`}
                aria-label={`Ir para post de ${post.name}`}
              />
            ))}
          </div>
        </div>

        {/* Revista Quem Featured Article */}
        <motion.article
          className="boi-people-quem-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="boi-people-quem-badge">
            <span className="quem-dot" />
            <span>DESTAQUE NA IMPRENSA · REVISTA QUEM (GLOBO)</span>
          </div>

          <h3 className="boi-people-quem-title">
            "Sasha Meneghel abre álbum de fotos de viagem com o marido e Bruna Marquezine na virada em Boipeba"
          </h3>

          <p className="boi-people-quem-p">
            A matéria na Revista Quem destacou a passagem dos artistas e convidados pela Ilha de Boipeba, celebrando o clima paradisíaco, as praias intocadas e os dias inesquecíveis vividos no ALMA.
          </p>

          <a
            href="https://revistaquem.globo.com/noticias/noticia/2023/01/sasha-meneghel-abre-album-de-fotos-de-viagem-com-o-marido-e-bruna-marquezine.ghtml"
            target="_blank"
            rel="noreferrer"
            className="boi-people-quem-btn"
          >
            <span>Ler reportagem completa na Quem</span>
            <ArrowUpRight size={15} />
          </a>
        </motion.article>

        {/* Paradisiacal Beaches Grid */}
        <div className="boi-beaches-block">
          <div className="boi-beaches-header">
            <div className="boi-beaches-kicker">
              <Compass size={14} className="text-[#80eeb4]" />
              <span>PRAIAS PARADISÍACAS DA ILHA</span>
            </div>
            <h3 className="boi-beaches-title">
              O arquipélago onde o mar é mais vivo.
            </h3>
            <p className="boi-beaches-subtitle">
              Passeios de barco, lanchas rápidas e caminhadas pelas piscinas naturais mais deslumbrantes do Brasil.
            </p>
          </div>

          <div className="boi-beaches-grid">
            {PARADISE_BEACHES.map((beach, idx) => (
              <motion.div
                key={beach.name}
                className="boi-beach-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div className="boi-beach-top">
                  <span className="boi-beach-tag">{beach.highlight}</span>
                </div>
                <h4 className="boi-beach-name">{beach.name}</h4>
                <p className="boi-beach-desc">{beach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}