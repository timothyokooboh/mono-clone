import React from 'react';
import { Box, Flex, Img, Text, useBreakpoint } from "@chakra-ui/react"
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import useGetMediaQuery from '../hooks/useGetMediaQuery';

const CustomerLogos = () => {
    const mediaQuery = useGetMediaQuery()

    let width = '80px';

    if (mediaQuery === 'sm') {
        width = '125px'
    } else if (mediaQuery === 'md') {
        width = '135px'
    } else if (mediaQuery === 'lg') {
        width = '140px'
    }

    return (
        <Box  my='10'>
            <Text pb='10'>Trusted by</Text>
            <Flex 
                flexWrap='wrap' 
                columnGap='30px' 
                rowGap='30px'
                alignItems='center'
                justifyContent='space-between'
            >
                <Img src='../carbon.svg' width={width} />
                <Img src='../autochek.svg' width={width} />
                <Img src='../flutter.svg' width={width} />
                <Img src='../evolve-credit.svg' width={width} />
            </Flex>
        </Box>
    )
}

export default CustomerLogos;