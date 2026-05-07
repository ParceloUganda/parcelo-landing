import React from 'react';

const Hero = () => {
  return (
    <section className="fade-up" style={{ padding: '80px 0 64px', textAlign: 'center' }}>
      <div style={{ maxWidth: 'var(--container)', margin: 'auto', padding: '0 var(--gutter)' }}>
        <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
          PERSONAL SHOPPING CONCIERGE · KAMPALA
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(38px, 5.8vw, 66px)', 
          fontWeight: 800, 
          lineHeight: 1.06, 
          letterSpacing: '-0.03em',
          margin: 0,
          whiteSpace: 'pre-wrap'
        }}>
          {"Get anything from abroad\ndelivered to your doorstep"}
        </h1>
        
        <p style={{
          fontSize: '17px',
          fontWeight: 400,
          color: 'var(--text-muted)',
          maxWidth: '560px',
          margin: '16px auto 32px',
          lineHeight: 1.6
        }}>
          Send us your product links and specifics. We'll send you a full landed quote in minutes. After payment, we handle everything — so you can focus on more important work.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a 
            href="https://wa.me/256792170962" 
            className="btn-gold"
            style={{ padding: '15px 32px', fontSize: '16px' }}
            data-testid="link-hero-whatsapp"
          >
            💬 Get your quote via WhatsApp
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {['👩🏾', '👨🏿', '👩🏽'].map((emoji, i) => (
                <div key={i} style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'var(--surface-mid)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  border: '2px solid var(--bg)',
                  marginLeft: i > 0 ? '-10px' : '0',
                  zIndex: 3 - i
                }}>
                  {emoji}
                </div>
              ))}
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'var(--gold)',
                color: 'var(--obsidian)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 800,
                border: '2px solid var(--bg)',
                marginLeft: '-10px',
                zIndex: 0
              }}>
                +100
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--gold)', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                TRUSTED BY 100+ CLIENTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
