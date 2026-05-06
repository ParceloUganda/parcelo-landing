import React from 'react';

const TESTIMONIALS = [
  {
    name: 'Brian K.',
    handle: '@briank_kla',
    avatar: 'BK',
    color: '#2563eb',
    quote: "Parcelo saved my business. Getting parts from Dubai used to be a nightmare. Now I just WhatsApp a link and it arrives — no stress, no follow-up calls.",
  },
  {
    name: 'Sandra A.',
    handle: '@sandrabeauty',
    avatar: 'SA',
    color: '#7c3aed',
    quote: "I finally have access to genuine skincare from Sephora. Fast delivery right to my office in Kololo. I'm a regular customer now.",
  },
  {
    name: 'David M.',
    handle: '@david_eng',
    avatar: 'DM',
    color: '#059669',
    quote: "No more hidden fees. The quote they gave me was exactly what I paid at the door. This is how shopping from abroad should feel.",
  },
  {
    name: 'Aisha N.',
    handle: '@aishanaguru',
    avatar: 'AN',
    color: '#d97706',
    quote: "I ordered supplements from iHerb that I couldn't find anywhere in Kampala. Arrived in 10 days, perfectly packed. Will absolutely use again.",
  },
  {
    name: 'Grace T.',
    handle: '@gracetumwebaze',
    avatar: 'GT',
    color: '#db2777',
    quote: "Got my son's birthday gift from the US in time. The team kept me updated throughout. The tracking alone gave me total peace of mind.",
  },
  {
    name: 'Robert S.',
    handle: '@robert_it',
    avatar: 'RS',
    color: '#0891b2',
    quote: "We use Parcelo for office tech orders. Laptops, accessories — all sourced from the UK at way better prices than local shops. Couldn't go back.",
  },
  {
    name: 'Priscilla W.',
    handle: '@priscillaweru',
    avatar: 'PW',
    color: '#be123c',
    quote: "I was nervous ordering from abroad for the first time. Parcelo walked me through everything. My Nike order arrived looking absolutely brand new.",
  },
  {
    name: 'Moses L.',
    handle: '@mosesarch',
    avatar: 'ML',
    color: '#4f46e5',
    quote: "Customs clearance used to terrify me. With Parcelo I just waited at home. Everything cleared and delivered with zero drama whatsoever.",
  },
  {
    name: 'Lydia O.',
    handle: '@lydiaokello',
    avatar: 'LO',
    color: '#16a34a',
    quote: "Ordered a dress for my sister's graduation from ASOS UK. Arrived in 8 days. The whole process was seamless — even the packaging was pristine.",
  },
];

const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0);
const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1);
const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2);

const Card = ({ t }: { t: typeof TESTIMONIALS[0] }) => (
  <div
    style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      padding: '20px 22px',
      marginBottom: '16px',
      transition: 'border-color 0.2s, transform 0.2s',
      breakInside: 'avoid',
    }}
    onMouseOver={e => {
      e.currentTarget.style.borderColor = 'rgba(251,202,12,0.35)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseOut={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: t.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        fontWeight: 800,
        color: '#fff',
        flexShrink: 0,
        letterSpacing: '0.02em',
      }}>
        {t.avatar}
      </div>
      <div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>{t.name}</div>
        <div style={{ fontSize: '12px', color: 'var(--text-faint)', marginTop: '2px' }}>{t.handle}</div>
      </div>
    </div>
    <p style={{
      fontSize: '14px',
      color: 'var(--text)',
      lineHeight: 1.65,
      margin: 0,
    }}>
      {t.quote}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="fade-up" style={{ padding: 'var(--section-gap) 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: 'auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px'
          }}>
            WHAT CLIENTS SAY
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800,
            letterSpacing: '-0.025em', margin: '0 0 14px'
          }}>
            Trusted by Ugandans shopping globally
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', margin: 0 }}>
            Real customers. Real orders. Real deliveries.
          </p>
        </div>

        <div className="testi-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          alignItems: 'start',
        }}>
          <div>{col1.map((t, i) => <Card key={i} t={t} />)}</div>
          <div className="testi-col-offset" style={{ marginTop: '32px' }}>{col2.map((t, i) => <Card key={i} t={t} />)}</div>
          <div>{col3.map((t, i) => <Card key={i} t={t} />)}</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
