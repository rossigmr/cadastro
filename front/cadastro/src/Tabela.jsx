import { useEffect, useState } from 'react'
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material'

function Tabela() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    const armazenados = JSON.parse(localStorage.getItem('cadastros')) || []
    setDados(armazenados)
  }, [])

  return (
    <Paper sx={{ mt: 8, p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Cadastros
      </Typography>
      {dados.length === 0 ? (
        <Typography>Nenhum cadastro encontrado.</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dados.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  )
}

export default Tabela
