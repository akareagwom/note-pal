import { Link, Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Box, Flex } from '@chakra-ui/react';


const Layout: React.FC = () => {
  return (
    <Box display={'flex'}   gap={0} >
      <Box w={'25%'}>
        <NavBar/>
      </Box>

      <Box w={'75%'} bg={'#272140'}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;