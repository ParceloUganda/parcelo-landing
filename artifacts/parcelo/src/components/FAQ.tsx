import React, { useState } from 'react';
import { Link } from 'wouter';

type FaqItem = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      q: "How long does delivery take?",
      a: "Delivery typically takes 7–14 business days depending on the source country. UK and USA orders arrive in 10–14 days, Dubai orders in 7–10 days, and China orders in 10–21 days. We'll give you an accurate estimate with your quote."
    },
    {
      q: "What's the total cost? Are there hidden fees?",
      a: "Never. The landed cost quote we send you via WhatsApp is the final number. It includes the product price, our sourcing fee, international shipping, and customs clearance. You pay once. Nothing more."
    },
    {
      q: "Which countries do you source from?",
      a: "We currently source from the UK, USA, Dubai (UAE), and China. If you have a specific supplier or store in another country, reach out — we handle a wide range of requests."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept Mobile Money (MTN, Airtel), bank transfer, and major credit/debit cards. All payments are confirmed before we proceed with your order."
    },
    {
      q: "What if my item is lost or damaged?",
      a: "We take full responsibility for your order from the moment we purchase it. If an item is lost or arrives damaged, we will replace or refund it — no questions asked. That's our guarantee."
    },
    {
      q: "Are there items you can't ship?",
      a: "Yes — certain items are restricted or prohibited due to customs regulations and airline safety rules. This includes weapons, controlled substances, flammable goods, and certain food products. For the full list, see our Prohibited Items page.",
      link: { href: '/prohibited-items', label: 'View Prohibited Items →' }
    }
  ];

  return (
    <section id="faq" className="fade-up" style={{ padding: 'var(--section-gap) 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '700px', margin: 'auto', padding: '0 var(--gutter)' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 2.8vw, 36px)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '40px',
          letterSpacing: '-0.025em'
        }}>
          Frequently Asked Questions
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" style={{ borderBottom: '1px solid var(--border)' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                data-testid={`button-faq-${i}`}
              >
                {faq.q}
                <span style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'var(--surface)',
                  color: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  flexShrink: 0,
                  marginLeft: '16px'
                }}>
                  ▾
                </span>
              </button>
              <div style={{
                maxHeight: openIndex === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease, padding-bottom 0.3s ease',
                paddingBottom: openIndex === i ? '16px' : '0'
              }}>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {faq.a}
                  {faq.link && (
                    <Link
                      href={faq.link.href}
                      style={{
                        display: 'inline-block',
                        marginTop: '10px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: 'var(--gold)',
                        textDecoration: 'none',
                      }}
                    >
                      {faq.link.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
