import React, { useState } from 'react';

const LOGO_KEY = import.meta.env.VITE_LOGO_DEV_KEY;

const companies: { name: string; domain: string }[] = [
  { name: 'Stanbic Bank',    domain: 'stanbic.com' },
  { name: 'ABSA',            domain: 'absa.com' },
  { name: 'Bank of Uganda',  domain: 'bou.or.ug' },
  { name: 'NSSF Uganda',     domain: 'nssfug.org' },
  { name: 'Marsh',           domain: 'marsh.com' },
  { name: 'PwC',             domain: 'pwc.com' },
  { name: 'MTN Uganda',      domain: 'mtn.com' },
  { name: 'Airtel Uganda',   domain: 'airtel.com' },
  { name: 'Next Media',      domain: 'nextmedia.co.ug' },
  { name: 'New Vision',      domain: 'newvision.co.ug' },
  { name: 'Uganda Airlines', domain: 'ugandaairlines.co.ug' },
  { name: 'Emirates',        domain: 'emirates.com' },
  { name: 'TotalEnergies',   domain: 'totalenergies.com' },
  { name: 'Café Javas',      domain: 'cafejavas.com' },
  { name: 'Coca-Cola',       domain: 'coca-cola.com' },
  { name: 'Serena Hotels',   domain: 'serenahotels.com' },
];

function LogoItem({ name, domain }: { name: string; domain: string }) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  const src = LOGO_KEY
    ? `https://img.logo.dev/${domain}?token=${LOGO_KEY}&size=80&format=png`
    : `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <div
      title={name}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        opacity: 0.65,
        transition: 'opacity 0.2s',
      }}
      onMouseOver={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
      onMouseOut={e => ((e.currentTarget as HTMLElement).style.opacity = '0.65')}
    >
      <img
        src={src}
        alt={name}
        onError={() => setHidden(true)}
        style={{
          height: '28px',
          width: 'auto',
          maxWidth: '80px',
          objectFit: 'contain',
          display: 'block',
          filter: 'brightness(0) invert(1)',
        }}
      />
    </div>
  );
}

const Marquee = () => {
  return (
    <section className="fade-up" style={{ padding: '16px 0 64px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: 'auto', padding: '0 var(--gutter)' }}>
        <div style={{
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-faint)',
          textAlign: 'center',
          marginBottom: '28px',
        }}>
          Trusted by individuals at
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          rowGap: '20px',
        }}>
          {companies.map(c => (
            <LogoItem key={c.domain} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
