import axios from "axios";
import ReactLoading from "react-loading";

const LoadingForum = ({ }:
    {}) => {

    return (
        <div className="fixed z-50 inset-0 overflow-y-hidden bg-white/5 flex">
            <div className="flex w-[100%] justify-center backdrop-blur-sm items-center">
                <ReactLoading type={'spin'} color={'#a3a3a3'} height={150} width={150} />
            </div>
        </div>
    )
};

export default LoadingForum;