import { 
    Button,
    Flex, 
    Img, 
    Menu, 
    Text,  
    MenuButton, 
    MenuItem, 
    MenuList, 
    Heading,
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
   
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from "react";
import MENU_ITEMS from '../config/menuItems'

const MenuGridStyle = { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    columnGap: '60px',
    justifyContent: 'space-between', 
    alignItems: 'center'
}

const TheHeader = () => {
    return (
        <Flex 
            justifyContent='space-between' 
            alignItems='center'
            py='5'
        >
            <Img src='../logo.svg' />
            <Flex alignItems='center'>
                {
                    MENU_ITEMS.map(menu => (
                        <Popover trigger="hover" key={menu.id}>
                            <PopoverTrigger>
                                <Button 
                                    variant='ghost' 
                                    mr='3'
                                >
                                    <span>{menu.title}</span>
                                    <ChevronDownIcon fontWeight='500' fontSize='22px'/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent  
                                filter='drop-shadow(0 25px 30px rgba(0,0,0,.13))'
                                border='1px solid hsla(0,0%,89.8%,.75)'
                                width='fit-content' 
                                minWidth='250px'
                            >
                                <PopoverArrow />
                                <PopoverBody  
                                    style={menu.id === 'products' ? MenuGridStyle : {}}
                                >
                                    {
                                        menu.items.map(item => (
                                            <Flex 
                                                alignItems='center' 
                                                key={item.title} 
                                                mt='5'
                                                mb='6'
                                                cursor='pointer'
                                                px='4'        
                                            >
                                                <img src={item.img} mr='3' />
                                                <Box>
                                                    <Heading 
                                                        fontSize='15px' 
                                                        pb={menu.id === 'why_choose_mono' || menu.id === 'products' ? '2' : '0'} 
                                                    >{item.title}</Heading>
                                                    <Text fontSize='14px'>{item.content}</Text>
                                                </Box>
                                            </Flex>
                                        ))
                                    }
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    ))
                }
                
            </Flex>
            <Button 
                bgColor='#0055BA' 
                color='#FFF' 
                px='4' 
                py='6' 
                borderRadius='10px'
                _hover={{bgColor: 'blue.700', transform: "translateY(-1px)"}}
                transition='all .2s'
            >
                Sign in
            </Button>
        </Flex>

    )
}

export default TheHeader;