import { Box } from '@mui/system';
import './App.css';
import Navbar from './Components/Navbar';
import PhotoCredit from './Components/PhotoCredit';
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
      
    <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, ml: '1rem', mb: '1rem'}}>
      <PhotoCredit sx={{  bottom: 0 }} />
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
