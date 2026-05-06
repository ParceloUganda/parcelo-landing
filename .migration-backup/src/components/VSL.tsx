import React, { useState } from 'react';

// Paste your YouTube embed URL here when ready, e.g.:
// "https://www.youtube.com/embed/YOUR_VIDEO_ID"
// or a Vimeo embed URL:
// "https://player.vimeo.com/video/YOUR_VIDEO_ID"
const VIDEO_EMBED_URL = "";

const VSL = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="fade-up" style={{ padding: '0 0 72px', margin: '0 24px' }}>
      <div style={{
        maxWidth: '840px',
        margin: 'auto',
        borderRadius: '16px',
        border: '1.5px solid var(--gold)',
        boxShadow: '0 0 48px rgba(251,202,12,0.1)',
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg, #181610 0%, #28261c 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: VIDEO_EMBED_URL ? 'pointer' : 'default',
      }}
      onClick={() => { if (VIDEO_EMBED_URL) setPlaying(true); }}
      >
        {VIDEO_EMBED_URL && playing ? (
          <iframe
            src={`${VIDEO_EMBED_URL}?autoplay=1&rel=0&modestbranding=1`}
            title="Parcelo — how it works"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 60% at center, rgba(251,202,12,0.06), transparent)',
              pointerEvents: 'none'
            }} />
            <button
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'var(--gold)',
                boxShadow: '0 0 0 14px rgba(251,202,12,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0A0A0B',
                fontSize: '24px',
                border: 'none',
                cursor: VIDEO_EMBED_URL ? 'pointer' : 'default',
                transition: 'transform 0.2s',
                position: 'relative',
                zIndex: 1,
              }}
              onMouseOver={e => { if (VIDEO_EMBED_URL) e.currentTarget.style.transform = 'scale(1.08)'; }}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              data-testid="button-play-vsl"
              aria-label="Play video"
            >
              ▶
            </button>
            {!VIDEO_EMBED_URL && (
              <div style={{
                position: 'absolute',
                bottom: '20px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                Video coming soon
              </div>
            )}
          </>
        )}
      </div>
      {VIDEO_EMBED_URL && (
        <p style={{ fontSize: '13px', color: 'var(--text-faint)', textAlign: 'center', marginTop: '16px' }}>
          See how Parcelo works in 60 seconds.
        </p>
      )}
    </section>
  );
};

export default VSL;
