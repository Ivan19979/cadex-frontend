import Head from 'next/head';
import { Box, Button, Container, Typography, Stack, Grid, Divider, Chip } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OptimizedYouTubeEmbed from '../components/OptimizedYouTubeEmbed';
import { CheckCircle, Rocket, Settings, BarChart } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional 3D CAD Data Conversion',
  description: 'Convert, view and analyze 3D CAD data across 30+ formats with our high-performance toolkit',
  openGraph: {
    title: 'Professional 3D CAD Data Conversion | CAD Exchanger',
    description: 'Optimized algorithms for fast conversion of even the most complex CAD models',
    images: [
      {
        url: 'https://www.cadexchanger.com/og-home.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional 3D CAD Data Conversion',
    description: 'Optimized algorithms for fast CAD conversion',
    images: ['https://www.cadexchanger.com/og-home.jpg'],
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const AnimatedGrid = motion.create(Grid);
const AnimatedBox = motion.create(Box);
const AnimatedTypography = motion.create(Typography);
const AnimatedButton = motion.create(Button);

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Head>
        <title>Professional 3D CAD Data Conversion | CAD Exchanger</title>
        <meta name="description" content="Optimized algorithms for fast conversion of even the most complex CAD models" />
        
        <meta property="og:title" content="Professional 3D CAD Data Conversion" />
        <meta property="og:description" content="Optimized algorithms for fast CAD conversion" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-home.jpg`} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
        
        <meta name="twitter:title" content="Professional 3D CAD Data Conversion" />
        <meta name="twitter:description" content="Optimized algorithms for fast CAD conversion" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-home.jpg`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Professional 3D CAD Data Conversion",
            "description": "Optimized algorithms for fast conversion of CAD models",
            "url": process.env.NEXT_PUBLIC_SITE_URL
          })}
        </script>
      </Head>

      <Header />
      <body>
        <Box 
          ref={heroRef}
          sx={{ 
            backgroundColor: '#f8fafc',
            py: { xs: 6, md: 10 },
            borderBottom: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}
        >
          <Container maxWidth="lg">
            <AnimatedGrid 
              container 
              spacing={6} 
              alignItems="center"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <AnimatedGrid size={{xs: 12, md: 6}} variants={fadeInUp}>
                <Chip 
                  label="3D CAD Solutions" 
                  color="primary" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    backgroundColor: '#2563eb',
                    color: 'white'
                  }} 
                />
                
                <AnimatedTypography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2
                  }}
                  variants={fadeInUp}
                >
                  Professional 3D CAD Data Conversion
                </AnimatedTypography>
                
                <AnimatedTypography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: '#64748b'
                  }}
                  variants={fadeInUp}
                >
                  Convert, view and analyze 3D CAD data across 30+ formats with our high-performance toolkit designed for engineers and developers.
                </AnimatedTypography>
              </AnimatedGrid>

              <AnimatedGrid size={{xs: 12, md: 6}} variants={fadeInUp}>
                <AnimatedBox 
                  sx={{ 
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <OptimizedYouTubeEmbed />
                </AnimatedBox>
              </AnimatedGrid>
            </AnimatedGrid>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <AnimatedBox
            ref={featuresRef}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <AnimatedTypography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                textAlign: 'center'
              }}
              variants={fadeInUp}
            >
              Why Choose CAD Exchanger?
            </AnimatedTypography>
            
            <AnimatedTypography 
              variant="body1" 
              sx={{ 
                mb: 6,
                textAlign: 'center',
                color: '#64748b',
                maxWidth: '700px',
                mx: 'auto'
              }}
              variants={fadeInUp}
            >
              Our solution provides comprehensive tools for professional 3D CAD data processing
            </AnimatedTypography>

            <AnimatedGrid 
              container 
              spacing={4}
              variants={staggerContainer}
            >
              {[
                {
                  icon: <Rocket color="primary" sx={{ fontSize: '3rem', mb: 2 }} />,
                  title: "High Performance",
                  description: "Optimized algorithms for fast conversion of even the most complex CAD models"
                },
                {
                  icon: <Settings color="primary" sx={{ fontSize: '3rem', mb: 2 }} />,
                  title: "Wide Format Support",
                  description: "Over 30 CAD formats supported including CATIA, NX, SolidWorks and more"
                },
                {
                  icon: <BarChart color="primary" sx={{ fontSize: '3rem', mb: 2 }} />,
                  title: "Advanced Analysis",
                  description: "Built-in tools for model validation, measurement and visualization"
                }
              ].map((feature, index) => (
                <AnimatedGrid 
                  size={{xs: 12, md: 4}}
                  key={index}
                  variants={fadeInUp}
                >
                  <AnimatedBox 
                    sx={{ 
                      p: 3,
                      height: '100%',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }
                    }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                    }}
                  >
                    {feature.icon}
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748b' }}>
                      {feature.description}
                    </Typography>
                  </AnimatedBox>
                </AnimatedGrid>
              ))}
            </AnimatedGrid>
          </AnimatedBox>
        </Container>

        <Divider sx={{ my: 2 }} />

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <AnimatedBox
            ref={testimonialsRef}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <AnimatedTypography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                mb: 6,
                textAlign: 'center'
              }}
              variants={fadeInUp}
            >
              Trusted by Industry Leaders
            </AnimatedTypography>
            
            <AnimatedGrid 
              container 
              spacing={4}
              variants={staggerContainer}
            >
              {[
                {
                  quote: "CAD Exchanger reduced our conversion time by 70% compared to other solutions.",
                  author: "John Smith, Engineering Director",
                  company: "Automotive Company"
                },
                {
                  quote: "The API integration was seamless and well documented for our developers.",
                  author: "Sarah Johnson, CTO",
                  company: "Aerospace Corp"
                },
                {
                  quote: "Excellent support team that helped us with complex model issues.",
                  author: "Michael Brown, Lead Engineer",
                  company: "Industrial Manufacturing"
                }
              ].map((testimonial, index) => (
                <AnimatedGrid 
                  size={{xs: 12, md: 4}}
                  key={index}
                  variants={fadeInUp}
                >
                  <AnimatedBox 
                    sx={{ 
                      p: 3,
                      height: '100%',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      position: 'relative'
                    }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                    }}
                  >
                    <CheckCircle color="primary" sx={{ 
                      position: 'absolute',
                      top: -20,
                      right: 20,
                      fontSize: '3rem',
                      backgroundColor: 'white',
                      borderRadius: '50%'
                    }} />
                    
                    <Typography variant="body1" sx={{ 
                      fontStyle: 'italic',
                      mb: 3,
                      '&:before': { content: '"\\201C"', fontSize: '4rem', lineHeight: 0 }
                    }}>
                      {testimonial.quote}
                    </Typography>
                    
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {testimonial.company}
                    </Typography>
                  </AnimatedBox>
                </AnimatedGrid>
              ))}
              
              <AnimatedGrid size={{xs: 12}} variants={fadeInUp}>
                <AnimatedButton
                  href="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    display: 'block',
                    width: 'fit-content',
                    m: '0 auto',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    backgroundColor: '#2563eb',
                    '&:hover': { backgroundColor: '#1d4ed8' }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </AnimatedButton>
              </AnimatedGrid>
            </AnimatedGrid>
          </AnimatedBox>
        </Container>

        <Box 
          ref={ctaRef}
          sx={{ 
            backgroundColor: '#2563eb',
            py: { xs: 8, md: 10 },
            color: 'white'
          }}
        >
          <Container maxWidth="lg">
            <AnimatedGrid 
              container 
              spacing={4} 
              alignItems="center"
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <AnimatedGrid size={{xs: 12, md: 6}} variants={fadeInUp}>
                <Typography variant="h3" component="h2" sx={{ 
                  fontWeight: 700,
                  mb: 2
                }}>
                  Ready to Transform Your CAD Workflow?
                </Typography>
              </AnimatedGrid>
              
              <AnimatedGrid size={{xs: 12, md: 6}} variants={fadeInUp}>
                <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={2}>
                  <AnimatedButton
                    href="/contact"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      backgroundColor: 'white',
                      color: '#2563eb',
                      '&:hover': { backgroundColor: '#f8fafc' }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </AnimatedButton>
                </Stack>
              </AnimatedGrid>
            </AnimatedGrid>
          </Container>
        </Box>
      </body>
      <Footer />
    </>
  );
}