"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserData {
  username: string;
  email: string;
  birthday: string;
  Notelepon: string;
  alamat: string;
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    birthday: "",
    Notelepon: "",
    alamat: "",
  });

  const router = useRouter();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData: UserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const handleDeleteAccount = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex justify-center bg-[#CCFFEB]">
          <Image src="/icon/logo.svg" width={85} height={70} alt="logo" />
        </div>
        <nav className="flex-1 p-4 bg-gray-800">
          <ul>
            <li className="mb-2">
              <Link href="/profile">
                <div className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                  <Image
                    src="/icon/profil.svg"
                    width={30}
                    height={30}
                    alt="profile"
                  />
                  <span className="ml-3">Profile</span>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/profile/post">
                <div className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                  <Image
                    src="/icon/post.svg"
                    width={30}
                    height={30}
                    alt="post"
                  />
                  <span className="ml-3">Riwayat</span>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/profile/edit">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  <div className="flex flex-row">
                    <Image
                      src="/icon/Rectangle 1.svg"
                      width={30}
                      height={30}
                      alt="post"
                    />
                    <span className="ml-3">Edit Profile </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <button
                  onClick={() => {
                    localStorage.removeItem("userData");
                    localStorage.removeItem("token");
                  }}
                  className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
                >
                  <div className="flex flex-row">
                    {" "}
                    <Image
                      src="/icon/Sign_out_squre.svg"
                      width={30}
                      height={30}
                      alt="post"
                      className="-translate-y-1"
                    />
                    <span className="ml-3">Logout</span>
                  </div>
                </button>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <button
                  onClick={handleDeleteAccount}
                  className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
                >
                  <div className="flex flex-row">
                    {" "}
                    <Image
                      src="/icon/Trash.svg"
                      width={30}
                      height={30}
                      alt="post"
                      className="-translate-y-1"
                    />
                    <span className="ml-3">Hapus Akun</span>
                  </div>
                </button>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  <div className="flex flex-row">
                    {" "}
                    <Image
                      src="/icon/Sign_out_squre_fill.svg"
                      width={30}
                      height={30}
                      alt="post"
                      className="-translate-y-1"
                    />
                    <span className="ml-3">Kembali</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Profile Information */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[90%] translate-x-[15%] z-20 relative pointer-events-auto">
            <div className="text-[#A9A7A7] text-[18px] pb-4 -translate-y-[35%]">
              <span className="pl-4">Nama Pengguna :</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={userData.username}
                  className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                  readOnly
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4 -translate-y-[35%]">
              <span className="pl-4">Email :</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={userData.email}
                  className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                  readOnly
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4 -translate-y-[35%]">
              <span className="pl-4">Tanggal Lahir</span>
              <div className="flex flex-col">
                <input
                  type="date"
                  value={userData.birthday}
                  className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                  readOnly
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4 -translate-y-[35%]">
              <span className="pl-4">No Telepon :</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={userData.Notelepon}
                  className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                  readOnly
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4 -translate-y-[35%]">
              <span className="pl-4">Alamat :</span>
              <div className="flex flex-col">
                <textarea
                  value={userData.alamat}
                  className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                  readOnly
                />
              </div>
            </div>
            <div className="flex justify-end -translate-y-[230%]">
              <Image
                src="/img/soekarno.png"
                width={200}
                height={200}
                alt="gm"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
