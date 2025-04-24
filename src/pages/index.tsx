import Head from 'next/head';
import { Box, Button, Container, Typography, Stack, Grid, Divider, Chip } from '@mui/material';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OptimizedYouTubeEmbed from '../components/OptimizedYouTubeEmbed';
import { CheckCircle, Rocket, Settings, BarChart } from '@mui/icons-material';
import '../styles/globals.css';

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

export default function HomePage() {
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

      <Box sx={{ 
        backgroundColor: '#f8fafc',
        py: { xs: 6, md: 10 },
        borderBottom: '1px solid #e2e8f0'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{xs:12, md: 6}}>
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
              
              <Typography variant="h2" component="h1" sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}>
                Professional 3D CAD Data Conversion
              </Typography>
              
              <Typography variant="body1" sx={{ 
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#64748b'
              }}>
                Convert, view and analyze 3D CAD data across 30+ formats with our high-performance toolkit designed for engineers and developers.
              </Typography>
            </Grid>

            <Grid size={{xs:12, md: 6}} >
              <Box sx={{ 
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0'
              }}>
                <OptimizedYouTubeEmbed />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" component="h2" sx={{ 
          fontWeight: 700,
          mb: 2,
          textAlign: 'center'
        }}>
          Why Choose CAD Exchanger?
        </Typography>
        
        <Typography variant="body1" sx={{ 
          mb: 6,
          textAlign: 'center',
          color: '#64748b',
          maxWidth: '700px',
          mx: 'auto'
        }}>
          Our solution provides comprehensive tools for professional 3D CAD data processing
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{xs:12, md: 4}}>
            <Box sx={{ 
              p: 3,
              height: '100%',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}>
              <Rocket color="primary" sx={{ fontSize: '3rem', mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                High Performance
              </Typography>
              <Typography variant="body1" sx={{ color: '#64748b' }}>
                Optimized algorithms for fast conversion of even the most complex CAD models
              </Typography>
            </Box>
          </Grid>
          
          <Grid size={{xs:12, md: 4}}>
            <Box sx={{ 
              p: 3,
              height: '100%',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}>
              <Settings color="primary" sx={{ fontSize: '3rem', mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                Wide Format Support
              </Typography>
              <Typography variant="body1" sx={{ color: '#64748b' }}>
                Over 30 CAD formats supported including CATIA, NX, SolidWorks and more
              </Typography>
            </Box>
          </Grid>
          
          <Grid size={{xs:12, md: 4}}>
            <Box sx={{ 
              p: 3,
              height: '100%',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}>
              <BarChart color="primary" sx={{ fontSize: '3rem', mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                Advanced Analysis
              </Typography>
              <Typography variant="body1" sx={{ color: '#64748b' }}>
                Built-in tools for model validation, measurement and visualization
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 2 }} />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" component="h2" sx={{ 
          fontWeight: 700,
          mb: 6,
          textAlign: 'center'
        }}>
          Trusted by Industry Leaders
        </Typography>
        
        <Grid container spacing={4}>
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
            <Grid size={{xs:12, md: 4}} key={index}>
              <Box sx={{ 
                p: 3,
                height: '100%',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                position: 'relative'
              }}>
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
              </Box>
            </Grid>
          ))}
          
          <Grid size={{xs:12}}>
            <Button
              component={Link}
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
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ 
        backgroundColor: '#2563eb',
        py: { xs: 8, md: 10 },
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{xs:12, md: 6}}>
              <Typography variant="h3" component="h2" sx={{ 
                fontWeight: 700,
                mb: 2
              }}>
                Ready to Transform Your CAD Workflow?
              </Typography>
            </Grid>
            
            <Grid size={{xs:12, md: 6}}>
              <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={2}>
                <Button
                  component={Link}
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
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}