import { motion } from 'motion/react'
import { ArrowUpRight, Compass, Sparkles, Waves } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const CELEBRITIES = [
  { name: 'Bruna Marquezine', handle: 'brunamarquezine', tag: 'Atriz' },
  { name: 'Sasha Meneghel', handle: 'sashameneghel', tag: 'Estilista & Modelo' },
  { name: 'Rodrigo Simas', handle: 'simasrodrigo', tag: 'Ator' },
  { name: 'Agatha Moreira', handle: 'agathaamoreiraa', tag: 'Atriz' },
  { name: 'José Loreto', handle: 'joseloreto', tag: 'Ator' },
  { name: 'Fernanda Paes Leme', handle: 'fepaesleme', tag: 'Apresentadora & Atriz' },
  { name: 'Nathalia Arcuri', handle: 'nathaliaarcuri', tag: 'Comunicadora' },
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
  return (
    <section className="boi-people-section relative-section" id="boi-people">
      <div className="shader-bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(3, 18, 24, 0.95) 0%, rgba(6, 32, 42, 0.98) 50%, rgba(3, 18, 24, 0.96) 100%)' }} />

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

        {/* Celebrity Mosaic Banner */}
        <motion.div
          className="boi-people-mosaic-wrapper"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          <div className="boi-people-mosaic-card">
            <img
              src={asset('/media/boi-people-mosaic.png')}
              alt="Boi People - Famosos no ALMA Réveillon em Boipeba"
              className="boi-people-mosaic-img"
              loading="lazy"
            />
            <div className="boi-people-mosaic-overlay">
              <span className="boi-people-caption">
                Momentos inesquecíveis compartilhados em Boipeba
              </span>
            </div>
          </div>
        </motion.div>

        {/* Celebrities Tags Row */}
        <div className="boi-people-celebs-row" aria-label="Celebridades que já viveram o ALMA em Boipeba">
          {CELEBRITIES.map((celeb) => (
            <a
              key={celeb.handle}
              href={`https://www.instagram.com/${celeb.handle}/`}
              target="_blank"
              rel="noreferrer"
              className="boi-people-celeb-pill"
            >
              <FaInstagram size={13} className="text-[#57d2f4]" />
              <div className="boi-people-celeb-info">
                <strong>{celeb.name}</strong>
                <span>@{celeb.handle}</span>
              </div>
              <ArrowUpRight size={12} className="boi-people-arrow" />
            </a>
          ))}
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