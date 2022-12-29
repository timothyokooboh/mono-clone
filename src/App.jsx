import { Box } from '@chakra-ui/react'
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import CustomerLogos from './components/CustomerLogos'
import Features from './components/Features';
import Footer from './components/Footer';
import GettingStarted from './components/GettingStarted';
import HeroSection from './components/HeroSection'
import Products from './components/Products';
import Slider from './components/Slider';
import TheHeader from './components/TheHeader'


const App = () => {
  const sm = useMediaQuery('(max-width: 600px)');
  const md = useMediaQuery('(max-width: 800px)');

  let hPadding = '30px'

  if (sm) {
    hPadding = '30px'
  } else if (md) {
    hPadding = '80px'
  } else {
    hPadding = '140px'
  }

  return (
    <Box mx='auto'>
      <Box paddingInline={hPadding} maxWidth='1800px'>
        <TheHeader />
        <HeroSection />
        <CustomerLogos />
        <Products />
        <Features />
        <Slider />
      </Box>
      <GettingStarted />
      <Footer />
    </Box>
  )
}

export default App
