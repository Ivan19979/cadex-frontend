import { useForm } from 'react-hook-form';
import { TextField, Button, Stack, Typography } from '@mui/material';
import axios from 'axios';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm({ onSuccess }: { onSuccess: (str: string) => void }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post('/api/contact', data);
      console.log(res);
      if (res.statusText === 'OK') {
        onSuccess(res.data.message);
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Fill out the form below
        </Typography>

        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          {...register('name', { required: 'Name is required' })}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px'
            }
          }}
        />

        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px'
            }
          }}
        />

        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          {...register('message', { required: 'Message is required' })}
          error={!!errors.message}
          helperText={errors.message?.message}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px'
            }
          }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
          sx={{
            alignSelf: 'flex-end',
            px: 6,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            backgroundColor: '#2563eb',
            borderRadius: '8px',
            '&:hover': { backgroundColor: '#1d4ed8' }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </Stack>
    </form>
  );
}