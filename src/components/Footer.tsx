import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', bgcolor: 'background.paper' }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} CAD Exchanger
      </Typography>
    </Box>
  );
}