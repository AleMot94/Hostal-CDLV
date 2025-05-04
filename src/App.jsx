import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import ResponsiveAppBar from './components/NavBa/Navbar'

function App() {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light') // Alterna entre 'light' y 'dark'
  }
  return (
    <Container
      sx={{
        height: '100vh', // Altura de la ventana
        overflowY: 'scroll', // Habilita el desplazamiento vertical
        scrollBehavior: 'smooth', // Desplazamiento suave
        bgcolor: 'background.default', // Color de fondo del tema
        color: 'text.primary' // Color del texto del tema
      }}
    >
      <ResponsiveAppBar />
      <Button variant='contained' onClick={toggleMode}>
        Cambiar a {mode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </Button>
      <Typography variant='h2' gutterBottom>
        Sección 1
      </Typography>
      <Typography variant='body1' paragraph>
        Contenido de la primera sección...
      </Typography>

      <Typography variant='h2' gutterBottom>
        Sección 2
      </Typography>
      <Typography variant='body1' paragraph>
        Contenido de la segunda sección...
      </Typography>

      <Typography variant='h2' gutterBottom>
        Sección 3
      </Typography>
      <Typography variant='body1' paragraph>
        Contenido de la tercera sección...
      </Typography>
    </Container>
  )
}

export default App
