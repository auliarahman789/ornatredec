// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import EmojiPicker from "emoji-picker-react";
// import mata from "../../../../../public/icon/mata.svg";
// import chat2 from "../../../../../public/icon/chat2.svg";
// import emote from "../../../../../public/icon/emote.svg";
// import profil from "../../../../../public/icon/profil.svg";
// import post from "../../../../../public/icon/post.svg";
// import rep from "../../../../../public/icon/Polygon 4.svg";
// import cancel from "../../../../../public/icon/Line (2).svg"
// import axios from "axios";
// import { useParams, useRouter } from "next/navigation";
// import Swal from "sweetalert2";
// // import ReportPop from "@/components/Forum/report";

// type Forum = {
//   id: number;
//   judul: string;
//   desc: string;
//   fotoKonten: string;
//   kategori_forum: string;
//   jumlahTanggapan: number;
//   jumlahView: number;
//   jumlahReport: number;
//   createdAt: string;
//   User: {
//     username: string;
//     photoProfile: string;
//   };
//     comments: {
//         id: number;
//     desc: string;
//     createdAt: string;
//     User: {
//       username: string;
//       photoProfile: string;
//     };
//         replies: {
//             id: number;
//       desc: string;
//       commentId: number;
//       createdAt: string;
//       User: {
//         username: string;
//         photoProfile: string;
//       };
//     }[];
//   }[];
// };

// function Page() {
//   const [data, setData] = useState<Forum>();
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [commentInput, setCommentInput] = useState<string>("");
//   const [repcomId, setRepComId] = useState<number | null>(null);

//   // Get username from localStorage or use default "Guest"
//   const getUsername = async () => {
//     try {
//       const token = localStorage.getItem("authToken"); // Ambil token dari localStorage atau mekanisme penyimpanan lainnya
//       if (!token) {
//         return "Guest"; // Jika token tidak ditemukan, kembalikan username default
//       }

//       // Panggil API untuk mendapatkan data pengguna
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}api/getMe, {
//         headers: {
//           Authorization: Bearer ${token}, // Kirim token sebagai header
//         },
//       }`);

//       const username = res.data.username; // Ambil username dari respons API
//       return username || "Guest"; // Pastikan ada fallback username
//     } catch (error: any) {
//       console.error("Gagal mengambil data pengguna:", error.message);
//       return "Guest"; // Default jika gagal
//     }
//   };

//   // Format date function
//   const formatTanggal = (tanggal: string) => {
//     const opsiTanggal: Intl.DateTimeFormatOptions = {
//       year: "numeric",
//       month: "numeric",
//       day: "numeric",
//     };
//     return new Date(tanggal).toLocaleDateString("id-ID", opsiTanggal);
//   };

//   // Handle emoji click
//   const handleEmojiClick = (emojiData: { emoji: string }) => {
//     setCommentInput((prevInput) => prevInput + emojiData.emoji);
//   };
//   const [replyToUsername, setReplyToUsername] = useState<string | null>(null);

//   const handleSendComment = async (forumId: number) => {
//     if (commentInput.trim()) {
//       const idUser = await getUsername();// Ambil username dari localStorage
//       try {
//         const RepCom = repcomId ?
//           {
//               commentId: repcomId,
//               desc: commentInput,
//               userId: idUser,
//           } :
//          {
//           postId: forumId,
//           desc: commentInput,
//           userId: idUser,
//         };

//         // URL untuk mengirim komentar ke server
//         const url = repcomId ? `${process.env.NEXT_PUBLIC_URL}api/reply` : `${process.env.NEXT_PUBLIC_URL}api/komen`; // Pastikan endpoint ini benar
//         const res = await axios.post(url, RepCom, {
//           withCredentials: true, // Kirim cookies jika diperlukan
//         });

//         // Setelah berhasil mengirim komentar, update data forum di state
//         // setData((prevData) =>
//         //   prevData.map((item) =>
//         //     item.id === forumId
//         //       ? {
//         //           ...item,
//         //           comments: [
//         //             ...item.comments,
//         //             { desc: commentInput, createdAt: new Date().toISOString() },
//         //           ],
//         //         }
//         //       : item
//         //   )
//         // );

//         setCommentInput("");
//         setRepComId(null); // Clear input komentar setelah dikirim
//       } catch (error: any) {
//         console.error(
//           "Error posting comment:",
//           error.response || error.message
//         );
//         alert("Terjadi kesalahan saat mengirim komentar.");
//       }
//     }
//   };

//   // Handle sending comment

//   // Load forum data when the component mounts
//   useEffect(() => {
//     getForum();
//     const interval = setInterval(getForum, 1000);
//     return () => clearInterval(interval);
//   }, []);

//     const { id } = useParams();
//     const handleReplyClick = (commentId: number, username: string) => {
//       setRepComId(commentId);
//       setReplyToUsername(username);
//     };
//   // Fetch forum data from API
//   async function getForum() {
//     const url = `${process.env.NEXT_PUBLIC_URL}api/satu/${id}`;
//     try {
//       const res = await axios.get<Forum>(url, {
//         withCredentials: true, // Send cookies if necessary
//       });
//       setData(res.data); // Set the fetched data to the state
//     } catch (error: any) {
//       console.error(
//         "Error fetching forum data:",
//         error.response || error.message
//       );
//       alert("Terjadi kesalahan saat mengambil data konten forum.");
//     }
//   }
//   const [showAll, setShowAll] = useState<{ [key: number]: boolean }>({});
//   const showRep = (commentId: number) => {
//     setShowAll((prev) => ({
//       ...prev,
//       [commentId]: !prev[commentId], // Hanya ubah status untuk ID komentar yang diklik
//     }));
//   };

//   const router = useRouter();
//   const handleBack = () => {
//     router.replace("/Forum")
//   }
//   const [showReport, setShowReport] = useState(false);

//   return (
//     <div className="bg-[#E2FFF8] p-[5%] flex justify-center">
//       <div className="w-[40px] h-[40px] cursor-pointer -translate-x-[100px]">
//        <Image onClick={handleBack} src="/icon/back.png" width={40} height={40} alt="kembali" />
//       </div>

//       {/* Search input */}
//       {/* <div className="flex ms-[13%] mt-3">
//         <input
//           type="text"
//           placeholder="Cari..."
//           className="w-[20%] h-[31px] ps-2 bg-[#FFFBFB] rounded-lg shadow-xl"
//         />
//       </div> */}

//       <div className="">

//         {data &&
//             <div key={data.id}
//               className="w-[779px] pb-[5%] bg-white pt-5"
//           >
//             <ReportPop isVisible={showReport} onClose={()=>setShowReport(false)} id={data.id} />
//               {/* Post content */}
//               <div className="w-full h-[155px]">
//                 <div className="flex mt-[5%]">
//                   <div className="flex items-start">
//                     <img
//                       src={
//                         data.User.photoProfile
//                           ? "https://74gslzvj-8000.asse.devtunnels.ms" +
//                             data.User.photoProfile
//                           : "/img/default-avatar.png"
//                       }
//                       width={38}
//                       height={38}
//                       alt="foto profil"
//                       className="rounded-full ml-6 -translate-y-5"
//                     />
//                     <img
//                       src={
//                         data.fotoKonten
//                           ? "https://74gslzvj-8000.asse.devtunnels.ms" +
//                             data.fotoKonten
//                           : ""
//                       }
//                       className="ml-4 h-[157px] w-[206px] bg-gray-300"
//                     />
//                   </div>

//                   <div className="ms-[3%] flex-col space-y-1">
//                     <div className="flex justify-between space-x-2 mb-[3%]">
//                       <p className="text-[#21B892] mt-1 text-[20px]">
//                         {data.judul}
//                     </p>
//                     <p className="text-[#06612B] text-[12px] cursor-pointer" onClick={()=> setShowReport(true)}>Laporkan</p>
//                     </div>

//                     <p className="font-light text-[12px]">
//                       {`Ulasan dari `}
//                       <span className="text-[#005DE8]">
//                         {data.User.username}
//                       </span>
//                       {` pada `} {formatTanggal(data.createdAt)}
//                     </p>
//                     <button className="bg-[#C2FFE8] p-[2px] rounded w-[15%] text-[#06612B] font-light text-[12px]">
//                       {data.kategori_forum}
//                     </button>

//                     <div className="flex pt-[8.5%] -translate-x-10">
//                       <Image
//                         src={mata}
//                         width={20}
//                         height={20}
//                         alt="mata"
//                         className="ms-10"
//                       />
//                       <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
//                         {data.jumlahView}
//                       </p>
//                       <Image
//                         src={chat2}
//                         width={20}
//                         height={20}
//                         alt="chat2"
//                         className="ms-10"
//                       />
//                       <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
//                         {data.jumlahTanggapan}
//                       </p>
//                     </div>
//                     <div className="border-b w-[408px] border-black"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Post description */}
//               <div className="mt-[4%]">
//                 <p className="text-black leading-tight ml-[10%] w-[60%] text-[15px]">
//                   {data.desc}
//                 </p>
//               </div>

//               {/* Comments section */}
//               <div>
//                 <p className="text-black text-[15px] ml-[15%] mt-[4%]">
//                   {data.jumlahTanggapan} Komentar
//                 </p>

//                 <div className="space-y-3 bg-[#E2FFF8] py-[5%] mx-[5%] px-[1%]">
//                   {/* Comment List */}
//                   <div className="max-h-[500px] space-y-5 overflow-x-hidden overflow-y-auto">
//                     { data.comments.length > 0 ? (
//                     data.comments.map((comment) => (
//                       <>
//                         <div
//                           key={comment.id}
//                           className="w-[595px] h-[100px] bg-white mx-auto rounded-xl"
//                         >
//                           <div className="flex items-center px-4 pt-4 pb-1">
//                             <Image
//                               src={
//                                 comment.User.photoProfile
//                                 ? "https://74gslzvj-8000.asse.devtunnels.ms" +
//                                   comment.User.photoProfile
//                                 : profil
//                               }
//                               alt="foto profil"
//                               width={35}
//                               height={35}
//                               className="rounded-full"
//                             />
//                             <div className="ml-4 w-[90%]">
//                               <div className="flex items-center justify-between">
//                                 <p className="text-[#3F9272] text-[13px]">
//                                   {comment.User.username}
//                                 </p>
//                                 <p className="text-[#7D7D7D] text-[10px]">
//                                   {formatTanggal(comment.createdAt)}
//                                 </p>
//                               </div>
//                               <p className="px-2 text-[15px] leading-tight mt-2">
//                                 {comment.desc}
//                               </p>
//                               <div className="relative">
//                                     <p className="absolute right-2 text-sm text-[#3F9272]" onClick={() => handleReplyClick(comment.id, comment.User.username)}
//                                     >
//                                       Balas
//                                     </p>
//                                   </div>
//                             </div>
//                           </div>
//                         </div>
//                         {comment.replies
//                           .slice(0, showAll[comment.id] ? undefined : 1)
//                           .map((rep) => (
//                             <div
//                             key={rep.id}
//                               className="w-[69%] ms-[20%] h-[100px] bg-white mx-auto rounded-xl"
//                             >
//                               <div className="flex items-center p-4">
//                                 <Image
//                                   src={
//                                     rep.User.photoProfile
//                                       ? "https://74gslzvj-8000.asse.devtunnels.ms" +
//                                         rep.User.photoProfile
//                                       : profil
//                                   }
//                                   alt="foto profil"
//                                   width={35}
//                                   height={35}
//                                   className="rounded-full"
//                                 />
//                                 <div className="ml-4 w-[90%]">
//                                   <div className="flex items-center justify-between">
//                                     <p className="text-[#3F9272] text-[13px]">
//                                       {rep.User.username}
//                                     </p>
//                                     <p className="text-[#7D7D7D] text-[10px]">
//                                       {formatTanggal(rep.createdAt)}
//                                     </p>
//                                   </div>
//                                   <p className="px-2 text-[15px] leading-tight mt-2">
//                                     {rep.desc}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         {comment.replies.length > 1 && (
//                           <p
//                             onClick={() => showRep(comment.id)}
//                             className=" cursor-pointer translate-x-[65%] text-[#3F9272]"
//                           >
//                             {showAll[comment.id]
//                               ? "Sembunyikan Balasan"
//                               : "Lihat Balasan Lainnya"}
//                           </p>
//                         )}
//                       </>
//                    ))
//                 ):(
//                     <p>Belum ada komen</p>
//                 )}
//                   </div>

//                   {/* Comment input box */}
//                   <div className="p-4">
//                     <div className="flex items-center">
//                     <div className="mx-auto w-[78%] mt-[10%]">
//                       {repcomId && replyToUsername && (
//                         <div className="bg-white flex w-full ps-[20px] space-x-[1%] rounded-t-xl h-[40px] mb-[1%]">
//                           <Image src={rep} width={10} height={10} alt="rep" />
//                           <p className="text-[15px] translate-y-3 text-[#000000C4] font-light">Membalas komentar oleh <span className="font-normal text-[#3F9272]">@{replyToUsername}</span></p>
//                           <Image src={cancel}  onClick={() => {
//                             setRepComId(null);
//                             setReplyToUsername(null);
//                           }} className="translate-x-[70%]" width={25} height={25} alt="rep" />
//                         </div>
//                       )}
//                         <div className="flex items-center bg-white w-full h-[33px] border border-gray-300 rounded-md relative">
//                           <input
//                             type="text"
//                             value={commentInput}
//                             // Ketika 'Enter' ditekan, kirim komentar
//                             onKeyDown={(e) => {
//                               if (e.key === "Enter" && commentInput.trim()) {
//                                 handleSendComment(data.id);
//                               }
//                             }}
//                             onChange={(e) => setCommentInput(e.target.value)}
//                             placeholder="Ketik pesan..."
//                             className="w-full h-full pl-10 pr-4 text-sm focus:outline-none"
//                           />
//                           <button
//                             onClick={() => setShowEmojiPicker((prev) => !prev)}
//                             className="absolute left-2 top-1/2 transform -translate-y-1/2"
//                           >
//                             <Image
//                               src={emote}
//                               width={20}
//                               height={20}
//                               alt="emoji picker"
//                             />
//                           </button>
//                           {showEmojiPicker && (
//                             <div className="absolute bottom-full left-0 mb-2">
//                               <EmojiPicker onEmojiClick={handleEmojiClick} />
//                             </div>
//                           )}
//                           <button
//                             onClick={() => handleSendComment(data.id)}
//                             className="bg-[#308967] rounded-full h-[31px] w-[31px]"
//                           >
//                             <Image
//                               src={post}
//                               width={15}
//                               height={15}
//                               alt="post"
//                               className="mx-auto"
//                             />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           }
//       </div>
//     </div>
//   );
// }

// export default Page;
