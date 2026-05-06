import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

// TODO: replace with real auth state when auth is implemented
const MOCK_LOGGED_IN = false;

const NAV_LINKS = [
  { label: 'Tracking', href: '/tracking' },
  { label: 'For Business', href: '/for-business' },
  { label: 'Login', href: '/login' },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn] = useState(MOCK_LOGGED_IN);
  const [location] = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isRoute = (href: string) => href.startsWith('/') && location === href;

  const linkEl = (label: string, href: string, onClick?: () => void) => {
    const active = isRoute(href);
    const sharedStyle: React.CSSProperties = {
      fontSize: '14px',
      fontWeight: 600,
      color: active ? 'var(--gold)' : 'var(--text-muted)',
      transition: 'color 0.15s',
      textDecoration: 'none',
      display: 'block',
    };
    const handlers = {
      onMouseOver: (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = active ? 'var(--gold)' : 'var(--text)';
      },
      onMouseOut: (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = active ? 'var(--gold)' : 'var(--text-muted)';
      },
    };

    if (href.startsWith('/')) {
      return (
        <Link
          key={label}
          href={href}
          style={sharedStyle}
          onClick={onClick}
          {...handlers}
        >
          {label}
        </Link>
      );
    }
    return (
      <a
        key={label}
        href={href}
        style={sharedStyle}
        onClick={onClick}
        {...handlers}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(14px)',
        background: 'var(--bg-nav)',
        borderBottom: '1px solid var(--border)',
        height: '62px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 'var(--container)',
          margin: 'auto',
          padding: '0 var(--gutter)',
          height: '100%',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src={import.meta.env.BASE_URL + 'parcelo-logo.png'} alt="Parcelo Logo" style={{ width: '28px', height: '28px' }} />
            <span style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '18px' }}>Parcelo</span>
          </Link>

          <div className="nav-center" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {NAV_LINKS.map(({ label, href }) => linkEl(label, href))}
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {isLoggedIn ? (
              <a
                href="/dashboard"
                className="btn-gold nav-cta-full"
                style={{ padding: '10px 20px', fontSize: '14px' }}
                data-testid="link-dashboard"
              >
                Dashboard
              </a>
            ) : (
              <a
                href="https://wa.me/256792170962"
                className="btn-gold nav-cta-full"
                style={{ padding: '10px 20px', fontSize: '14px' }}
                data-testid="link-whatsapp-quote"
              >
                Get Free Quote
              </a>
            )}

            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                flexDirection: 'column',
                gap: '5px',
                padding: '4px 0',
                cursor: 'pointer',
                alignItems: 'flex-end',
              }}
            >
              <span style={{ width: '22px', height: '2px', background: 'var(--text)', borderRadius: '2px', display: 'block' }} />
              <span style={{ width: '22px', height: '2px', background: 'var(--text)', borderRadius: '2px', display: 'block' }} />
              <span style={{ width: '22px', height: '2px', background: 'var(--text)', borderRadius: '2px', display: 'block' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '75vw',
          maxWidth: '300px',
          background: '#131315',
          borderLeft: '1px solid var(--border)',
          zIndex: 300,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '18px 20px' }}>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: '1px solid var(--border-mid)',
              borderRadius: '50%',
              color: 'var(--text-muted)',
              width: '32px',
              height: '32px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.borderColor = 'var(--text-muted)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--border-mid)';
            }}
          >
            ✕
          </button>
        </div>

        <nav style={{ flex: 1, padding: '8px 0' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <div key={label} style={{ padding: '0' }}>
              {linkEl(label, href, () => setMenuOpen(false))}
            </div>
          ))}
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid var(--border)' }}>
          <a
            href="https://wa.me/256792170962"
            className="btn-gold"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', textAlign: 'center', padding: '14px 20px', fontSize: '15px' }}
          >
            💬 Get Free Quote
          </a>
        </div>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 299,
          }}
        />
      )}
    </>
  );
};

export default Nav;
