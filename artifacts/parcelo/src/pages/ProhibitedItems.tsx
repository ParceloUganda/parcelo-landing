import React from 'react';
import { Link } from 'wouter';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const PROHIBITED: { category: string; icon: string; items: string[] }[] = [
  {
    category: 'Weapons & Dangerous Goods',
    icon: '⚠️',
    items: [
      'Firearms, ammunition, and explosives',
      'Knives and bladed weapons over legal limits',
      'Tasers, pepper spray, and stun guns',
    ],
  },
  {
    category: 'Controlled Substances',
    icon: '🚫',
    items: [
      'Narcotics and illegal drugs of any kind',
      'Prescription medicines without valid documentation',
      'Unregulated supplements or performance-enhancing substances',
    ],
  },
  {
    category: 'Hazardous Materials',
    icon: '☣️',
    items: [
      'Flammable liquids (e.g. petrol, lighter fluid)',
      'Aerosols and pressurised containers',
      'Lithium batteries above airline limits (standalone, >100Wh)',
      'Corrosive chemicals and acids',
    ],
  },
  {
    category: 'Perishables & Regulated Food',
    icon: '🍖',
    items: [
      'Fresh, chilled, or frozen meat and seafood',
      'Dairy products and raw eggs',
      'Live plants, seeds, and soil without phytosanitary certificates',
    ],
  },
  {
    category: 'Currency & Financial Instruments',
    icon: '💵',
    items: [
      'Physical cash above customs declaration limits',
      'Bearer bonds, cheques, and negotiable instruments',
      'Counterfeit money or documents',
    ],
  },
  {
    category: 'Intellectual Property Violations',
    icon: '©️',
    items: [
      'Counterfeit branded goods (fake luxury items, pirated media)',
      'Unlicensed replicas of trademarked products',
    ],
  },
];

export default function ProhibitedItems() {
  return (
    <>
      <Nav />

      <section style={{ padding: '72px 24px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: 'auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1.5px solid var(--border-mid)',
            borderRadius: '9999px',
            padding: '7px 16px',
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--gold)',
            background: 'rgba(251,202,12,0.06)',
            marginBottom: '24px',
          }}>
            🚫 Shipping Restrictions
          </div>
          <h1 style={{
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 18px',
          }}>
            Prohibited &amp; Restricted Items
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            maxWidth: '580px',
            margin: '0 auto 12px',
            lineHeight: 1.7,
          }}>
            To keep your shipments safe and compliant with Ugandan customs and international airline regulations, we cannot source or ship the following items.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-faint)', margin: 0 }}>
            Not sure if your item qualifies?{' '}
            <a href="https://wa.me/256792170962" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>Ask us on WhatsApp →</a>
          </p>
        </div>
      </section>

      <section style={{ padding: '32px 24px 80px' }}>
        <div style={{ maxWidth: '760px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div style={{
            background: 'rgba(251,202,12,0.07)',
            border: '1px solid rgba(251,202,12,0.2)',
            borderRadius: '14px',
            padding: '18px 24px',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
            marginBottom: '8px',
          }}>
            <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '1px' }}>⚡</span>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>
              Attempting to ship prohibited items may result in seizure by customs, legal penalties, and permanent suspension from Parcelo. When in doubt, check with us first.
            </p>
          </div>

          {PROHIBITED.map(({ category, icon, items }) => (
            <div key={category} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{
                  fontSize: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(192,80,80,0.1)',
                  border: '1px solid rgba(192,80,80,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {icon}
                </span>
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>
                  {category}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'rgba(192,80,80,0.8)', flexShrink: 0, marginTop: '2px', fontSize: '13px' }}>✕</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '28px 24px',
            textAlign: 'center',
            marginTop: '8px',
          }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
              Ready to order something that's allowed?
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: 1.6 }}>
              Most everyday products — electronics, clothing, beauty, furniture, and more — are perfectly fine to ship.
            </p>
            <a
              href="https://wa.me/256792170962"
              className="btn-gold"
              style={{ display: 'inline-block', padding: '13px 28px', fontSize: '15px', borderRadius: '10px', textDecoration: 'none' }}
            >
              💬 Start Your Order
            </a>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-faint)', textAlign: 'center', margin: 0 }}>
            <Link href="/" style={{ color: 'var(--text-faint)', textDecoration: 'underline' }}>← Back to home</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
