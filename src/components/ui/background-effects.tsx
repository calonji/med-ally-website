import { type FC } from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectsProps {
  variant?: 'default' | 'gradient' | 'mesh' | 'dots' | 'waves' | 'circuit' | 'noise' | 'grid3d';
  className?: string;
}

export const BackgroundEffects: FC<BackgroundEffectsProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-purple-100" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-conic from-blue-500/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-conic from-purple-500/30 via-transparent to-transparent blur-3xl" />
      </>
    ),
    gradient: (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              'radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </>
    ),
    mesh: (
      <>
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      </>
    ),
    dots: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, #80808012 1px, transparent 0)',
          backgroundSize: '32px 32px' 
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/90 to-transparent" />
      </div>
    ),
    waves: (
      <>
        <div className="absolute inset-0 bg-white" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <pattern id="pattern-circles" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="16" cy="16" r="16" fill="#000"/>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/90 to-transparent" />
      </>
    ),
    circuit: (
      <>
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-[0.15]" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/90 to-transparent" />
      </>
    ),
    noise: (
      <>
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            filter: 'contrast(350%) brightness(90%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/90 to-transparent" />
      </>
    ),
    grid3d: (
      <>
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(30deg)',
            transformOrigin: 'center top',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </>
    )
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {variants[variant]}
    </div>
  );
}; 