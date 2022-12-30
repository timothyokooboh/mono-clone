import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Img } from "@chakra-ui/react";
import style from '../styles/Features.module.css'

const Features = () => {
    return (
        <Box marginTop='130px' mb='10' >
            <Box width='50%' className={style.headingSection}>
                <Heading 
                    color='#000'
                    as='h1'
                    pt='10'
                    fontSize='60px'
                    className={style.heading}
                >
                    Businesses building with Mono
                </Heading>
                <Text 
                    color='#000' 
                    pt='5' 
                    pb='8' 
                    fontSize='22px'
                    className={style.headingDescription}
                >
                    Here are some of the interesting features 
                    and experiences powered by Mono.
                </Text>
            </Box>

            <Box bgColor='#F5F5F5' px='20' paddingTop='40px' mt='10' borderRadius='10px' className={style.tabContainer}>
                <Tabs variant='solid-rounded' colorScheme='gray'>
                <TabList className={style.tabList}>
                    <Tab py='4' px='6' mr='4' className={style.tab}>Lending</Tab>
                    <Tab py='4' px='6' mr='4' className={style.tab}>Financial Management</Tab>
                    <Tab py='4' px='6' mr='4' className={style.tab}>Account Verification</Tab>
                    <Tab py='4' px='6' mr='4' className={style.tab}>Payments</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel pb='0'>
                        <Box 
                            display='grid' 
                            gridTemplateColumns='55% 45%' 
                            columnGap='20px'
                            pt='20'
                            position='relative'
                            className={style.tabPanel}
                        >
                            <Box>
                                <Heading fontSize='40px' as='h2' className={style.featureTitle}>
                                    Carbon's personalized loan offers
                                </Heading>
                                <Text 
                                    color='#606060'
                                    py='5'
                                    className={style.featureContent}
                                >
                                    Carbon wanted to make their risk assessment 
                                    and borrower qualification better with 
                                    high-quality data.
                                </Text>
                                <Text 
                                    color='#606060'
                                    pb='5'
                                    className={style.featureContent}
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
                            <Img src='../lending.svg' width='100%' height='100%' />
                            <Img 
                                src='../carbon-logo.svg'
                                position='absolute'
                                top='25px'
                                right='-50px' 
                                backgroundColor='#fff'
                                padding='35px'
                                borderRadius='50%'
                                className={style.imageTag}
                            />
                        </Box>
                    </TabPanel>
                    <TabPanel pb='0'>
                        <Box 
                            display='grid' 
                            gridTemplateColumns='55% 45%' 
                            columnGap='20px'
                            pt='20'
                            position='relative'
                            className={style.tabPanel}
                        >
                            <Box>
                                <Heading fontSize='40px' className={style.featureTitle}>
                                    Inflow's Personal Finance Manager
                                </Heading>
                                <Text 
                                    color='#606060'
                                    py='5'
                                    className={style.featureContent}
                                >
                                    Inflow Finance, using Mono Connect, allows thousands 
                                    of users to understand and manage their finances 
                                    across multiple accounts all in one place
                                </Text>
                                <Text 
                                    color='#606060'
                                    pb='5'
                                    className={style.featureContent}
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
                                className={style.imageTag}
                            />
                        </Box>
                    </TabPanel>
                    <TabPanel pb='0'>
                        <Box 
                            display='grid' 
                            gridTemplateColumns='55% 45%' 
                            columnGap='20px'
                            pt='20'
                            position='relative'
                            className={style.tabPanel}
                        >
                            <Box>
                                <Heading fontSize='40px' className={style.featureTitle}>
                                    Renmoney's secure onboarding
                                </Heading>
                                <Text 
                                    color='#606060'
                                    py='5'
                                    className={style.featureContent}
                                >
                                    Renmoney needed to streamline the verification of new users during onboarding.
                                </Text>
                                <Text 
                                    color='#606060'
                                    pb='5'
                                    className={style.featureContent}
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
                                className={style.imageTag}
                            />
                        </Box>
                    </TabPanel>
                    <TabPanel pb='0'>
                        <Box 
                            display='grid' 
                            gridTemplateColumns='55% 45%' 
                            columnGap='20px'
                            pt='20'
                            position='relative'
                            className={style.tabPanel}
                        >
                            <Box>
                                <Heading fontSize='40px' className={style.featureTitle}>
                                    Lemonade Finance's cross-border transfers
                                </Heading>
                                <Text 
                                    color='#606060'
                                    py='5'
                                    className={style.featureContent}
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
                                className={style.imageTag}
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