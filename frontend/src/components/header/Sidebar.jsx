import {useState} from 'react';
import {FaBars} from "react-icons/fa";
import Nav from './Nav'
import {Drawer} from "antd";

const Sidebar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <div className="lg:flex hidden h-full lg:w-60">
        <Nav/>
      </div>
      <div className="flex bg-rose-50 p-5 lg:hidden shadow-md">
        <FaBars 
        className='text-2xl text-gray-700'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>
      
      {showMobileMenu && (
        <Drawer
        open={showMobileMenu}
        placement='left'
        onClose={() => setShowMobileMenu(false)}
        >
          <Nav/>
        </Drawer>
      )}
    </div>
  )
}

export default Sidebar