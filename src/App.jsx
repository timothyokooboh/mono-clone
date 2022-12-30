import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import { useState } from 'react';
import CustomerLogos from './components/CustomerLogos'
import Features from './components/Features';
import Footer from './components/Footer';
import GettingStarted from './components/GettingStarted';
import HeroSection from './components/HeroSection'
import NavDrawer from './components/NavDrawer';
import Products from './components/Products';
import Slider from './components/Slider';
import TheHeader from './components/TheHeader'
import style from './styles/App.module.css'


const App = () => {
  const sm = useMediaQuery('(max-width: 600px)');
  const md = useMediaQuery('(max-width: 800px)');
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)

  return (
    <Box>
      <Box className={style.appContainer}>
        <Box maxWidth='1800px' mx='auto'>
          <TheHeader 
            isNavDrawerOpen={isNavDrawerOpen} 
            setIsNavDrawerOpen={setIsNavDrawerOpen}
          />
          <HeroSection />
          <CustomerLogos />
          <Products />
          <Features />
          {/* <Slider /> */}
        </Box>
      </Box>

    <GettingStarted />
    <Footer />
    <NavDrawer 
      setIsNavDrawerOpen={setIsNavDrawerOpen} 
      isNavDrawerOpen={isNavDrawerOpen}
    />
    </Box>
  )
}

export default App
