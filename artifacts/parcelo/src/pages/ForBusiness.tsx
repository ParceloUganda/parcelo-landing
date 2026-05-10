import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const BUSINESS_TYPES = [
  'Beauty',
  'Health',
  'Hospitality',
  'Construction',
  'Agriculture',
  'Auto',
  'Fashion',
  'Electronics',
];

const CHALLENGES = [
  'Finding reliable suppliers',
  'High sourcing/import costs eating into profit',
  'Slow fulfillment times (stock runs out)',
  'Complex customs/import procedures',
  'Minimum order quantities too high',
  'Payment to international suppliers',
  'Quality control/damaged goods',
  "Can't track orders reliably",
  'Other',
];

type FormData = {
  fullName: string;
  businessName: string;
  businessEmail: string;
  contactNumber: string;
  businessType: string;
  challenges: string[];
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--border-mid)',
  borderRadius: '10px',
  padding: '14px 16px',
  fontSize: '15px',
  color: 'var(--text)',
  fontFamily: 'Manrope, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 700,
  color: 'var(--text)',
  marginBottom: '8px',
  letterSpacing: '0.02em',
};

const fieldGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

export default function ForBusiness() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    businessName: '',
    businessEmail: '',
    contactNumber: '',
    businessType: '',
    challenges: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.businessName.trim()) errs.businessName = 'Business name is required';
    if (!form.businessEmail.trim()) {
      errs.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
      errs.businessEmail = 'Enter a valid email address';
    }
    if (!form.contactNumber.trim()) errs.contactNumber = 'Contact number is required';
    if (!form.businessType) errs.businessType = 'Please select your business type';
    if (form.challenges.length === 0) errs.challenges = 'Please select at least one challenge';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const toggleChallenge = (c: string) => {
    setForm(f => ({
      ...f,
      challenges: f.challenges.includes(c)
        ? f.challenges.filter(x => x !== c)
        : [...f.challenges, c],
    }));
    if (errors.challenges) setErrors(e => ({ ...e, challenges: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/business-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getFocusStyle = (name: string): React.CSSProperties =>
    focusedField === name
      ? { borderColor: 'var(--gold)', boxShadow: '0 0 0 3px rgba(251,202,12,0.12)' }
      : {};

  const getErrorStyle = (name: keyof FormErrors): React.CSSProperties =>
    errors[name] ? { borderColor: 'rgba(192,80,80,0.7)' } : {};

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ padding: '72px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: 'auto' }}>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: '0 0 20px',
          }}>
            <span style={{ color: '#ffffff' }}>Scale Your Business</span>
            <br />
            <span style={{ color: 'var(--text)' }}>with Parcelo</span>
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--text-muted)',
            maxWidth: '620px',
            margin: '0 auto 36px',
            lineHeight: 1.65,
          }}>
            Join our exclusive business partner program. Get access to bulk sourcing, wholesale
            pricing, a dedicated concierge team, and priority fulfillment to help your business grow.
          </p>

          {/* trust pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '✓', label: 'Verified Suppliers' },
              { icon: '🔒', label: 'Secure Payments' },
              { icon: '🚚', label: 'Fast Delivery' },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-muted)',
              }}>
                <span style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--gold)',
                  color: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER ── */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: 'clamp(26px, 3.4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: '0 0 14px',
            }}>
              Why Partner with Parcelo?
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              margin: 'auto',
              lineHeight: 1.65,
            }}>
              We provide everything you need to streamline your global sourcing and maximize your profit margins.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }} className="why-grid">
            {[
              {
                icon: '🧾',
                title: 'Know Your Costs Upfront',
                body: 'Get a clear upfront estimate of purchase, freight, and clearance costs combined for sharper financial planning.',
              },
              {
                icon: '🚚',
                title: 'Reliable Fulfillment',
                body: 'Track every order in real-time from the moment we buy it to the moment it arrives at your door.',
              },
              {
                icon: '🎧',
                title: 'Dedicated Support',
                body: 'Get a dedicated account manager who understands your business needs and provides personalized assistance.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = 'rgba(251,202,12,0.35)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(251,202,12,0.1)',
                  border: '1px solid rgba(251,202,12,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '18px',
                }}>
                  {icon}
                </div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  margin: '0 0 10px',
                  letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: '680px', margin: 'auto' }}>

          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div style={{
              background: 'var(--surface)',
              border: '1.5px solid var(--gold)',
              borderRadius: '20px',
              padding: '56px 40px',
              textAlign: 'center',
            }}>
              <div style={{
                width: '64px', height: '64px',
                borderRadius: '50%',
                background: 'rgba(251,202,12,0.12)',
                border: '2px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px',
                margin: '0 auto 20px',
              }}>✓</div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
                We've received your details!
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: '400px', margin: '0 auto 28px' }}>
                A member of the Parcelo business team will reach out to <strong style={{ color: 'var(--text)' }}>{form.businessEmail}</strong> within 24 hours to discuss your needs.
              </p>
              <a
                href="https://wa.me/256792170962"
                className="btn-gold"
                style={{ padding: '14px 28px', fontSize: '15px', display: 'inline-block' }}
              >
                💬 Chat with us on WhatsApp
              </a>
            </div>
          ) : (
            /* ── FORM CARD ── */
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '40px',
            }}>
              <h2 style={{
                fontSize: '22px', fontWeight: 800, margin: '0 0 6px', letterSpacing: '-0.02em',
              }}>
                Join the Business Programme
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 32px', lineHeight: 1.6 }}>
                Tell us about your business and we'll tailor a plan just for you.
              </p>

              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>

                {/* Row: Full Name + Business Name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div style={fieldGroupStyle}>
                    <label style={labelStyle} htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Sarah Nakamya"
                      value={form.fullName}
                      onChange={e => { setForm(f => ({ ...f, fullName: e.target.value })); setErrors(er => ({ ...er, fullName: undefined })); }}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, ...getFocusStyle('fullName'), ...getErrorStyle('fullName') }}
                    />
                    {errors.fullName && <span style={{ fontSize: '12px', color: '#c05050' }}>{errors.fullName}</span>}
                  </div>

                  <div style={fieldGroupStyle}>
                    <label style={labelStyle} htmlFor="businessName">Business Name *</label>
                    <input
                      id="businessName"
                      type="text"
                      placeholder="e.g. Nakamya Beauty Ltd"
                      value={form.businessName}
                      onChange={e => { setForm(f => ({ ...f, businessName: e.target.value })); setErrors(er => ({ ...er, businessName: undefined })); }}
                      onFocus={() => setFocusedField('businessName')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, ...getFocusStyle('businessName'), ...getErrorStyle('businessName') }}
                    />
                    {errors.businessName && <span style={{ fontSize: '12px', color: '#c05050' }}>{errors.businessName}</span>}
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div style={fieldGroupStyle}>
                    <label style={labelStyle} htmlFor="businessEmail">Business Email *</label>
                    <input
                      id="businessEmail"
                      type="email"
                      placeholder="you@yourbusiness.com"
                      value={form.businessEmail}
                      onChange={e => { setForm(f => ({ ...f, businessEmail: e.target.value })); setErrors(er => ({ ...er, businessEmail: undefined })); }}
                      onFocus={() => setFocusedField('businessEmail')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, ...getFocusStyle('businessEmail'), ...getErrorStyle('businessEmail') }}
                    />
                    {errors.businessEmail && <span style={{ fontSize: '12px', color: '#c05050' }}>{errors.businessEmail}</span>}
                  </div>

                  <div style={fieldGroupStyle}>
                    <label style={labelStyle} htmlFor="contactNumber">Business Contact Number *</label>
                    <input
                      id="contactNumber"
                      type="tel"
                      placeholder="+256 700 000 000"
                      value={form.contactNumber}
                      onChange={e => { setForm(f => ({ ...f, contactNumber: e.target.value })); setErrors(er => ({ ...er, contactNumber: undefined })); }}
                      onFocus={() => setFocusedField('contactNumber')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, ...getFocusStyle('contactNumber'), ...getErrorStyle('contactNumber') }}
                    />
                    {errors.contactNumber && <span style={{ fontSize: '12px', color: '#c05050' }}>{errors.contactNumber}</span>}
                  </div>
                </div>

                {/* Business Type dropdown */}
                <div style={fieldGroupStyle}>
                  <label style={labelStyle} htmlFor="businessType">What type of business are you running? *</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="businessType"
                      value={form.businessType}
                      onChange={e => { setForm(f => ({ ...f, businessType: e.target.value })); setErrors(er => ({ ...er, businessType: undefined })); }}
                      onFocus={() => setFocusedField('businessType')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle,
                        appearance: 'none',
                        paddingRight: '40px',
                        cursor: 'pointer',
                        color: form.businessType ? 'var(--text)' : 'var(--text-faint)',
                        ...getFocusStyle('businessType'),
                        ...getErrorStyle('businessType'),
                      }}
                    >
                      <option value="" disabled>Select your industry</option>
                      {BUSINESS_TYPES.map(t => (
                        <option key={t} value={t} style={{ background: '#1a1a1d', color: '#fff' }}>{t}</option>
                      ))}
                    </select>
                    <span style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-faint)',
                      pointerEvents: 'none',
                      fontSize: '12px',
                    }}>▼</span>
                  </div>
                  {errors.businessType && <span style={{ fontSize: '12px', color: '#c05050' }}>{errors.businessType}</span>}
                </div>

                {/* Challenges checkboxes */}
                <div style={fieldGroupStyle}>
                  <label style={labelStyle}>
                    What are your challenges with importing products right now?
                    <span style={{ color: 'var(--text-faint)', fontWeight: 400, marginLeft: '6px' }}>(Select all that apply) *</span>
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    padding: '4px 0',
                  }} className="challenges-grid">
                    {CHALLENGES.map(c => {
                      const checked = form.challenges.includes(c);
                      return (
                        <label
                          key={c}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            cursor: 'pointer',
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: `1.5px solid ${checked ? 'var(--gold)' : 'var(--border)'}`,
                            background: checked ? 'rgba(251,202,12,0.06)' : 'rgba(255,255,255,0.02)',
                            transition: 'all 0.15s',
                            fontSize: '13px',
                            fontWeight: checked ? 600 : 400,
                            color: checked ? 'var(--text)' : 'var(--text-muted)',
                            lineHeight: 1.4,
                          }}
                        >
                          <span
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '5px',
                              border: `2px solid ${checked ? 'var(--gold)' : 'var(--border-mid)'}`,
                              background: checked ? 'var(--gold)' : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '1px',
                              transition: 'all 0.15s',
                              fontSize: '11px',
                              color: '#0A0A0B',
                              fontWeight: 900,
                            }}
                          >
                            {checked && '✓'}
                          </span>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleChallenge(c)}
                            style={{ display: 'none' }}
                          />
                          {c}
                        </label>
                      );
                    })}
                  </div>
                  {errors.challenges && (
                    <span style={{ fontSize: '12px', color: '#c05050', marginTop: '4px' }}>{errors.challenges}</span>
                  )}
                </div>

                {/* Submit */}
                {submitError && (
                  <div style={{
                    padding: '12px 16px',
                    background: 'rgba(192,80,80,0.1)',
                    border: '1px solid rgba(192,80,80,0.35)',
                    borderRadius: '10px',
                    fontSize: '14px',
                    color: '#e07070',
                  }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '16px',
                    borderRadius: '12px',
                    marginTop: '4px',
                    fontFamily: 'Manrope, sans-serif',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitting ? 'Submitting…' : 'Submit Business Application →'}
                </button>

                <p style={{ fontSize: '12px', color: 'var(--text-faint)', textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
                  We'll review your details and get back to you within 24 hours. No commitment required.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .challenges-grid { grid-template-columns: 1fr !important; }
        }
        select option { background: #1a1a1d; color: #fff; }
      `}</style>
    </>
  );
}
