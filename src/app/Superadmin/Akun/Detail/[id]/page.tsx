"use client";
import React, { useEffect, useState } from "react";
import back from "../../../../../../public/icon/Arrow_alt_left.svg";
import router from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import contoh from "../../../../../../public/img/daun puring 1.png";
import location from "../../../../../../public/icon/location_on.svg";
import seen from "../../../../../../public/icon/Eye (1).svg";
import reply from "../../../../../../public/icon/Chat_alt_2.svg";
import forum from "../../../../../../public/icon/Chat_alt_fill.svg";
import pesan from "../../../../../../public/icon/Basket_alt_3.svg";
import axios from "axios";

type Detail = {
  alamats: any;
  photoProfile: string;
  email: string;
  no_hp: string;
  username: string;
};

function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const router = useRouter();

  const handleBack = () => {
    router.push("/Superadmin/Akun");
  };

  const [data, setData] = useState<Detail | null>(null);
  useEffect(() => {
    console.log("Params ID:", id);
    const fetchData = async () => {
      const url = `${process.env.NEXT_PUBLIC_URL}api/detail/${id}`;
      try {
        const res = await axios.get<Detail>(url, {
          withCredentials: true,
        });
        setData(res.data);
        console.log(res.data);
      } catch (error: any) {
        console.error("Error fetching user details:", error);
        alert("Terjadi kesalahan saat mengambil data detail user");
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="overflow-x-hidden min-h-screen">
      <div className="translate-x-64">
        <div className="bg-[#E4FFF2] min-h-screen w-[70%] ms-[5%] p-4 rounded-md mt-[3%]">
          <Image
            onClick={handleBack}
            src={back}
            width={40}
            height={40}
            alt="back"
          />
          {data && (
            <div className="flex ms-[8%] space-x-7">
              <Image
                src={
                  data.photoProfile
                    ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                      data.photoProfile
                    : "/img/default-avatar.png"
                }
                width={130}
                height={130}
                alt="foto profil"
                className="rounded-full"
              />
              <div className="flex-col -translate-y-2">
                <p className="text-[34px] ms-1 translate-y-4 mb-1">
                  {data.username}
                </p>
                <p className="text-[15px] ms-1 font-light">{data.email}</p>
                <p className="text-[15px] ms-1 font-light">{data.no_hp}</p>
                <div className="flex">
                  <Image src={location} width={25} height={25} alt="lokasi" />
                  <p className="text-[15px] font-medium me-[26%] translate-y-[3px]">
                    {data.alamats && data.alamats.length > 0
                      ? data.alamats[0].kota_kabupaten
                      : "Tidak tersedia"}
                  </p>
                  <button className="w-[100px] text-white px-3 py-[2px] rounded-lg bg-[#3F9272]">
                    Hubungi
                  </button>
                </div>
              </div>
              <div className="flex-col space-y-3 pl-[15%]">
                <p className="text-[20px] ms-1 translate-y-4 mb-1">
                  Bergabung Sejak
                </p>
                <p className="text-[15px] ms-1 mt-1 font-light">
                  20 - 09 - 2007
                </p>
              </div>
            </div>
          )}
          <div className="flex-col mt-[4%] ">
            <p className="text-[13px] ms-[4%]">
              Ulasan <span className="text-[#3F9272]">Belia</span>
            </p>
            <div className="flex space-x-[10%]">
              <div className="bg-white ms-[2%] min-h-screen mb-10 py-6 mt-2 w-[53%]">
                <div className="w-[90%] h-[190px]  mx-auto shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
                  <div className="flex">
                    <div className="flex-col">
                      <Image
                        src={contoh}
                        width={180}
                        height={180}
                        alt="foto profil"
                      />
                      <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[6%] text-white font-semibold text-[12px]">
                        Atur
                      </button>
                    </div>
                    <div className="m-[5%] flex-col space-y-1">
                      <div className="flex space-x-2">
                        <Image
                          src={contoh}
                          width={30}
                          height={30}
                          alt="foto profil"
                          className="rounded-full"
                        />
                        <p className="text-[15px] text-[#21B892] mt-1">
                          Beliaaa
                        </p>
                      </div>
                      <p className="font-medium text-[18px] leading-none text-[#323735]">
                        Bunga matahari sangat cantikk
                      </p>
                      <p className="font-light text-[12px]">
                        Ulasan dari{" "}
                        <span className="text-[#005DE8]">Beliaa</span> pada
                        20-09-2028
                      </p>
                      <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                        Tanaman
                      </button>
                      <div className="flex pt-[7%] translate-x-[50%]">
                        <Image
                          src={seen}
                          width={20}
                          height={20}
                          alt="foto profil"
                        />
                        <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                          500
                        </p>
                        <Image
                          src={reply}
                          className="ms-3"
                          width={20}
                          height={20}
                          alt="foto profil"
                        />
                        <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                          500
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col mt-[5%] space-y-7 w-[25%]">
                <div className="bg-[#1AE5CC] h-[190px] flex-col rounded-xl">
                  <div className="flex justify-center pt-[22%]">
                    <Image
                      src={pesan}
                      width={47}
                      height={47}
                      alt="foto profil"
                    />
                    <p className="font-medium mt-2 text-[48px] text-white">
                      30
                    </p>
                  </div>
                  <p className="text-white text-[20px] ms-[30%]">Berbelanja</p>
                </div>
                <div className="bg-[#1AE5CC] h-[190px] flex-col rounded-xl">
                  <div className="flex justify-center pt-[22%]">
                    <Image
                      src={forum}
                      width={47}
                      height={47}
                      alt="foto profil"
                    />
                    <p className="font-medium mt-2 text-[48px] text-white">
                      30
                    </p>
                  </div>
                  <p className="text-white text-[20px] ms-[16%]">
                    Ulasan di forum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
