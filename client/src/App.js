import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
<<<<<<< Updated upstream
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"
=======

>>>>>>> Stashed changes

function App() {

  return (
    <ThemeProvider theme={theme}>
<<<<<<< Updated upstream
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/home/' element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
      </Routes>
=======
      <div className='main'>
        <Home />
      </div>
>>>>>>> Stashed changes
    </ThemeProvider>
  );
}

export default App;
