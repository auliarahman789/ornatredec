import React from 'react'
import Register from '../components/auths/registerform'
import RegisterL from '../components/auths/registerleft'

function Page() {
  return (
    <div className='flex items-center absolute top-[13%] left-[15%] right-[15%]'><Register/> <RegisterL/> </div>
  )
}

export default Page
