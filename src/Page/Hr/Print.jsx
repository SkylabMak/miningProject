import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toJsonList } from '../../Utils/toJsonList';
import { useNavigate } from 'react-router-dom';
import { toCSV } from '../../Utils/toCSV';
import { LuArrowLeftToLine } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";


function Print() {
    const location = useLocation();
    const [count, setCount] = useState(0)
    const { data } = location.state || {};
    const dataJsonList = toJsonList(data);
    const heading = data[0];
    const features = ["employee_id", "department", "length_of_service", "awards_won", "avg_training_score", "is_promote",]
    const featuresUserFy = ["Employee ID", "Department","Length Of Service", "Awards Won", "Avg Training Score", "Is Promote",]
    let navigate = useNavigate();
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        console.log(dataJsonList)
        console.log(data)
    }, []);

    const btnClickDowload = async () => {
        toCSV(data, "Emp-Predicted.csv")
    };

    const btnClickBack = async () => {
        navigate(-1);
    }

    const btnClickHome = async () => {
        navigate('/');
    }

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-[screen] text-black flex flex-col items-center">
                <div className="bg-[#F0F9F8] w-full flex justify-between px-[70px] py-3 items-center">
                    <span className="text-[28px] font-bold text-primary" onClick={btnClickHome}>
                        Susan Company
                    </span>
                    <AiOutlineHome className='text-[30px]' onClick={btnClickHome}/>
                </div>
                <div className="text-[40px] font-semibold mt-16 text-primary ">
                    รายการสรุปผลการเลื่อนตำแหน่ง
                </div>
                <div className="text-[15px]  mb-5 text-gray-400 ">
                    ข้อมูลชุดนี้ช่วยในการพิจารณาเท่านั้น ไม่สามารถนำไปใช้ได้ 100%
                </div>
                <div className="bg-[#EAFBFA] w-[80vw] rounded-xl   p-4">
                    <div className={`grid lg:grid-cols-${featuresUserFy.length} gap-4 text-primary text-[18px] font-bold mt-4 mb-7 justify-items-center`}
                        style={{ gridTemplateColumns: `repeat(${featuresUserFy.length}, minmax(0, 1fr))` }}
                    >
                        {featuresUserFy.map((head) => (<div key={head}>{head}</div>))}
                    </div>
                    <div className={`grid lg:grid-cols-${features.length} gap-x-4 pb-5`}
                        style={{ gridTemplateColumns: `repeat(${features.length}, minmax(0, 1fr))` }}
                    >
                        {dataJsonList.flatMap((item, itemIndex) =>
                            Object.entries(item)
                                .filter(([key, _]) => features.includes(key))
                                .map(([key, value], valueIndex) => (
                                    <div key={`${item.employee_id}-${key}-${valueIndex}`}
                                        className={'bg-[#ffffff] text-[20px] py-2 rounded-lg my-[-4px] flex justify-center' +
                                            (key === "is_promote" ? (value === 0) ? " text-red-500 font-bold" : " text-green-500 font-bold" : "")

                                        }
                                    ><div className=' w-full py-3 hover:bg-[#C5EBE9] rounded-xl  flex justify-center'>
                                            {
                                                key === "is_promote" || key === "awards_won"  ? (value == 0 ? "no" : "yes") : value
                                            }
                                        </div>
                                    </div>

                                ))
                        )}
                    </div>
                </div>
                <div className='h-[100vh] w-screen text-white mt-[110px] flex justify-center'>@Susan Company</div>
                <div className='fixed bottom-10 grid grid-cols-4 gap-x-4 justify-items-center'>
                    <button className='w-auto mt-4 shadow-xl bg-secondary border-white text-white text-[18px] flex items-center space-x-3 rounded-[25px] hover:bg-[#3A9FC1]' onClick={btnClickBack}>
                        <LuArrowLeftToLine />
                        <div className='mr-6'> กลับ</div>
                    </button>
                    <div></div>
                    <div></div>
                    <button className='w-auto mt-4 shadow-xl bg-secondary border-white text-white text-[18px] flex items-center space-x-3 rounded-[25px] hover:bg-[#3A9FC1]' onClick={btnClickDowload}>
                        <div className='mr-6'> ดาวน์โหลด</div>
                        <IoCloudDownloadOutline />
                    </button>
                </div>
            </div >

        </>
    )
}

export default Print