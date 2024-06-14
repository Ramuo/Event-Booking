import React from 'react'
import Sidebar from '../../components/header/Sidebar';
import MainForm from '../../components/form/MainForm';

const CreateEventPage = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 h-screen">
        <Sidebar/>
        <div className="flex-1">
            <div className="mt-10 mx-5">
              <h1 className="text-2xl font-bold text-gray-800 uppercase mb-20">Créer évènement</h1>
              <MainForm/>
            </div>
        </div>
    </div>
  )
}

export default CreateEventPage