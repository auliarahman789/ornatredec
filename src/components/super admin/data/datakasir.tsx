import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Datakasir = () => {
  const [data, setData] = useState<any[]>([]);
  const [isOnline, setOnline] = useState(navigator.onLine);

  // useEffect(() => {
  //   function handleOnlineStatus() {
  //     setOnline(true);
  //   }
  //   function handleOfflineStatus() {
  //     setOnline(false);
  //   }

  //   window.addEventListener("online", handleOnlineStatus);
  //   window.addEventListener("offline", handleOfflineStatus);

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener("online", handleOnlineStatus);
  //     window.removeEventListener("offline", handleOfflineStatus);
  //   };
  // }, []); // Hanya dijalankan sekali saat komponen dipasang

  const hubungi = document.getElementById("hubungi") as HTMLButtonElement;
  function handleEmailClick(recipient: string) {
    // const recipient = data?.user.email;
    // const subject = '';
    // const body = '';
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  }

  useEffect(() => {
    getDatakasir();
  }, []);

  async function getDatakasir() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getdanFilterUser?role=kasir`;
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
        <li className="">Kasir</li>
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
                <img
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
                <ul className="ms-5 mt-1">
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
              <button
                id="hubungi"
                className="bg-[#308967] px-[5%] h-10 text-sm text-white rounded-full mt-[3%]"
                onClick={() => handleEmailClick(item.email)}
              >
                Hubungi
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Datakasir;
