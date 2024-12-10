import React from 'react'
type popLogout = {
    isVisible: boolean;
    onClose: (isClose: boolean) => void;
}
const Logout: React.FC<popLogout> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  return (
    <div className='fixed z-[5000] inset-0 flex justify-center items-center '>
          <div className="w-[30%] pb-[5%] z-auto px-[2%] backdrop-blur-md bg-pink-600 rounded-md">
              <p>hhhhh</p>
          </div>
          </div>
  )
}

export default Logout