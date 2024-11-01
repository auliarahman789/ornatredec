import axios from "axios";
import ReactLoading from "react-loading";

const Loadingstatus = ({ }:
    {}) => {

    return (
        <div className="fixed translate-y-10 z-50 inset-0 overflow-y-hidden p-4 bg-white/5 md:p-8 flex">
            <div className="flex w-[100%] h-[100%] backdrop-blur-sm pe-14 items-center">
                <ReactLoading type={'cubes'} color={'#0000070'} className="translate-x-[100%]" height={300} width={300} />
            </div>
        </div>
    )
};

export default Loadingstatus;