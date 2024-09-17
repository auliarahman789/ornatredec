"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

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
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[80%] translate-x-[15%] z-20 relative pointer-events-auto">
            <div className="grid grid-cols-2 text-start">
              <div className="-translate-y-[25%]">
                <h1 className="text-[#5CD5A6] text-[20px]">
                  Ulasan Yang Terakhir Dikunjungi
                </h1>
                <div className="bg-[#5CD5A6] p-16 rounded-lg shadow-lg w-[90%] h-[280%]"></div>
              </div>
              <div className="-translate-y-[25%]">
                <h1 className="text-[#5CD5A6] text-[20px]">
                  Ulasan Yang Terakhir Dikunjungi
                </h1>
                <div className="bg-[#5CD5A6] p-16 rounded-lg shadow-lg w-[90%] h-[280%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
