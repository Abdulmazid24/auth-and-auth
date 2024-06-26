import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Root = () => {
  return (
    <div className="bg-purple-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
