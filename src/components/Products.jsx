import { ArrowForwardIcon, TimeIcon } from "@chakra-ui/icons";
import { Heading, Text, Box, Img, Button, Flex, background } from "@chakra-ui/react";

const Products = () => {
    return (
        <Box>
            <Box
                display='grid' 
                gridTemplateColumns='1fr 1fr' 
                columnGap='40px'
                mb='10'
            >
                <Box>
                    <Heading 
                            as='h2'
                            pt='10'
                            fontSize='60px'
                        >
                        Build for the future of digital finance.
                    </Heading>
                    <Text 
                        fontSize='22px' 
                        fontWeight='500' 
                        letterSpacing='1.3px'
                        style={{marginBlockStart: '35px', marginBlockEnd: '50px'}} 
                    >
                        Bring tomorrow's solutions to life, with our customer-focused solutions, today.
                    </Text>
                </Box>
                <Box />
            </Box>

            <Box
                backgroundImage='../connect.jpg'
                backgroundSize='cover'
                backgroundPosition='bottom'
                paddingBlock='100px'
                px='14'
                mb='5'
                borderRadius='20px'
            >
                <Box width='30%'>
                    <Img 
                        src='../connect.svg'
                        width='60px'  
                        mb='5' 
                        marginLeft='-6px'
                    />
                    <Heading color='#FFF'>Connect</Heading>
                    <Text color='#FFF' py='5'>
                        Securely access financial accounts for statements, 
                        transactions, and identity
                    </Text>
                    <Button 
                        color='#0055BA' 
                        bgColor='#FFF' 
                        mb='10'
                        borderRadius='10px'
                        py='6'
                    >
                        <span>Stat with Connect</span>
                        <ArrowForwardIcon ml='3' />
                    </Button>
                </Box>
            </Box>

            <Box 
                display='grid' 
                gridTemplateColumns='1fr 1fr' 
                columnGap='15px'
            >
                <Box
                    backgroundImage='../directpay.jpg'
                    backgroundSize='cover'
                    backgroundPosition='bottom'
                    px='14'
                    borderRadius='20px'
                >
                    <Box 
                        paddingBottom='320px' 
                        pt='10'
                        width='80%'
                    >
                        <Img 
                            src='../directpay.svg'
                            width='60px' 
                            marginLeft='-6px'
                            mb='5' 
                        />
                        <Heading color='#000'>DirectPay</Heading>
                        <Text color='#232324' pt='5' pb='8'>
                        Collect bank payments in your web or mobile app. 
                        No cards. No chargebacks
                        </Text>
                        <Button 
                            color='#FFF' 
                            bgColor='#0055BA'
                            _hover={{backgroundColor: '#0055BA'}}
                            mb='3'
                            borderRadius='10px'
                            py='6'
                        >
                            <span>Stat with DirectPay</span>
                            <ArrowForwardIcon ml='3' />
                        </Button>
                        <Flex 
                            alignItems='center'
                            pl='4'
                        >
                            <Text 
                                bgColor='#EBF5FF' 
                                opacity='0.7'
                            >
                                In partnership with
                            </Text>
                            <Img src='dark-flutter.svg' width='120px' />
                        </Flex>
                    </Box>
                </Box>
                <Box
                    backgroundImage='../percept.png'
                    backgroundSize='cover'
                    backgroundPosition='bottom'
                    px='14'
                    borderRadius='20px'
                >
                    <Box 
                        paddingBottom='320px' 
                        paddingTop='60px'
                        width='80%'
                    >
                        <Img 
                            src='../union.svg'
                            width='35px' 
                            marginLeft='-6px'
                            mb='5' 
                        />
                        <Heading color='#FFF'>Percept</Heading>
                        <Text color='#FFF' pt='5' pb='8'>
                        Money operations and reconciliation for all your 
                        corporate accounts, in one dashboard
                        </Text>
                        <Button 
                            color='#FFF' 
                            bgColor='#202020' 
                            _hover={{backgroundColor: '#202020'}}
                            mb='3'
                            borderRadius='10px'
                            py='6'
                        >
                            <span>Request access</span>
                            <TimeIcon ml='3' />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Products;