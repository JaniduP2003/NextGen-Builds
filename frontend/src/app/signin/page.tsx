'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

// Dynamically import the local Spline wrapper (SSR-safe)
const SplineWrapper = dynamic(() => import('@/app/components/SplineWrapper'), {
  ssr: false,
  loading: () => null,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const GlassCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '420px',
  padding: theme.spacing(6),
  borderRadius: '24px',
  backdropFilter: 'blur(20px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  boxShadow: '0 8px 32px 0 rgba(255, 0, 51, 0.2)',
  zIndex: 2,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px 0 rgba(255, 0, 51, 0.35)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
    maxWidth: '90vw',
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #ff0033 0%, #ffffff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontSize: '1.875rem',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Add auth logic here
  };

  return (
    <div className={montserrat.className}>
      {/* Fullscreen Spline animation */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      >
        <SplineWrapper />
      </Box>

      {/* Centered glass card */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <GlassCard>
          <GradientText variant="h4">
            Welcome back to NextGen Builds ⚡
          </GradientText>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: {
                  color: 'white',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
              InputLabelProps={{
                style: { color: 'rgba(255, 255, 255, 0.85)' },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: {
                  color: 'white',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
              InputLabelProps={{
                style: { color: 'rgba(255, 255, 255, 0.85)' },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #ff0033 0%, #ff3366 100%)',
                color: 'white',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(255, 0, 51, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 25px rgba(255, 0, 51, 0.6)',
                  background: 'linear-gradient(90deg, #ff0033 0%, #ff0033 100%)',
                },
              }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'white',
                    textDecoration: 'underline',
                  },
                }}
              >
                Forgot Password?
              </Link>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </div>
  );
}