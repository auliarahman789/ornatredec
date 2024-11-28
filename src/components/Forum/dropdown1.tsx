// "use client";
// import Image from "next/image";

// import React, { useState } from "react";
// import Grid from "./grid";

// const ForumSemua = () => {
//   return (
//     <div className="mt-4 p-4">
//       <Grid />
//     </div>
//   );
// };

// const ForumIkan = () => {
//   return (
//     <div className="mt-4 p-4">
//       <ForumIkan />
//     </div>
//   );
// };

// const Dropdown1 = ({ onSelect }: { onSelect: any }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Semua"); // Set default ke "Tanaman"

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option: any) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     onSelect(option); // Memanggil fungsi onSelect ketika opsi dipilih
//   };

//   return (
//     <div className="relative inline-block text-left mr-4">
//       <div className="mt-3 ms-[50%]">
//         <button
//           type="button"
//           className="inline-flex justify-center text-[18px] px-3 py-1 font-semibold text-white max-w-[127px] min-w-[127px] rounded-lg bg-[#308967]"
//           onClick={toggleDropdown}
//         >
//           {selectedOption}
//           <svg
//             className={`ml-2 mt-[1%] h-6 w-6 text-[#21B892] transform transition-transform duration-200 ${
//               isOpen ? "rotate-180" : "rotate-0"
//             }`}
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="absolute left-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg">
//           <div className="py-1">
//             {selectedOption !== "Semua" && (
//               <p
//                 onClick={() => handleOptionClick("Semua")}
//                 className="block px-4 py-2 text-sm text-black cursor-pointer"
//               >
//                 Semua
//               </p>
//             )}
//             {selectedOption !== "Tanaman" && (
//               <p
//                 onClick={() => handleOptionClick("Tanaman")}
//                 className="block px-4 py-2 text-sm text-black cursor-pointer"
//               >
//                 Tanaman
//               </p>
//             )}
//             {selectedOption !== "Ikan" && (
//               <p
//                 onClick={() => handleOptionClick("Ikan")}
//                 className="block px-4 py-2 text-sm text-black cursor-pointer"
//               >
//                 Ikan
//               </p>
//             )}
//             {selectedOption !== "Burung" && (
//               <p
//                 onClick={() => handleOptionClick("Burung")}
//                 className="block px-4 py-2 text-sm text-black cursor-pointer"
//               >
//                 Burung
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const CombinedDropdowns = () => {
//   const [selectedOption, setSelectedOption] = useState("Tanaman"); // Set default ke "Tanaman"

//   return (
//     <div className="flex flex-col">
//       <div className="flex">
//         <Dropdown1 onSelect={setSelectedOption} />
//       </div>

//       {selectedOption === "Semua" && <ForumSemua />}
//       {selectedOption === "Ikan" && <ForumIkan />}
//       {/* // {selectedOption === "Ikan" && <IkanComponent />}
//       // {selectedOption === "Burung" && <BurungComponent />} */}
//     </div>
//   );
// };

// export default CombinedDropdowns;

"use client";
import React, { useState } from "react";
import Grid from "./grid";

const ForumSemua = () => {
  return (
    <div className="mt-4 p-4">
      <h2 className="text-lg font-bold">Semua Forum</h2>
      <Grid />
    </div>
  );
};

const ForumIkan = () => {
  return (
    <div className="mt-4 p-4">
      <h2 className="text-lg font-bold">Forum Ikan</h2>
      <p>Konten khusus untuk diskusi mengenai ikan.</p>
    </div>
  );
};

const ForumBurung = () => {
  return (
    <div className="mt-4 p-4">
      <h2 className="text-lg font-bold">Forum Burung</h2>
      <p>Konten khusus untuk diskusi mengenai burung.</p>
    </div>
  );
};

const ForumTanaman = () => {
  return (
    <div className="mt-4 p-4">
      <h2 className="text-lg font-bold">Forum Tanaman</h2>
      <p>Konten khusus untuk diskusi mengenai tanaman.</p>
    </div>
  );
};

const Dropdown1 = ({ onSelect }: { onSelect: (option: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Semua");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Memanggil fungsi onSelect ketika opsi dipilih
  };

  return (
    <div className="relative inline-block text-left mr-4">
      <div className="mt-3 ms-[50%]">
        <button
          type="button"
          className="inline-flex justify-center text-[18px] px-3 py-1 font-semibold text-white max-w-[127px] min-w-[127px] rounded-lg bg-[#308967]"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className={`ml-2 mt-[1%] h-6 w-6 text-[#21B892] transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg">
          <div className="py-1">
            {selectedOption !== "Semua" && (
              <p
                onClick={() => handleOptionClick("Semua")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Semua
              </p>
            )}
            {selectedOption !== "Tanaman" && (
              <p
                onClick={() => handleOptionClick("Tanaman")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Tanaman
              </p>
            )}
            {selectedOption !== "Ikan" && (
              <p
                onClick={() => handleOptionClick("Ikan")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Ikan
              </p>
            )}
            {selectedOption !== "Burung" && (
              <p
                onClick={() => handleOptionClick("Burung")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Burung
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CombinedDropdowns = () => {
  const [selectedOption, setSelectedOption] = useState("Semua");

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Dropdown1 onSelect={setSelectedOption} />
      </div>

      {selectedOption === "Semua" && <ForumSemua />}
      {selectedOption === "Tanaman" && <ForumTanaman />}
      {selectedOption === "Ikan" && <ForumIkan />}
      {selectedOption === "Burung" && <ForumBurung />}
    </div>
  );
};

export default CombinedDropdowns;
