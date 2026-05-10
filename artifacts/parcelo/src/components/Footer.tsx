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

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '34px',
      height: '34px',
      borderRadius: '8px',
      border: '1px solid var(--border)',
      color: 'var(--text-muted)',
      textDecoration: 'none',
      transition: 'border-color 0.15s, color 0.15s',
    }}
    onMouseOver={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
      (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
    }}
    onMouseOut={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
      (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
    }}
  >
    {children}
  </a>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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
            <p style={{ fontSize: '13px', color: 'var(--text-faint)', maxWidth: '220px', lineHeight: 1.6, margin: '0 0 20px' }}>
              Personal Shopping Concierge. Bringing the world to your doorstep in Kampala.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <SocialIcon href="https://www.facebook.com/profile.php?id=61589677193724" label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/parcelofreight1/" label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/120924130" label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
            </div>
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
