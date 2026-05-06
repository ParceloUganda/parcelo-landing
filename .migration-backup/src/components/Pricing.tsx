import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.body.classList.contains('light'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    setIsLight(document.body.classList.contains('light'));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="fade-up" style={{ padding: 'var(--section-gap) 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: 'auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            PRICING
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.025em' }}>
            One all-inclusive price
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '540px', margin: 'auto', lineHeight: 1.6 }}>
            No surprise charges. The quote we give is the final price you pay to have it at your door in Uganda.
          </p>
        </div>

        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginTop: '48px'
        }}>
          {/* Left Card */}
          <div style={{
            border: '1px solid var(--gold)',
            background: isLight 
              ? 'linear-gradient(135deg, #fffae6, #fff8d6)' 
              : 'linear-gradient(135deg, #1e1c14, #262518)',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <div style={{
              border: '1px solid rgba(251,202,12,0.4)',
              color: 'var(--gold)',
              fontSize: '10px',
              fontWeight: 800,
              padding: '5px 12px',
              borderRadius: 'var(--radius-full)',
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              WHAT'S INCLUDED
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>Everything you need</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: '12px 0 24px' }}>
              One quote. One payment. Everything from purchase to your doorstep — handled by Parcelo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "Product sourcing & purchase",
                "International shipping",
                "Customs clearance",
                "Last-mile delivery in Uganda",
                "Full real-time tracking",
                "Dedicated WhatsApp support"
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(251,202,12,0.12)',
                    border: '1px solid rgba(251,202,12,0.25)',
                    color: 'var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 800
                  }}>✓</div>
                  {item}
                </div>
              ))}
            </div>

            <a href="https://wa.me/256792170962" className="btn-gold" style={{
              display: 'block',
              width: '100%',
              padding: '14px',
              marginTop: '24px',
              textAlign: 'center',
              fontSize: '15px'
            }}>
              💬 Get your free quote
            </a>
          </div>

          {/* Right Card */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              background: 'rgba(47,107,78,0.12)',
              border: '1px solid rgba(47,107,78,0.25)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              marginBottom: '16px'
            }}>🛡️</div>
            
            <h3 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>Guaranteed Delivery</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: '12px 0 24px' }}>
              We assume full responsibility for your order from the moment we purchase it. If your item doesn't arrive, we make it right — full stop.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "Purchase protection",
                "Loss & damage coverage",
                "Tracking at every stage"
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(47,107,78,0.12)',
                    border: '1px solid rgba(47,107,78,0.25)',
                    color: '#2f6b4e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 800
                  }}>✓</div>
                  {item}
                </div>
              ))}
            </div>

            <a href="#faq" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--gold)',
              marginTop: '24px'
            }}>
              Full protection details →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
