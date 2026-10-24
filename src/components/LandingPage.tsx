import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './ui/loading-spinner';

const Features = lazy(() => import('@/components/Features'));

// In the render:
<Suspense fallback={<LoadingSpinner />}>
  <Features />
</Suspense>
