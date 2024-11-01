import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/compat/router";
import Link from "next/link";

const Datauser = () => {
  const [data, setData] = useState<any[]>([]);
  const [isOnline, setOnline] = useState(false);
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
  // }, [])
  const hubungi = document.getElementById("hubungi") as HTMLButtonElement;
  function handleEmailClick(recipient: string) {
    // const recipient = data?.user.email;
    // const subject = '';
    // const body = '';
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  }

  useEffect(() => {
    getDatauser();
  }, []);

  async function getDatauser() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getdanFilterUser?role=user`;
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

  const router = useRouter();

  const handleDetail = () => {
    router?.push("/Superadmin/Detail/${id}");
  };
  return (
    <div>
      <ul className="flex text-[#00663F] font-semibold space-x-[7%] mt-[2%] ms-[2%]">
        <li className="">User</li>
        <li className="ps-[14%]">Status</li>
        <li className="">Lokasi</li>
        <li className="">No Contact</li>
        <li className="">Hubungi</li>
      </ul>
      <div className="bg-[#E4FFF2] p-5 w-[72%] mt-4 rounded-md min-h-screen">
        <div>
          {data.map((item: any) => (
            <div
              key={item.id}
              className="bg-white flex w-[100%] h-[20%] mt-[2%] py-4 px-5"
            >
              {item.id ? (
                <Link
                  href={`/Superadmin/Akun/Detail/${item.id}`}
                  className="flex"
                >
                  <div className="flex w-80">
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
                    <ul className="ms-5 mt-2">
                      <li className="text-[20px]">{item.username}</li>
                      <li className="font-light">{item.email}</li>
                    </ul>
                  </div>
                  <p
                    className={`text-sm mt-[5%] translate-x-5 w-10 ${
                      item.statusAktif === "aktif"
                        ? "text-[#51CB9F]"
                        : "text-[#FF0A0A] whitespace-nowrap"
                    }`}
                  >
                    {item.statusAktif}
                  </p>
                  <p className=" text-sm text-black mt-[5%] translate-x-24 w-20 whitespace-nowrap">
                    {" "}
                    {item.alamats && item.alamats.length > 0
                      ? item.alamats[0].kota_kabupaten
                      : "Tidak tersedia"}
                  </p>
                  <p className=" text-sm text-[#3F9272] mt-[5%] w-14 translate-x-40">
                    {item.no_hp}
                  </p>
                  <button
                    id="hubungi"
                    className="bg-[#308967] px-[5%] h-10 text-sm translate-x-64 text-white rounded-full mt-[3%]"
                    onClick={() => handleEmailClick(item.email)}
                  >
                    Hubungi
                  </button>
                </Link>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Datauser;
