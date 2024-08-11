import { Link, Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Box } from '@chakra-ui/react';


const Layout: React.FC = () => {
  return (
    <div>
      <div className="">
        <NavBar/>
      </div>

      <Box bg={'rgb(37, 150, 190)'}>
        <Outlet />
      </Box>

      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;