import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

type Block = {
    isVisible: boolean;
    onClose: (isClose: boolean) => void;
}
const Blokir : React.FC<Block> = ({ isVisible, onClose }) => {
    const { id } = useParams();
    const router = useRouter();
    async function status() {
        const url = `${process.env.NEXT_PUBLIC_URL}api/blokir/${id}`;
        try {
            const res = await axios.put(url,
            //   {
            //   status: "terblokir"
            //     },
                {
                    withCredentials: true,
                },
            );
            alert('akun berhasil di blokir')
            onClose(true);
            router.push("/Superadmin/Akun")
        } catch (error: any) {
          console.log(error);
          alert("Terjadi kesalahan saat memblokir akun");
        }
      }
    if (!isVisible) return null;
  return (
      <div className='fixed inset-0 flex ps-[25%] items-center'>
          <div className="w-[40%] ">
              <div className="bg-white h-[200px] shadow-inner rounded-[10px]">
                  <div className="h-[40%] py-[6%] text-center border-b-[2px] border-[#80FCCD]">
                      <p className="text-[#308967] font-semibold text-[23px]">Yakin Blokir Akun ini?</p>
                  </div> 
                  <div className="h-[30%] py-[4%] text-center border-b-[2px] border-[#80FCCD]">
                      <p onClick={status} className="text-[#FF0A0A] text-[23px] cursor-pointer">Blokir</p>
                  </div> 
                  <div className="h-[30%] py-[4%] text-center">
                      <p className="text-[#308967] text-[23px] cursor-pointer" onClick={() => onClose(true)}>Batalkan</p>
                  </div> 
              </div>
          </div>
     </div>
  )
}

export default Blokir