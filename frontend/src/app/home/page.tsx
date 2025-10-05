// pages/index.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Stack, 
  Card, 
  CardMedia, 
  CardContent, 
  Tabs, 
  Tab,
  IconButton,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Theme
} from '@mui/material';
import { 
  ArrowBackIos as LeftArrowIcon, 
  ArrowForwardIos as RightArrowIcon,
  ShoppingCart as CartIcon,
  Info as InfoIcon
} from '@mui/icons-material';

// Create theme with futuristic colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Vibrant red
      dark: '#9B0000',  // Darker red
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#0a0a12',
    },
  },
  typography: {
    fontFamily: ['Orbitron', 'Poppins', 'Inter', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.8rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
          }
        },
        contained: {
          background: 'linear-gradient(90deg, #FF0000, #9B0000)',
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
          '&:hover': {
            background: 'linear-gradient(90deg, #e60000, #8a0000)',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.7)',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(255, 0, 0, 0.2)',
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.1rem',
          '&.Mui-selected': {
            color: '#FF0000',
          }
        }
      }
    }
  }
});

// Define types for our data
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

// Hero slide data
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Build your dream PC.",
    subtitle: "Discover the latest gaming rigs, parts, and titles — all in one place.",
    image: "/hero-1.jpg",
    alt: "High-end gaming setup with RGB lighting"
  },
  {
    id: 2,
    title: "Next-gen gaming awaits.",
    subtitle: "Experience ultimate performance with cutting-edge components.",
    image: "/hero-2.jpg",
    alt: "Gaming PC with RTX 5090 and custom cooling"
  },
  {
    id: 3,
    title: "Game like a pro.",
    subtitle: "Level up your setup with premium components and titles.",
    image: "/hero-3.jpg",
    alt: "Gamer in action with high-end peripherals"
  }
];

// Gaming components data
const gamingComponents: Product[] = [
  {
    id: 1,
    name: "NVIDIA RTX 5090",
    description: "Ultimate 4K GPU with 32GB VRAM",
    image: "/gpu.jpg",
    price: "$2,499"
  },
  {
    id: 2,
    name: "Intel Core i9-14900K",
    description: "24-core processor for gaming",
    image: "/cpu.jpg",
    price: "$699"
  },
  {
    id: 3,
    name: "Corsair iCUE RGB RAM",
    description: "32GB DDR5 with customizable lighting",
    image: "/ram.jpg",
    price: "$349"
  },
  {
    id: 4,
    name: "ASUS ROG Motherboard",
    description: "Z790 chipset with premium features",
    image: "/motherboard.jpg",
    price: "$499"
  }
];

// Top games data
const topGames: Product[] = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    description: "Next-gen open world RPG",
    image: "/cyberpunk.jpg",
    price: "$59.99"
  },
  {
    id: 2,
    name: "Elden Ring",
    description: "Epic fantasy adventure",
    image: "/elden.jpg",
    price: "$59.99"
  },
  {
    id: 3,
    name: "Call of Duty: MW3",
    description: "Latest military shooter",
    image: "/cod.jpg",
    price: "$69.99"
  },
  {
    id: 4,
    name: "Starfield",
    description: "Open-world space RPG",
    image: "/starfield.jpg",
    price: "$69.99"
  }
];

// Product card component
const ProductCard: React.FC<{ product: Product; isGame?: boolean }> = ({ product, isGame = false }) => (
  <Card sx={{ 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '&:hover': {
      border: '1px solid rgba(255, 0, 0, 0.5)',
      boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
    }
  }}>
    <CardMedia
      component="img"
      height="200"
      image={product.image}
      alt={product.name}
      sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
    />
    <CardContent sx={{ flexGrow: 1, p: 2 }}>
      <Typography gutterBottom variant="h6" component="h3" sx={{ color: '#fff', fontWeight: 600 }}>
        {product.name}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aaa', mb: 2, minHeight: '40px' }}>
        {product.description}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ color: '#FF0000', fontWeight: 700 }}>
          {product.price}
        </Typography>
        <Box>
          <IconButton 
            size="small" 
            sx={{ 
              color: '#fff', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': { 
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                color: '#FF0000'
              }
            }}
          >
            <InfoIcon fontSize="small" />
          </IconButton>
          <Button 
            variant="contained" 
            size="small" 
            startIcon={<CartIcon />}
            sx={{ ml: 1, px: 2 }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

// Main page component
export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={{ 
        maxWidth: '2000px',
        background: 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 100%)',
        minHeight: '100vh',
        color: '#fff'
      }}>
        {/* Hero Banner */}
        <Box sx={{ 
          position: 'relative', 
          height: { xs: '70vh', md: '85vh' },
          overflow: 'hidden',
          borderRadius: '0 0 30px 30px',
          mb: 4
        }}>
          {/* Hero slide images */}
          {heroSlides.map((slide, index) => (
            <Box
              key={slide.id}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === activeSlide ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
                background: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}
            >
              <Box sx={{ 
                textAlign: 'center', 
                zIndex: 2,
                maxWidth: { xs: '90%', md: '70%' },
                px: 2
              }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    mb: 2, 
                    textShadow: '0 0 10px rgba(255, 0, 0, 0.7)',
                    background: 'linear-gradient(to right, #FF0000, #FF5E5E)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4, 
                    color: '#ddd',
                    textShadow: '0 0 5px rgba(0,0,0,0.8)',
                    maxWidth: '600px',
                    mx: 'auto'
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      fontSize: '1.1rem',
                      boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
                      '&:hover': {
                        boxShadow: '0 0 25px rgba(255, 0, 0, 0.8)',
                      }
                    }}
                  >
                    Shop Components
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: '#fff',
                      '&:hover': {
                        borderColor: '#FF0000',
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        color: '#FF0000',
                      }
                    }}
                  >
                    Shop Games
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}

          {/* Carousel controls */}
          <IconButton 
            onClick={handlePrevSlide}
            sx={{ 
              position: 'absolute', 
              left: { xs: 10, md: 30 }, 
              top: '50%', 
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
              }
            }}
          >
            <LeftArrowIcon />
          </IconButton>
          <IconButton 
            onClick={handleNextSlide}
            sx={{ 
              position: 'absolute', 
              right: { xs: 10, md: 30 }, 
              top: '50%', 
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
              }
            }}
          >
            <RightArrowIcon />
          </IconButton>

          {/* Slide indicators */}
          <Box sx={{ 
            position: 'absolute', 
            bottom: 30, 
            left: '50%', 
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1
          }}>
            {heroSlides.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleSlideClick(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: index === activeSlide ? '#FF0000' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#FF0000',
                    transform: 'scale(1.2)'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Trending Section */}
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, pb: 6 }}>
          <Box sx={{ 
            textAlign: 'center', 
            mb: 4,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
              borderRadius: '2px'
            }
          }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(to right, #fff, #aaa)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}
            >
              Trending <span style={{ color: '#FF0000', fontWeight: 800 }}>Now</span>
            </Typography>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,255,255,0.1)', mb: 4 }}>
            <Tabs 
              value={activeTab} 
              onChange={(_, newValue) => setActiveTab(newValue)}
              centered
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#FF0000',
                  height: '3px'
                }
              }}
            >
              <Tab 
                label="Gaming Components" 
                sx={{ 
                  color: activeTab === 0 ? '#FF0000' : '#aaa',
                  fontWeight: 600
                }} 
              />
              <Tab 
                label="Top Games" 
                sx={{ 
                  color: activeTab === 1 ? '#FF0000' : '#aaa',
                  fontWeight: 600
                }} 
              />
            </Tabs>
          </Box>

          {/* Product Stack */}
          <Stack 
            direction="row" 
            spacing={3}
            sx={{ 
              overflowX: 'auto',
              py: 2,
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: 'rgba(255,255,255,0.3)',
              }
            }}
          >
            {(activeTab === 0 ? gamingComponents : topGames).map((product) => (
              <Box 
                key={product.id}
                sx={{ 
                  minWidth: { xs: '280px', sm: '300px', md: '240px' },
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <ProductCard product={product} isGame={activeTab === 1} />
              </Box>
            ))}
          </Stack>
        </Container>

        {/* Footer */}
        <Box sx={{ 
          mt: 6, 
          py: 4, 
          textAlign: 'center', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          color: '#aaa'
        }}>
          <Typography variant="body2">
            © 2025 CyberTech. All rights reserved. Premium PC building and gaming store.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Fast shipping • 24/7 support • 30-day returns
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}