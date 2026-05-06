import React from 'react';

const Problem = () => {
  const painPoints = [
    "Stores that don't accept Ugandan credit cards, making checkout impossible.",
    "Complicated shipping addresses and expensive forwarding services.",
    "Surprise customs fees and hidden 'handling' charges.",
    "The anxiety of your expensive items getting lost in transit.",
    "That's why most people give up — or overpay."
  ];

  return (
    <section className="fade-up" style={{ padding: 'var(--section-gap) 0', borderTop: '1px solid var(--border)' }}>
      <div className="problem-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '72px',
        alignItems: 'center',
        maxWidth: 'var(--container)',
        margin: 'auto',
        padding: '0 var(--gutter)'
      }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>
            THE PROBLEM
          </div>
          <h2 style={{
            fontSize: 'clamp(34px, 4vw, 50px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: 0,
            lineHeight: 1.1
          }}>
            Buying from abroad
            <em style={{ color: 'var(--text)', fontStyle: 'italic', fontSize: '1.05em', display: 'block' }}>shouldn't</em>
            be this hard
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {painPoints.map((point, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text)', lineHeight: 1.5 }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                background: 'rgba(155,52,52,0.14)',
                border: '1px solid rgba(155,52,52,0.28)',
                color: '#c05050',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '12px'
              }}>
                ✕
              </div>
              <div>{point}</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Problem;
