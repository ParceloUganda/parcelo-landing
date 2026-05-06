import React from 'react';

const BottomCTA = () => {
  return (
    <section className="fade-up" style={{ padding: '56px 0', margin: '0 24px' }}>
      <div className="bottom-cta-inner" style={{
        maxWidth: 'var(--container)',
        margin: 'auto',
        background: 'var(--gold)',
        borderRadius: '20px',
        padding: '64px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-80px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          pointerEvents: 'none'
        }}></div>

        <h2 style={{
          fontSize: 'clamp(30px, 4vw, 50px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--obsidian)',
          margin: 0,
          position: 'relative',
          zIndex: 1
        }}>
          Get your free quote in minutes
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'rgba(10,10,11,0.6)',
          maxWidth: '460px',
          margin: '16px auto 32px',
          lineHeight: 1.6,
          position: 'relative',
          zIndex: 1
        }}>
          Ready to get your shopping cart delivered to Uganda — without the stress?
        </p>

        <a 
          href="https://wa.me/256792170962" 
          className="btn-dark"
          style={{ padding: '16px 32px', fontSize: '16px', position: 'relative', zIndex: 1 }}
          data-testid="link-bottom-whatsapp"
        >
          💬 Start Chatting on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default BottomCTA;
