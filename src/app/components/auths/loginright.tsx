import React from "react";

const LoginR = ({
  isAnimated,
  setIsAnimated,
}: {
  isAnimated: any;
  setIsAnimated: any;
}) => {
  return (
    <div
      className="h-[520px] w-[420px] bg-no-repeat bg-center text-white
     flex flex-col items-center justify-center gap-5"
      style={{
        backgroundImage: "url('/img/registerleft.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="text-center">
        <h1 className="text-[30px] font-bold mt-24 -translate-y-2">Selamat Datang</h1>
        <p className="mt-6 -translate-y-3">
          Tap disini jika kamu belum
          <br />
          memiliki akun di OrnaTredec
        </p>
      </div>
      <button
        onClick={(e) => {
          setIsAnimated(!isAnimated);
        }}
        className="bg-transparent rounded-full mt-2 h-[40px] w-[170px] border-[1px] border-white -translate-y-4"
      >
        Buat
      </button>
    </div>
  );
};

export default LoginR;
