import { Box, Button, Divider, Flex, IconButton, Img, Text } from "@chakra-ui/react";
import style from "../styles/NavDrawer.module.css";
import {AiOutlineClose } from 'react-icons/ai'

const NavDrawer = ({isNavDrawerOpen, setIsNavDrawerOpen}) => {
    return (
        <Box position='relative' overflow='scroll' className={style.navDrawer} >
            <Box 
                bgColor='#fff' 
                height={isNavDrawerOpen ? '100vh' : 0}
                width='100vw' 
                position='fixed' 
                top='60px' 
                left='0' 
                zIndex='999'
                overflow-y='scroll'
                py={isNavDrawerOpen ? '5' : 0}
                transition='all .5s ease'
            >
                <Flex  
                    height='100%' 
                    overflow='scroll' 
                    mx='auto' 
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center'
                    pb={isNavDrawerOpen ? '40' : 0}
                >

                
                    <Flex width='60%' mt='20' flexDirection='column' justifyContent='center' className={style.mobileMenuList}>
                        <Box mb='8'>
                            <Text color='#848484' fontSize='14px'>Why Mono</Text>
                            <Box 
                                display='grid' 
                                gridTemplateColumns='1fr 1fr'
                                columnGap='40px;'
                                py='5'
                                
                            >
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../why-mono.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>Why Choose Mono</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../pricing-plan.svg' width='25px' mr='3'/>
                                    <Text fontWeight='700' fontSize='14px'>pricing</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../demo.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>See a Demo</Text>
                                </Flex>
                            </Box>

                            <Divider />
                        </Box>

                        <Box mb='8'>
                            <Text color='#CFCFCF'>Products</Text>
                            <Box 
                                display='grid' 
                                gridTemplateColumns='1fr 1fr'
                                columnGap='40px;'
                                py='5'
                            >
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../connect.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>Coonect</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../statement-pages.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>Statement Pages</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../directpay.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>DirectPay</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../direct-pay-pages.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>DirectPay Pages</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../portal.svg' width='25px' mr='3'/>
                                    <Text fontWeight='700' fontSize='14px'>Portal</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../percept.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>Percept</Text>
                                </Flex>
                            </Box>

                            <Divider />
                        </Box>

                        <Box mb='8'>
                            <Text color='#CFCFCF'>Learn</Text>
                            <Box 
                                display='grid' 
                                gridTemplateColumns='1fr 1fr'
                                columnGap='40px;'
                                py='5'
                            >
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../connect.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>About</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../statement-pages.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>Blog</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../directpay.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>Tutorials</Text>
                                </Flex>
                                <Flex alignItems='center' mb='2'>
                                    <Img src='../direct-pay-pages.svg' width='25px' mr='3' />
                                    <Text fontWeight='700' fontSize='14px'>Coverage</Text>
                                </Flex>
                            </Box>

                            <Divider />
                        </Box>

                        <Button 
                            bgColor='#0055BA' 
                            color='#FFF' 
                            px='4' 
                            py={isNavDrawerOpen ? '3' :'0'}
                            borderRadius='10px'
                            _hover={{bgColor: '#0055BA'}}
                            position='fixed'
                            bottom='20px'
                            left='50%'
                            width='80%'
                            maxWidth='500px'
                            transform='translateX(-50%)'
                            overflow='hidden'
                            height={isNavDrawerOpen ? 'auto' : 0}
                            transition='all .5s ease'
                           
                    >
                        Sign in
                    </Button>

                    </Flex>
                </Flex>
               
            
            </Box>
        </Box>
    )
}

export default NavDrawer;