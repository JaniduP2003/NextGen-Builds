'use client';

import { Box, Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import DecryptedText from './components/DecryptedText';
import SplitText from "./components/SplitText";



// Dynamically import SplineWrapper to avoid SSR issues
const SplineWrapper = dynamic(() => import('./components/SplineWrapper'), { ssr: false });

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

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
    top: '20%',
    left: '16%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 10,
    border: '2px solid red', // testing

    display: 'flex',           // must be 'flex' to use flex properties
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'stretch',
    

  }}
>
  <SplitText
  text="Hello, GSAP!"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete} 

    //  style={{
    //   fontSize: 'clamp(2rem, 6vw, 5rem)',  // responsive size
    //   fontWeight: 700,
    //   color: '#222',                       // dark gray for white background
    //   lineHeight: 1.1,
    //   whiteSpace: 'pre-line',              // allows \n to make new lines
    // }}

      style={{
    fontSize: 'clamp(2rem, 6vw, 5rem)',
    fontWeight: 800,
    textTransform: 'uppercase',
    background: 'linear-gradient(90deg, #060301ff, #ee9609ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    whiteSpace: 'pre-line',
    
  }}

  />

</Box>
      
    </Box>
  );
}
