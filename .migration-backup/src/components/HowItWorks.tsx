import React from 'react';

const HowItWorks = () => {
  return (
    <section className="fade-up" style={{ padding: 'var(--section-gap) 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 'var(--container)', margin: 'auto', padding: '0 var(--gutter)' }}>
        <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          HOW IT WORKS
        </div>
        
        <h2 style={{
          fontSize: 'clamp(26px, 3.4vw, 42px)',
          fontWeight: 800,
          maxWidth: '760px',
          margin: 'auto',
          lineHeight: 1.2,
          letterSpacing: '-0.025em'
        }}>
          We've figured out sourcing, payments, shipping, customs, and risk of loss — so you don't have to.
        </h2>
        
        <div style={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 500, color: 'var(--text)', margin: '24px 0 48px' }}>
          Parcelo handles everything for you. End to end.
        </div>

        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          textAlign: 'left',
          marginTop: '40px'
        }}>
          {[
            {
              step: 'STEP 01',
              emoji: '💬',
              title: 'Tell us what you need',
              body: 'Send us your product links and specs to our Meta Verified WhatsApp line. Simple as that.',
              link: true
            },
            {
              step: 'STEP 02',
              emoji: '🧾',
              title: 'Get your full landed price',
              body: 'One of our personal shoppers will send you a full landed cost quote in minutes — no surprises.'
            },
            {
              step: 'STEP 03',
              emoji: '✨',
              title: 'We run our magic',
              body: 'We purchase, ship, clear customs, and deliver to your doorstep with real-time tracking updates.'
            }
          ].map((card, i) => (
            <div key={i} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '28px 24px',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                {card.step}
              </div>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(251,202,12,0.1)',
                border: '1px solid rgba(251,202,12,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                marginTop: '16px'
              }}>
                {card.emoji}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '14px 0 10px' }}>{card.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {card.body}
              </p>
              {card.link && (
                <a href="https://wa.me/256792170962" style={{
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--gold)',
                  marginTop: '16px'
                }}>
                  Start on WhatsApp →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
