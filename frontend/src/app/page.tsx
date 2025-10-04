'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

// Dynamically import SplineWrapper to avoid SSR issues
const SplineWrapper = dynamic(() => import('./components/SplineWrapper'), { ssr: false });

export default function LandingPage() {
  return (
    <SplineWrapper />
  );
}
