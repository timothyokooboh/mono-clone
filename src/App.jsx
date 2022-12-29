import { Box } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import TheHeader from './components/TheHeader'


const App = () => {
  return (
    <Box mx='auto' maxWidth='1800px'>
      <TheHeader />
      <HeroSection />
      
    </Box>
  )
}

export default App
