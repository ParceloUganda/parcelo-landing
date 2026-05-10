import React, { useState } from 'react';

const LOGO_KEY = import.meta.env.VITE_LOGO_DEV_KEY;

const companies: { name: string; domain: string }[] = [
  { name: 'Stanbic Bank',      domain: 'stanbic.com' },
  { name: 'ABSA',              domain: 'absa.com' },
  { name: 'Bank of Uganda',    domain: 'bou.or.ug' },
  { name: 'NSSF Uganda',       domain: 'nssfug.org' },
  { name: 'Marsh',             domain: 'marsh.com' },
  { name: 'PwC',               domain: 'pwc.com' },
  { name: 'MTN Uganda',        domain: 'mtn.com' },
  { name: 'Airtel Uganda',     domain: 'airtel.com' },
  { name: 'Next Media',        domain: 'nextmedia.co.ug' },
  { name: 'New Vision',        domain: 'newvision.co.ug' },
  { name: 'Uganda Airlines',   domain: 'ugandaairlines.co.ug' },
  { name: 'Emirates',          domain: 'emirates.com' },
  { name: 'TotalEnergies',     domain: 'totalenergies.com' },
  { name: 'Café Javas',        domain: 'cafejavas.com' },
  { name: 'Coca-Cola',         domain: 'coca-cola.com' },
  { name: 'Serena Hotels',     domain: 'serenahotels.com' },
];

function logoUrl(domain: string) {
  if (LOGO_KEY) {
    return `https://img.logo.dev/${domain}?token=${LOGO_KEY}&size=128&format=png`;
  }
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

function LogoCard({ name, domain }: { name: string; domain: string }) {
  const [errored, setErrored] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      padding: '20px 16px',
      borderRadius: '14px',
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      transition: 'border-color 0.2s, transform 0.2s',
      cursor: 'default',
      minWidth: 0,
    }}
      onMouseOver={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-mid)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {!errored ? (
        <img
          src={logoUrl(domain)}
          alt={name}
          onError={() => setErrored(true)}
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
            borderRadius: '8px',
            display: 'block',
          }}
        />
      ) : (
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          background: 'var(--surface-mid)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 800,
          color: 'var(--text-muted)',
        }}>
          {name.charAt(0)}
        </div>
      )}
      <span style={{
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--text-muted)',
        textAlign: 'center',
        lineHeight: 1.3,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
      }}>
        {name}
      </span>
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
          color: 'var(--gold)',
          textAlign: 'center',
          marginBottom: '28px',
        }}>
          Trusted by individuals at
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '12px',
        }}
          className="logo-grid"
        >
          {companies.map(c => (
            <LogoCard key={c.domain} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
