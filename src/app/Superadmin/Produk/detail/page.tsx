import React from 'react'

function Page() {
    const formatHarga = (itung : number) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(itung);
      };
  return (
      <div>
          <div>
              <div className="flex w-[70%] min-h-screen mx-auto">
                  <div className='w-[28%] min-h-screen bg-gradient-to-b from-[#178267] to-[#28DFB1]'>
                      <div className="mt-[18%] mx-[25%]">
                          <p className='text-white font-medium text-[23px]'>Detail Produk</p>
                          <div
                            className="w-[160px] h-[200px] mt-[55%] bg-white rounded-xl border-[1.5px] border-[#A9A7A7] -translate-x-2"
                        >
                            <a href="#">
                            <img
                                className="mx-auto mt-5 h-[55%] w-[85%]"
                                alt="Produk Gambar"
                                src={
                                "https://74gslzvj-8000.asse.devtunnels.ms" 
                                }
                            />
                            </a>
                            <div className="px-4 py-2">
                            <h5 className="text-sm font-semibold text-black">
                                Bunga
                            </h5>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-sm font-bold text-[#FF0A0A]">
                                {formatHarga(2000000)}
                                </span>
                            </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="w-[72%] bg-[#FAFAFA] flex flex-col space-y-[3%] shadow-[#00000040] shadow-[7px_0px_8px_-5px] p-[5%]">
                      <div className='space-y-[1%]'>
                          <p className="text-[#18856A] text-[15px]">Nama Produk</p>
                          <p className="text-[18px]">Bunga</p>
                      </div>
                      <div className='space-y-[1%]'>
                          <p className="text-[#18856A] text-[15px]">Kategori Produk</p>
                          <p className="text-[18px]">Tanaman</p>
                      </div>
                      <div className='space-y-[1%]'>
                          <p className="text-[#18856A] text-[15px]">Jumlah pcs</p>
                          <p className="text-[18px]">4</p>
                      </div>
                      <div className='space-y-[1%]'>
                          <p className="text-[#18856A] text-[15px]">Nama Pembeli</p>
                          <p className="text-[18px]">Belia</p>
                      </div>
                      <div className='space-y-[1%]'>
                          <p className="text-[#18856A] text-[15px]">Alamat Pembeli</p>
                          <p className="text-[#00663F] font-bold text-[16px]">Jalan jalan kesana kemari</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Page