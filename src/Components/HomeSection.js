import React, { useEffect, useRef } from 'react';
import PhotoCredit from '../Components/PhotoCredit';
import EmailModal from './EmailModal';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import BackgroundSlider from 'react-background-slider'
import image3 from '../images/IMG_2725.webp'
import image1 from '../images/IMG_2737.webp'
import image2 from '../images/IMG_2829.webp'
import image4 from '../images/IMG_2832.webp'
import downIcon from '../images/icons8-double-down-48.webp'
import '../css/Navbar.css';
import gsap from 'gsap/all';
import { animateScroll as scroll } from "react-scroll";
import { useTheme } from '@emotion/react';

const homeRootStyles = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '35px',
    borderBottom: '10px solid black',
    mb: '6rem'
}

const learnMoreStyles = {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'transparent',
    transition: '.1s',
    '&:hover': {
        background: 'transparent',
        opacity: '.5',
        cursor: 'pointer',
        transition: '.1s',
    }, 
    mx: 'auto',  
    mt: {xs: '2rem', md: '5rem'},
    color:'white',
    zIndex: 20
}

function HomeSection() {
    const theme = useTheme(); 
    const mobile = !useMediaQuery(theme.breakpoints.up('md'));
    const el = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to("#bottom-frame-glow", { attr: { stroke:"#01DBEC" }, duration: 4, repeat: -1, yoyo: true })
          .to("#bottom-frame-glow", { stroke:"#c02f7f", duration: 4, repeat: -1, yoyo: true })
          .to("#bottom-frame-glow", { stroke:"#089EBA", duration: 4, repeat: -1, yoyo: true })
    },[]);

  return (
    <Box id='home-root' sx={ homeRootStyles }>
        <Box sx={{  }}>
          <BackgroundSlider
            images={[image1,image2,image3,image4]}
            duration={10} transition={2} />
        </Box>
        <Box id='home-text' sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', margin: 'auto', color: 'white', marginTop: '10%',  }}>
            <Typography sx={{ fontSize: {xs: '48px', md: '82px'}, fontWeight: 700, textAlign: 'center', lineHeight: {xs: '72px', md:''} }}>
                Tell your story.
            </Typography >
            <Typography sx={{ fontSize: {xs: '18px', md: '24px'}, textAlign: 'center', maxWidth: {xs: '90%'}, mx: 'auto', mt: {xs: '1rem'} }}>
                Recording, Production & Mixing for Vocalists
            </Typography>
        </Box>
        <Box sx={{ marginTop: {xs: '2rem', md: '8rem'}, mx: 'auto'}}>
          <EmailModal />
        </Box>
        <Box sx={ learnMoreStyles }>
            <Button onClick={() => scroll.scrollTo(mobile? 800 : 850)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <Typography sx={{ '&:hover': { cursor: 'pointer' } }}>
                    Learn More
                </Typography>
                <img alt='down' src={downIcon} />
            </Button>
        </Box>
        <Box sx={{ width: '120%', height: '246px', ml: '-10%', mt: '-170px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10}}>
            <svg className='bottom-frame-glow' width="3000" height="300"  xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline ref={el} id='bottom-frame-glow' points="0 70 1500 200 3000 70" stroke-width="2"
                    stroke-linecap="round" fill="none" stroke-linejoin="round"/>
            </svg>
            <Box sx={{width: '100%', mt: '-13rem', mr: '-20%' }}>
                <PhotoCredit/>
            </Box>
        </Box>
        <Box sx={{ width: '120%', height: '380px', ml: '-10%',  mt: '-170px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
            <svg width="3000" height="300"  xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="0 70 1500 200 3000 70" stroke="black" stroke-width="150"
                    stroke-linecap="round" fill="none" stroke-linejoin="round"/>
            </svg>
        </Box>
    </Box>
  )
}

export default HomeSection;
