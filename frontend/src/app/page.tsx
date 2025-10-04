'use client';

import { Box, Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import SplineWrapper to avoid SSR issues
const SplineWrapper = dynamic(() => import('./components/SplineWrapper'), { ssr: false });

export default function LandingPage() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'rgb(128, 128, 128)',
        overflow: 'hidden',
      }}
    >
      {/* Fullscreen Spline animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <SplineWrapper />
      </Box>

      {/* Top buttons */}
      
    </Box>
  );
}
