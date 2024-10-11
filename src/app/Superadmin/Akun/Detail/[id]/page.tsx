'use client'
import React from 'react'
import back from  '../../../../../../public/icon/Arrow_alt_left.svg'
import router from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import contoh from '../../../../../../public/img/daun puring 1.png'
import location from '../../../../../../public/icon/location_on.svg'
function Page ({ params }: { params: { id: number } }) {
    const { id } = params;
    const router = useRouter();
    const handleBack = () => {
        router.push('/Superadmin/Akun')
    }
  return (
      <div className='overflow-x-hidden min-h-screen '>
          <div className="translate-x-64">
              <div className='bg-[#E4FFF2] min-h-screen w-[70%] ms-[5%] p-4 rounded-md mt-[3%]'>
                  <Image onClick={handleBack} src={back} width={40} height={40} alt='back'/>
                  <div className="flex ms-[8%] space-x-7">
                      <Image src={contoh} width={130} height={130} alt='foto profil'
                          className='rounded-full' />
                      <div className="flex-col -translate-y-2">
                          <p className='text-[34px] ms-1 translate-y-4 mb-1'>Belia</p>
                          <p className='text-[15px] ms-1 font-light'>@gmail.com</p>
                          <p className='text-[15px] ms-1 font-light'>03989040494</p>
                          <div className="flex">
                              <Image src={location} width={25} height={25} alt='lokasi' />
                              <p className='text-[15px] font-medium me-[26%] translate-y-[3px]'>bandung</p>
                              <button className='w-[100px] text-white px-3 py-[2px] rounded-lg bg-[#3F9272]'>Hubungi</button>
                          </div>
                      </div>
                      <div className='flex-col space-y-3 pl-[15%]'>
                        <p className='text-[20px] ms-1 translate-y-4 mb-1'>Bergabung Sejak</p>
                        <p className='text-[15px] ms-1 mt-1 font-light'>20 - 09 - 2007</p>
                      </div>
                  </div>
                  <div className="flex-col mt-[4%]">
                      <p className="text-[13px]">Ulasan <span className='text-[#3F9272]'>Belia</span></p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Page