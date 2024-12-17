"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EmojiPicker from "emoji-picker-react";
import mata from "../../../public/icon/mata.svg";
import chat2 from "../../../public/icon/chat2.svg";
import emote from "../../../public/icon/emote.svg";
import profil from "../../../public/icon/profil.svg";
import post from "../../../public/icon/post.svg";
import axios from "axios";
import Link from "next/link";

// Define the Forum type
type Forum = {
  id: number;
  judul: string;
  desc: string;
  fotoKonten: string;
  kategori_forum: string;
  jumlahTanggapan: number;
  jumlahView: number;
  jumlahReport: number;
  createdAt: string;
  User: {
    username: string;
    photoProfile: string;
  };
  comments: {
    desc: string;
    createdAt: string;
    User: {
      username: string;
      photoProfile: string;
    };
    replies: {
      desc: string;
      commentId: number;
      createdAt: string;
      User: {
        username: string;
        photoProfile: string;
      };
    }[];
  }[];
};

function ForumTanaman() {
  const [data, setData] = useState<Forum[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentInput, setCommentInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState(""); // Tambahkan state untuk searchTerm

  // Get username from localStorage or use default "Guest"
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

  // Format date function
  const formatTanggal = (tanggal: string) => {
    const opsiTanggal: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(tanggal).toLocaleDateString("id-ID", opsiTanggal);
  };

  // Handle emoji click
  const handleEmojiClick = (emojiData: { emoji: string }) => {
    setCommentInput((prevInput) => prevInput + emojiData.emoji);
  };

  const handleSendComment = async (forumId: number) => {
    if (commentInput.trim()) {
      const username = await getUsername(); // Ambil username dari localStorage
      try {
        // Data yang dikirim ke API
        const newComment = {
          postId: forumId,
          desc: commentInput,
          user: username,
        };

        // URL untuk mengirim komentar ke server
        const url = `${process.env.NEXT_PUBLIC_URL}api/komen`; // Pastikan endpoint ini benar
        const res = await axios.post(url, newComment, {
          withCredentials: true, // Kirim cookies jika diperlukan
        });

        // Setelah berhasil mengirim komentar, update data forum di state
        // setData((prevData) =>
        //   prevData.map((item) =>
        //     item.id === forumId
        //       ? {
        //           ...item,
        //           comments: [
        //             ...item.comments,
        //             { desc: commentInput, createdAt: new Date().toISOString() },
        //           ],
        //         }
        //       : item
        //   )
        // );

        setCommentInput(""); // Clear input komentar setelah dikirim
      } catch (error: any) {
        console.error(
          "Error posting comment:",
          error.response || error.message
        );
        alert("Terjadi kesalahan saat mengirim komentar.");
      }
    }
  };

  // Handle sending comment

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter data berdasarkan input pencarian
  const filteredData = data.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Load forum data when the component mounts
  useEffect(() => {
    getForum();
    // const interval = setInterval(getForum, 100);
    // return () => clearInterval(interval);
  }, []);

  // Fetch forum data from API
  async function getForum() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/filterForum?kategori=tanaman&page=1&limit=20`;
    try {
      const res = await axios.get<Forum[]>(url, {
        withCredentials: true, // Send cookies if necessary
      });
      setData(res.data); // Set the fetched data to the state
    } catch (error: any) {
      console.error(
        "Error fetching forum data:",
        error.response || error.message
      );
      alert("Terjadi kesalahan saat mengambil data konten forum.");
    }
  }
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div>
      {/* Search input */}
      <div className="flex ms-[13%] mt-3">
        <input
          type="text"
          placeholder="Cari..."
          value={searchTerm} // Set value input ke searchTerm
          onChange={handleSearchChange} // Tangani perubahan input
          className="w-[20%] h-[31px] ps-2 bg-[#FFFBFB] rounded-lg shadow-xl"
        />
      </div>

      <div className="ml-[13%]">
        {filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <div
            className="mt-[3%] w-[779px] pb-[5%] bg-white pt-5"
            key={item.id}
            >
              <Link href={`/Forum/Detail/${item.id}`}>
              <div className="w-full h-[155px]">
                <div className="flex mt-[5%]">
                  <div className="flex items-start">
                    <img
                      src={
                        item.User.photoProfile
                          ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                            item.User.photoProfile
                          : "/img/default-avatar.png"
                      }
                      width={38}
                      height={38}
                      alt="foto profil"
                      className="rounded-full ml-6 -translate-y-5"
                    />
                    <img
                      src={
                        item.fotoKonten
                          ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                            item.fotoKonten
                          : ""
                      }
                      className="ml-4 h-[157px] w-[206px] bg-gray-300"
                    />
                  </div>

                  <div className="ms-[3%] flex-col space-y-1">
                    <div className="flex space-x-2 mb-[3%]">
                      <p className="text-[#21B892] mt-1 text-[20px]">
                        {item.judul}
                      </p>
                    </div>

                    <p className="font-light text-[12px]">
                      {`Ulasan dari `}
                      <span className="text-[#005DE8]">
                        {item.User.username}
                      </span>
                      {` pada `} {formatTanggal(item.createdAt)}
                    </p>
                    <button className="bg-[#C2FFE8] p-[2px] rounded w-[15%] text-[#06612B] font-light text-[12px]">
                      {item.kategori_forum}
                    </button>

                    <div className="flex pt-[8.5%] -translate-x-10">
                      <Image
                        src={mata}
                        width={20}
                        height={20}
                        alt="mata"
                        className="ms-10"
                      />
                      <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                        {item.jumlahView}
                      </p>
                      <Image
                        src={chat2}
                        width={20}
                        height={20}
                        alt="chat2"
                        className="ms-10"
                      />
                      <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                        {item.jumlahTanggapan}
                      </p>
                    </div>
                    <div className="border-b w-[408px] border-black"></div>
                  </div>
                </div>
              </div>

              {/* Post description */}
              <div className="mt-[4%]">
                <p className="text-black leading-tight ml-[10%] w-[60%] text-[15px]">
                  {item.desc}
                </p>
              </div>

              {/* Comments section */}
              {/* <div>
                <p className="text-black text-[15px] ml-[15%] mt-[4%]">
                  {item.jumlahTanggapan} Komentar
                </p> */}

                {/* <div className="space-y-3">
                  {/* Comment List */}
                  {/* <div className="max-h-[500px] space-y-5 overflow-x-hidden overflow-y-auto">
                    {item.comments.map((comment, index) => (
                      <>
                        <div
                          key={index}
                          className="w-[595px] h-[100px] bg-[#E2FFF8] mx-auto rounded-xl"
                        >
                          <div className="flex items-center px-4 pt-4 pb-1">
                            <img
                              src={
                                comment.User.photoProfile
                                ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                                  comment.User.photoProfile
                                : profil
                              }
                              alt="foto profil"
                              width={35}
                              height={35}
                              className="rounded-full"
                            />
                            <div className="ml-4 w-[90%]">
                              <div className="flex items-center justify-between">
                                <p className="text-[#3F9272] text-[13px]">
                                  {comment.User.username}
                                </p>
                                <p className="text-[#7D7D7D] text-[10px]">
                                  {formatTanggal(comment.createdAt)}
                                </p>
                              </div>
                              <p className="px-2 text-[15px] leading-tight mt-2">
                                {comment.desc}
                              </p>
                              <div className="relative">
                                <p className="absolute right-2 text-sm text-[#3F9272]">
                                  Balas
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {comment.replies
                          .slice(0, showAll ? undefined : 1)
                          .map((rep) => (
                            <div
                              key={rep.commentId}
                              className="w-[69%] ms-[20%] h-[100px] bg-[#E2FFF8] mx-auto rounded-xl"
                            >
                              <div className="flex items-center p-4">
                                <img
                                  src={
                                    rep.User.photoProfile
                                      ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                                        rep.User.photoProfile
                                      : profil
                                  }
                                  alt="foto profil"
                                  width={35}
                                  height={35}
                                  className="rounded-full"
                                />
                                <div className="ml-4 w-[90%]">
                                  <div className="flex items-center justify-between">
                                    <p className="text-[#3F9272] text-[13px]">
                                      {rep.User.username}
                                    </p>
                                    <p className="text-[#7D7D7D] text-[10px]">
                                      {formatTanggal(rep.createdAt)}
                                    </p>
                                  </div>
                                  <p className="px-2 text-[15px] leading-tight mt-2">
                                    {rep.desc}
                                  </p>
                                  <div className="relative">
                                    <p className="absolute right-2 text-sm text-[#3F9272]">
                                      Balas
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        {comment.replies.length > 0 && (
                          <p
                            onClick={() => setShowAll(!showAll)}
                            className=" cursor-pointer translate-x-[65%] text-[#3F9272]"
                          >
                            {showAll
                              ? "Sembunyikan Balasan"
                              : "Lihat Balasan Lainnya"}
                          </p>
                        )}
                      </>
                    ))} */}
                  {/* </div> */} 

                  {/* Comment input box */}
                  {/* <div className="p-4">
                    <div className="flex items-center">
                      <div className="mx-auto w-[78%] mt-[10%]">
                        <div className="flex items-center bg-white w-full h-[31px] border border-gray-300 rounded-md relative">
                          <input
                            type="text"
                            value={commentInput}
                            // Ketika 'Enter' ditekan, kirim komentar
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && commentInput.trim()) {
                                handleSendComment(item.id);
                              }
                            }}
                            onChange={(e) => setCommentInput(e.target.value)}
                            placeholder="Ketik pesan..."
                            className="w-full h-full pl-10 pr-4 text-sm focus:outline-none"
                          />
                          <button
                            onClick={() => setShowEmojiPicker((prev) => !prev)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                          >
                            <img
                              src={emote}
                              width={20}
                              height={20}
                              alt="emoji picker"
                            />
                          </button>
                          {showEmojiPicker && (
                            <div className="absolute bottom-full left-0 mb-2">
                              <EmojiPicker onEmojiClick={handleEmojiClick} />
                            </div>
                          )}
                          <button
                            onClick={() => handleSendComment(item.id)}
                            className="bg-[#308967] rounded-full h-[31px] w-[31px]"
                          >
                            <img
                              src={post}
                              width={15}
                              height={15}
                              alt="post"
                              className="mx-auto"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* </div> */}
              </Link>
      </div>
          ))
        ) : (
          <div className="mt-6 p-6 text-center text-gray-500 bg-white rounded-lg shadow-lg">
            <p>Data tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForumTanaman;
