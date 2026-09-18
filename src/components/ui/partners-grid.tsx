import React from 'react'

export interface PartnerItem {
  name: string
  category?: string
  svg: React.ReactNode
}

export const PARTNERS: PartnerItem[] = [
  {
    name: 'Corona Extra',
    category: 'Cerveja Oficial',
    svg: (
      <svg viewBox="0 0 140 46" className="partner-logo-svg" fill="currentColor">
        <path d="M70 4 L74 13 L83 8 L80 18 L60 18 L57 8 L66 13 Z" fill="currentColor" />
        <circle cx="57" cy="6" r="1.5" fill="currentColor" />
        <circle cx="70" cy="2.5" r="1.5" fill="currentColor" />
        <circle cx="83" cy="6" r="1.5" fill="currentColor" />
        <text x="70" y="32" textAnchor="middle" fontFamily="'Cinzel', 'Playfair Display', serif" fontSize="16" fontWeight="700" letterSpacing="0.16em">
          CORONA
        </text>
        <text x="70" y="42" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.28em">
          EXTRA
        </text>
      </svg>
    ),
  },
  {
    name: 'Absolut',
    category: 'Vodka Oficial',
    svg: (
      <svg viewBox="0 0 140 46" className="partner-logo-svg" fill="currentColor">
        <text x="70" y="27" textAnchor="middle" fontFamily="'Futura', 'Helvetica Neue', 'Arial Black', sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.14em">
          ABSOLUT.
        </text>
        <text x="70" y="40" textAnchor="middle" fontFamily="'Futura', sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="0.32em">
          VODKA
        </text>
      </svg>
    ),
  },
  {
    name: 'Prata Mixers',
    category: 'Mixers & Tônica',
    svg: (
      <svg viewBox="0 0 140 46" className="partner-logo-svg" fill="currentColor">
        <circle cx="70" cy="11" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2" />
        <circle cx="70" cy="11" r="2.2" fill="currentColor" />
        <text x="70" y="28" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.22em">
          PRATA
        </text>
        <text x="70" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="0.28em">
          MIXERS
        </text>
      </svg>
    ),
  },
  {
    name: 'Beefeater London',
    category: 'Gin Oficial',
    svg: (
      <svg viewBox="0 0 150 46" className="partner-logo-svg" fill="currentColor">
        <text x="75" y="26" textAnchor="middle" fontFamily="'Times New Roman', serif" fontSize="17" fontWeight="800" letterSpacing="0.18em">
          BEEFEATER
        </text>
        <text x="75" y="39" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="0.32em">
          LONDON · DRY GIN
        </text>
      </svg>
    ),
  },
  {
    name: 'Sol',
    category: 'Cerveja Premium',
    svg: (
      <svg viewBox="0 0 130 46" className="partner-logo-svg" fill="currentColor">
        <circle cx="65" cy="14" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2,2" />
        <path d="M65 3 L65 7 M65 21 L65 25 M54 14 L58 14 M72 14 L76 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <text x="65" y="33" textAnchor="middle" fontFamily="'Brush Script MT', 'Playfair Display', serif" fontSize="22" fontWeight="700" fontStyle="italic" letterSpacing="0.08em">
          Sol
        </text>
        <text x="65" y="43" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="0.22em">
          ESPECIAL
        </text>
      </svg>
    ),
  },
  {
    name: 'Red Bull',
    category: 'Energético Oficial',
    svg: (
      <svg viewBox="0 0 140 46" className="partner-logo-svg" fill="currentColor">
        <circle cx="70" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M57 16 C61 14, 66 16, 68 18 L64 21 Z" fill="currentColor" />
        <path d="M83 16 C79 14, 74 16, 72 18 L76 21 Z" fill="currentColor" />
        <text x="70" y="37" textAnchor="middle" fontFamily="'Futura', 'Arial Black', sans-serif" fontSize="13.5" fontWeight="900" letterSpacing="0.06em">
          Red Bull
        </text>
      </svg>
    ),
  },
  {
    name: 'Casa Valduga',
    category: 'Espumante da Virada',
    svg: (
      <svg viewBox="0 0 150 46" className="partner-logo-svg" fill="currentColor">
        <path d="M75 5 L81 8 L81 14 C81 18, 75 22, 75 22 C75 22, 69 18, 69 14 L69 8 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M75 9 L75 16 M72 12 L78 12" stroke="currentColor" strokeWidth="1.1" />
        <text x="75" y="33" textAnchor="middle" fontFamily="'Cinzel', 'Times New Roman', serif" fontSize="13" fontWeight="700" letterSpacing="0.22em">
          CASA VALDUGA
        </text>
        <text x="75" y="42" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="0.3em">
          PONTO NERO BRUT
        </text>
      </svg>
    ),
  },
  {
    name: 'Sympla',
    category: 'Ticketeria Oficial',
    svg: (
      <svg viewBox="0 0 130 46" className="partner-logo-svg" fill="currentColor">
        <path d="M52 24 C52 19, 56 16, 61 16 C67 16, 73 24, 79 24 C83 24, 86 21, 86 18 C86 15, 83 13, 80 13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <text x="65" y="38" textAnchor="middle" fontFamily="'Inter', 'Poppins', sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.08em">
          sympla
        </text>
      </svg>
    ),
  },
  {
    name: 'Eventbrite',
    category: 'Ticketeria Global',
    svg: (
      <svg viewBox="0 0 140 46" className="partner-logo-svg" fill="currentColor">
        <rect x="63" y="6" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <text x="70" y="17" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="900">e</text>
        <text x="70" y="36" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="800" letterSpacing="0.04em">
          eventbrite
        </text>
      </svg>
    ),
  },
  {
    name: 'Ingresse',
    category: 'Parceiro Ingressos',
    svg: (
      <svg viewBox="0 0 130 46" className="partner-logo-svg" fill="currentColor">
        <circle cx="65" cy="11" r="3" fill="currentColor" />
        <text x="65" y="32" textAnchor="middle" fontFamily="'Circular Std', 'Inter', sans-serif" fontSize="16" fontWeight="800" letterSpacing="0.06em">
          ingresse
        </text>
      </svg>
    ),
  },
  {
    name: '639com',
    category: 'Comunicação & Mídia',
    svg: (
      <svg viewBox="0 0 130 46" className="partner-logo-svg" fill="currentColor">
        <text x="65" y="29" textAnchor="middle" fontFamily="'Montserrat', 'Arial Black', sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.14em">
          639COM
        </text>
        <line x1="45" y1="36" x2="85" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function PartnersGrid({ title = 'PATROCINADORES & PARCEIROS OFICIAIS' }: { title?: string }) {
  return (
    <div className="partners-wrapper">
      <div className="partners-header">
        <span className="partners-kicker">{title}</span>
        <div className="partners-line" />
      </div>

      <div className="partners-grid" role="list" aria-label="Patrocinadores e parceiros do ALMA Réveillon">
        {PARTNERS.map((partner) => (
          <div key={partner.name} className="partner-badge" role="listitem" title={partner.name}>
            <div className="partner-logo-box">
              {partner.svg}
            </div>
            <span className="partner-label">{partner.name}</span>
            {partner.category && <small className="partner-category">{partner.category}</small>}
          </div>
        ))}
      </div>
    </div>
  )
}