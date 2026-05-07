import React, { useState } from 'react';
import { Link } from 'wouter';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SECTIONS = [
  {
    title: 'Medications & health products',
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
    title: 'Food & consumables',
    items: [
      'Perishable products of any kind',
      'Meals Ready to Eat (MRE)',
      'Food not labelled in English or issued a safety advisory',
      'Tobacco products, e-cigarettes, vaping products, and accessories',
    ],
  },
  {
    title: 'Weapons, ammunition & defence items',
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
    title: 'Hazardous materials',
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
    title: 'Animal, plant & natural products',
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
    title: 'Other restricted items',
    items: [
      'Counterfeit products',
      'Contraband or illegal substances',
      'Lottery tickets',
      'Gambling devices and accessories',
      'Lock picking devices',
      'Rough diamonds',
      'Self-balancing boards (hoverboards)',
      'Self-propelled vehicles',
      'Any dual-use or commercial article controlled under the Commerce Control List (CCL) under the Export Administration Regulations, where the control status requires a Bureau of Industry and Security (BIS) approved export licence',
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

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function ProhibitedItems() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openNote, setOpenNote] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const toggleNote = (i: number) => setOpenNote(openNote === i ? null : i);

  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '72px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: 'auto' }}>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 50px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 20px',
          }}>
            Items We Cannot Deliver
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            maxWidth: '580px',
            margin: '0 auto 12px',
            lineHeight: 1.75,
          }}>
            There are some items we are not able to source or deliver into Uganda. These restrictions are set by customs authorities, airlines, and international trade law — not by us.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-faint)', margin: 0 }}>
            Not sure if your item qualifies?{' '}
            <a href="https://wa.me/256792170962" style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>
              Message us on WhatsApp before you buy →
            </a>
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '720px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Uganda-specific notes */}
          <div style={{
            background: 'rgba(251,202,12,0.05)',
            border: '1px solid rgba(251,202,12,0.18)',
            borderRadius: '16px',
            padding: '24px 28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '16px' }}>🇺🇬</span>
              <h2 style={{ fontSize: '14px', fontWeight: 800, margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Before You Order: Uganda-Specific Notes
              </h2>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 16px', lineHeight: 1.7 }}>
              A few items are technically allowed to leave the US, UK, Dubai, or China but face additional rules on the Ugandan side.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {UGANDA_NOTES.map((note, i) => (
                <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <button
                    onClick={() => toggleNote(i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--text)', fontSize: '14px', fontWeight: 600, textAlign: 'left', gap: '12px',
                    }}
                  >
                    {note.title}
                    <span style={{ color: 'var(--gold)', transform: openNote === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>▾</span>
                  </button>
                  <div style={{ maxHeight: openNote === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.25s ease' }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0, padding: '0 18px 16px' }}>{note.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full list */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 4px' }}>
              The full list
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
              Items We Cannot Include in Your Order
            </h2>

            {/* Accordion */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {SECTIONS.map((section, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <button
                      onClick={() => toggle(i)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '18px',
                        padding: '20px 4px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      {/* Number badge */}
                      <span style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: isOpen ? 'var(--gold)' : 'var(--surface)',
                        border: isOpen ? 'none' : '1px solid var(--border)',
                        color: isOpen ? '#0A0A0B' : 'var(--text-muted)',
                        fontSize: '12px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background 0.2s, color 0.2s',
                        letterSpacing: '0.02em',
                      }}>
                        {pad(i + 1)}
                      </span>

                      {/* Title */}
                      <span style={{
                        flex: 1,
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}>
                        {section.title}
                      </span>

                      {/* Toggle icon */}
                      <span style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: isOpen ? 'var(--gold)' : 'var(--surface)',
                        border: isOpen ? 'none' : '1px solid var(--border)',
                        color: isOpen ? '#0A0A0B' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '16px',
                        fontWeight: 700,
                        transition: 'background 0.2s, color 0.2s',
                        lineHeight: 1,
                      }}>
                        {isOpen ? '×' : '+'}
                      </span>
                    </button>

                    {/* Expanded items */}
                    <div style={{
                      maxHeight: isOpen ? `${section.items.length * 52}px` : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                    }}>
                      <ul style={{ margin: 0, padding: '0 0 24px 54px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {section.items.map((item, j) => (
                          <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '6px', fontSize: '10px', lineHeight: 1 }}>■</span>
                            <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '32px 28px',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
              When in doubt, just ask
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 8px', lineHeight: 1.7, maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto' }}>
              We would always rather answer a quick question than have your order held at customs. Send us the product link on WhatsApp and we will confirm before you commit to a purchase.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-faint)', margin: '0 0 24px', fontStyle: 'italic' }}>
              You bring the wish, we handle the rest.
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
