import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './ui/loading-spinner';

// eslint-disable-next-line react-refresh/only-export-components
const Features = lazy(() => import('@/components/Features'));

// In the render:
<Suspense fallback={<LoadingSpinner />}>
  <Features />
</Suspense> 