'use client';

import { Box, Button, Typography, Container } from '@mui/material';
import dynamic from 'next/dynamic';
import SplitText from './components/SplitText';
import SpotlightCard from './components/SpotlightCard';
// Dynamically import SplineWrapper to avoid SSR issues
const SplineWrapper = dynamic(() => import('./components/SplineWrapper'), { ssr: false });

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function LandingPage() {
  return (
    <>
      {/* Hero Section — full viewport height */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh', // ✅ allows content to push down
          background: 'rgb(128, 128, 128)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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

        {/* Centered Content */}
        <Box
          sx={{
            textAlign: 'center',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2, // ✅ reduced gap (was 4)
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

          {/* Subheading */}
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

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.2, sm: 1.5 },
                fontSize: { xs: '0.95rem', sm: '1.125rem' },
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#fff',
                fontFamily: '"Geist", "Inter", system-ui, sans-serif',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '9999px',
                boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.05)',
                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(255, 107, 184, 0.2), rgba(255, 168, 107, 0.2))',
                  border: '1px solid rgba(255, 107, 184, 0.4)',
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: '0 8px 25px rgba(255, 107, 184, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)',
                },
                '&:active': {
                  transform: 'translateY(0) scale(0.99)',
                },
                '&:focus-visible': {
                  outline: '2px solid #ff6bb0',
                  outlineOffset: '2px',
                  boxShadow: '0 0 0 3px rgba(255, 107, 184, 0.3)',
                },
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none !important',
                  transform: 'none !important',
                },
              }}
            >
              Sign In
            </Button>

            <Button
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.2, sm: 1.5 },
                fontSize: { xs: '0.95rem', sm: '1.125rem' },
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#fff',
                fontFamily: '"Geist", "Inter", system-ui, sans-serif',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '9999px',
                boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.05)',
                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(255, 107, 184, 0.2), rgba(255, 168, 107, 0.2))',
                  border: '1px solid rgba(255, 107, 184, 0.4)',
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: '0 8px 25px rgba(255, 107, 184, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)',
                },
                '&:active': {
                  transform: 'translateY(0) scale(0.99)',
                },
                '&:focus-visible': {
                  outline: '2px solid #ff6bb0',
                  outlineOffset: '2px',
                  boxShadow: '0 0 0 3px rgba(255, 107, 184, 0.3)',
                },
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

     {/* ✅ Scrollable Section with 3 Spotlight Cards */}
      <Box
        component="section"
        sx={{
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Red Gradient Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: ' #2b1246ff',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
            '@keyframes gradientShift': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        />
        
        {/* Semi-transparent overlay for better text contrast */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #ffffff, #ee0979)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            Why Build With Us?
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'center',
            }}
          >
            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.3)" className="custom-spotlight-card">
              <Typography variant="h5" sx={{ mb: 2, color: 'white' }}>⚡ Performance</Typography>
              <Typography color="rgba(0, 0, 0, 0.9)">
                Hand-picked components for max FPS in AAA titles.
              </Typography>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.3)" className="custom-spotlight-card">
              <Typography variant="h5" sx={{ mb: 2, color: 'white' }}>🎨 Customization</Typography>
              <Typography color="rgba(255, 255, 255, 0.9)">
                RGB lighting, case mods, and liquid cooling options.
              </Typography>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.3)" className="custom-spotlight-card">
              <Typography variant="h5" sx={{ mb: 2, color: 'white' }}>💰 Value</Typography>
              <Typography color="rgba(255, 255, 255, 0.9)">
                Best price-to-performance ratio guaranteed.
              </Typography>
            </SpotlightCard>
          </Box>
        </Container>
      </Box>
    </>
  );
}