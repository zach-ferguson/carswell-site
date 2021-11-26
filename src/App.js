import { Box } from '@mui/system';
import Particles from 'react-particles-js';
import { StickyContainer } from 'react-sticky';
import './App.css';
import ContactFab from './Components/ContactFab';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {


  return (
    <Box className="App"
      sx={{
        maxWidth: '100%',
        maxHeight: '100vh',
        bgcolor: 'primary.main',
        mx: 'auto',
        overflow: 'hidden',
      }}>
      <Navbar />
      <Home 
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}/> 
    <Box sx={{ position: 'fixed', width: '100%', zIndex: 100 }}>

    </Box>
    <Box sx={{
        position: 'fixed',
        bottom: 0,
        right: 200,
      }}>
      <ContactFab sx={{ }}/>
    </Box>
  </Box>
);
}

export default App;
