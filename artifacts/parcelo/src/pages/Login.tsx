import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const COUNTRY_CODES = [
  { code: '+256', flag: '🇺🇬', name: 'Uganda' },
  { code: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: '+255', flag: '🇹🇿', name: 'Tanzania' },
  { code: '+250', flag: '🇷🇼', name: 'Rwanda' },
  { code: '+1',   flag: '🇺🇸', name: 'USA' },
  { code: '+44',  flag: '🇬🇧', name: 'UK' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
];

type Step = 'phone' | 'otp' | 'success';

export default function Login() {
  const [step, setStep] = useState<Step>('phone');
  const [countryCode, setCountryCode] = useState('+256');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => { if (countdownRef.current) clearInterval(countdownRef.current); };
  }, []);

  const startCountdown = () => {
    setResendCountdown(30);
    countdownRef.current = setInterval(() => {
      setResendCountdown(n => {
        if (n <= 1) { clearInterval(countdownRef.current!); return 0; }
        return n - 1;
      });
    }, 1000);
  };

  const fullNumber = `${countryCode}${phone.replace(/\s/g, '')}`;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7) {
      setPhoneError('Enter a valid WhatsApp number');
      return;
    }
    setPhoneError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep('otp');
      startCountdown();
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    }, 800);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    setOtpError('');
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) otpRefs.current[index - 1]?.focus();
    if (e.key === 'ArrowRight' && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(''));
      otpRefs.current[5]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.some(d => !d)) {
      setOtpError('Enter the 6-digit code sent to your WhatsApp');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep('success');
    }, 900);
  };

  const handleResend = () => {
    if (resendCountdown > 0) return;
    setOtp(['', '', '', '', '', '']);
    setOtpError('');
    startCountdown();
    setTimeout(() => otpRefs.current[0]?.focus(), 50);
  };

  return (
    <>
      <Nav />

      <section style={{
        minHeight: 'calc(100vh - 62px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px 80px',
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>

          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src={import.meta.env.BASE_URL + 'parcelo-logo.png'} alt="Parcelo" style={{ width: '32px', height: '32px' }} />
              <span style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '20px' }}>Parcelo</span>
            </Link>
          </div>

          {/* Card */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '36px 32px',
          }}>

            {/* ── STEP 1: PHONE ── */}
            {step === 'phone' && (
              <>
                <div style={{ marginBottom: '28px' }}>
                  <h1 style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    margin: '0 0 8px',
                  }}>
                    Sign in to Parcelo
                  </h1>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                    Enter your WhatsApp number and we'll send you a one-time code.
                  </p>
                </div>

                <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.02em' }}>
                      WhatsApp Number
                    </label>
                    <div style={{
                      display: 'flex',
                      border: `1px solid ${phoneError ? 'rgba(192,80,80,0.7)' : 'var(--border-mid)'}`,
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.04)',
                      transition: 'border-color 0.2s',
                    }}
                      onFocus={() => {}}
                    >
                      <select
                        value={countryCode}
                        onChange={e => setCountryCode(e.target.value)}
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: 'none',
                          borderRight: '1px solid var(--border-mid)',
                          color: 'var(--text)',
                          fontSize: '14px',
                          fontFamily: 'Manrope, sans-serif',
                          padding: '0 10px',
                          cursor: 'pointer',
                          outline: 'none',
                          minWidth: '90px',
                          flexShrink: 0,
                        }}
                      >
                        {COUNTRY_CODES.map(c => (
                          <option key={c.code} value={c.code} style={{ background: '#1a1a1d' }}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder="792 170 962"
                        value={phone}
                        onChange={e => {
                          setPhone(e.target.value);
                          if (phoneError) setPhoneError('');
                        }}
                        autoComplete="tel"
                        style={{
                          flex: 1,
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--text)',
                          fontSize: '15px',
                          fontFamily: 'Manrope, sans-serif',
                          padding: '14px 14px',
                          outline: 'none',
                          minWidth: 0,
                        }}
                      />
                    </div>
                    {phoneError && (
                      <span style={{ fontSize: '12px', color: '#c05050' }}>{phoneError}</span>
                    )}
                    <p style={{ fontSize: '12px', color: 'var(--text-faint)', margin: 0 }}>
                      We'll send a 6-digit code to this WhatsApp number
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold"
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '15px',
                      borderRadius: '10px',
                      fontFamily: 'Manrope, sans-serif',
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {submitting ? 'Sending…' : '💬 Send Code via WhatsApp'}
                  </button>
                </form>

                <p style={{ fontSize: '13px', color: 'var(--text-faint)', textAlign: 'center', marginTop: '24px', marginBottom: 0 }}>
                  Don't have an account?{' '}
                  <a href="https://wa.me/256792170962" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>
                    Chat with us →
                  </a>
                </p>
              </>
            )}

            {/* ── STEP 2: OTP ── */}
            {step === 'otp' && (
              <>
                <div style={{ marginBottom: '28px' }}>
                  <button
                    onClick={() => { setStep('phone'); setOtp(['', '', '', '', '', '']); setOtpError(''); }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '13px',
                      cursor: 'pointer',
                      padding: '0',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'Manrope, sans-serif',
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    ← Back
                  </button>
                  <h1 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 8px' }}>
                    Check WhatsApp
                  </h1>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                    We sent a 6-digit code to{' '}
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{fullNumber}</span>
                  </p>
                </div>

                <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.02em' }}>
                      Enter Code
                    </label>
                    <div
                      style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}
                      onPaste={handleOtpPaste}
                    >
                      {otp.map((digit, i) => (
                        <input
                          key={i}
                          ref={el => { otpRefs.current[i] = el; }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={e => handleOtpChange(i, e.target.value)}
                          onKeyDown={e => handleOtpKeyDown(i, e)}
                          style={{
                            width: '48px',
                            height: '56px',
                            textAlign: 'center',
                            fontSize: '22px',
                            fontWeight: 700,
                            fontFamily: 'Manrope, sans-serif',
                            background: digit ? 'rgba(251,202,12,0.08)' : 'rgba(255,255,255,0.04)',
                            border: `1.5px solid ${
                              otpError ? 'rgba(192,80,80,0.7)' :
                              digit ? 'rgba(251,202,12,0.5)' :
                              'var(--border-mid)'
                            }`,
                            borderRadius: '10px',
                            color: 'var(--text)',
                            outline: 'none',
                            transition: 'border-color 0.15s, background 0.15s',
                            caretColor: 'var(--gold)',
                          }}
                          onFocus={e => {
                            e.target.style.borderColor = 'var(--gold)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(251,202,12,0.12)';
                          }}
                          onBlur={e => {
                            e.target.style.borderColor = digit ? 'rgba(251,202,12,0.5)' : 'var(--border-mid)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      ))}
                    </div>
                    {otpError && (
                      <span style={{ fontSize: '12px', color: '#c05050' }}>{otpError}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold"
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '15px',
                      borderRadius: '10px',
                      fontFamily: 'Manrope, sans-serif',
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {submitting ? 'Verifying…' : 'Verify Code →'}
                  </button>
                </form>

                <p style={{ fontSize: '13px', color: 'var(--text-faint)', textAlign: 'center', marginTop: '20px', marginBottom: 0 }}>
                  Didn't receive it?{' '}
                  <button
                    onClick={handleResend}
                    disabled={resendCountdown > 0}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: resendCountdown > 0 ? 'var(--text-faint)' : 'var(--gold)',
                      cursor: resendCountdown > 0 ? 'default' : 'pointer',
                    }}
                  >
                    {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend code'}
                  </button>
                </p>
              </>
            )}

            {/* ── STEP 3: SUCCESS ── */}
            {step === 'success' && (
              <div style={{ textAlign: 'center', padding: '8px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(251,202,12,0.12)',
                  border: '1.5px solid rgba(251,202,12,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  margin: '0 auto 20px',
                }}>
                  ✓
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 10px' }}>
                  You're signed in!
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 28px', lineHeight: 1.6 }}>
                  Welcome back to Parcelo. You can now track your orders and manage your account.
                </p>
                <Link
                  href="/"
                  className="btn-gold"
                  style={{
                    display: 'block',
                    padding: '14px',
                    fontSize: '15px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Go to Dashboard →
                </Link>
              </div>
            )}

          </div>

          {step !== 'success' && (
            <p style={{ fontSize: '12px', color: 'var(--text-faint)', textAlign: 'center', marginTop: '20px', lineHeight: 1.7 }}>
              By signing in you agree to our{' '}
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>Terms of Service</a>
              {' '}and{' '}
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>Privacy Policy</a>.
            </p>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}
