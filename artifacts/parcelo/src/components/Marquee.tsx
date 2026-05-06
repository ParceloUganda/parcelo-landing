import React from 'react';

const companies = [
  "Stanbic Bank", "ABSA Uganda", "Bank of Uganda", "NSSF", "Marsh", "PWC Uganda",
  "MTN Uganda", "Airtel Uganda", "Next Media", "New Vision", "Uganda Airlines",
  "Emirates", "Total Energies", "Cafe Javas", "Coca-Cola", "Kampala Serena"
];

const Marquee = () => {
  const doubled = [...companies, ...companies];

  return (
    <section className="fade-up" style={{ padding: '16px 0 56px', overflow: 'hidden' }}>
      <div style={{
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        textAlign: 'center',
        marginBottom: '28px',
      }}>
        TRUSTED BY INDIVIDUALS AT
      </div>

      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '52px',
          width: 'max-content',
          animation: 'marquee 32s linear infinite',
        }}
      >
        {doubled.map((name, idx) => (
          <React.Fragment key={idx}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text)',
                transition: 'color 0.2s',
                cursor: 'default',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--text)')}
            >
              {name}
            </span>
            {idx < doubled.length - 1 && (
              <span style={{ color: 'var(--text-faint)', fontSize: '8px', alignSelf: 'center', flexShrink: 0 }}>·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
