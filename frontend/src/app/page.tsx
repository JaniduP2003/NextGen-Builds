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


{/* Centered Sign-in Section */}
<Box
  sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4, // spacing between elements

      border: '2px solid red', //tetsting
  }}
>
  {/* Animated gradient heading */}
  <Box
    sx={{
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      fontWeight: 800,
      textTransform: 'uppercase',
  
      background: 'linear-gradient(90deg, #ffffffff, #ee0979)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      whiteSpace: 'pre-line',
      textAlign: 'center',

      border: '2px solid blue', //tetsting
    }}
  >
    <SplitText
      text="Build Your Ultimate Gaming Rig"
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
    />
  </Box>

  {/* Subheading / promotional text */}
  <Typography
    sx={{
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      fontWeight: 500,
      color: 'rgba(255, 255, 255, 0.85)',
      textAlign: 'center',
      maxWidth: '600px',
    }}
  >
    Choose the best components for your PC and get ready to play games like 
    <strong> Cyberpunk 2077</strong>, <strong>Call of Duty</strong>, 
    <strong> Fortnite</strong>, and <strong>Minecraft</strong> at max settings!
  </Typography>

  {/* Sign-in button with glass effect */}
  <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    gap: 2, // space between buttons
    mt: 2,   // margin top from heading
    justifyContent: 'center', // center horizontally
  }}
>


<Button
  sx={{
    // Layout & Typography
    mt: 2,
    px: { xs: 4, sm: 6 },
    py: { xs: 1.2, sm: 1.5 },
    fontSize: { xs: '0.95rem', sm: '1.125rem' },
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#fff',
    fontFamily: '"Geist", "Inter", system-ui, sans-serif',

    // Glass Base - Translucent with gradient hint
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)', // Safari
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '9999px', // pill shape

    // Inner depth for glass realism
    boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.05)',

    // Smooth motion
    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative',
    overflow: 'hidden',

    // Hover: Match the site's pink/orange glow
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(255, 107, 184, 0.2), rgba(255, 168, 107, 0.2))',
      border: '1px solid rgba(255, 107, 184, 0.4)',
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 8px 25px rgba(255, 107, 184, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)',
    },

    // Active state
    '&:active': {
      transform: 'translateY(0) scale(0.99)',
      transition: 'transform 0.1s ease',
    },

    // Focus for accessibility
    '&:focus-visible': {
      outline: '2px solid #ff6bb0',
      outlineOffset: '2px',
      boxShadow: '0 0 0 3px rgba(255, 107, 184, 0.3)',
    },

    // Motion preference
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none !important',
      transform: 'none !important',
    },
  }}
>
  Sign In
</Button>

  {/* Sign-in button with glass effect */}
  <Button
  sx={{
    // Layout & Typography
    mt: 2,
    px: { xs: 4, sm: 6 },
    py: { xs: 1.2, sm: 1.5 },
    fontSize: { xs: '0.95rem', sm: '1.125rem' },
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#fff',
    fontFamily: '"Geist", "Inter", system-ui, sans-serif',

    // Glass Base - Translucent with gradient hint
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)', // Safari
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '9999px', // pill shape

    // Inner depth for glass realism
    boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.05)',

    // Smooth motion
    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative',
    overflow: 'hidden',

    // Hover: Match the site's pink/orange glow
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(255, 107, 184, 0.2), rgba(255, 168, 107, 0.2))',
      border: '1px solid rgba(255, 107, 184, 0.4)',
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 8px 25px rgba(255, 107, 184, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)',
    },

    // Active state
    '&:active': {
      transform: 'translateY(0) scale(0.99)',
      transition: 'transform 0.1s ease',
    },

    // Focus for accessibility
    '&:focus-visible': {
      outline: '2px solid #ff6bb0',
      outlineOffset: '2px',
      boxShadow: '0 0 0 3px rgba(255, 107, 184, 0.3)',
    },

    // Motion preference
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none !important',
      transform: 'none !important',
    },
  }}
>
  Log In
</Button>
  </Box>
</Box>

</Box>

      
     
  );
}
