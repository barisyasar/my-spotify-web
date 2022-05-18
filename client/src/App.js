import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/home/' element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
