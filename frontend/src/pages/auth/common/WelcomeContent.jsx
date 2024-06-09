import React from 'react'

const WelcomeContent = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800 px-4 w-full'>
        <div className="">
            <img src="./images/illustration-working.svg" alt="welcome" className="w-64 h-56" />
            <h1 className="text-orange-500 text-4xl font-bold mt-2">
                FESTIVALS D'ÉTÉ
            </h1>
            <p className='text-gray-200 text-xs'>
              Bienvenue sur Barry Events, la meilleure plateforme pour créer et gérer vos événements 
            </p>
      </div>
    </div>
  )
}

export default WelcomeContent;