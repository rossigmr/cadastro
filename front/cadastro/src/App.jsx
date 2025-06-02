import { useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados cadastrados:', formData)
    // Aqui você pode enviar os dados para uma API, banco de dados, etc.
  }

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Cadastro de Usuário
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            mt: 2
          }}
        >
          <TextField
            label="Nome completo"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="CPF"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#115293'
              }
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default App
