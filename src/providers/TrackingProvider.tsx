import { type FC, type ReactNode, useEffect } from 'react';
import { Analytics } from '@/utils/analytics';

interface TrackingProviderProps {
  children: ReactNode;
  measurementId: string;
}

export const TrackingProvider: FC<TrackingProviderProps> = ({ 
  children, 
  measurementId 
}) => {
  useEffect(() => {
    Analytics.init(measurementId);
  }, [measurementId]);

  return <>{children}</>;
}; 