// app/contact/page.tsx
import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [resForm, setResForm] = useState<null | string>(null)

  return (
    <>
      <Head>
        <title>Contact Us | CAD Exchanger</title>
        <meta name="description" content="Get in touch with our team for CAD conversion solutions and support" />
        
        <meta property="og:title" content="Contact Our Team | CAD Exchanger" />
        <meta property="og:description" content="Reach out for questions about our 3D CAD conversion tools" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-contact.jpg`} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`} />
        
        <meta name="twitter:title" content="Contact Our Team" />
        <meta name="twitter:description" content="Questions about our CAD tools? Contact us today" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-contact.jpg`} />
      </Head>
      <Header />

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" sx={{ 
          fontWeight: 700,
          mb: 6,
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}>
          Contact Our Team
        </Typography>

        <Paper elevation={3} sx={{ 
          p: { xs: 3, md: 6 },
          borderRadius: '12px'
        }}>
          {submitted && resForm ? (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="h5" sx={{ color: 'success.main', mb: 2 }}>
              {resForm}
              </Typography>
            </Box>
          ) : (
            <ContactForm onSuccess={(str: string) => {
              setSubmitted(true);
              setResForm(str);
            }} />
          )}
        </Paper>
      </Container>

      <Footer />
    </>
  );
}