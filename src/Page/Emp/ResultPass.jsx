import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuCheckCircle } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";

function ResultPass() {
    const [count, setCount] = useState(0)

    let navigate = useNavigate();
    const btnClickBack = async () => {
        navigate(-1);
    };
    const btnClickHome = async () => {
        navigate('/');
    }

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-screen text-black flex flex-col items-center">
            <div className="bg-[#F0F9F8] w-full flex justify-between px-[70px] py-3 items-center">
                    <span className="text-[28px] font-bold text-primary" onClick={btnClickHome}>
                        Susan Company
                    </span>
                    <AiOutlineHome className='text-[30px]' onClick={btnClickHome}/>
                </div>
                <div className='w-[80%] pb-8 h-auto bg-[#EAFBFA] shadow-xl rounded-xl mt-4 px-9 flex flex-col space-y-10 items-center'>
                    <div className='w-[80%] mt-7 py-4 bg-white flex items-center justify-evenly rounded-xl'>
                        <LuCheckCircle className='text-[60px] text-green-500' />
                        <p className=' text-[36px] text-primary font-bold'>คุณมีโอกาสได้รับการเลื่อนขั้น</p>
                    </div>
                    <div className='w-auto h-auto p-4 bg-white rounded-2xl'>
                    <img className="" src="/info.jpg" alt="schedule" />
                    </div>
                </div>

                <div className='w-[80%] mt-2 flex justify-start'>
                    <button className='w-auto mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center space-x-3 rounded-[25px] hover:opacity-80' onClick={btnClickBack}>
                        <LuArrowLeftToLine />
                        <span> ก่อนหน้า</span>
                    </button>
                </div>

            </div>

        </>
    )
}

export default ResultPass
