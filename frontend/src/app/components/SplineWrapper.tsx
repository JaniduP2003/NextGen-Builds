'use client';

import { lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/kU9qOMOZI-uaOQKv/scene.splinecode" />
    </Suspense>
  );
}
