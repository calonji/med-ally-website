import { type FC } from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neural Network Background */}
      <path 
        className="opacity-20"
        d="M4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20Z" 
        stroke="url(#network-gradient)"
        strokeWidth="1.5"
      />

      {/* AI Circuit Paths */}
      <path
        className="animate-pulse opacity-50"
        d="M12 20h4m4 0h4m4 0h4M20 12v4m0 8v4"
        stroke="url(#circuit-gradient)"
        strokeWidth="0.5"
        strokeDasharray="1 2"
      />

      {/* Medical Cross */}
      <path
        d="M20 13v14M13 20h14"
        stroke="#1E88E5"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="animate-pulse"
      />

      {/* AI Connection Points */}
      <circle cx="20" cy="20" r="2" fill="#1E88E5" className="animate-pulse" />
      <circle cx="13" cy="20" r="1.5" fill="#1E88E5" />
      <circle cx="27" cy="20" r="1.5" fill="#1E88E5" />
      <circle cx="20" cy="13" r="1.5" fill="#1E88E5" />
      <circle cx="20" cy="27" r="1.5" fill="#1E88E5" />

      {/* Gradients */}
      <defs>
        <linearGradient id="network-gradient" x1="4" y1="4" x2="36" y2="36">
          <stop stopColor="#1E88E5" />
          <stop offset="1" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="circuit-gradient" x1="12" y1="12" x2="28" y2="28">
          <stop stopColor="#1E88E5" />
          <stop offset="1" stopColor="#1565C0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
); 