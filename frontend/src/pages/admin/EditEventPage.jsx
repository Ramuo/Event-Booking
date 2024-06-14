import React from 'react';
import Sidebar from '../../components/header/Sidebar';

const EditEventPage = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 h-screen">
        <Sidebar/>
        <div className="flex-1">
        <div className="mt-10">
              <h1 className="text-2xl font-bold text-gray-800 uppercase">Éditer L'évènement</h1>
            </div>
        </div>
    </div>
  )
}

export default EditEventPage