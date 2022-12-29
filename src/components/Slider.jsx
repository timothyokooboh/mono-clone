import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Icon, Img, IconButton} from "@chakra-ui/react";
import { useState } from "react";
import {FaQuoteLeft} from 'react-icons/fa'

const Slider = () => {
    const [viewingFirstSlide, setViewingFirstSlide] = useState(true);

    return (
        <Box>
            <Box 
                width='50%' 
                marginBlockStart='120px' 
                marginBlockEnd='20px'
            >
                <Heading
                    fontSize='60px'
                    pb='5'
                >
                    Why market leaders are choosing Mono
                </Heading>
                <Text fontSize='24px'>Here's what some of them are saying.</Text>
            </Box>

            <Flex 
                justifyContent='space-between' 
                mb='20' 
                overflow='hidden' 
                scrollBehavior='smooth'
                counterReset='carousel'
            >
                <Box
                    display='grid'
                    justifyContent='space-between' 
                    gridTemplateColumns='1fr 1fr'
                    columnGap='20px'
                    mt='20'
                    scrollBehavior='smooth'
                    scrollSnapType='x mandatory'
                    transform={viewingFirstSlide ? 'translateX(0)' : 'translateX(-100vw)'}
                    width={viewingFirstSlide ? '100%' : '0%'}
                    height='800px'
                    transition='width 1s ease, transform 1s ease'
                >
                    <Box 
                        bgColor='#F5F5F5'
                        py='10'
                        px='10'
                        borderRadius='15px'
                        position='relative'
                    >
                        <figure 
                            style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <blockquote>
                                <Box paddingBottom='100px' fontSize='30px'>
                                    <Icon as={FaQuoteLeft} mb='6'/>
                                    <Text fontSize='40px' fontWeight='bold'>
                                    It's important to go with a data provider that 
                                    inspires confidence in users to give consent to share 
                                    their data; this is one of our favourite things 
                                    about Mono.
                                    </Text>
                                </Box>
                            </blockquote>
                            <figcaption>
                                <Flex alignItems='center'>
                                    <Img 
                                        src='../barima.png' 
                                        mr='3' 
                                        width='50px' 
                                        border='1px solid lightblue'
                                        borderRadius='50%'
                                    />
                                    <Img 
                                        src='../flag.png' 
                                        mr='3' 
                                        width='25px' 
                                        position='absolute'
                                        bottom='35px'
                                        left='70px'
                                        bgColor='#fff'
                                        padding='5px'
                                        borderRadius='50%'
                                    />

                                    <Box>
                                        <Text fontWeight='700'>Barima Effah-Adjei</Text>
                                        <Text color='#6C6C6C' fontSize='14px'>Co-founder, Float</Text>
                                    </Box>
                                </Flex>
                            </figcaption>
                        </figure>
                    </Box>
                    <Box 
                        bgColor='#F5F5F5'
                        py='10'
                        px='10'
                        borderRadius='15px'
                        position='relative'
                    >
                        <figure 
                            style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                        >
                            <blockquote>
                                <Box paddingBottom='100px' fontSize='30px'>
                                    <Icon as={FaQuoteLeft} mb='6'/>
                                    <Text fontSize='40px' fontWeight='bold'>
                                    The onboarding and integration process with Mono 
                                    was smooth. Our Engineering and Product teams use 
                                    the dashboard to oversee our statement collection process.
                                    </Text>
                                </Box>
                            </blockquote>
                            <figcaption>
                                <Flex alignItems='center'>
                                    <Img 
                                        src='../emma.png' 
                                        mr='3' 
                                        width='50px' 
                                        border='1px solid lightblue'
                                        borderRadius='50%'
                                    />
                                     <Img 
                                        src='../alpha.png' 
                                        mr='3' 
                                        width='25px' 
                                        position='absolute'
                                        bottom='35px'
                                        left='70px'
                                        bgColor='#fff'
                                        padding='5px'
                                        borderRadius='50%'
                                    />

                                    <Box>
                                        <Text fontWeight='700'>Emmanuel Ogunsola</Text>
                                        <Text color='#6C6C6C' fontSize='14px'>Product Manager, Aella</Text>
                                    </Box>
                                </Flex>
                            </figcaption>
                        </figure>
                    </Box>
                </Box>

                <Box
                    display='grid'
                    justifyContent='space-between' 
                    gridTemplateColumns='1fr 1fr'
                    columnGap='20px'
                    mt='20'
                    scrollBehavior='smooth'
                    scrollSnapType='x mandatory'
                    transform={viewingFirstSlide ? 'translateX(100vw)' : 'translateX(0)'}
                    width={viewingFirstSlide ? '0%' : '100%'}
                    height='800px'
                    transition='width 1s ease, transform 1s ease'
                >
                    <Box 
                        bgColor='#F5F5F5'
                        py='10'
                        px='10'
                        borderRadius='15px'
                        position='relative'
                    >
                        <figure 
                            style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <blockquote>
                                <Box paddingBottom='100px' fontSize='30px'>
                                    <Icon as={FaQuoteLeft} mb='6'/>
                                    <Text fontSize='40px' fontWeight='bold'>
                                        We can trust Mono over 90% of the time which 
                                        is better than our previous provider. 
                                        This ease & reliability are our favourite 
                                        things about Mono.
                                    </Text>
                                </Box>
                            </blockquote>
                            <figcaption>
                                <Flex alignItems='center'>
                                    <Img 
                                        src='../daniel.png' 
                                        mr='3' 
                                        width='50px' 
                                        border='1px solid lightblue'
                                        borderRadius='50%'
                                    />
                                    <Img 
                                        src='../point.png' 
                                        mr='3' 
                                        width='25px' 
                                        position='absolute'
                                        bottom='35px'
                                        left='70px'
                                        bgColor='#fff'
                                        padding='5px'
                                        borderRadius='50%'
                                    />

                                    <Box>
                                        <Text fontWeight='700'>Daniel Osineye</Text>
                                        <Text color='#6C6C6C' fontSize='14px'>Co-Founder/ CTO, Evolve Credit</Text>
                                    </Box>
                                </Flex>
                            </figcaption>
                        </figure>
                    </Box>
                    <Box 
                        bgColor='#F5F5F5'
                        py='10'
                        px='10'
                        borderRadius='15px'
                        position='relative'
                    >
                        <figure 
                            style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                        >
                            <blockquote>
                                <Box paddingBottom='100px' fontSize='30px'>
                                    <Icon as={FaQuoteLeft} mb='6'/>
                                    <Text fontSize='40px' fontWeight='bold'>
                                    Migrating to Mono was seamless... 
                                    The simplicity and stability of the 
                                    Mono SDKs are top-notch.
                                    </Text>
                                </Box>
                            </blockquote>
                            <figcaption>
                                <Flex alignItems='center'>
                                    <Img 
                                        src='../peter.png' 
                                        mr='3' 
                                        width='50px' 
                                        border='1px solid lightblue'
                                        borderRadius='50%'
                                    />
                                     <Img 
                                        src='../fingerprint.png' 
                                        mr='3' 
                                        width='25px' 
                                        position='absolute'
                                        bottom='35px'
                                        left='70px'
                                        bgColor='#fff'
                                        padding='5px'
                                        borderRadius='50%'
                                    />

                                    <Box>
                                        <Text fontWeight='700'>Peter Olusesan</Text>
                                        <Text color='#6C6C6C' fontSize='14px'>CEO, Inflow Finance</Text>
                                    </Box>
                                </Flex>
                            </figcaption>
                        </figure>
                    </Box>
                </Box>
            </Flex>

            <Flex 
                justifyContent='space-between' 
                alignItems='center'
                mb='20'
            >
                <Flex>
                    <Box 
                        width='15px'
                        height='15px'
                        borderRadius='50%'
                        backgroundColor={viewingFirstSlide ? '#000' : '#E5E5E5'}
                        mr='5'
                    />
                    <Box 
                        width='15px'
                        height='15px'
                        borderRadius='50%'
                        backgroundColor={viewingFirstSlide ? '#E5E5E5' : '#000'}
                    />
                </Flex>
                <Flex>
                    <IconButton 
                        aria-label='switch slide'
                        icon={<ArrowBackIcon />}
                        bgColor={viewingFirstSlide ? '#E5E5E5' : '#0055BA'}
                        _hover={{
                            backgroundColor: viewingFirstSlide ? '#E5E5E5' : '#0055BA'
                        }}
                        color={viewingFirstSlide ? '#333' : '#fff'}
                        size='lg'
                        mr='3'
                        borderRadius='50%'
                        disabled={viewingFirstSlide === true}
                        onClick={() => setViewingFirstSlide(true)}
                    />
                    <IconButton 
                        aria-label='switch slide'
                        icon={<ArrowForwardIcon />}
                        bgColor={viewingFirstSlide ? '#0055BA' : '#E5E5E5'}
                        _hover={{
                            backgroundColor: viewingFirstSlide ? '#0055BA' : '#E5E5E5'
                        }}
                        color={viewingFirstSlide ? '#FFF' : '#333'}
                        size='lg'
                        borderRadius='50%'
                        disabled={viewingFirstSlide === false}
                        onClick={() => setViewingFirstSlide(false)}
                    />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Slider;