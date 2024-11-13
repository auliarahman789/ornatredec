"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import mata from "../../../public/icon/mata.svg";
import chat2 from "../../../public/icon/chat2.svg";
import emote from "../../../public/icon/emote.svg";
import profil from "../../../public/icon/profil.svg";
import panah from "../../../public/icon/for.svg";
import post from "../../../public/icon/post.svg";
import noted from "../../../public/icon/noted.svg";
import postcss from "postcss";
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
};
function Grid() {
  const [data, setData] = useState<Forum[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputText, setInputText] = useState("");
  const formatTanggal = (tanggal: string) => {
    const opsiTanggal: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(tanggal).toLocaleDateString("id-ID", opsiTanggal);
  };

  const handleEmojiClick = (emojiData: { emoji: string }) => {
    setInputText((prevInput) => prevInput + emojiData.emoji);
  };

  const handleSendChat = () => {
    if (inputText.trim()) {
      console.log("Pesan terkirim:", inputText); // Menampilkan pesan ke konsol
      setInputText(""); // Mengosongkan input setelah mengirim pesan
    }
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSendChat();
    }
  };

  const hapusPostingan = (id: number) => {
    setData((prevData) => prevData.filter((postingan) => postingan.id !== id));
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
      console.log(res.data);
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
                    <button
                      className="ml-[55%]"
                      onClick={() => hapusPostingan(item.id)}
                    >
                      <Image
                        src="/icon/trashh.svg"
                        width={20}
                        height={20}
                        alt="trash"
                      />
                    </button>
                  </div>
                  <div className="border-b w-[408px] border-black"></div>
                </div>
              </div>
            </div>

            <div className="mt-[4%]">
              <p className="text-black leading-tight ml-[10%] w-[60%] text-[15px]">
                {item.desc}
              </p>
            </div>
            <div>
              <p className="text-black text-[15px] ml-[15%] mt-[4%]">
                {item.jumlahTanggapan} Komentar
              </p>

              <div className="space-y-3">
                <div className="w-[595px] h-[547px] bg-[#E2FFF8] mx-auto rounded-xl">
                  <div className="p-4">
                    <Image
                      src={profil}
                      alt="foto profil"
                      width={100}
                      height={100}
                      className="w-[35px] h-[35px]"
                    />
                    <div className="ml-[9%] -mt-7">
                      <div className="h-[130px] w-[477px] bg-white relative">
                        <div className="flex items-center space-x-4 p-2">
                          <p className="text-[#3F9272] text-[13px]">Kevin</p>
                          <p className="text-[#7D7D7D] text-[10px]">
                            2 jam yang lalu
                          </p>
                        </div>

                        <p className="px-[3%] text-[15px] leading-tight mt-2">
                          ***** tanaman kayak gitu sih enak rawatnya tapi gw
                          kemaren ke cucuk durinya kena ****** sakit banget,
                          gatel sih, btw durinya beracun kagak? kalau beracun
                          hilang dah masa depan gw
                        </p>
                        <div className="flex justify-end p-2 space-x-3">
                          <p className="text-[#8A8A8A] text-[12px]">
                            90 balasan
                          </p>
                          <p className="text-[#3F9272] text-[12px] cursor-pointer">
                            balasan
                          </p>
                        </div>
                        <div className="absolute top-3 -left-1 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-[7%]">
                    <Image
                      src={profil}
                      alt="foto profil"
                      width={100}
                      height={100}
                      className="w-[35px] h-[35px]"
                    />
                    <div className="ml-[9%] -mt-7 h-[83px] w-[453px] bg-white relative">
                      <div className="flex items-center space-x-2 p-2">
                        <p className="text-[#3F9272] text-[13px]">Kevin</p>
                        <Image
                          src={panah}
                          alt="panah"
                          width={90}
                          height={90}
                          className="w-3 h-3"
                        />
                        <p className="text-[#3F9272] text-[13px]">Danen</p>
                        <p className="text-[#7D7D7D] text-[10px]">
                          2 jam yang lalu
                        </p>
                      </div>
                      <p className="px-[3%] text-[15px] leading-tight mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="flex justify-end p-2">
                        <p className="text-[#3F9272] text-[12px] cursor-pointer">
                          balas
                        </p>
                      </div>
                      <div className="absolute top-3 -left-1 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="border-b w-[290px] border-black"></div>
                      <p className="text-[13px] text-[#3F9272] cursor-pointer">
                        lihat 81 balasan lainnya
                      </p>
                    </div>
                  </div>

                  <div className="p-4">
                    <Image
                      src={profil}
                      alt="foto profil"
                      width={100}
                      height={100}
                      className="w-[35px] h-[35px]"
                    />
                    <div className="ml-[9%] -mt-7">
                      <div className="h-[130px] w-[477px] bg-white relative">
                        <div className="flex space-x-4 p-2 items-center">
                          <p className="text-[#3F9272] text-[13px]">Kevin</p>
                          <p className="text-[#7D7D7D] text-[10px]">
                            2 jam yang lalu
                          </p>
                        </div>
                        <p className="px-[3%] text-[15px] leading-tight mt-2">
                          ***** tanaman kayak gitu sih enak rawatnya tapi gw
                          kemaren ke cucuk durinya kena ****** sakit banget,
                          gatel sih, btw durinya beracun kagak? kalau beracun
                          hilang dah masa depan gw
                        </p>
                        <div className="flex justify-end p-2 space-x-3">
                          <p className="text-[#8A8A8A] text-[12px]">
                            90 balasan
                          </p>
                          <p className="text-[#3F9272] text-[12px] cursor-pointer">
                            balasan
                          </p>
                        </div>
                        <div className="absolute top-3 -left-1 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="border-b w-[290px] border-black"></div>
                          <p className="text-[13px] text-[#3F9272] cursor-pointer">
                            lihat 81 balasan lainnya
                          </p>
                        </div>
                        <div className="flex bg-white mx-auto w-[471px] h-[31px] mt-[10%] relative">
                          <input
                            type="text"
                            value={inputText}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setInputText(e.target.value)}
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
                            onClick={handleSendChat}
                            className="bg-[#308967] rounded-full h-[31px] w-[31px] "
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
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p> ga ada postingan</p>
      )}
    </div>
  );
}

export default Grid;
