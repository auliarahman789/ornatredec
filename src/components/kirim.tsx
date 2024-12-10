import React from "react";
import axios from "axios";

const KirimDataButton: React.FC = () => {
  const kirimData = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/simpanPost`;

    try {
      const data = { idPost: 1 };
      const response = await axios.post(url, data);

      console.log("Data berhasil dikirim:", response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Terjadi error pada request:",
          error.response?.data || error.message
        );
      } else {
        console.error(
          "Terjadi error tidak terduga:",
          (error as Error).message || "Error tidak diketahui"
        );
      }
    }
  };

  return (
    <div>
      <button onClick={kirimData} className="simpan-button bg-green-600 p-4 ">
        simpan
      </button>
    </div>
  );
};

export default KirimDataButton;
