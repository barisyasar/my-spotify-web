import './App.css';
import Home from './pages/Home';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';


import Login from './pages/Login';
import useAuth from './api/useAuth';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  let accessToken = useAuth(code);

  return (
    <ThemeProvider theme={theme}>
      <div className='main'>
        {code ? <Home accessToken={accessToken} /> : <Login />}
      </div>
    </ThemeProvider>
  );
}

export default App;
