import { type SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

export const MedicalIcons = {
  AI: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      {/* SVG paths */}
    </svg>
  ),
  Brain: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      {/* SVG paths */}
    </svg>
  ),
  Integration: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      {/* SVG paths */}
    </svg>
  ),
  DNA: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="currentColor" />
    </svg>
  )
};

export default MedicalIcons; 