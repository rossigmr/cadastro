import { useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper
} from '@mui/material'

function Cadastro() {
  const [formData, setFormData] = useState({ nome: '', cpf: '', email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const dadosSalvos = JSON.parse(localStorage.getItem('cadastros')) || []
    dadosSalvos.push(formData)
    localStorage.setItem('cadastros', JSON.stringify(dadosSalvos))
    setFormData({ nome: '', cpf: '', email: '' })
    alert('Cadastro realizado!')
  }

  return (
    <Paper elevation={4} sx={{ mt: 8, p: 4, borderRadius: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cadastro de Usuário
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
        <TextField label="Nome" name="nome" value={formData.nome} onChange={handleChange} required />
        <TextField label="CPF" name="cpf" value={formData.cpf} onChange={handleChange} required />
        <TextField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <Button type="submit" variant="contained" size="large">Cadastrar</Button>
      </Box>
    </Paper>
  )
}

export default Cadastro
