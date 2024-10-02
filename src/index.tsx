import { Box, Heading, Text, Input, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props{

}

const Home: React.FC<Props> =({})=>{
    return(
    <Box w={{lg:'100%',base:'100%'}} h={'100vh'} py={{base:'',lg:'7%'}} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} color='white' bg={'#272140'}>
        <Box>
        <Heading color={'white'} fontSize={'3rem'}>Remind me</Heading>
        <Text color={'#544c83'}>Note taking made easy</Text>
        </Box>
        <Box mt={16}>
            <Text>Email address</Text>
            <Input bg={'#544c83'} border={'none'} borderRadius={'10px'} w={{lg:'400px',base:'300px'}} placeholder='email' size='md' />
            <Text>Password</Text>
            <Input bg={'#544c83'} border={'none'} borderRadius={'10px'} w={{lg:'400px',base:'300px'}} placeholder='password' size='md' />
            <Text>Repeat password</Text>
            <Input bg={'#544c83'} border={'none'} borderRadius={'10px'} w={{lg:'400px',base:'300px'}} placeholder='password' size='md' />
            <Button bg={'#e53756'} borderRadius={'10px'} color={'white'} >
                <Link to={'/Layout'}>
                Get Started!
                </Link>
            </Button>
    
        </Box>

     
   </Box>
    )
}

export default Home;
