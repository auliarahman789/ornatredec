import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Dataadmin = () => {
  const [data, setData] = useState<any[]>([]);
  // const [isOnline, setOnline] = useState(false);

  // useEffect(() => {
  //   function handleOnlineStatus() {
  //     setOnline(true)
  //   }
  //   function handleOfflineStatus() {
  //     setOnline(false)
  //   }
  //   window.addEventListener("online", handleOnlineStatus)
  //   window.addEventListener("offline", handleOfflineStatus)

  //   return () => {
  //     window.addEventListener("online", handleOnlineStatus)
  //   window.addEventListener("offline", handleOfflineStatus)
  //   }
  // })

  useEffect(() => {
    getDataadmin();
  }, []);

  async function getDataadmin() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/getdanFilterUser?role=admin`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data user.");
    }
  }
  return (
    <div>
      <ul className="flex text-[#00663F] font-semibold space-x-[13%] mt-[2%] ms-[4%]">
        <li className="">Admin</li>
        <li className="ps-[7%]">Status</li>
        <li className="">No Contact</li>
        <li className="">Hubungi</li>
      </ul>
      <div className="bg-[#E4FFF2] p-5 w-[72%] mt-4 rounded-md min-h-screen">
        <div>
          {data.map((item: any) => (
            <div
              key={item.id}
              className="bg-white  flex w-[100%] h-[20%] mt-[2%] py-4 px-5"
            >
              <div className="w-[36%] flex">
                <Image
                  src={
                    item.photoProfile
                      ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                        item.photoProfile
                      : "/img/default-avatar.png"
                  }
                  alt=""
                  width={70}
                  height={70}
                  className="ms-2 rounded-full"
                />
                <ul className="ms-5 mt-2">
                  <li className="text-[20px]">{item.username}</li>
                  <li className="font-light">{item.email}</li>
                </ul>
              </div>
              <p
                className={`text-sm mt-[3%] w-[25%] ms-2 ${
                  item.statusAktif === "aktif"
                    ? "text-[#51CB9F]"
                    : "text-[#FF0A0A]"
                }`}
              >
                {item.statusAktif}
              </p>
              <p className=" text-sm text-[#3F9272] w-[25%] mt-[3%]">
                {item.no_hp}
              </p>
              <button className="bg-[#308967] h-[1%] py-2 px-[3%] text-sm text-white rounded-full mt-[2%]">
                Hubungi
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dataadmin;
