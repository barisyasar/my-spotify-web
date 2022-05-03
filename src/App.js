import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Detail from './pages/Detail';
import Header from './components/Header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='main'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
