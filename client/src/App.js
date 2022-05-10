import './App.css';
import Home from './pages/Home';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Login from './pages/Login';

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className='main'>
        {code ? <Home /> : <Login />}
      </div>
    </ThemeProvider>
  );
}

export default App;
