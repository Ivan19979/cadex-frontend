// app/contact/page.tsx
import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Анимации
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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [resForm, setResForm] = useState<null | string>(null);
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });

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

      <Container 
        maxWidth="md" 
        sx={{ py: 3 }}
        component={motion.div}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={staggerContainer}
        ref={headerRef}
      >
        <motion.div variants={fadeInUp}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Contact Our Team
          </Typography>
        </motion.div>

        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          ref={formRef}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 3, md: 6 },
              borderRadius: '12px',
              border: '1px solid rgba(0,0,0,0.1)'
            }}
            component={motion.div}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {submitted && resForm ? (
              <Box 
                sx={{ textAlign: 'center', py: 6 }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h5" sx={{ color: 'success.main', mb: 2 }}>
                  {resForm}
                </Typography>
              </Box>
            ) : (
              <ContactForm 
                onSuccess={(str: string) => {
                  setSubmitted(true);
                  setResForm(str);
                }} 
              />
            )}
          </Paper>
        </motion.div>
      </Container>

      <Footer />
    </>
  );
}