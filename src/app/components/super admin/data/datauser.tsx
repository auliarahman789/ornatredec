import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Datauser = () => {
  const [data, setData] = useState<any[]>([]);
  const [isOnline, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnlineStatus() {
      setOnline(true)
    }
    function handleOfflineStatus() {
      setOnline(false)
    }
    window.addEventListener("online", handleOnlineStatus)
    window.addEventListener("offline", handleOfflineStatus)

    return () => {
      window.addEventListener("online", handleOnlineStatus)
    window.addEventListener("offline", handleOfflineStatus)
    }
  }, [])

  useEffect(() => {
    getDatauser();
  }, []);

  async function getDatauser() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/getdanFilterUser?role=user`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data); 
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert('Terjadi kesalahan saat mengambil data user.');
    }
  }
  return (
    <div>
      <ul className='flex text-[#00663F] font-semibold space-x-7 mt-[2%] ms-[2%]'>
        <li className="pe-[20%]">User</li>
        <li className="pe-[5%]">Status</li>
        <li className="pe-[5%]">Lokasi</li>
        <li className="pe-[6%]">No Contact</li>
        <li className="">Hubungi</li>
      </ul>
      <div className='bg-[#E4FFF2] p-5 w-[72%] mt-4 rounded-md min-h-screen'>
        <div>
          {data.map((item: any) => (
            <div key={item.id} className='bg-white flex w-[100%] h-[20%] mt-[2%] py-4 px-5'>
              <div className='w-[37%] flex'>
                <img src={item.photoProfile ? "https://74gslzvj-8000.asse.devtunnels.ms" + item.photoProfile : "/img/default-avatar.png"} alt='' width={70} height={70} className='ms-2 rounded-full' />
                <ul className='ms-5 mt-2'>
                  <li className="text-[20px]">{item.username}</li>
                  <li className="font-light">{item.email}</li>
                </ul>
              </div>
              <p className=' text-sm mt-[3%] w-[15%] -translate-x-4'>{isOnline == true ? <p className='text-[#51CB9F]'>Aktif</p>: <p className='text-[#FF0A0A]'>Tidak Aktif</p>}</p>
              <p className=' text-sm text-black mt-[3%] w-[16%]'>{item.alamats.kota_kabupaten}</p>
              <p className=' text-sm text-[#3F9272] mt-[3%] w-[22%]'>{item.no_hp}</p>
              <button className='bg-[#308967] w-[10%] h-[1%] py-2 text-sm text-white rounded-full mt-[2%]'>Hubungi</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Datauser