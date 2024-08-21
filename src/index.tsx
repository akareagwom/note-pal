import { Box, Heading, Text, Input, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props{

}

const Home: React.FC<Props> =({})=>{
    return(
    <Box w='100%' display={'flex'} flexDir={'column'} alignItems={'center'} color='white' h={'100vh'} bg={'#272140'}>
        <Box textAlign={'left'} mr={'140px'} mt={6}>
        <Heading color={'white'} fontSize={'3rem'}>Remind me</Heading>
        <Text color={'#544c83'}>Note taking made easy</Text>
        </Box>
        <Stack mt={16} spacing={3}>
            <Text>Email address</Text>
            <Input bg={'#544c83'} border={'none'} borderRadius={'10px'} w={'400px'} placeholder='medium size' size='md' />
            <Text>Password</Text>
            <Input bg={'#544c83'} border={'none'} borderRadius={'10px'} w={'400px'} placeholder='medium size' size='md' />
            <Text>Repeat password</Text>
            <Input bg={'#544c83'} border={'none'} borderRadius={'10px'} w={'400px'} placeholder='medium size' size='md' />
            <Button bg={'#e53756'} borderRadius={'10px'} color={'white'} >
                <Link to={'/Layout'}>
                Get Started!
                </Link>
            </Button>
    
        </Stack>

     
   </Box>
    )
}

export default Home;
