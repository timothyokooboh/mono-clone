import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { company, products, resources, legal } from "../config/footerDetails";
import style from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <Box bgColor='#000' px='40' className={style.footer}>
            <Box 
                textAlign='center' 
                display='flex'
                flexDirection='column' 
                alignItems='center'
            >
                <Box pt='40' mb='12' width='70%' className={style.headingSection}>
                    <Heading 
                        color='#FFF'
                        fontSize='60px'
                        pb='5'
                        as='h2'
                        className={style.heading}
                    >
                        Start building with Mono
                    </Heading>
                    <Text color='#FFF' fontSize='25px' className={style.content}>
                        Access high-quality financial data and start 
                        processing payments directly from bank accounts 
                        in minutes.
                    </Text>
                </Box>
                <Flex mb='20' className={style.footerBtnSection}>
                    <Button
                        bgColor='#0055BA' 
                        color='#FFF' 
                        _hover={{backgroundColor: '#0055BA'}}
                        mr='3'
                        py='6'
                        borderRadius='10px'
                        className={style.footerBtns}
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
                        className={style.footerBtns}
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
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='space-between'
                    mb='20'
                >
                    <Box color='#FFF' mb='8' mr='8'>
                        <Text color='#969696'>Products</Text>
                        {
                            products.map((product, idx) => (
                                <Text pt='3' key={idx}>{product}</Text>
                            ))
                        }
                    </Box>
                    <Box color='#FFF' mb='8' mr='8'>
                        <Text color='#969696'>Resources</Text>
                        {
                            resources.map((resource, idx) => (
                                <Text pt='3' key={idx}>{resource}</Text>
                            ))
                        }
                    </Box>
                    <Box color='#FFF' mb='8' mr='8'>
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
            
            <Flex justifyContent='space-between' alignItems='center' pb='20' className={style.socialIcons}>
                <Flex alignItems='center' className={style.companyLogoSection}>
                    <Img src='../white-mono.svg' mr='10'/>
                    <Text color='#FFF'>
                        &copy; Mono Technologies Nigeria Limited
                    </Text>
                </Flex>
                <Flex alignItems='center'>
                    <Flex mr='3' alignItems='center'  cursor='pointer'>
                        <Img src='../twitter.svg' mr='2'/>
                        <Text color='#FFF'>Twitter</Text>
                    </Flex>
                    <Box width='3px' height='3px' bgColor='#FFF' borderRadius='50%' mr='3'></Box>
                    <Flex alignItems='center' cursor='pointer'>
                        <Img src='../linkedin.svg' mr='2'/>
                        <Text color='#FFF'>Linkedin</Text>
                    </Flex>

                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer;