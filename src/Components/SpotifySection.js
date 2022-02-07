import { CardMedia, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useEffect  } from 'react';
import chrisPic from '../images/chris-pic2-compressed-2.webp'
import gsap from 'gsap/all';
import image2 from '../images/IMG_2849_dark3.webp'
import { useTheme } from '@emotion/react';

const spotifySectionStyles = {
  width: '100%',
  height: '1000px',
  display: 'flex',
  flexDirection: 'column',
  mt: '6rem',
  backgroundImage: `url(${image2})`,
}

const imageStyles = {
  width: '336px',
  height: '504px',
  borderRadius: '12px',
  opacity: '1',
}

function SpotifySection() {
  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('md'));
  const el = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#bottom-frame-glow", { attr: { stroke:"#01DBEC" }, duration: 4, repeat: -1, yoyo: true })
      .to("#bottom-frame-glow", { stroke:"#c02f7f", duration: 4, repeat: -1, yoyo: true })
      .to("#bottom-frame-glow", { stroke:"#089EBA", duration: 4, repeat: -1, yoyo: true })
  }, []);

  return (
    <Box sx={ spotifySectionStyles }>
      <Box sx={{ width: '120%', height: '380px', ml: '-10%', display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(180deg)', mt: '-200px', }}>
        <svg width="3000" height="300"  xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="0 70 1500 200 3000 70" stroke="black" stroke-width="150"
                stroke-linecap="round" fill="none" stroke-linejoin="round"/>
        </svg>
      </Box>
      <Box sx={{ width: '100%', height: '246px', mb: '-100px', display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(180deg)',  mt: '-170px', }}>
          <svg className='bottom-frame-glow' width="3000" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polyline ref={el} id='bottom-frame-glow' points="0 70 1500 200 3000 70" stroke-width="2"
                  stroke-linecap="round" fill="none" stroke-linejoin="round"/>
          </svg>
      </Box>
      <Typography sx={{ color: 'white',  fontSize: '48px', textAlign: 'center', mt: '1rem' }}>My Work</Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', my: '8rem', mx: 'auto'}}>
        <div></div>
        {!mobile && <img alt='chris-carswell' src={chrisPic} style={ imageStyles } />}
        <CardMedia sx={{ position: 'relative', margin: 0, mt: { xs: '-3rem', md: 'auto' } }}>
          <iframe title="Produced by Chris Carswell on Spotify" style={{ borderRadius: '12px', opacity: '.9',}}
            src="https://open.spotify.com/embed/playlist/7whoqO8hn717qz31qJ61mz?utm_source=generator&theme=0" width={ mobile? '100%' : '620px' } height='500px' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
        </CardMedia>
        <div></div>
      </Box>
    </Box>
  )
}

export default SpotifySection;
