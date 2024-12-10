/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
type ReportPopUp = {
    id: number;
    isVisible: boolean;
    onClose: (isClose: boolean) => void;
};
const ReportPop: React.FC<ReportPopUp> = ({ id, isVisible, onClose }) => {
    if (!isVisible) return null;
    const [descReport, setDescReport] = useState<string>("");
    const router = useRouter();
    async function Report() {
        const url = `${process.env.NEXT_PUBLIC_URL}api/report`
        try {
          const res2= await axios.post(
            url, 
            {
              id_post: id,
              desc_report: descReport 
            },
            {
              withCredentials: true,
            }
            )
          setDescReport("");
          Swal.fire({
            title: "Berhasil melaporkan konten",
            icon: "success",
            iconColor: "#06612B",
            showConfirmButton: false,
            timer: 3000,
            })
            router.replace("/Forum")
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Gagal melaporkan konten", 
            icon: "error",
            iconColor: "#06612B",
            showConfirmButton: false,
            timer: 3000,
            })
        }
      }
  return (
    <div className="flex fixed justify-center items-center inset-0 z-20">
          <div className='bg-white w-[30%] h-[240px] shadow-md shadow-gray-400 p-[3%]'>
              <div className="">
                  <label htmlFor="report" className='text-[20px] text-[#06612B]'>Alasan Report Konten</label>
                  <textarea required maxLength={150} name="report" id="report" className='w-full h-[100px] p-2 border' onChange={(e)=>setDescReport(e.target.value)} placeholder='Ketik Disini' />
              </div>
              <div className="relative">
              <div className="absolute right-2 top-2 flex">
                    <button  onClick={() => onClose(true)} className='cursor-pointer me-[5%] py-1 px-2 rounded-md top-2 bg-[#E2FFF8] text-[#06612B]'>
                        Batal
                    </button>
                      <button onClick={Report} className='cursor-pointer py-1 px-2 rounded-md top-2 bg-[#E2FFF8] text-[#06612B]'>
                        Kirim
                    </button>
                  </div> 
              </div>
          </div>   
    </div>
  )
}

    export default ReportPop;