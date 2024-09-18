"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface UserData {
  username: string;
  email: string;
  birthday: string;
  Notelepon: string;
  alamat: string;
}

export default function EditProfile() {
  const [formData, setFormData] = useState<UserData>({
    username: "",
    email: "",
    birthday: "",
    Notelepon: "",
    alamat: "",
  });

  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setFormData(JSON.parse(storedUserData));
    }
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Simpan data ke localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    // Navigasi ke halaman profil dengan data terbaru
    router.push("/profile");
  };

  const handleGoBack = () => {
    if (mounted) {
      router.push("/profile");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col fixed top-0">
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
                  Edit Profile
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <button
                onClick={() => {
                  localStorage.removeItem("userData");
                  localStorage.removeItem("token");
                  router.push("/login");
                }}
                className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
              >
                Logout
              </button>
            </li>
            <li className="mb-2">
              <Link href="/">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  Kembali
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Profile Edit Form */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/bg.jpg')", height: "160vh" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[150%] translate-x-[15%] z-20 relative pointer-events-auto mt-[30%]">
            <div className="flex justify-center -translate-y-[10%]">
              <Image
                src="/img/soekarno.png"
                width={200}
                height={200}
                alt="gm"
                className="rounded-full"
              />
              <button className="-translate-x-[125%] translate-y-[40%]">
                <Image
                  src="/img/pensil.png"
                  width={50}
                  height={50}
                  alt="gm"
                  className="rounded-full"
                />
              </button>
            </div>

            <div className="text-[#A9A7A7] text-[18px] pb-4 ">
              <span className="pl-4">Nama Pengguna:</span>
              <div className="flex flex-col ">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4">
              <span className="pl-4">Email:</span>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4">
              <span className="pl-4">Tanggal Lahir :</span>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="pb-5">
              <span className="pl-4 text-[#A9A7A7]">Nama Pengguna :</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="Notelepon"
                  value={formData.Notelepon}
                  onChange={handleInputChange}
                  className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4">
              <span className="pl-4">Alamat:</span>
              <div className="flex flex-col">
                <textarea
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="flex justify-end mt-[20%]">
                <button
                  onClick={handleGoBack}
                  className="px-4 py-2 bg-[#3F9272] text-white rounded-lg "
                >
                  Kembali
                </button>
              </div>
              <div></div>
              <div className="flex justify-start mt-[20%]">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#CCFFEB] text-[#3F9272] rounded-lg"
                >
                  Perbarui
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
