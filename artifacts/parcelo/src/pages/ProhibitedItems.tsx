import React, { useState } from 'react';
import { Link } from 'wouter';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SECTIONS = [
  {
    title: 'Medications & Health Products',
    icon: '💊',
    items: [
      'Prescription medications, including dental and veterinary',
      'Prescription medical devices, and medical devices not FDA approved',
      'Prohormones, human growth hormones, steroids, stem cell treatments and synthetic versions',
      'Non-prescription medications, dietary supplements, or cosmetics not labelled in English or not meeting FDA labelling requirements',
      'Anything subject to a Consumer Safety Advisory Warning',
      'Lab reagents, biologics, cultures, and medical specimens',
    ],
  },
  {
    title: 'Food & Consumables',
    icon: '🍽️',
    items: [
      'Perishable products of any kind',
      'Meals Ready to Eat (MRE)',
      'Food not labelled in English or issued a safety advisory',
      'Tobacco products, e-cigarettes, vaping products, and accessories',
    ],
  },
  {
    title: 'Weapons, Ammunition & Defence Items',
    icon: '⚔️',
    items: [
      'Firearms, replicas, parts, and accessories',
      'Ammunition, magazines, and bayonets',
      'BB, pellet, airsoft, and paintball guns, parts and projectiles',
      'Stun guns, tasers, pepper spray, mace, and tear gas',
      'Saps, batons, billy clubs, and other striking weapons',
      'Body armour, ballistic helmets, and personal protection articles with kevlar or ballistic ratings',
      'Military, tactical, or police shields',
      'Government, police, or military uniforms, IDs, and badges (real or replica)',
      'Military training equipment, flight helmets, and flight jumpsuits',
      'Handcuffs of any material, including plastic zip-tie restraints, and straitjackets',
      'Thermal imaging, infrared, and night vision devices',
      'Rifle scopes, laser pointing, and aiming devices for firearms',
      'Anything controlled under the US Munitions List (ITAR)',
    ],
  },
  {
    title: 'Hazardous Materials',
    icon: '☣️',
    items: [
      'Explosives, fireworks, gunpowder, flares, and matches',
      'Gasoline, diesel, and other fuels',
      'Lighters that contain fuel',
      'Pesticides, herbicides, and fungicides',
      'Oxidising agents and fire extinguishers',
      'Radioactive elements or products',
      'Damaged batteries',
      'Poisonous, toxic (including inhalation hazards), and infectious substances',
      'Any unidentifiable material, substance, or chemical',
    ],
  },
  {
    title: 'Animal, Plant & Natural Products',
    icon: '🌿',
    items: [
      'Live or dead animals or insects',
      'Human remains',
      'Coral and Brazilian rosewood',
      'Skin or leather of snakes, alligators, crocodiles, stingrays, and other reptiles or amphibians',
      'Skin, fur, or leather of nearly all animals, especially wolves, bears, elephants, rhinos, and certain deer and foxes',
      'Sturgeon or beluga caviar',
      'Items containing animal products controlled under the Endangered Species Act, Marine Mammal Protection Act, or requiring a CITES permit',
      'Agricultural products, including certain seeds, live or dead plants, unfinished or untreated wood, and soil',
    ],
  },
  {
    title: 'Other Restricted Items',
    icon: '🚫',
    items: [
      'Counterfeit products',
      'Contraband or illegal substances',
      'Lottery tickets',
      'Gambling devices and accessories',
      'Lock picking devices',
      'Rough diamonds',
      'Self-balancing boards (hoverboards)',
      'Self-propelled vehicles',
      'Any dual-use or commercial article controlled under the Commerce Control List (CCL) requiring a BIS-approved export licence',
    ],
  },
];

const UGANDA_NOTES = [
  {
    title: 'Used electronics are not allowed',
    body: 'Uganda customs prohibits the import of used phones, laptops, tablets, and similar devices, regardless of where they are being sourced from. If you are looking at a phone or a laptop, it needs to be new. We will confirm this against the listing before any purchase goes through.',
  },
  {
    title: 'TVs and monitors from the UK',
    body: 'These are technically permitted, but UK retailers package them in oversized retail boxes that need specialist repacking before they can travel. We handle this automatically but it may add a small surcharge to your quote.',
  },
];

export default function ProhibitedItems() {
  const [openNote, setOpenNote] = useState<number | null>(null);

  return (
    <>
      <Nav />

      {/* Hero */}
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
            🚫 Ref: PCL-OPS-PROH-26-001
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 50px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 18px',
          }}>
            Items We Cannot Deliver
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto 16px',
            lineHeight: 1.75,
          }}>
            There are some items we are not able to source or deliver into Uganda. These restrictions are set by customs authorities, airlines, and international trade law — not by us. We have grouped them below so you can quickly check before you place a request.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-faint)', margin: '0 0 8px' }}>
            If you are ever unsure,{' '}
            <a href="https://wa.me/256792170962" style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>
              message us on WhatsApp before you buy
            </a>
            . A two-minute check saves the cost of a refused parcel.
          </p>
        </div>
      </section>

      <section style={{ padding: '16px 24px 80px' }}>
        <div style={{ maxWidth: '760px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Uganda-specific notes */}
          <div style={{
            background: 'rgba(251,202,12,0.05)',
            border: '1px solid rgba(251,202,12,0.18)',
            borderRadius: '14px',
            padding: '24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '18px' }}>🇺🇬</span>
              <h2 style={{ fontSize: '15px', fontWeight: 800, margin: 0, letterSpacing: '-0.01em', color: 'var(--gold)' }}>
                Before You Order: Uganda-Specific Notes
              </h2>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 16px', lineHeight: 1.65 }}>
              A few items are technically allowed to leave the US, UK, Dubai, or China but face additional rules or practical limits on the Ugandan side. These come up most often in our conversations with clients.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {UGANDA_NOTES.map((note, i) => (
                <div key={i} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}>
                  <button
                    onClick={() => setOpenNote(openNote === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 18px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text)',
                      fontSize: '14px',
                      fontWeight: 600,
                      textAlign: 'left',
                      gap: '12px',
                    }}
                  >
                    {note.title}
                    <span style={{
                      color: 'var(--gold)',
                      transform: openNote === i ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                    }}>▾</span>
                  </button>
                  <div style={{
                    maxHeight: openNote === i ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.25s ease',
                  }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0, padding: '0 18px 16px' }}>
                      {note.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-faint)', margin: '16px 0 0' }}>
              If you are unsure whether any of these notes apply to something you have in mind, send it to us on WhatsApp and we will check before you buy.
            </p>
          </div>

          {/* Warning banner */}
          <div style={{
            background: 'rgba(192,80,80,0.07)',
            border: '1px solid rgba(192,80,80,0.2)',
            borderRadius: '14px',
            padding: '18px 24px',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>⚡</span>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>
              <strong style={{ color: 'var(--text)' }}>The full list applies to all origin markets</strong> — US, UK, UAE, and China. Banned items can vary depending on the destination country, but the items below cannot be sourced or delivered through Parcelo from any of our origin markets.
            </p>
          </div>

          {/* Section heading */}
          <h2 style={{ fontSize: '18px', fontWeight: 800, margin: '8px 0 0', letterSpacing: '-0.02em' }}>
            The Full List
          </h2>

          {/* Category cards */}
          {SECTIONS.map(({ title, icon, items }) => (
            <div key={title} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{
                  fontSize: '18px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(192,80,80,0.08)',
                  border: '1px solid rgba(192,80,80,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {icon}
                </span>
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>
                  {title}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'rgba(220,80,80,0.75)', flexShrink: 0, marginTop: '3px', fontSize: '11px' }}>✕</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* When in doubt CTA */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '32px 24px',
            textAlign: 'center',
            marginTop: '8px',
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
              When in Doubt, Just Ask
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 8px', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              We would always rather answer a quick question than have your parcel held at customs. Send us the product link on WhatsApp and we will confirm whether it can travel before you commit to a purchase.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-faint)', margin: '0 0 24px', fontStyle: 'italic' }}>
              That is what the Concierge and Fulfilment Fee is for. You bring the wish, we handle the rest.
            </p>
            <a
              href="https://wa.me/256792170962"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '10px',
                textDecoration: 'none',
                background: 'var(--gold)',
                color: '#0A0A0B',
                letterSpacing: '-0.01em',
              }}
            >
              💬 Ask Us on WhatsApp
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
