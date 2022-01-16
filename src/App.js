import { Box } from '@mui/system';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import TestModal from './Components/TestModal';

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
        <TestModal />
    </Box>
  </Box>
);
}

export default App;
