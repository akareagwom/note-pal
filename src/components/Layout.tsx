import { Link, Outlet } from 'react-router-dom';
import NavBar from './NavBar';


const Layout: React.FC = () => {
  return (
    <div>
      <div className="">
        <NavBar/>
      </div>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;