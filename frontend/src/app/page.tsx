'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline/next';
import SplineWrapper from './components/SplineWrapper'

export default function LandingPage() {
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Spline 3D Scene */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none', // ensures buttons can be clicked
        }}
      >
        <Spline
        scene="https://prod.spline.design/kU9qOMOZI-uaOQKv/scene.splinecode" />
      </Box>

      {/* Animated overlay for glassmorphic effect */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          variant="h2"
          fontWeight={700}
          gutterBottom
          sx={{
            color: 'white',
            mb: 4,
            background: 'linear-gradient(to right, #e0e7ff, #a5b4fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          Welcome to Our Platform
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          variant="h6"
          color="rgba(255, 255, 255, 0.8)"
          sx={{ mb: 6 }}
        >
          Experience the future with our innovative solution
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap',
          }}
        >
          <Button
            component={motion.div}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          >
            <Button
              variant="contained"
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: 'white',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              Sign Up
            </Button>
          </Button>

          <Button
            component={motion.div}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
          >
            <Button
              variant="outlined"
              sx={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: 'white',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.12)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Sign In
            </Button>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
