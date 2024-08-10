import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar';
import { Box } from '@chakra-ui/react';

function App() {

  return (
    <Box w='100%' h={''} bg={'#272140'}>
      <div className="">
        <NavBar/>
      </div>

      <main>
        <Outlet />
      </main>
    </Box>
  )
}

export default App
