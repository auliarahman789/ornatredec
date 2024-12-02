"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

type Notifikasi = {
  id: number;
  message: string;
};

const Notif = () => {
  const [notifications, setNotifications] = useState<Notifikasi[]>([]);

  const getUsername = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Ambil token dari localStorage atau mekanisme penyimpanan lainnya
      if (!token) {
        return "Guest"; // Jika token tidak ditemukan, kembalikan username default
      }

      // Panggil API untuk mendapatkan data pengguna
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}api/getMe`, {
        headers: {
          Authorization: `Bearer ${token}`, // Kirim token sebagai header
        },
      });

      const username = res.data.username; // Ambil username dari respons API
      return username || "Guest"; // Pastikan ada fallback username
    } catch (error: any) {
      console.error("Gagal mengambil data pengguna:", error.message);
      return "Guest"; // Default jika gagal
    }
  };

  useEffect(() => {
    const initializeSocket = async () => {
      const userId = await getUsername(); // Dapatkan userId
      if (!userId) {
        console.error("User belum login atau token tidak valid.");
        return;
      }

      // Koneksi ke namespace /notifications dengan userId
      const socket = io(`${process.env.NEXT_PUBLIC_URL}api/notifications`, {
        transports: ["websocket"],
        query: { userId }, // Kirim userId sebagai query parameter
      });

      socket.on("connect", () => {
        console.log("Terhubung ke server notifikasi");
      });

      socket.on("newNotification", (notification: Notifikasi) => {
        setNotifications((prev) => [...prev, notification]);
      });

      socket.on("connect_error", (err) => {
        console.error("Error koneksi Socket.IO:", err);
      });

      return () => {
        socket.disconnect();
      };
    };

    initializeSocket();
  }, []);

  return (
    <div className="fixed flex inset-0 z-20 top-2 justify-center">
      {notifications.map((item) => (
        <div key={item.id} className="w-[30%] h-[100px] bg-white shadow-lg p-4 mb-2">
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notif;
