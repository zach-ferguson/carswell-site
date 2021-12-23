import { Box } from '@mui/system'
import React from 'react'
import { alpha } from '@mui/material/styles';
import BackgroundSlider from 'react-background-slider'
import image1 from '../images/IMG_2725.jpg'
import image2 from '../images/IMG_2737.jpg'
import image3 from '../images/IMG_2829.jpg'
import image4 from '../images/IMG_2832.jpg'
import image5 from '../images/IMG_2849.jpg'

function Home() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
        mr: 'auto',
        ml: 'auto',
      }}>
      <BackgroundSlider
        images={[image1,image2,image3,image4,image5]}
        duration={10} transition={2} />
    </Box>
  )
}

export default Home
