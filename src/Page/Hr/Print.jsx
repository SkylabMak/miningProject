import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toJsonList } from '../../Utils/toJsonList';
import { useNavigate } from 'react-router-dom';
import { LuArrowLeftToLine } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { toCSV } from '../../Utils/toCSV';


function Print() {
    const location = useLocation();
    const [count, setCount] = useState(0)
    const { data } = location.state || {};
    const dataJsonList = toJsonList(data);
    const heading = data[0];
    const features = ["employee_id", "department", "is_promote"]
    let navigate = useNavigate();
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        console.log(dataJsonList)
    }, []);

    const btnClickDowload = async () => {
        toCSV(data,"Emp-Predicted.csv")
    };

    const btnClickBack = async () => {
        navigate(-1);
    }

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-screen text-black flex flex-col">
            <div className="bg-[#F0F9F8]  flex justify-start items-center w-screen py-5">
                    <div className="inline-block h-max min-h-full w-0.5 self-stretch text-primary mx-8"></div>
                    <span className="text-[36px] font-bold text-primary">
                        Susan Company
                    </span>
                </div>
                <div className="bg-[#EEEEEE] rounded-xl m-4 p-4 ">
                    <div className={`grid grid-cols-${features.length} gap-4  text-[36px] font-bold mb-12 `}>
                        {features.map((head) => (<div key={head}>{head}</div>))}
                    </div>
                    // box
                    <div className={`grid grid-cols-${features.length} gap-x-4`}>
                        {dataJsonList.flatMap((item, itemIndex) =>
                            Object.entries(item)
                                .filter(([key, _]) => features.includes(key))
                                .map(([key, value], valueIndex) => (
                                    <div key={`${item.employee_id}-${key}-${valueIndex}`}
                                        className='bg-[#ffffff] py-4 rounded-lg my-[-5px]'>
                                        {
                                            key === "is_promote" ? (value === 0 ? "no" : "yes") : value
                                        }
                                    </div>

                                ))
                        )}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-x-4 justify-items-center'>
                <button className='w-[22vh] mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center justify-between rounded-[25px] hover:opacity-80' onClick={btnClickBack}>
                        <LuArrowLeftToLine />
                        <div className='mr-6'> กลับ</div>
                    </button>
                <button className='w-[22vh] mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center justify-between rounded-[25px] hover:opacity-80' onClick={btnClickDowload}>
                        <div className='mr-6'> ดาวโหลด</div>
                        <IoCloudDownloadOutline />
                    </button>
                </div>



            </div>

        </>
    )
}

export default Print
