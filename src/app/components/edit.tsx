"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-[200%] bg-gray-800 text-white flex flex-col fixed top-0">
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
                  kembali
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/bg.jpg')", height: "170vh" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[140%] translate-x-[15%] z-20 relative pointer-events-auto translate-y-48">
            <div className="flex justify-center">
              <Image
                src="/img/soekarno.png"
                width={150}
                height={150}
                alt="gm"
                className="rounded-full"
              />
            </div>
            <div className="flex justify-center translate-x-[6%] -translate-y-8">
              <Image src="/img/pensil.png" width={50} height={50} alt="gm" />
            </div>
            <div className="pb-5">
              <span className="pl-4 text-[#A9A7A7]">Nama Pengguna :</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="coba dulu"
                  className="w-[100%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm "
                />
              </div>
            </div>
            <div className="pb-5">
              <span className="pl-4 text-[#A9A7A7]">Nomor Telepon :</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="08574577"
                  className="w-[100%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="pb-5">
              <span className="pl-4 text-[#A9A7A7]">Nama Pengguna :</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="coba dulu"
                  className="w-[100%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-5">
              <span className="pl-4">Alamat pengguna :</span>
              <div className="flex flex-col">
                <textarea
                  placeholder="isi alamat ketua sedang tidak mood"
                  className="w-[100%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm pr-10"
                />
              </div>
            </div>
            <div className="mt-20 flex justify-between">
              <button className="px-7 py-1 rounded-lg bg-[#3F9272] text-[#ffff]">
                KEMBALI
              </button>
              <button className="px-3 py-1 rounded-lg bg-[#CCFFEB] text-[#3F9272]">
                PERBAHARUI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
