import React from 'react'
import Register from '../components/auths/registerform'
import RegisterL from '../components/auths/registerleft'

function Page() {
  return (
    <main className="bg-[#E3FFF3] w-full h-screen flex justify-center items-center">
      <div className='flex shadow-[15px_15px_3px] shadow-gray-400'>
        <RegisterL />
        <Register />
      </div>
    </main>
  )
}

export default Page