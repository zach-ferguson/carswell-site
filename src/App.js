import { Box } from '@mui/system';
import Navbar from './Components/Navbar';
import CardSection from './Components/CardSection';
import HomeSection from './Components/HomeSection';
import SpotifySection from './Components/SpotifySection';
import FormSection from './Components/FormSection';
import Footer from './Components/Footer';

function App() {
  return (
    <Box className="App"
      sx={{
        maxWidth: '100%',
        maxHeight: '100%',
        bgcolor: 'rgba(0,0,0,0)',
        mx: 'auto',
        overflowX: 'hidden',
      }}>
      <Navbar />
      <HomeSection />
      <CardSection />
      <SpotifySection />
      <FormSection />
      <Footer />
    </Box>
);
}

export default App;
