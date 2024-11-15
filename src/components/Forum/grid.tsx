"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EmojiPicker from "emoji-picker-react";
import mata from "../../../public/icon/mata.svg";
import chat2 from "../../../public/icon/chat2.svg";
import emote from "../../../public/icon/emote.svg";
import profil from "../../../public/icon/profil.svg";
import panah from "../../../public/icon/for.svg";
import post from "../../../public/icon/post.svg";
import axios from "axios";

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
  comments: { user: string; text: string; createdAt: string }[]; // Added for comments
};

function Grid() {
  const [data, setData] = useState<Forum[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputText, setInputText] = useState("");
  const [commentInput, setCommentInput] = useState<string>("");

  const formatTanggal = (tanggal: string) => {
    const opsiTanggal: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(tanggal).toLocaleDateString("id-ID", opsiTanggal);
  };

  const handleEmojiClick = (emojiData: { emoji: string }) => {
    setCommentInput((prevInput) => prevInput + emojiData.emoji);
  };

  const handleSendComment = async (postId: number) => {
    if (commentInput.trim()) {
      try {
        // Kirim komentar ke server
        const newComment = {
          postId,
          text: commentInput,
          user: "Kevin", // Gantilah dengan nama pengguna yang dinamis jika perlu
        };

        const url = `${process.env.NEXT_PUBLIC_URL}/api/komen`;
        await axios.post(url, newComment, {
          withCredentials: true,
        });

        // Setelah berhasil kirim komentar, kita update data lokal
        setData((prevData) => {
          return prevData.map((post) => {
            if (post.id === postId) {
              post.comments.push({
                user: "Kevin", // Ganti dengan nama pengguna dinamis jika perlu
                text: commentInput,
                createdAt: new Date().toISOString(),
              });
            }
            return post;
          });
        });
        setCommentInput(""); // Clear input setelah komentar terkirim
      } catch (error: any) {
        console.log("Error mengirim komentar:", error);
        alert("Terjadi kesalahan saat mengirim komentar.");
      }
    }
  };

  const handleKeyDown = (e: { key: string }, postId: number) => {
    if (e.key === "Enter") {
      handleSendComment(postId);
    }
  };

  useEffect(() => {
    getForum();
  }, []);

  async function getForum() {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/filterForum?page=1&limit=20`;
    try {
      const res = await axios.get<Forum[]>(url, {
        withCredentials: true,
      });
      setData(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data konten forum.");
    }
  }

  return (
    <div className="ms-[7%]">
      {data.length > 0 ? (
        data.map((item) => (
          <div
            className="mt-[3%] w-[779px] h-[995px] bg-white pt-5"
            key={item.id}
          >
            <div className="w-full h-[155px]">
              {/* Post Header and Content */}
              <div className="flex mt-[5%]">
                <div className="flex items-start">
                  <img
                    src={
                      item.User.photoProfile
                        ? item.User.photoProfile
                        : "/img/default-avatar.png"
                    }
                    width={38}
                    height={38}
                    alt="foto profil"
                    className="rounded-full ml-6 -translate-y-5"
                  />
                  <img
                    src={item.fotoKonten ? item.fotoKonten : ""}
                    className="ml-4 h-[157px] w-[206px] bg-slate-600"
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
                    <span className="text-[#005DE8]">{item.User.username}</span>
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
                </div>
              </div>
            </div>

            {/* Post Description */}
            <div className="mt-[4%]">
              <p className="text-black leading-tight ml-[10%] w-[60%] text-[15px]">
                {item.desc}
              </p>
            </div>

            {/* Comments Section */}
            <div>
              <p className="text-black text-[15px] ml-[15%] mt-[4%]">
                {item.comments.length} Komentar
              </p>

              <div className="space-y-3">
                {item.comments.map((comment, index) => (
                  <div key={index} className="p-4 border-b">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={profil}
                        alt="foto profil"
                        width={35}
                        height={35}
                        className="w-[35px] h-[35px]"
                      />
                      <p className="text-[#3F9272] text-[13px]">
                        {comment.user}
                      </p>
                      <p className="text-[#7D7D7D] text-[10px]">
                        {formatTanggal(comment.createdAt)}
                      </p>
                    </div>
                    <p className="px-[3%] text-[15px] mt-2">{comment.text}</p>
                  </div>
                ))}
                {/* Comment Input */}
                <div className="flex bg-white mx-auto w-[471px] h-[31px] mt-[10%] relative">
                  <input
                    type="text"
                    value={commentInput}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Ketik pesan..."
                    className="w-full h-full pl-10 pr-4 text-sm border border-gray-300 rounded-md focus:outline-none"
                  />
                  <button
                    onClick={() => setShowEmojiPicker((prev) => !prev)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  >
                    <Image
                      src={emote}
                      width={20}
                      height={20}
                      alt="emoji picker icon"
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
                    <Image
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
        ))
      ) : (
        <p>Ga ada postingan</p>
      )}
    </div>
  );
}

export default Grid;
