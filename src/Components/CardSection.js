import { Box, Card, Grid, Icon, Typography } from '@mui/material';
import React from 'react';
import audiowaveIcon from '../images/icons8-audio-wave2-100.png'
import microphoneIcon from '../images/icons8-microphone-100.png'
import sliderIcon from '../images/icons8-slider-100.png'

const rootStyles = {
    background: 'black',
    height: 'fit-content',
    width: '100%',
    mt: '-300px',
}

const cardStyles = {
    width: '100%',
    height: '500px',
    borderRadius: '25px',
    marginTop: '100px',
    marginBottom: '1rem',
    backgroundColor: '#7f5a83',
    backgroundImage: 'linear-gradient(0deg, #643047 0%, #0d324d 75%)',
    elevation: 10,
    opacity: '.8',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    textAlign: 'center',
}

const iconStyles = {   
    maxWidth: '64px',
    maxHeight: '64px',
    mx: 'auto',
    mt: '3rem'
}

function CardSection() {
  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center" sx={ rootStyles } id='card-box'>
        <Grid item xs={10} md={3}>
            <Card sx={ cardStyles }>
                <Box sx={ iconStyles }>
                    <img alt='microphone-icon' src={ microphoneIcon } style={{ width: '64px' }}/>
                </Box>
                <Typography sx={{ fontSize: '48px', mt: '1rem', }}>
                    Recording
                </Typography>
                <Typography sx={{ width: '70%', fontSize: '24px', margin: 'auto', mt:'2rem', }}> 
                    Record with professional quality equipment and acoustic treatment to bring your vision to life.
                </Typography>
            </Card>
        </Grid>
        <Grid item xs={10} md={3}>
            <Card sx={ cardStyles }>
                <Box sx={ iconStyles }>
                    <img alt='slider-icon' src={ sliderIcon } style={{ width: '64px' }}/>
                </Box>
                <Typography sx={{ fontSize: '48px', mt: '1rem', }}>
                    Mixing
                </Typography>
                <Typography sx={{ width: '70%', fontSize: '24px', margin: 'auto', mt: '2rem', }}> 
                    Track balacing, stereo panning, and vocal effects to bring the best qualities of your voice to the forefront.
                </Typography>
            </Card>
        </Grid>
        <Grid item xs={10} md={3}>
            <Card sx={ cardStyles }>
                <Box sx={ iconStyles }>
                    <img alt='audiowave-icon' src={ audiowaveIcon } style={{ width: '64px' }}/>
                </Box>
                <Typography sx={{ fontSize: '48px', mt: '1rem', }}>
                    Mastering
                </Typography>
                <Typography sx={{ width: '70%', fontSize: '24px', margin: 'auto', mt:'2rem',}}> 
                    Polish your mix for the sonic depth and presence that will take your vocals from good to great, in any listening environment.
                </Typography>
            </Card>
        </Grid>
    </Grid>
  )
}

export default CardSection;
