'use client';

import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function OptimizedYouTubeEmbed() {
  const [showVideo, setShowVideo] = useState(false);

  if (showVideo) {
    return (
      <Box sx={{ position: 'relative', pt: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="CAD Exchanger Demo"
        />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      position: 'relative',
      pt: '56.25%',
      backgroundColor: '#e2e8f0',
      cursor: 'pointer',
      '&:hover .play-button': {
        transform: 'translate(-50%, -50%) scale(1.1)'
      }
    }} onClick={() => setShowVideo(true)}>
      <Box
        component="img"
        src="/cad-exchanger.jpeg"
        alt="CAD Exchanger Demo Video"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <IconButton
        className="play-button"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '4rem',
          transition: 'transform 0.3s ease',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }}
      >
        <PlayCircleOutlineIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}