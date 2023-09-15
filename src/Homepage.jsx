import { Container } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { TabList, Tabs } from '@chakra-ui/react';
import { Tab } from '@chakra-ui/react';
import { TabPanels } from '@chakra-ui/react';
import { TabPanel } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import SignUp from './componant/Athentication/SignUp';
import Signin from './componant/Athentication/Signin';

const Homepage = () => {

    return (
        <Container maxW='xl' centerContent>
            <Box   d='flex'
                 justifyContent="center"
                    p={3}
                    bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"  
                 >
                <Text>Talk-A-Tive</Text>
            </Box>
            

            <Box bd="white" w="100%" p={4} borderRadius="lg"  borderWidth="1px" >
            
            <Tabs>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign up</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
     <Signin></Signin>
    </TabPanel>
    <TabPanel>
                       
                               <SignUp></SignUp>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
            
            </Box>
        
        </Container>
    );
};

export default Homepage;