import React from 'react';
import { Link } from 'wouter';

const footerLinkStyle: React.CSSProperties = {
  fontSize: '13px',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.15s',
};

const FooterLink = ({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={footerLinkStyle}
        onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
        onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        {children}
      </a>
    );
  }
  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        style={footerLinkStyle}
        onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
        onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      style={footerLinkStyle}
      onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--text)')}
      onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--text-muted)')}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer style={{ padding: '56px 0 28px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: 'auto', padding: '0 var(--gutter)' }}>

        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '40px'
        }}>
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <img src={import.meta.env.BASE_URL + 'parcelo-logo.png'} alt="Parcelo Logo" style={{ width: '24px', height: '24px' }} />
              <span style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '16px' }}>Parcelo</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-faint)', maxWidth: '220px', lineHeight: 1.6, margin: 0 }}>
              Personal Shopping Concierge. Bringing the world to your doorstep in Kampala.
            </p>
          </div>

          {/* Col 2 — Company */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '16px' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FooterLink href="/#about">About Us</FooterLink>
              <FooterLink href="/prohibited-items">Prohibited Items</FooterLink>
              <FooterLink href="https://wa.me/256792170962" external>Contact Us</FooterLink>
            </div>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '16px' }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FooterLink href="https://wa.me/256792170962" external>Personal Shopping</FooterLink>
              <FooterLink href="/for-business">For Business</FooterLink>
              <FooterLink href="/tracking">Track Order</FooterLink>
              <FooterLink href="/#faq">FAQ</FooterLink>
            </div>
          </div>

          {/* Col 4 — Get in Touch */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '16px' }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+256792170962" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >💬 +256 792 170 962</a>
              <a href="mailto:info@parcelo.ug" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >✉️ info@parcelo.ug</a>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📍 Kampala, Uganda</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          marginTop: '40px',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ fontSize: '12px', color: 'var(--text-faint)' }}>
            © 2026 Parcelo. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <FooterLink href="/privacy">
              <span style={{ fontSize: '12px', color: 'var(--text-faint)' }}>Privacy</span>
            </FooterLink>
            <FooterLink href="/terms">
              <span style={{ fontSize: '12px', color: 'var(--text-faint)' }}>Terms</span>
            </FooterLink>
            <FooterLink href="/prohibited-items">
              <span style={{ fontSize: '12px', color: 'var(--text-faint)' }}>Prohibited Items</span>
            </FooterLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
