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
        border: '2px solid red', //tetsting
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

      {/* Centered styled text */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 2,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            textShadow: '0 0 15px rgba(148, 19, 19, 0.5)',
          }}
        >
          Welcome to NextGen Builds
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontWeight: 300,
            color: 'rgba(178, 42, 42, 0.8)',
          }}
        >
          Innovating the future, one build at a time.
        </Typography>
         </Box>
      
    </Box>
  );
}
