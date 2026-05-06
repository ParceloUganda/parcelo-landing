import React, { useState, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

type OrderStatus = 'ordered' | 'purchased' | 'in_transit' | 'customs' | 'out_for_delivery' | 'delivered';

type TrackingResult = {
  trackingNumber: string;
  item: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  status: OrderStatus;
  updatedAt: string;
  events: { date: string; time: string; label: string; location: string; done: boolean }[];
};

const STEPS: { id: OrderStatus; label: string; icon: string }[] = [
  { id: 'ordered',          label: 'Order Placed',       icon: '📋' },
  { id: 'purchased',        label: 'Item Purchased',      icon: '🛒' },
  { id: 'in_transit',       label: 'In Transit',          icon: '✈️' },
  { id: 'customs',          label: 'Customs Clearance',   icon: '🏛️' },
  { id: 'out_for_delivery', label: 'Out for Delivery',    icon: '🚚' },
  { id: 'delivered',        label: 'Delivered',           icon: '✅' },
];

const STATUS_ORDER: OrderStatus[] = ['ordered','purchased','in_transit','customs','out_for_delivery','delivered'];

const STATUS_LABELS: Record<OrderStatus, string> = {
  ordered:          'Order Placed',
  purchased:        'Item Purchased',
  in_transit:       'In Transit',
  customs:          'Customs Clearance',
  out_for_delivery: 'Out for Delivery',
  delivered:        'Delivered',
};

const STATUS_COLORS: Record<OrderStatus, string> = {
  ordered:          'rgba(251,202,12,0.15)',
  purchased:        'rgba(251,202,12,0.15)',
  in_transit:       'rgba(59,130,246,0.15)',
  customs:          'rgba(168,85,247,0.15)',
  out_for_delivery: 'rgba(251,146,60,0.15)',
  delivered:        'rgba(34,197,94,0.15)',
};

const STATUS_TEXT: Record<OrderStatus, string> = {
  ordered:          '#FBCA0C',
  purchased:        '#FBCA0C',
  in_transit:       '#60a5fa',
  customs:          '#c084fc',
  out_for_delivery: '#fb923c',
  delivered:        '#4ade80',
};

// Mock lookup — replace with real API call
const MOCK_ORDERS: Record<string, TrackingResult> = {
  'PC-2024-8821': {
    trackingNumber: 'PC-2024-8821',
    item: 'Nike Air Max 270 (Size 42)',
    origin: 'United States',
    destination: 'Kampala, Uganda',
    estimatedDelivery: 'May 14, 2026',
    status: 'in_transit',
    updatedAt: 'May 6, 2026 · 09:41 AM',
    events: [
      { date: 'May 6',  time: '09:41 AM', label: 'Departed JFK — In Transit to Uganda', location: 'New York, USA',    done: true  },
      { date: 'May 5',  time: '03:20 PM', label: 'Item purchased & dispatched to fulfilment', location: 'New York, USA', done: true  },
      { date: 'May 4',  time: '11:00 AM', label: 'Order confirmed by Parcelo',           location: 'Kampala, Uganda', done: true  },
    ],
  },
  'PC-2024-5502': {
    trackingNumber: 'PC-2024-5502',
    item: 'Apple iPhone 15 Pro — 256GB Natural Titanium',
    origin: 'United Arab Emirates',
    destination: 'Kampala, Uganda',
    estimatedDelivery: 'May 9, 2026',
    status: 'out_for_delivery',
    updatedAt: 'May 6, 2026 · 07:15 AM',
    events: [
      { date: 'May 6',  time: '07:15 AM', label: 'Out for delivery — arriving today',     location: 'Kampala, Uganda', done: true  },
      { date: 'May 5',  time: '06:00 PM', label: 'Cleared customs & handed to courier',   location: 'Entebbe, Uganda', done: true  },
      { date: 'May 4',  time: '02:30 PM', label: 'Arrived Entebbe — awaiting clearance',  location: 'Entebbe, Uganda', done: true  },
      { date: 'May 2',  time: '11:00 PM', label: 'Departed Dubai — In Transit',           location: 'Dubai, UAE',      done: true  },
      { date: 'May 1',  time: '09:00 AM', label: 'Item purchased & dispatched',           location: 'Dubai, UAE',      done: true  },
    ],
  },
};

function getStepIndex(status: OrderStatus) {
  return STATUS_ORDER.indexOf(status);
}

export default function Tracking() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTrack = (e?: React.FormEvent) => {
    e?.preventDefault();
    const q = query.trim();
    if (!q) { inputRef.current?.focus(); return; }
    setLoading(true);
    setTimeout(() => {
      const found = MOCK_ORDERS[q.toUpperCase()] ?? null;
      setResult(found);
      setSearched(true);
      setLoading(false);
    }, 700);
  };

  const reset = () => {
    setQuery('');
    setSearched(false);
    setResult(null);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const activeIdx = result ? getStepIndex(result.status) : -1;

  return (
    <>
      <Nav />

      <section style={{ padding: '72px 24px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: 'auto' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 16px',
          }}>
            Track Your Order
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', margin: '0 0 36px', lineHeight: 1.6 }}>
            Enter your tracking number to get real-time updates about your order
          </p>

          {/* Search bar */}
          <form onSubmit={handleTrack} style={{ display: 'flex', gap: '12px', alignItems: 'stretch' }}>
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-mid)',
              borderRadius: '12px',
              padding: '0 18px',
              transition: 'border-color 0.2s',
            }}
              onFocus={() => {}}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-faint)', flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter tracking number, receipt number, or product name"
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  color: 'var(--text)',
                  fontFamily: 'Manrope, sans-serif',
                  padding: '18px 0',
                  minWidth: 0,
                }}
                onFocus={e => (e.currentTarget.parentElement!.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.currentTarget.parentElement!.style.borderColor = 'var(--border-mid)')}
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', fontSize: '16px', padding: '0', lineHeight: 1, flexShrink: 0 }}>✕</button>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-gold"
              style={{
                padding: '0 28px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '12px',
                fontFamily: 'Manrope, sans-serif',
                whiteSpace: 'nowrap',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                minWidth: '130px',
              }}
            >
              {loading ? 'Searching…' : 'Track Now'}
            </button>
          </form>
        </div>
      </section>

      {/* ── RESULTS ── */}
      {searched && (
        <section style={{ padding: '8px 24px 72px' }}>
          <div style={{ maxWidth: '760px', margin: 'auto' }}>

            {result ? (
              <>
                {/* Order summary card */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
                        {result.trackingNumber}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        background: STATUS_COLORS[result.status],
                        color: STATUS_TEXT[result.status],
                        letterSpacing: '0.02em',
                      }}>
                        {STATUS_LABELS[result.status]}
                      </span>
                    </div>
                    <p style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{result.item}</p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                      {result.origin} → {result.destination}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-faint)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Est. Delivery</p>
                    <p style={{ fontSize: '16px', fontWeight: 800, color: 'var(--gold)', margin: 0 }}>{result.estimatedDelivery}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-faint)', margin: '4px 0 0' }}>Updated {result.updatedAt}</p>
                  </div>
                </div>

                {/* Status timeline */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '28px',
                  marginBottom: '16px',
                }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 28px' }}>
                    Shipment Progress
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }} className="tracking-steps">
                    {STEPS.map((step, i) => {
                      const done = i <= activeIdx;
                      const active = i === activeIdx;
                      const segmentDone = i < activeIdx;
                      return (
                        <React.Fragment key={step.id}>
                          {/* Step node */}
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '10px',
                            flexShrink: 0,
                          }}>
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              background: active ? 'var(--gold)' : done ? 'rgba(251,202,12,0.12)' : 'var(--surface)',
                              border: `2px solid ${done ? 'var(--gold)' : 'var(--border-mid)'}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px',
                              transition: 'all 0.3s',
                              boxShadow: active ? '0 0 0 4px rgba(251,202,12,0.15)' : 'none',
                              position: 'relative',
                              zIndex: 1,
                            }}>
                              {done && !active ? (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                              ) : (
                                <span style={{ filter: done ? 'none' : 'grayscale(1)', opacity: done ? 1 : 0.35 }}>{step.icon}</span>
                              )}
                            </div>
                            <span style={{
                              fontSize: '11px',
                              fontWeight: active ? 700 : 600,
                              color: active ? 'var(--gold)' : done ? 'var(--text-muted)' : 'var(--text-faint)',
                              textAlign: 'center',
                              lineHeight: 1.3,
                              maxWidth: '64px',
                            }}>
                              {step.label}
                            </span>
                          </div>

                          {/* Connector segment between this step and the next */}
                          {i < STEPS.length - 1 && (
                            <div style={{
                              flex: 1,
                              height: '2px',
                              background: segmentDone ? 'var(--gold)' : 'var(--border-mid)',
                              marginTop: '19px',
                              transition: 'background 0.3s',
                              minWidth: '8px',
                            }} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Event history */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '28px',
                  marginBottom: '20px',
                }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 24px' }}>
                    Event History
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {result.events.map((ev, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        gap: '16px',
                        paddingBottom: i < result.events.length - 1 ? '20px' : '0',
                        position: 'relative',
                      }}>
                        {/* vertical line */}
                        {i < result.events.length - 1 && (
                          <div style={{
                            position: 'absolute',
                            left: '7px',
                            top: '16px',
                            bottom: 0,
                            width: '1px',
                            background: 'var(--border)',
                          }} />
                        )}
                        {/* dot */}
                        <div style={{
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          background: i === 0 ? 'var(--gold)' : 'var(--border-mid)',
                          border: `2px solid ${i === 0 ? 'var(--gold)' : 'var(--border)'}`,
                          flexShrink: 0,
                          marginTop: '3px',
                          boxShadow: i === 0 ? '0 0 0 3px rgba(251,202,12,0.15)' : 'none',
                        }} />
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: '14px', fontWeight: 600, margin: '0 0 4px', color: i === 0 ? 'var(--text)' : 'var(--text-muted)' }}>
                            {ev.label}
                          </p>
                          <p style={{ fontSize: '12px', color: 'var(--text-faint)', margin: 0 }}>
                            {ev.location} &nbsp;·&nbsp; {ev.date}, {ev.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={reset}
                  style={{
                    background: 'none',
                    border: '1px solid var(--border-mid)',
                    borderRadius: '10px',
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'Manrope, sans-serif',
                    padding: '12px 20px',
                    cursor: 'pointer',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text-muted)'; }}
                  onMouseOut={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-mid)'; }}
                >
                  ← Track another order
                </button>
              </>
            ) : (
              /* Not found state */
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '48px 32px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔍</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>No order found</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 24px', lineHeight: 1.6, maxWidth: '340px', marginLeft: 'auto', marginRight: 'auto' }}>
                  We couldn't find an order matching <strong style={{ color: 'var(--text)' }}>"{query}"</strong>. Check the tracking number on your receipt, or contact us on WhatsApp.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={reset}
                    style={{
                      background: 'none',
                      border: '1px solid var(--border-mid)',
                      borderRadius: '10px',
                      color: 'var(--text-muted)',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif',
                      padding: '12px 20px',
                      cursor: 'pointer',
                    }}
                  >
                    Try again
                  </button>
                  <a
                    href="https://wa.me/256792170962"
                    className="btn-gold"
                    style={{ padding: '12px 20px', fontSize: '14px', borderRadius: '10px', textDecoration: 'none' }}
                  >
                    💬 Ask on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── TRACKING TIPS (shown when no search) ── */}
      {!searched && (
        <section style={{ padding: '0 24px 88px' }}>
          <div style={{ maxWidth: '760px', margin: 'auto' }}>
            <div style={{
              background: 'rgba(251,202,12,0.05)',
              border: '1px solid rgba(251,202,12,0.15)',
              borderRadius: '16px',
              padding: '28px 32px',
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--gold)', margin: '0 0 16px', letterSpacing: '-0.01em' }}>
                Tracking Tips
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'You can track your package using the tracking number',
                  'Tracking numbers typically start with "PC-" followed by numbers and letters',
                  'For the most accurate tracking, use the tracking number provided on your receipt',
                  'Allow 24 hours after order placement for tracking information to be available',
                ].map((tip, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Try demo hint */}
            <p style={{ fontSize: '13px', color: 'var(--text-faint)', textAlign: 'center', marginTop: '20px' }}>
              Try{' '}
              {['PC-2024-8821', 'PC-2024-5502'].map((num, i) => (
                <React.Fragment key={num}>
                  <button
                    onClick={() => { setQuery(num); }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--gold)',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0,
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {num}
                  </button>
                  {i === 0 && <span style={{ color: 'var(--text-faint)' }}> or </span>}
                </React.Fragment>
              ))}
              {' '}to see a demo
            </p>
          </div>
        </section>
      )}

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .tracking-steps { gap: 0 !important; }
          .tracking-steps > div > span { font-size: 9px !important; max-width: 46px !important; }
          .tracking-steps > div > div { width: 32px !important; height: 32px !important; }
        }
      `}</style>
    </>
  );
}
