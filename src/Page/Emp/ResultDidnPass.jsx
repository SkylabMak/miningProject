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
                <div className="bg-[#D9D9D9] flex justify-start items-center w-screen py-5">
                    <div className="inline-block h-max min-h-full w-0.5 self-stretch bg-black mx-8">
                    </div>
                    <span className="text-[36px] font-bold">
                        Susan Company
                    </span>
                </div>
                <div className='w-[1307px] h-[707px] bg-[#EEEEEE] rounded-xl my-4 p-[60px] flex flex-col space-y-10 items-center'>
                    <div className='w-[675px] h-[109px] bg-[#D9D9D9] flex items-center justify-evenly rounded-full'>
                        <FaRegFileExcel className='text-[60px]'/>
                        <p className=' text-[36px] font-bold'>คุณอาจไม่ได้รับการเลื่อนขั้นในครั้งนี้</p>
                    </div>
                    <div className='w-[1123px] h-[300px] bg-[#D9D9D9] rounded-3xl'></div>
                </div>
                <div className='w-[1307px] my-2 flex justify-end'>
                <div className='w-[1307px] my-2 flex justify-start'>
                    <button className='w-[255px] h-[89px] bg-secondary text-white text-[36px] flex items-center justify-between rounded-[25px]' onClick={btnClickBack}>
                    <LuArrowLeftToLine />
                    <span> ก่อนหน้า</span>
                    </button>
                </div>
            </div>
            </div>

        </>
    )
}

export default ResultDidnPass
