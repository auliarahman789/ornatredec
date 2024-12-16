"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/icon/logosp.svg";
import dashboardd from "../../../public/icon/Order_fill.svg";
import dashboardd2 from "../../../public/icon/Order_fill (1).svg";
import produkk from "../../../public/icon/Boxes_fill (1).svg";
import produkk2 from "../../../public/icon/Boxes_fill.svg";
import userr from "../../../public/icon/User_fill.svg";
import userr2 from "../../../public/icon/User_fill (2).svg";
import statistikk from "../../../public/icon/pie_chart_fill.svg";
import statistikk2 from "../../../public/icon/pie_chart_fill (1).svg";
import forumm from "../../../public/icon/comment_fill.svg";
import forum2 from "../../../public/icon/comment_fill (1).svg";
import logIcon from "../../../public/icon/Sign_out_squre (1).svg"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import Logout from "./logout";
function SidebarSp() {
  const pathname = usePathname();
  const isAkun =
    pathname.startsWith("/Superadmin/Akun/Detail/") ||
    pathname.startsWith("/Superadmin/Akun");
  const isForum =
    pathname.startsWith("/Superadmin/Forum") ||
    pathname.startsWith("/Superadmin/Forum/detailreportUlasan") ||
    pathname.startsWith("/Superadmin/Forum/detailreportUlasan/ReportUlasan2/");
  // const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  // 
  const [showModal, setShowModal] = useState(false);
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token tidak ditemukan. Silakan login kembali.");
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}api/logout`,
        {
          withCredentials: true,
        }
      );
      console.log("Logout Response:", response.data);
      localStorage.removeItem("token");
      localStorage.removeItem("username"); 
      Swal.fire({
        icon: "success",
        title: "Logout sukses",
        showConfirmButton: false,
        iconColor: "##167960",
        timer: 3000,
      })
      router.replace('/auths');
    } catch (error: any) {
      console.error("Logout error:", error.response.data.message);
    }
  };
  // const logout = () => {
  //   Swal.fire({
  //     title: "Apakah anda yakin untuk log out?",
  //     showCancelButton: true,
  //     icon: "question",
  //     confirmButtonText: "Ya",
  //     iconColor: "#0E7793cc",
  //     color: "#0E7793",
  //     width: "35%",
  //     confirmButtonColor: "#0E7793"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //     handleLogout().then(() => {
  //       Swal.fire({
  //         title: "Log Out Sukses!",
  //         icon: "success",
  //         iconColor: "#0E7793cc",
  //         color: "#0E7793",
  //         timer: 2000,
  //         showConfirmButton: false,
  //       });
  //     });
  //     } else{
  //       Swal.fire({
  //         title: "Coba lagi!",
  //         icon: "warning",
  //         color: "#0E7793",
  //         iconColor: "#e70008",
  //         timer: 2000
  //       })
  //     }
  //   });
  // }
  return (
    <div className="fixed top-0 left-0">
      <nav className="nav bg-gradient-to-b from-[#167960] to-[#28DFB1] w-64 h-screen flex flex-col">
       <Image
          src={logo}
          className="w-[150px] mt-3 mx-auto"
          width={300}
          height={100}
          alt="logo"
        />
        <ul className="text-[20px] mt-[20%] font-bold text-white ms-[15%]">
          <Link href="/Superadmin">
            <li
              className={`cursor-pointer flex mb-10 ${
                pathname === "/Superadmin" ? "active" : ""
              }`}
            >
             <Image
                src={pathname === "/Superadmin" ? dashboardd : dashboardd2}
                className="w-8 h-8 me-5"
                width={30}
                height={30}
                alt="dashboard"
              />
              <span className="mt-1">Dashboard</span>
            </li>
          </Link>
          <Link href="/Superadmin/Produk">
            <li
              className={`cursor-pointer flex mb-10 ${
                pathname === "/Superadmin/Produk" ||
                pathname === "/Superadmin/Produk/tambah" ||
                pathname === "/Superadmin/Produk/pesanan" ||
                pathname === "/Superadmin/Produk/pesanan/daftar"
                  ? "active"
                  : ""
              }`}
            >
             <Image
                src={
                  pathname === "/Superadmin/Produk" ||
                  pathname === "/Superadmin/Produk/tambah" ||
                  pathname === "/Superadmin/Produk/pesanan" ||
                  pathname === "/Superadmin/Produk/pesanan/daftar"
                    ? produkk2
                    : produkk
                }
                className="w-5 ms-1 h-6 me-6"
                width={30}
                height={30}
                alt="dashboard"
              />
              Produk
            </li>
          </Link>
          <Link href="/Superadmin/Statistik">
            <li
              className={`cursor-pointer flex mb-10 ${
                pathname === "/Superadmin/Statistik" ? "active" : ""
              }`}
            >
             <Image
                src={
                  pathname === "/Superadmin/Statistik"
                    ? statistikk2
                    : statistikk
                }
                className="w-6 h-6 me-5"
                width={30}
                height={30}
                alt="dashboard"
              />
              Statistik
            </li>
          </Link>
          <Link href="/Superadmin/Akun">
            <li
              className={`cursor-pointer flex mb-10 ${isAkun ? "active" : ""}`}
            >
             <Image
                src={isAkun ? userr : userr2}
                className="w-6 h-6 me-5"
                width={30}
                height={30}
                alt="dashboard"
              />
              Akun
            </li>
          </Link>
          <Link href="/Superadmin/Forum">
            <li
              className={`cursor-pointer flex mb-10 ${isForum ? "active" : ""}`}
            >
             <Image
                src={isForum ? forum2 : forumm}
                className="w-6 h-6 me-5"
                width={30}
                height={30}
                alt="dashboard"
              />
              Forum
            </li>
          </Link>
          <button onClick={handleLogout} className="flex">
           <Image src={logIcon} className="me-5" alt="logout" width={30} height={30} />
            Logout
          </button>
          {/* {showModal && (
        <Logout
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      )} */}
        </ul>
      </nav>
    </div>
  );
}
export default SidebarSp;
