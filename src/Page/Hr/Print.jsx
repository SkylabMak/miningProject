import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toJsonList } from '../../Utils/toJsonList';
import { useNavigate } from 'react-router-dom';
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
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
                <div className="bg-[#D9D9D9] flex justify-start items-center w-screen py-5">
                    <div className="inline-block h-max min-h-full w-0.5 self-stretch bg-black mx-8">
                    </div>
                    <span className="text-[36px]">
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
                <button className='px-8 py-2 flex items-center justify-center w-fit bg-[#176B87] text-white text-[36px] rounded-xl' onClick={btnClickBack}>
                        <RxTrackPrevious />
                        <div className='mr-6'> กลับ</div>
                    </button>
                <button className='px-8 py-2 flex items-center justify-center w-fit bg-[#176B87] text-white text-[36px] rounded-xl' onClick={btnClickDowload}>
                        <div className='mr-6'> ดาวโหลด</div>
                        <RxTrackNext />
                    </button>
                </div>



            </div>

        </>
    )
}

export default Print
