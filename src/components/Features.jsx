import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Img } from "@chakra-ui/react";

const Features = () => {
    return (
        <Box mt='20' mb='10' >
            <Box width='50%'>
                <Heading 
                    color='#000'
                    as='h1'
                    pt='10'
                    fontSize='60px'
                >
                    Businesses building with Mono
                </Heading>
                <Text color='#000' pt='5' pb='8' fontSize='22px'>
                    Here are some of the interesting features 
                    and experiences powered by Mono.
                </Text>
            </Box>

            <Box bgColor='#F5F5F5' px='20' paddingBlock='40px' mt='10' borderRadius='10px'>
            <Tabs variant='solid-rounded' colorScheme='gray'>
            <TabList>
                <Tab py='4' px='6' mr='4'>Lending</Tab>
                <Tab py='4' px='6' mr='4'>Financial Management</Tab>
                <Tab py='4' px='6' mr='4'>Account Verification</Tab>
                <Tab py='4' px='6' mr='4'>Payments</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Box 
                        display='grid' 
                        gridTemplateColumns='55% 45%' 
                        columnGap='20px'
                        py='20'
                        position='relative'
                    >
                        <Box>
                            <Heading fontSize='40px'>
                                Carbon's personalized loan offers
                            </Heading>
                            <Text 
                                color='#606060'
                                py='5'
                            >
                                Carbon wanted to make their risk assessment 
                                and borrower qualification better with 
                                high-quality data.
                            </Text>
                            <Text 
                                color='#606060'
                                pb='5'
                            >
                                Using Mono's Statement Pages, Carbon can receive its users' 
                                bank statements in minutes. 
                                They get cash flow on the accounts for up to 12 months, 
                                all seamlessly without writing a single line of code.
                            </Text>
                            <Flex 
                                alignItems='center' 
                                color='#0759BC' 
                                fontWeight='700'
                                cursor='pointer'
                            >
                                <Text>Read more about Statement Pages</Text>
                                <ArrowForwardIcon ml='3'/>
                            </Flex>
                        </Box>
                        <Img src='../lending.svg' width='100%' />
                        <Img 
                            src='../carbon-logo.svg'
                            position='absolute'
                            top='25px'
                            right='-50px' 
                        backgroundColor='#fff'
                        padding='35px'
                        borderRadius='50%'
                        />
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box 
                        display='grid' 
                        gridTemplateColumns='55% 45%' 
                        columnGap='20px'
                        py='20'
                        position='relative'
                    >
                        <Box>
                            <Heading fontSize='40px'>
                                Inflow's Personal Finance Manager
                            </Heading>
                            <Text 
                                color='#606060'
                                py='5'
                            >
                                Inflow Finance, using Mono Connect, allows thousands 
                                of users to understand and manage their finances 
                                across multiple accounts all in one place
                            </Text>
                            <Text 
                                color='#606060'
                                pb='5'
                            >
                                Just by linking their financial accounts to the Inflow 
                                app using Mono, Inflow's users can now get a 
                                better view of their financial health by monitoring real-time balances 
                                and transactions across accounts, create budgets, and get personal insights on their spending habits.
                            </Text>
                            <Flex 
                                alignItems='center' 
                                color='#0759BC' 
                                fontWeight='700'
                                cursor='pointer'
                            >
                                <Text>Read more about Connect</Text>
                                <ArrowForwardIcon ml='3'/>
                            </Flex>
                        </Box>
                        <Img src='../financial-management.svg' width='100%' />
                        <Img 
                            src='../inflow-use.svg'
                            width='120px'
                            position='absolute'
                            top='25px'
                            right='-50px' 
                            backgroundColor='#fff'
                            padding='35px'
                            borderRadius='50%'
                        />
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box 
                        display='grid' 
                        gridTemplateColumns='55% 45%' 
                        columnGap='20px'
                        py='20'
                        position='relative'
                    >
                        <Box>
                            <Heading fontSize='40px'>
                                Renmoney's secure onboarding
                            </Heading>
                            <Text 
                                color='#606060'
                                py='5'
                            >
                                Renmoney needed to streamline the verification of new users during onboarding.
                            </Text>
                            <Text 
                                color='#606060'
                                pb='5'
                            >
                                Using Mono Connect, Renmoney is able to verify users' account information in seconds by having them link their financial accounts.
                            </Text>
                            <Flex 
                                alignItems='center' 
                                color='#0759BC' 
                                fontWeight='700'
                                cursor='pointer'
                            >
                                <Text>Learn more about Connect</Text>
                                <ArrowForwardIcon ml='3'/>
                            </Flex>
                        </Box>
                        <Img src='../account-verify.svg' width='100%' />
                        <Img 
                            src='../renmoney.svg'
                            width='120px'
                            position='absolute'
                            top='25px'
                            right='-50px' 
                            backgroundColor='#fff'
                            padding='35px'
                            borderRadius='50%'
                        />
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box 
                        display='grid' 
                        gridTemplateColumns='55% 45%' 
                        columnGap='20px'
                        py='20'
                        position='relative'
                    >
                        <Box>
                            <Heading fontSize='40px'>
                                Lemonade Finance's cross-border transfers
                            </Heading>
                            <Text 
                                color='#606060'
                                py='5'
                            >
                                Lemonade finance makes it easy to send and receive money from Nigeria, Kenya, Ghana, Canada, and the UK. 
                                Using DirectPay, Lemonade enables its users to make secure direct cash deposits to be transferred to the country of their choice.       
                            </Text>
                            <Flex 
                                alignItems='center' 
                                color='#0759BC' 
                                fontWeight='700'
                                cursor='pointer'
                            >
                                <Text>Read more about DirectPay</Text>
                                <ArrowForwardIcon ml='3'/>
                            </Flex>
                        </Box>
                        <Img src='../payment.svg' width='100%' />
                        <Img 
                            src='../lemonade.svg'
                            width='120px'
                            position='absolute'
                            top='25px'
                            right='-50px' 
                            backgroundColor='#fff'
                            padding='35px'
                            borderRadius='50%'
                        />
                    </Box>
                </TabPanel>
            </TabPanels>
            </Tabs>
            </Box>
        </Box>
    )
}

export default Features;