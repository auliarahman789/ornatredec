import React from 'react'
import Register from '../components/auths/registerform'
import RegisterL from '../components/auths/registerleft'

function Page() {
  return (
    <main className="bg-[#E3FFF3] w-full h-screen relative">
      <div className='h-screen w-[1200px] bg-contain bg-no-repeat' style={{backgroundImage:"url('/img/bgregister.png')"}}>
      <div className='flex absolute top-[12%] bottom-[12%] left-[18%] right-[19%] shadow-[8px_15px_3px] shadow-gray-400'><RegisterL/><Register/> </div>
      </div>
      </main>
  )
}

export default Page