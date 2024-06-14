import React from 'react';
import {Link } from 'react-router-dom';
import Sidebar from '../../components/header/Sidebar';
import { FaPlus } from "react-icons/fa6";

const EventsListPage = () => {

  return (
    <div className="flex lg:flex-row flex-col gap-5 h-screen">
        <Sidebar/>
        <div className="flex-1">
            <div className="flex justify-between items-center mt-10 mx-5">
              <h1 className="text-2xl font-bold text-gray-800 uppercase">Créer un évènement</h1>
              <Link to='/admin/createEvent' className="btn bg-gray-900"><FaPlus className='text-white text-2xl'/></Link>
            </div>
        </div>
    </div>
  )
}

export default EventsListPage