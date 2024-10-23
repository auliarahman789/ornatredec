import React from "react";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import profil from "../../../../../public/icon/profil.svg";
import share from "../../../../../public/icon/share.svg";
import save from "../../../../../public/icon/save.svg";
import Image from "next/image";

function DetailReportUlasan() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <div className="translate-x-64 pt-[2%] ">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-2 inline-block text-transparent bg-clip-text">
          Kelola Forum
        </div>
        <div className="ms-[65%] mt-[3%]">
          <button className="bg-green-400 rounded-xl text-white px-4">
            Hapus
          </button>
        </div>
        <div className="">
          <div className="w-full h-[155px]">
            <div className="flex">
              <div className="flex items-start">
                <Image
                  src={profil}
                  width={38}
                  height={38}
                  alt="foto profil"
                  className="rounded-full ml-6 mt-4"
                />
                {/* Tambahkan gambar di sebelah kanan profil */}
                <Image
                  src="/img/kaktus.png"
                  width={100}
                  height={100}
                  alt="foto profil kedua"
                  className="ml-4 h-[157px] w-[206px] bg-slate-600"
                />
              </div>

              <div className="ms-[3%] flex-col space-y-1">
                <div className="flex">
                  <div className="flex space-x-2 mb-[3%]">
                    <p className=" text-[#21B892] mt-1 text-[20px]">
                      Tanaman buat orang Buta
                    </p>
                  </div>
                  <div className="ms-[60%]">
                    <div className="text-sm text-center">34</div>
                    <div className="text-center bg-red-600 h-[38%] w-5 rounded-full text-sm text-white">
                      i
                    </div>
                  </div>
                </div>

                <p className="font-light text-[12px]">
                  Ulasan dari <span className="text-[#005DE8]">Ucup </span>
                  pada 12-23-2333
                </p>
                <button className="bg-[#C2FFE8] p-[2px] rounded w-[15%] text-[#06612B] font-light text-[12px]">
                  Tanaman
                </button>

                <div className="flex pt-[3.5%] -translate-x-10">
                  <Image
                    src={share}
                    className="ms-10"
                    width={20}
                    height={20}
                    alt="share"
                  />
                  <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                    877
                  </p>
                  <Image
                    src={mata}
                    className="ms-10"
                    width={20}
                    height={20}
                    alt="foto profil"
                  />
                  <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                    877
                  </p>
                  <Image
                    src={chat2}
                    className="ms-10"
                    width={20}
                    height={20}
                    alt="foto profil"
                  />
                  <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                    890
                  </p>
                  <Image
                    src={save}
                    className="ms-[65.5%]"
                    width={20}
                    height={20}
                    alt="foto profil"
                  />
                </div>
                <div className="border-b w-[650px] border-black"></div>
              </div>
            </div>
          </div>
          <div className="h-[23%] space-y-[2%] mt-[2%]">
            <p className="text-black leading-tight ml-[6%] w-[60%] text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vitae voluptatum et quo culpa pariatur natus aut excepturi
              sapiente. Animi dolor eius sunt amet inventore molestias libero
              quisquam consectetur doloribus! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nam, repudiandae? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Animi repudiandae quas amet
              enim dolore temporibus deserunt, at reiciendis aut iste.
            </p>

            <p className="text-black leading-tight ml-[6%] w-[60%] text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vitae voluptatum et quo culpa pariatur natus aut excepturi
              sapiente. Animi dolor eius sunt amet inventore molestias libero
              quisquam consectetur doloribus!
            </p>

            <p className="text-black leading-tight ml-[6%] w-[60%] text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vitae voluptatum et quo culpa pariatur natus aut excepturi
              sapiente. Animi dolor eius sunt amet inventore molestias libero
              quisquam consectetur doloribus! Lorem ipsum, dolor sit amet
              consectetur adipisicing elpudiandae quas amet enim dolore
              temporibus deserunt, at reiciendis aut iste.
            </p>
          </div>

          <div className="flex">
            <div className="text-[24px] text-[#21B892] ms-[6%] mt-[3%] mb-[2%]">
              Catatan Laporan User
            </div>
            <div className="text-[#FF0404] text-[20px] mt-[3%] ms-[40%] h-[5%]">
              43
            </div>
          </div>

          <div className="space-y-3 ">
            <div className="h-[125px] w-[751px] ms-[10%] rounded-2xl border shadow-[6px_6px_5px] shadow-[#0000002e]">
              {" "}
              <div className="flex pt-4 mb-[2%]">
                <img
                  src="/img/default-avatar.png"
                  width={50}
                  height={50}
                  alt="foto profil"
                  className="rounded-full ms-5"
                />
                <p className="text-[15px] text-[#21B892] mt-1 ms-3">Baimwonk</p>
                <p className="text-[15px] text-[#7D7D7D] mt-1 ml-9">
                  2 jam yang lalu
                </p>
              </div>
              <div className="text-black text-[15px] leading-tight ml-[12.5%] -translate-y-7 w-[70%]">
                Statement pantas banget bayangin orang buta kalau liat ini di
                perhatikan lagi yaa bahasanya jaga etikanya ya kak
              </div>
            </div>

            <div className="h-[125px] w-[751px] ms-[10%] rounded-2xl border shadow-[6px_6px_5px] shadow-[#0000002e]">
              {" "}
              <div className="flex pt-4 mb-[2%]">
                <img
                  src="/img/default-avatar.png"
                  width={50}
                  height={50}
                  alt="foto profil"
                  className="rounded-full ms-5"
                />
                <p className="text-[15px] text-[#21B892] mt-1 ms-3">Baimwonk</p>
                <p className="text-[15px] text-[#7D7D7D] mt-1 ml-9">
                  2 jam yang lalu
                </p>
              </div>
              <div className="text-black text-[15px] leading-tight ml-[12.5%] -translate-y-7 w-[70%]">
                Statement pantas banget bayangin orang buta kalau liat ini di
                perhatikan lagi yaa bahasanya jaga etikanya ya kak
              </div>
            </div>

            <div className="h-[125px] w-[751px] ms-[10%] rounded-2xl border shadow-[6px_6px_5px] shadow-[#0000002e] mb-3">
              {" "}
              <div className="flex pt-4 mb-[2%]">
                <img
                  src="/img/default-avatar.png"
                  width={50}
                  height={50}
                  alt="foto profil"
                  className="rounded-full ms-5"
                />
                <p className="text-[15px] text-[#21B892] mt-1 ms-3">Baimwonk</p>
                <p className="text-[15px] text-[#7D7D7D] mt-1 ml-9">
                  2 jam yang lalu
                </p>
              </div>
              <div className="text-black text-[15px] leading-tight ml-[12.5%] -translate-y-7 w-[70%]">
                Statement pantas banget bayangin orang buta kalau liat ini di
                perhatikan lagi yaa bahasanya jaga etikanya ya kak
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReportUlasan;
