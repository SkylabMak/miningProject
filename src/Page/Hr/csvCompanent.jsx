import React from 'react'
import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { FaFileDownload } from "react-icons/fa";
import { fetchPredictions_List } from '../../Utils/predictions';
import { useNavigate } from 'react-router-dom';
import { LuArrowRightToLine } from "react-icons/lu";
import { LuArrowLeftToLine } from "react-icons/lu";
import ReactLoading from 'react-loading';


function csvCompanent() {
    const [isDragOver, setIsDragOver] = useState(false);
    const [disable, setDisable] = useState(false);
    const [files, setFiles] = useState([]);
    const [loading,setLoading] = useState(false);

    let navigate = useNavigate();

    const handleChange = (file) => {
        setFiles([file]); // Keep this if you still need to track the file itself
    };

    const handleDraggingStateChange = (isDragging) => {
        setIsDragOver(isDragging);
    };
    const btnClickBack = async () => {
        navigate(-1);
    };

    const btnClick = async () => {
        if (files.length > 0) {
            try {
                setLoading(true);
                const predictions = await fetchPredictions_List(files[0]);
                if (predictions === undefined) {
                    alert('รูปแบบไฟล์ไม่ถูกต้อง',)
                    return;
                }
                navigate('/hr/print', { state: { data: predictions } }); // Navigate with the fetched predictions
                console.log(predictions);
            } catch (error) {
                console.error("ทำนายผิดพลาด :", error);
                alert('ทำนายผิดพลาด',)
            }

        }else{
            alert('คุณยังไม่ได้เลือกไฟล์',)
        }
    };
    return (
        <div className='relative'>
            <div className={'w-[50vw]  bg-[#EAFBFA] shadow-lg rounded-xl pt-[40px] pb-9 px-9  '}
            >
                <div className={'grow flex flex-col mt-5 items-center '}>
                    <span className="text-[28px] font-semibold">
                        กรุณาใส่ไฟล์นามสกุล .csv เพื่อทำการประเมิน
                    </span>
                    <span className="text-[12px] font-semibold text-gray-500 text-center">
                        คอลัมน์ที่ต้องการ : department, education, recruitment_channel,
                        no_of_trainings,
                    </span>
                    <span className="text-[12px] font-semibold text-gray-500 text-center">
                        previous_year_rating,
                        length_of_service, awards_won,
                        avg_training_score
                    </span>
                    <div className="flex flex-col mt-4 items-center justify-center">
                        <div
                            id="DropArea"
                            className={`w-fit h-auto flex flex-col items-center justify-center my-4 bg-white border-dashed border-2 border-[#176B87] rounded-xl`}
                        >
                            <FileUploader
                                handleChange={handleChange}
                                name="file"
                                types={["CSV"]}
                                // className={`w-auto h-auto flex flex-col items-center justify-center  ${isDragOver ? 'bg-orange-400' : 'bg-rose-400'}`}
                                onDraggingStateChange={handleDraggingStateChange} // Use this to track drag state
                                dropMessageStyle={{
                                    backgroundColor: '#64CCC5',
                                }}
                            >
                                <div className={`flex flex-col items-center shadow-lg justify-center px-8 py-4 w-auto`}

                                // style={{ textAlign: 'center', cursor: 'pointer' }}
                                >
                                    <div className={"cursor-pointer	 flex  items-center justify-center px-5 py-2 mb-5 w-auto  rounded-lg"}>
                                        drop or click to upload your file
                                    </div>
                                    <div className={"cursor-pointer	text-[20px] flex  items-center justify-center px-9 py-3 w-auto bg-[#EAFBFA] rounded-lg"}>
                                        <span className={" font-semibold "}>
                                            csv file
                                        </span>
                                        <div className='h-8 min-w-24 mx-4 bg-[#FFFFFF] text-[20px] rounded-xl flex items-center'>
                                            {files.length > 0 && (
                                                <div className="mx-3 ">
                                                    <span>Selected Files : </span>
                                                    <span>{files[0].name}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="">
                                            <FaFileDownload className='' />
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </FileUploader>

                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-between'>
                <button className=' w-auto mt-4 shadow-xl bg-secondary border-white text-white text-[18px] flex items-center space-x-3 rounded-[25px] hover:bg-[#3A9FC1]' onClick={btnClickBack}>
                    <LuArrowLeftToLine />
                    <span> ก่อนหน้า</span>
                </button>
                <button className='w-auto mt-4 shadow-xl bg-secondary border-white text-white flex items-center space-x-3 rounded-[25px] hover:bg-[#3A9FC1]' onClick={btnClick}>
                    <div className='text-[18px]'> ถัดไป</div>
                    <div className=''>
                    {!loading &&<LuArrowRightToLine className='text-[20px]'/>}
                    {loading && <ReactLoading type={"spin"} color={"#DD8D16"} height={30} width={30} />}
                    </div>
                    
                </button>
            </div>
           
            
            
        </div>
    )
}

export default csvCompanent