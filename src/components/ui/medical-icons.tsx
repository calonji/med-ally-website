import { type FC, type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

interface Icon3DProps {
  icon: React.ReactNode;
  color?: string;
  shadowColor?: string;
}

export const MedicalIcons = {
  Brain: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16 2v2c1.84.5 3.2 2.07 3.2 4 0 .34-.05.67-.13 1H22v3h-2.1c-.46.98-1.24 1.77-2.23 2.23v2.54c1.48.56 2.63 1.88 2.93 3.23H22v3h-3c-.89 0-1.67-.39-2.23-1-1.14.97-2.86 1.03-4.77 1V19h-2v4H6v-4H4v-3h2.03c.29-1.35 1.44-2.67 2.92-3.23v-2.54C7.33 9.5 6.28 8.13 6.05 6.5H4v-3h2v-.5C6 1.78 7.78 0 10 0h4c1.11 0 2 .89 2 2M10 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
      />
    </svg>
  ),
  
  Stethoscope: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 8C19.56 8 20 8.43 20 9S19.56 10 19 10 18 9.57 18 9 18.44 8 19 8M2 2V11C2 13.96 4.19 16.5 7.14 16.91C7.76 19.92 10.42 22 13.5 22C17.09 22 20 19.09 20 15.5V11.81C21.16 11.39 22 10.29 22 9C22 7.34 20.66 6 19 6S16 7.34 16 9C16 10.29 16.84 11.4 18 11.81V15.41C18 17.91 16 19.91 13.5 19.91C11.5 19.91 9.82 18.7 9.22 16.9C12 16.3 14 13.8 14 11V2H10V5H12V11C12 13.21 10.21 15 8 15S4 13.21 4 11V5H6V2H2Z"
      />
    </svg>
  ),

  DNA: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4,2H6V4C6,5.44 6.68,6.61 7.88,7.78C8.74,8.61 9.89,9.41 11.09,10.2L9.26,11.39C8.27,10.72 7.31,10 6.5,9.21C5.07,7.82 4,6.1 4,4V2M18,2H20V4C20,6.1 18.93,7.82 17.5,9.21C16.09,10.59 14.29,11.73 12.54,12.84C10.79,13.95 9.09,15.04 7.88,16.22C6.68,17.39 6,18.56 6,20V22H4V20C4,17.9 5.07,16.18 6.5,14.79C7.91,13.41 9.71,12.27 11.46,11.16C13.21,10.05 14.91,8.96 16.12,7.78C17.32,6.61 18,5.44 18,4V2M14.74,12.61C15.73,13.28 16.69,14 17.5,14.79C18.93,16.18 20,17.9 20,20V22H18V20C18,18.56 17.32,17.39 16.12,16.22C15.26,15.39 14.11,14.59 12.91,13.8L14.74,12.61M7,3H17V4L16.94,4.5H7.06L7,4V3M7.68,6H16.32C15.84,6.69 15.14,7.32 14.28,7.95H9.72C8.86,7.32 8.16,6.69 7.68,6M6,3H18V4L17.94,4.5H6.06L6,4V3M6.68,6H17.32C16.84,6.69 16.14,7.32 15.28,7.95H8.72C7.86,7.32 7.16,6.69 6.68,6Z"
      />
    </svg>
  ),

  Lab: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H6M6,4H18V20H6V4M8,6V8H16V6H8M8,10V12H13V10H8M8,14V16H16V14H8Z"
      />
    </svg>
  ),

  Pulse: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7,2H17V4H7V2M5,6H19V8H5V6M3,10H21V12H3V10M5,14H19V16H5V14M7,18H17V20H7V18Z"
      />
    </svg>
  ),

  AI: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M9.75,8C9.34,8 9,8.34 9,8.75V9.5C9,9.91 9.34,10.25 9.75,10.25C10.16,10.25 10.5,9.91 10.5,9.5V8.75C10.5,8.34 10.16,8 9.75,8M14.25,8C13.84,8 13.5,8.34 13.5,8.75V9.5C13.5,9.91 13.84,10.25 14.25,10.25C14.66,10.25 15,9.91 15,9.5V8.75C15,8.34 14.66,8 14.25,8M12,17.5C14.33,17.5 16.25,15.58 16.25,13.25H7.75C7.75,15.58 9.67,17.5 12,17.5Z"
      />
    </svg>
  ),
};

export const FeatureIcons = {
  Security: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z"
      />
    </svg>
  ),
  
  Speed: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C7.03,3 3,7.03 3,12C3,16.97 7.03,21 12,21C16.97,21 21,16.97 21,12C21,7.03 16.97,3 12,3M12,19C8.13,19 5,15.87 5,12C5,8.13 8.13,5 12,5C15.87,5 19,8.13 19,12C19,15.87 15.87,19 12,19Z"
      />
    </svg>
  ),

  Voice: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
      />
    </svg>
  ),

  Analytics: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M9,17H7V10H9V17M13,17H11V7H13V17M17,17H15V13H17V17Z"
      />
    </svg>
  ),

  Integration: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,0A3,3 0 0,1 15,3A3,3 0 0,1 12,6A3,3 0 0,1 9,3A3,3 0 0,1 12,0M12,18A3,3 0 0,1 15,21A3,3 0 0,1 12,24A3,3 0 0,1 9,21A3,3 0 0,1 12,18M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
      />
    </svg>
  ),
};

export const Icon3D: FC<Icon3DProps> = ({ 
  icon,
  shadowColor = "rgba(37, 99, 235, 0.2)" 
}) => {
  return (
    <div
      className="relative"
      style={{
        filter: `drop-shadow(0 8px 16px ${shadowColor})`
      }}
    >
      <div className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
        {icon}
      </div>
    </div>
  );
}; 