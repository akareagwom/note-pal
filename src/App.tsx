// import { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import NavBar from './components/NavBar';
import { Box, Heading, Text, Input, Stack, Button } from '@chakra-ui/react';

function App() {

  return (
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
      <Button bg={'#e53756'} borderRadius={'10px'} color={'white'}>Get Started!</Button>
    
</Stack>

      
    </Box>
  )
}

export default App
