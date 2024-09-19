import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar';

const DefaultLayout: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default DefaultLayout;
