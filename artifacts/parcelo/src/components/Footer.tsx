import React from 'react';

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

          {/* Col 2 */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '16px' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About Us', 'Blog', 'Careers'].map(link => (
                <a key={link} href="#" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{link}</a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '16px' }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Personal Shopping</a>
              <a href="#" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>For Business</a>
              <a href="#faq" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>FAQ</a>
              <a href="#" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Privacy Policy</a>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '16px' }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+256792170962" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>💬 +256 792 170 962</a>
              <a href="mailto:info@parcelo.ug" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>✉️ info@parcelo.ug</a>
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
            {['Privacy', 'Terms', 'Cookies'].map(link => (
              <a key={link} href="#" style={{ fontSize: '12px', color: 'var(--text-faint)' }}>{link}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
