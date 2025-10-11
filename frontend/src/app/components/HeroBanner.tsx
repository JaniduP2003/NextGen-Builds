import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  useTheme,
  useMediaQuery,
  Fade
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const HeroBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        overflow: 'hidden'
      }}
    >
      {/* Glassmorphism Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '800px',
          padding: { xs: 3, md: 6 },
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
          textAlign: 'center'
        }}
      >
        <Fade in={true} timeout={1000}>
          <Box>
            {/* Main Headline */}
            <Typography
              variant={isMobile ? 'h3' : 'h1'}
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: '#ef4c4c',
                textShadow: '0 0 20px rgba(239, 76, 76, 0.5)',
                marginBottom: 3,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.2
              }}
            >
              Next-gen gaming awaits.
            </Typography>

            {/* Subheadline */}
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              component="h2"
              sx={{
                color: 'white',
                marginBottom: 5,
                fontWeight: 300,
                opacity: 0.9,
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 1.6
              }}
            >
              Experience ultimate performance with cutting-edge components.
            </Typography>

            {/* Buttons Container */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 1
              }}
            >
              {/* Primary Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ef4c4c',
                  color: 'white',
                  borderRadius: '50px',
                  padding: { xs: '12px 24px', sm: '14px 32px' },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(239, 76, 76, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#d43c3c',
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 25px rgba(239, 76, 76, 0.5)'
                  },
                  minWidth: { xs: '200px', sm: '180px' }
                }}
              >
                Shop Components
              </Button>

              {/* Secondary Button */}
              <Button
                variant="outlined"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  borderRadius: '50px',
                  padding: { xs: '12px 24px', sm: '14px 32px' },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#ef4c4c',
                    backgroundColor: 'rgba(239, 76, 76, 0.1)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 20px rgba(239, 76, 76, 0.3)'
                  },
                  minWidth: { xs: '200px', sm: '180px' }
                }}
              >
                Shop Games
              </Button>
            </Box>
          </Box>
        </Fade>
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}
      >
        <KeyboardArrowDown
          sx={{
            fontSize: '3rem',
            color: 'white',
            opacity: 0.8,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#ef4c4c',
              transform: 'scale(1.2)'
            }
          }}
        />
      </Box>

      {/* Bounce Animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default HeroBanner;