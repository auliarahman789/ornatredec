import React from 'react'
type popLogout = {
    isVisible: boolean;
    onClose: (isClose: boolean) => void;
}
const Logout: React.FC<popLogout> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  return (
    <div className='fixed inset-0 z-50 flex ps-[25%] justify-center items-center '>
          <div className="w-[30%] pb-[5%] px-[2%] backdrop-blur-md bg-pink-600 rounded-md">
              <p>hhhhh</p>
          </div>
          </div>
  )
}

export default Logout