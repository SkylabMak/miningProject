import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegFileExcel } from "react-icons/fa6";
import { LuArrowLeftToLine } from "react-icons/lu";

function ResultDidnPass() {
    const [count, setCount] = useState(0)

    let navigate = useNavigate();
    const btnClickBack = async () => {
        navigate(-1);
    };

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-screen text-black flex flex-col items-center">
                <div className="bg-[#F0F9F8]  flex justify-start items-center w-screen py-5">
                    <div className="inline-block h-max min-h-full w-0.5 self-stretch text-primary mx-8"></div>
                    <span className="text-[36px] font-bold text-primary">
                        Susan Company
                    </span>
                </div>
                <div className='w-[57vw] pb-9 bg-[#EAFBFA] shadow-xl rounded-xl mt-4 px-9 flex flex-col space-y-10 items-center'>
                    <div className='w-[40vw] mt-7 py-4 bg-white flex items-center justify-evenly rounded-2xl'>
                        <FaRegFileExcel className='text-[60px] text-red-500' />
                        <p className=' lg:text-[36px] font-bold text-primary md:text-[20px]'>คุณอาจไม่ได้รับการเลื่อนขั้นในครั้งนี้</p>
                    </div>
                    <div className='w-[50vw] h-[40vh] bg-white rounded-2xl'></div>
                </div>

                <div className='w-[57vw] mt-2 flex justify-start'>
                    <button className='w-auto mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center space-x-3 rounded-[25px] hover:opacity-80' onClick={btnClickBack}>
                        <LuArrowLeftToLine />
                        <span> ก่อนหน้า</span>
                    </button>
                </div>

            </div>

        </>
    )
}

export default ResultDidnPass
