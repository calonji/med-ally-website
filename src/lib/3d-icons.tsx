import { type IconProps } from '@/lib/medical-icons';

interface Icon3DProps {
  icon: string;
  color?: string;
  className?: string;
}

export const Icon3D = ({ icon, color = 'blue', className }: Icon3DProps) => {
  const icons = {
    Shield: (props: IconProps) => (
      <svg viewBox="0 0 24 24" {...props}>
        {/* SVG paths */}
      </svg>
    ),
    // ... other icons
  };

  const IconComponent = icons[icon as keyof typeof icons];
  return IconComponent ? <IconComponent className={className} style={{ color }} /> : null;
}; 