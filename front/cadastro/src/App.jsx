import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cadastro from './Cadastro'
import Tabela from './Tabela'
import { AppBar, Toolbar, Button, Container } from '@mui/material'

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Cadastro
          </Button>
          <Button color="inherit" component={Link} to="/tabela">
            Tabela
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/tabela" element={<Tabela />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
