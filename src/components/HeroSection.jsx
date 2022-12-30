import { useState } from "react";
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import useGetMediaQuery from "../hooks/useGetMediaQuery";
import style from '../styles/HeroSection.module.css'

const InfoButton = () => {
    const [isHovering, setIsHovering] = useState(false)
    return (
        <Flex 
            alignItems='center' 
            bgColor='#F5F5F5'
            width='fit-content'
            py='2'
            px='3'
            borderRadius='100px'
            cursor='pointer'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Tag 
                bgColor='#0055BA' 
                color='#FFF'
                borderRadius='100px'
                fontSize='13px'
            >
                NEW
            </Tag>
            <Text    
                pl='3'
                pr={isHovering ? '4' : '3'} 
                fontSize='13px' 
                fontWeight='500'
                transition='all .1s'
            >
                Mono is live in Kenya!
            </Text>
            <ArrowForwardIcon />
        </Flex>
    )
}

const GetStartedBtn = () => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <Button
            bgColor='#0055BA' 
            color='#FFF' 
            py='6' 
            mr='4'
            borderRadius='10px'
            _hover={{bgColor: '#0055BA'}}
            className={style.getStarted}
        >
            <Box 
                as='span' 
                pr='3'
                transition='all .1s'
            >
                Get started for free
            </Box>
            <ArrowForwardIcon/>
        </Button>
    )
}

const ContactSalesBtn = () => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <Button
            bgColor='#F5F5F5' 
            color='#353535' 
            py='6' 
            mr='4'
            className={style.contactSales}
            borderRadius='10px'
            _hover={{bgColor: '#F5F5F5'}}
      
        >
            <Box 
                as='span' 
                pr='3'
                transition='all .1s'
            >
                Contact Sales
            </Box>
            <ArrowForwardIcon/>
        </Button>
    )
}

const HeroSection = () => {
    const mediaQuery = useGetMediaQuery()

    return (
        <Box 
            className={style.heroSection}
            style={{marginTop: '100px'}}
            mb='20'
        >
            <Box>
                <InfoButton />
                <Heading 
                    as='h1'
                    pt='10'
                    className={style.heading}
                >
                    Reliably access bank accounts
                </Heading>
                <Text 
                    fontWeight='500' 
                    letterSpacing='1.3px'
                    style={{marginBlockStart: '35px', marginBlockEnd: '50px'}} 
                    className={style.description}
                >
                    Mono helps businesses to access high-quality
                    financial data and direct bank payments.
                </Text>
                <Flex className={style.btnContainer}>
                    <GetStartedBtn />
                    <ContactSalesBtn />
                </Flex>
            </Box>
        </Box>
    )
}

export default HeroSection;