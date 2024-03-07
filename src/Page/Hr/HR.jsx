import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import CsvCompanent from './csvCompanent';
import FormComponent from './formComponent';
import ReactLoading from 'react-loading';


function HR() {
    const btnClickHome = async () => {
        navigate('/');
    }
    const [CSVComponent, setCSVComponent] = useState(true);

    let navigate = useNavigate();

    const btnCSVClick = async () => {
        setCSVComponent(true);
    };

    const btnFormClick = async () => {
        setCSVComponent(false);
    };

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-screen text-black flex flex-col items-center ">
                <div className="bg-[#F0F9F8] w-full flex justify-between px-[70px] py-3 items-center">
                    <span className="text-[28px] font-bold text-primary" onClick={btnClickHome}>
                        Susan Company
                    </span>
                    <AiOutlineHome className='text-[30px]' onClick={btnClickHome} />
                </div>
                
                <span className="text-[36px] text-primary mt-4 font-bold">
                    ระบบคาดการณ์การประเมินบุคลากร
                </span>
                
                
                    <div className='flex justify-center space-x-2 mb-4 mt-4 items-center' >
                        <span className=' text-[18px]'> ประเภทการกรอกข้อมูล:</span>
                        <button className='w-auto shadow-xl bg-[#DD8D16] border-white text-white text-[18px] flex items-center space-x-3 rounded-lg hover:bg-[#E8AB4F]' onClick={btnFormClick}>
                            <div> รายบุคคล </div>
                        </button>
                        <button className='w-auto shadow-xl bg-[#DD8D16] border-white text-white text-[18px] flex items-center space-x-3 rounded-lg hover:bg-[#E8AB4F]' onClick={btnCSVClick}>
                            <div> csv</div>
                        </button>
                    </div>
                    {CSVComponent && <CsvCompanent />}
                    {!CSVComponent && <FormComponent />}
                </div>
                
            

        </>
    )
}

export default HR
//${isDragOver ? 'bg-[#ffffff]' : 'bg-rose-400'}