import React from 'react'
import contoh from '../../../../../../public/img/daun puring 1.png'
import Image from 'next/image';
function Page() {
    const formatHarga = (itung : number) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(itung);
      };
  return (
      <div className='overflow-x-hidden'>
          <div className='flex'>
              <div className="flex w-[65%] min-h-screen mx-[15%]">
                  <div className='w-[25%] min-h-screen bg-gradient-to-b from-[#178267] to-[#28DFB1] fixed'>
                      <div className="mt-[18%] mx-[26%]">
                          <p className='text-white font-medium text-[23px] whitespace-nowrap'>Detail Produk</p>
                          <div
                            className="w-[160px] h-[200px] mt-[60%] bg-white rounded-xl border-[1.5px] border-[#A9A7A7] -translate-x-2"
                        >
                            <a href="#">
                            <Image
                                className="mx-auto mt-5 h-[55%] w-[85%]"
                                alt="Produk Gambar"
                                src={contoh}
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
                  <div className="w-[72%] bg-[#FAFAFA] bg-fixed translate-x-[51%] flex flex-col space-y-[3%] shadow-[#00000040] shadow-[7px_0px_8px_-5px] p-[5%]">
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
                      <div className='space-y-[1%] pt-[10%]'>
                          <p className="text-[#18856A] text-[15px]">Ongkos Kirim</p>
                          <p className="text-[#00663F] font-bold text-[16px]">-</p>
                      </div>
                      <div className='space-y-[1%]'>
                          <p className="text-[#18856A] text-[15px]">Total Pembayaran</p>
                          <p className="text-[#00663F] font-bold text-[16px]">{formatHarga(200000)}</p>
                      </div>
                      <div className='space-y-[1%]'>
                          <p className="text-[#18856A] text-[15px]">Status</p>
                          <div className="flex space-x-[14%]">
                              
                            <div className="flex space-x-4">
                                <input type="radio" name='status bayar' value='Sudah bayar' id='Sudah bayar' />
                                <label htmlFor="Sudah bayar">Sudah bayar</label>
                            </div>
                            <div className="flex space-x-4">
                                <input type="radio" name='status bayar' value='cod' id='cod' />
                                <label htmlFor="cod">cod</label>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="relative">
                  
                <p className='text-[#00663F] absolute -translate-x-[80%] bottom-10 font-bold'>
                    Konfirmasi
                </p>
              </div>
          </div>
    </div>
  )
}

export default Page