import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { company, products, resources, legal } from "../config/footerDetails";

const Footer = () => {
    return (
        <Box bgColor='#000' px='40'>
            <Box 
                textAlign='center' 
                display='flex'
                flexDirection='column' 
                alignItems='center'
            >
                <Box pt='40' mb='12' width='40%'>
                    <Heading 
                        color='#FFF'
                        fontSize='30px'
                        pb='5'
                    >
                        Start building with Mono
                    </Heading>
                    <Text color='#FFF' fontSize='22px'>
                        Access high-quality financial data and start 
                        processing payments directly from bank accounts 
                        in minutes.
                    </Text>
                </Box>
                <Flex mb='20'>
                    <Button
                        bgColor='#0055BA' 
                        color='#FFF' 
                        _hover={{backgroundColor: '#0055BA'}}
                        mr='3'
                        py='6'
                        borderRadius='10px'
                    >
                        <Flex>
                            <Text>Start now for free</Text>
                            <ArrowForwardIcon ml='3' />
                        </Flex>
                    </Button>
                    <Button
                        bgColor='#202020' 
                        color='#FFF' 
                        _hover={{backgroundColor: '#202020'}}
                        py='6'
                        borderRadius='10px'
                    >
                        <Flex>
                            <Text>Talk to sales</Text>
                            <ArrowForwardIcon ml='3' />
                        </Flex>
                    </Button>
                </Flex>
            </Box>

            <Box 
                width='100%' 
                height='0.080px' 
                bgColor='#333' 
                mb='20'
            />

            <Box pb='10'>
                <Box 
                    display='grid'
                    gridTemplateColumns='repeat(4, 1fr)'
                    columnGap='20px'
                    justifyContent='space-between'
                    mb='20'
                >
                    <Box color='#FFF'>
                        <Text color='#969696'>Products</Text>
                        {
                            products.map((product, idx) => (
                                <Text pt='3' key={idx}>{product}</Text>
                            ))
                        }
                    </Box>
                    <Box color='#FFF'>
                        <Text color='#969696'>Resources</Text>
                        {
                            resources.map((resource, idx) => (
                                <Text pt='3' key={idx}>{resource}</Text>
                            ))
                        }
                    </Box>
                    <Box color='#FFF'>
                        <Text color='#969696'>Company</Text>
                        {
                            company.map((company, idx) => (
                                <Text pt='3' key={idx}>{company}</Text>
                            ))
                        }
                    </Box>
                    <Box color='#FFF'>
                        <Text color='#969696'>Legal</Text>
                        {
                            legal.map((item, idx) => (
                                <Text pt='3' key={idx}>{item}</Text>
                            ))
                        }
                    </Box>
                </Box>

                <Box 
                    width='100%' 
                    height='0.080px' 
                    bgColor='#333' 
                />
            </Box>
            
            <Flex justifyContent='space-between' alignItems='center' pb='20'>
                <Flex alignItems='center'>
                    <Img src='../white-mono.svg' mr='3'/>
                    <Text color='#FFF'>
                        &copy; Mono Technologies Nigeria Limited
                    </Text>
                </Flex>
                <Flex alignItems='center'>
                    <Flex mr='3' alignItems='center'>
                        <Img src='../twitter.svg' mr='2'/>
                        <Text color='#FFF'>Twitter</Text>
                    </Flex>
                    <Box width='3px' height='3px' bgColor='#FFF' borderRadius='50%' mr='3'></Box>
                    <Flex alignItems='center'>
                        <Img src='../linkedin.svg' mr='2'/>
                        <Text color='#FFF'>Linkedin</Text>
                    </Flex>

                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer;