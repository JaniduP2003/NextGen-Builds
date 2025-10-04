'use client';

import { Box, Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import DecryptedText from './components/DecryptedText';


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
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 10,
  }}
>
  <DecryptedText
    text={`NextGen\nBuilds`}
    speed={80}
    maxIterations={20}
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"
    className="revealed"
    encryptedClassName="encrypted"
    animateOn="view"
    revealDirection="center"

     style={{
      fontSize: 'clamp(2rem, 6vw, 5rem)',  // responsive size
      fontWeight: 700,
      color: '#222',                       // dark gray for white background
      lineHeight: 1.1,
      whiteSpace: 'pre-line',              // allows \n to make new lines
    }}

  />

 
</Box>
      
    </Box>
  );
}
