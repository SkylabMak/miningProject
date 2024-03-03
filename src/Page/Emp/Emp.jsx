import { useState } from 'react'
import { LuArrowRightToLine } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';


function Emp() {
    const [count, setCount] = useState(0)

    let navigate = useNavigate();
    const btnClick = async () => {
        navigate('/Emp/resultUnpass');
        //navigate('/Emp/resultPass');
    };

    return (
        <div className="bg-[#ffffff] h-screen w-screen text-black flex flex-col items-center">
            <div className="bg-[#D9D9D9] flex justify-start items-center w-screen py-5">
                <div className="inline-block h-max min-h-full w-0.5 self-stretch bg-black mx-8">
                </div>
                <span className="text-[36px] font-bold">
                    Susan Company
                </span>
            </div>
            <div className='w-[1307px] h-[707px] bg-[#EEEEEE] rounded-xl my-4 p-[60px] flex flex-col space-y-10 items-center'>
                <div className='w-[1307px] px-[100px]'>
                    <span className='flex text-[36px] font-bold px-5'>Employee</span>
                </div>
                <div className='flex space-x-[50px]'>
                    <div className='w-[537px] h-[96px] bg-[#D9D9D9] rounded-full'></div>
                    <div className='w-[537px] h-[96px] bg-[#D9D9D9] rounded-full'></div>
                </div>
                <div className='w-[1123px] h-[96px] bg-[#D9D9D9] rounded-full'></div>
                <div className='w-[1123px] h-[96px] bg-[#D9D9D9] rounded-full'></div>
            </div>
            <div className='w-[1307px] my-2 flex justify-end'>
                <button className=' w-[243px] h-[89px] bg-secondary text-white text-[36px] flex items-center justify-between rounded-[25px]' onClick={btnClick}>
                    <span> ถัดไป</span>
                    <LuArrowRightToLine />
                </button>
            </div>
        </div>
    )
}

export default Emp
