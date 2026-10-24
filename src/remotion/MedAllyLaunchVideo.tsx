import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const teal = '#36b7b5';
const violet = '#4b2683';
const navy = '#0A2540';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const fade = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

const wordmarkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  color: 'white',
  fontFamily: 'Inter, SF Pro Display, Arial, sans-serif',
  fontWeight: 900,
  letterSpacing: -5,
  fontSize: 112,
  lineHeight: 0.9,
};

const OrbitalGraphic: React.FC<{ progress: number }> = ({ progress }) => {
  const nodes = [
    { label: 'Listen', angle: -165, color: teal },
    { label: 'Draft', angle: -65, color: '#9ce7e3' },
    { label: 'Reason', angle: 20, color: '#b8a5ff' },
    { label: 'Code', angle: 105, color: '#fccc03' },
    { label: 'Review', angle: 178, color: '#ffffff' },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        right: 92,
        top: 102,
        width: 610,
        height: 610,
        transform: `perspective(900px) rotateX(58deg) rotateZ(${progress * 46 - 18}deg)`,
        transformStyle: 'preserve-3d',
        opacity: interpolate(progress, [0, 0.18, 1], [0, 1, 1], clamp),
      }}
    >
      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          style={{
            position: 'absolute',
            inset: 42 + ring * 72,
            border: `2px solid rgba(54,183,181,${0.28 - ring * 0.04})`,
            borderRadius: '50%',
            boxShadow: '0 0 48px rgba(54,183,181,0.12)',
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          left: 245,
          top: 245,
          width: 120,
          height: 120,
          borderRadius: 36,
          background: 'rgba(255,255,255,0.96)',
          transform: 'rotateZ(18deg) rotateX(-58deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 28px 80px rgba(0,0,0,0.45), 0 0 64px rgba(54,183,181,0.35)',
        }}
      >
        <Img src={staticFile('logo.svg')} style={{ width: 92, height: 92, objectFit: 'contain' }} />
      </div>

      {nodes.map((node, index) => {
        const radius = 250;
        const radians = ((node.angle + progress * 22) * Math.PI) / 180;
        const x = 305 + Math.cos(radians) * radius;
        const y = 305 + Math.sin(radians) * radius;
        return (
          <div
            key={node.label}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 126,
              height: 42,
              marginLeft: -63,
              marginTop: -21,
              borderRadius: 999,
              background: 'rgba(0,0,0,0.62)',
              border: '1px solid rgba(255,255,255,0.16)',
              color: 'white',
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: `rotateZ(${18 - progress * 46}deg) rotateX(-58deg) scale(${interpolate(
                progress,
                [0, 0.25 + index * 0.05, 1],
                [0.75, 1, 1],
                clamp,
              )})`,
              boxShadow: `0 0 42px ${node.color}33`,
            }}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
};

const SceneOne: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = frame / (4 * fps);
  const imageScale = interpolate(frame, [0, 4 * fps], [1.08, 1.0], clamp);
  const copyOpacity = fade(frame, 8, 32);
  const copyY = interpolate(frame, [8, 36], [34, 0], clamp);

  return (
    <AbsoluteFill style={{ background: '#02040a' }}>
      <Img
        src={staticFile('images/medally/brand-hero-calm-day.png')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${imageScale})`,
          opacity: 0.82,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(10,37,64,0.96) 0%, rgba(10,37,64,0.82) 42%, rgba(10,37,64,0.18) 100%)',
        }}
      />
      <OrbitalGraphic progress={progress} />
      <div
        style={{
          position: 'absolute',
          left: 92,
          top: 126,
          width: 760,
          opacity: copyOpacity,
          transform: `translateY(${copyY}px)`,
        }}
      >
        <div style={wordmarkStyle}>
          <span
            style={{
              width: 112,
              height: 112,
              borderRadius: 30,
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Img src={staticFile('logo.svg')} style={{ width: 86, height: 86, objectFit: 'contain' }} />
          </span>
          MedAlly
        </div>
        <div
          style={{
            marginTop: 46,
            color: 'white',
            fontFamily: 'Inter, SF Pro Display, Arial, sans-serif',
            fontWeight: 800,
            fontSize: 78,
            lineHeight: 0.98,
            letterSpacing: -3.5,
          }}
        >
          The clinical command layer for every encounter.
        </div>
        <div
          style={{
            marginTop: 34,
            maxWidth: 650,
            color: 'rgba(255,255,255,0.78)',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 31,
            lineHeight: 1.35,
          }}
        >
          Listen, draft, reason, code, and review from one physician-controlled context.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const SceneTwo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const imageX = interpolate(frame, [0, 4 * fps], [-80, 0], clamp);
  const items = [
    'Ambient documentation',
    'Clinical reasoning',
    'Revenue workflow',
    'Physician review',
  ];

  return (
    <AbsoluteFill style={{ background: '#02040a' }}>
      <Img
        src={staticFile('images/medally/brand-two-screens-one-truth.png')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `translateX(${imageX}px) scale(1.05)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(10,37,64,0.94) 0%, rgba(10,37,64,0.70) 35%, rgba(10,37,64,0.08) 100%)',
        }}
      />
      <div style={{ position: 'absolute', left: 96, top: 92, width: 780 }}>
        <div
          style={{
            color: '#bdf4ef',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: 6,
            textTransform: 'uppercase',
            opacity: fade(frame, 0, 18),
          }}
        >
          From visit to finished work
        </div>
        <div
          style={{
            marginTop: 26,
            color: 'white',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 76,
            lineHeight: 0.98,
            fontWeight: 850,
            letterSpacing: -3,
            opacity: fade(frame, 8, 30),
          }}
        >
          The full clinical admin burden, not just one note.
        </div>
        <div style={{ marginTop: 54, display: 'grid', gap: 18 }}>
          {items.map((item, index) => {
            const start = 22 + index * 14;
            return (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  opacity: fade(frame, start, start + 14),
                  transform: `translateX(${interpolate(frame, [start, start + 16], [-42, 0], clamp)}px)`,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    background: index % 2 === 0 ? teal : '#b8a5ff',
                    boxShadow: `0 0 28px ${index % 2 === 0 ? teal : violet}`,
                  }}
                />
                <div
                  style={{
                    color: 'rgba(255,255,255,0.88)',
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: 32,
                    fontWeight: 750,
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const SceneThree: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = interpolate(frame, [0, 4 * fps], [1.0, 1.08], clamp);

  return (
    <AbsoluteFill style={{ background: '#02040a' }}>
      <Img
        src={staticFile('images/medally/brand-16-agents-grid.png')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(0deg, rgba(10,37,64,0.78), rgba(10,37,64,0.04)), radial-gradient(circle at 18% 52%, rgba(10,37,64,0.74), transparent 48%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 92,
          bottom: 86,
          width: 860,
          opacity: fade(frame, 6, 28),
        }}
      >
        <div
          style={{
            color: '#bdf4ef',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: 6,
            textTransform: 'uppercase',
          }}
        >
          Agent orchestration
        </div>
        <div
          style={{
            marginTop: 24,
            color: 'white',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 76,
            lineHeight: 0.98,
            fontWeight: 850,
            letterSpacing: -3,
          }}
        >
          Every assistant works from the same clinical context.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const SceneFour: React.FC = () => {
  const frame = useCurrentFrame();
  const rows = [
    ['70%', 'less documentation time'],
    ['93%', 'diagnostic accuracy target'],
    ['99.7%', 'coding precision target'],
  ];

  return (
    <AbsoluteFill style={{ background: navy }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 0%, rgba(54,183,181,0.22), transparent 36%), radial-gradient(circle at 80% 80%, rgba(75,38,131,0.28), transparent 42%)',
        }}
      />
      <div style={{ position: 'absolute', left: 92, top: 88, width: 1040 }}>
        <div style={{ ...wordmarkStyle, fontSize: 86, letterSpacing: -3 }}>
          <span
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Img src={staticFile('logo.svg')} style={{ width: 68, height: 68, objectFit: 'contain' }} />
          </span>
          MedAlly
        </div>
        <div
          style={{
            marginTop: 42,
            color: 'white',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 74,
            lineHeight: 1,
            fontWeight: 850,
            letterSpacing: -3,
            opacity: fade(frame, 4, 24),
          }}
        >
          Give clinicians their clinical day back.
        </div>
        <div style={{ display: 'flex', gap: 44, marginTop: 74 }}>
          {rows.map(([value, label], index) => {
            const start = 24 + index * 12;
            return (
              <div
                key={value}
                style={{
                  width: 340,
                  borderLeft: '2px solid rgba(255,255,255,0.16)',
                  paddingLeft: 28,
                  opacity: fade(frame, start, start + 16),
                  transform: `translateY(${interpolate(frame, [start, start + 18], [28, 0], clamp)}px)`,
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: 78,
                    fontWeight: 900,
                    letterSpacing: -3,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    marginTop: 10,
                    color: 'rgba(255,255,255,0.55)',
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: 21,
                    textTransform: 'uppercase',
                    letterSpacing: 3,
                    lineHeight: 1.2,
                  }}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const MedAllyLaunchVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: '#02040a' }}>
      <Sequence durationInFrames={120}>
        <SceneOne />
      </Sequence>
      <Sequence from={120} durationInFrames={120}>
        <SceneTwo />
      </Sequence>
      <Sequence from={240} durationInFrames={120}>
        <SceneThree />
      </Sequence>
      <Sequence from={360} durationInFrames={120}>
        <SceneFour />
      </Sequence>
    </AbsoluteFill>
  );
};
