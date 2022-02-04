import { Box } from '@mui/system';
import './App.css';
import Navbar from './Components/Navbar';
import PhotoCredit from './Components/PhotoCredit';
import TestModal from './Components/TestModal';
import { CardMedia } from '@mui/material';
import BackgroundSlider from 'react-background-slider'
import image1 from './images/IMG_2725.jpg'
import image2 from './images/IMG_2737.jpg'
import image3 from './images/IMG_2829.jpg'
import image4 from './images/IMG_2832.jpg'
import image5 from './images/IMG_2849.jpg'

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


        <Box id="background"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0)',
            mr: 'auto',
            ml: 'auto',
            zIndex: 10, }}>
          <BackgroundSlider
            images={[image1,image2,image3,image4,image5]}
            duration={10} transition={2} />
        </Box>
        <CardMedia sx={{ position: 'fixed',  width: '400px', top: '50%', left: '50%', marginLeft: '-200px', marginTop: '-225px'}}>
          <iframe title="Produced by Chris Carswell on Spotify" style={{ borderRadius: '12px', opacity: '.9' }} src="https://open.spotify.com/embed/playlist/7whoqO8hn717qz31qJ61mz?utm_source=generator&theme=0" width='100%' height='450px' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
        </CardMedia>
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
