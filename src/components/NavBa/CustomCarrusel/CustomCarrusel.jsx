import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const items = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' }
]

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Configura el temporizador para mover el carrusel automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 3000) // Cambia de slide cada 3 segundos

    return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
  }, [])

  return (
    <Box sx={{ width: '100%', textAlign: 'center', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out'
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              minWidth: '100%',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              color: 'white'
            }}
          >
            <Typography variant='h4'>{item.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CustomCarousel

//export default CustomCarousel
