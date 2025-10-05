'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import { Box, Typography, TextField, Button, Link, IconButton, Divider, Stack ,Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import LoginIcon from '@mui/icons-material/Login';

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

// Styled icon button for top login symbol
const LoginIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: 'white',
  width: 64,
  height: 64,
  borderRadius: '16px',
  marginBottom: theme.spacing(3),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
}));

// Input field with icon inside
const InputWithIcon = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(216, 39, 39, 0.2)',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(220, 22, 78, 0.3)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 0, 93, 0.5)',      //the boder of the imput boc coler 
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '& .MuiInputAdornment-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

// Social button style
const SocialButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: 56,
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    transform: 'scale(1.02)',
  },
  '& svg': {
    fontSize: '24px',
  },
}));

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);  //for remeber me 

   const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password ,rememberMe});
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
          {/* Top login icon button */}
           {/* Top login icon button - Centered */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <LoginIconButton>
            <LoginIcon fontSize="large"  />
          </LoginIconButton>
          </Box>

          {/* Title & subtitle */}
          <Typography variant="h5" component="h1" sx={{ fontWeight: 600, color: 'white', mb: 1 ,textAlign: 'center'}}>
            Sign in with email
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, textAlign: 'center' }}>
            Make a new doc to bring your words, data, and teams together. For free.
          </Typography>

          {/* Email input */}
          <InputWithIcon
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1 }} />,
            }}
          />

          {/* Password input */}
          <InputWithIcon
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
              startAdornment: <LockIcon sx={{ mr: 1 }} />,
              endAdornment: (
                <Link href="#" variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Forgot password?
                </Link>
              ),
            }}
          />

 {/* ADDED THE CHECKBOX  */}
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleRememberMeChange}
                color="primary"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-checked': {
                    color: '#ff0033', // Red color when checked
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Remember me
              </Typography>
            }
            sx={{ mt: 1, mb: 2 }} // Add margin to position it nicely
          />

          {/* Primary button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              mb: 3,
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
            Get Started
          </Button>

 {/* Divider */}
          <Divider sx={{ my: 2, color: 'rgba(255, 255, 255, 0.3)' }}>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Or sign in with
            </Typography>
          </Divider>

          {/* Social login buttons - Using Stack for responsive layout */}
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <SocialButton>
              <GoogleIcon />
            </SocialButton>
            <SocialButton>
              <FacebookIcon />
            </SocialButton>
            <SocialButton>
              <AppleIcon />
            </SocialButton>
          </Stack>

        </GlassCard>
      </Box>
    </div>
  );
}