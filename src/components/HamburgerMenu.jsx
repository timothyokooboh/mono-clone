import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = ({setIsNavDrawerOpen}) => {
    const root = useRef(null)
    const handleClick = (e) => {
        console.log(root.current)
        root.current.classList.toggle('open')
      
    }
    return (
        <Box 
            ref={root} 
            className='navIcon menuBtn' 
            onClick={handleClick}
            bgColor='red'
        >
            <span></span>
            <span></span>
            <span></span>
        </Box>
    )
}

export default HamburgerMenu;