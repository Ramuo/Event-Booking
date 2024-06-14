import React from 'react';
import {useSelector} from "react-redux";
import Sidebar from '../components/header/Sidebar';

const HomePage = () => {
  const {userInfo} = useSelector((state) => state.auth);
 
  return (
    <div className="flex lg:flex-row flex-col gap-5 h-screen">
        <Sidebar/>
        <div className="flex-1">
            <div className="hello">Hello</div>
        </div>
    </div>
  )
}

export default HomePage