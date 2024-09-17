import Image from "next/image";

export default function Sidebar() {
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
              <a
                href="#"
                className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
              >
                <Image
                  src="/icon/profil.svg"
                  width={30}
                  height={30}
                  alt="profile"
                />
                <span className="ml-3">Profile</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
              >
                <Image src="/icon/post.svg" width={30} height={30} alt="post" />
                <span className="ml-3">Post</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Edit Profile
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 bg-green-500">
        <h1 className="text-white text-3xl p-8">unruk isi daftar profile</h1>
      </div>
    </div>
  );
}
