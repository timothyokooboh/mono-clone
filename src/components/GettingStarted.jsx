import { Box, Flex, Heading, Icon, Img, Text } from "@chakra-ui/react";
import {FiArrowUpRight} from 'react-icons/fi'

const GettingStarted = () => {
    return (
        <Box 
            backgroundImage='../getting-started-bg.jpg'
            backgroundSize='cover'
            backgroundPosition='center'
            py='40'
            paddingInline='140px'
        >
            <Heading 
                color='#FFF'
                fontSize='60px'
            >
                Getting started
            </Heading>
            <Box 
                bgColor='#FFF' 
                borderRadius='15px' 
                mt='20' 
                mb='5'
                pt='20' 
                px='14'
            >
                <Img src='../apis.svg' />
                <Box
                    display='grid'
                    gridTemplateColumns='1fr 1fr'
                    columnGap='30px'
                >
                    <Box>
                        <Heading 
                            color='#000'
                            fontSize='52px'
                            pt='5'
                            pb='8'
                        >
                            Powerful APIs and easy-to-use resources
                        </Heading>
                        <Flex 
                            alignItems='center' 
                            color='#0759BC' 
                            fontWeight='700'
                            cursor='pointer'
                        >
                            <Text fontSize='17px'>
                                Read our API Docs
                            </Text>
                            <Icon as={FiArrowUpRight}  ml='3'/>
                        </Flex>
                    </Box>
                    <Img src='api-response-frame.png' height='100%' />
                </Box>
            </Box>

            <Box
                display='grid'
                gridTemplateColumns='repeat(3, 1fr)'
                columnGap='20px'
            >
                <Box
                    bgColor='#FFF'
                    py='14'
                    px='12'
                    borderRadius='15px' 
                >
                    <Img src='../plug.svg' />
                    <Heading fontSize='30px' py='4'>Plug-and-play SDKs</Heading>
                    <Flex 
                        alignItems='center' 
                        color='#0759BC' 
                        fontWeight='700'
                        cursor='pointer'
                        pt='2'
                    >
                        <Text fontSize='17px'>
                            Explore our SDKs
                        </Text>
                        <Icon as={FiArrowUpRight}  ml='3'/>
                    </Flex>
                </Box>
                <Box
                    bgColor='#FFF'
                    py='14'
                    px='12'
                    borderRadius='15px' 
                >
                    <Img src='../beautiful-ux.svg' />
                    <Heading fontSize='30px' py='4'>Beautiful seamless UX</Heading>
                    <Flex 
                        alignItems='center' 
                        color='#0759BC' 
                        fontWeight='700'
                        cursor='pointer'
                        pt='2'
                    >
                        <Text fontSize='17px'>
                            See a demo
                        </Text>
                        <Icon as={FiArrowUpRight}  ml='3'/>
                    </Flex>
                </Box>
                <Box
                    bgColor='#FFF'
                    py='14'
                    px='12'
                    borderRadius='15px' 
                >
                    <Img src='../support.svg' />
                    <Heading fontSize='30px' py='4'>Always-on support</Heading>
                    <Flex 
                        alignItems='center' 
                        color='#0759BC' 
                        fontWeight='700'
                        cursor='pointer'
                        pt='2'
                    >
                        <Text fontSize='17px'>
                            Explore our SDKs
                        </Text>
                        <Icon as={FiArrowUpRight}  ml='3'/>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default GettingStarted;