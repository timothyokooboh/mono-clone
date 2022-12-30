import { ArrowForwardIcon, TimeIcon } from "@chakra-ui/icons";
import { Heading, Text, Box, Img, Button, Flex, background } from "@chakra-ui/react";
import style from '../styles/Products.module.css'

const Products = () => {
    return (
        <Box>
            <Box
                className={style.headingContainer}
                mb='10'
            >
                <Box>
                    <Heading 
                        as='h2'
                        pt='10'
                        className={style.heading}
                    >
                        Build for the future of digital finance.
                    </Heading>
                    <Text 
                        fontWeight='500' 
                        letterSpacing='1.3px'
                        style={{marginBlockStart: '35px', marginBlockEnd: '50px'}} 
                        className={style.description}
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
                mb='5'
                borderRadius='20px'
                className={style.connectBg}
            >
                <Box className={style.connectBgContent}>
                    <Img 
                        src='../connect.svg'
                        width='60px'  
                        mb='5' 
                        marginLeft='-6px'
                    />
                    <Heading 
                        as='h3' 
                        color='#FFF'
                        className={style.connectBgHeading}
                    >
                        Connect
                    </Heading>
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
                        className={style.connectBgBtn}
                    >
                        <span>Start with Connect</span>
                        <ArrowForwardIcon ml='3' />
                    </Button>
                </Box>
            </Box>

            <Box 
                display='grid' 
                gridTemplateColumns='1fr 1fr' 
                columnGap='15px'
                className={style.productContainer}
            >
                <Box
                    backgroundImage='../directpay.jpg'
                    backgroundSize='cover'
                    backgroundPosition='bottom'
                    borderRadius='20px'
                    className={style.directPayBg}
                >
                    <Box 
                        paddingBottom='320px' 
                        pt='10'
                        className={style.directPayBox}
                    >
                        <Img 
                            src='../directpay.svg'
                            width='60px' 
                            marginLeft='-6px'
                            mb='5' 
                        />
                        <Heading 
                            color='#000' 
                            as='h3' 
                            className={style.directPay}
                        >
                            DirectPay
                        </Heading>
                        <Text 
                            color='#232324' 
                            pt='5' 
                            pb='8'
                            className={style.directPayDescription}
                        >
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
                            className={style.directPayBtn}
                        >
                            <span>Start with DirectPay</span>
                            <ArrowForwardIcon ml='3' />
                        </Button>
                        <Flex 
                            alignItems='center'
                            pl='4'
                        >
                            <Text 
                                bgColor='#EBF5FF' 
                                opacity='0.7'
                                className={style.partnership}
                                mr='2'
                            >
                                In partnership with
                            </Text>
                            <Img src='dark-flutter.svg' width='120px' className={style.flutterImg} />
                        </Flex>
                    </Box>
                </Box>
                <Box
                    backgroundImage='../percept.png'
                    backgroundSize='cover'
                    backgroundPosition='bottom'
                    px='14'
                    borderRadius='20px'
                    className={style.perceptBg}
                >
                    <Box 
                        paddingBottom='320px' 
                        paddingTop='60px'
                        className={style.perceptBox}
                    >
                        <Img 
                            src='../union.svg'
                            width='35px' 
                            marginLeft='-6px'
                            mb='5' 
                        />
                        <Heading 
                            color='#FFF' 
                            as='h3' 
                            className={style.perceptHeading}
                        >
                            Percept
                        </Heading>
                        <Text color='#FFF' pt='5' pb='8' perceptDescription>
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
                            className={style.perceptBtn}
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