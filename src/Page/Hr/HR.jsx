import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { FaFileDownload } from "react-icons/fa";
import { toList } from '../../Utils/toList';
import { fetchPredictions_List } from '../../Utils/predictions';
import { useNavigate } from 'react-router-dom';
import { LuArrowRightToLine } from "react-icons/lu";
import { LuArrowLeftToLine } from "react-icons/lu";


function HR() {
    const [count, setCount] = useState(0)
    const [isDragOver, setIsDragOver] = useState(false);
    const [disable, setDisable] = useState(false);
    const [files, setFiles] = useState([]);

    let navigate = useNavigate();

    const handleChange = (file) => {
        setFiles([file]); // Keep this if you still need to track the file itself
    };

    const handleDraggingStateChange = (isDragging) => {
        setIsDragOver(isDragging);
    };

    const btnClick = async () => {
        if (files.length > 0) {
            try {
                const predictions = await fetchPredictions_List(files[0]);
                if(predictions === undefined){
                    alert('The file format is incorrect.',)
                    return;
                }
                navigate('/hr/print', { state: { data: predictions } }); // Navigate with the fetched predictions
                console.log(predictions);
            } catch (error) {
                console.error("Error fetching predictions:", error);
                alert('Error fetching predictions:',)
            }

        }
    };

    const btnClickBack = async () => {
        navigate(-1);
    };

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-screen text-black flex flex-col">
                <div className="bg-[#F0F9F8]  flex justify-start items-center w-screen py-5">
                    <div className="inline-block h-max min-h-full w-0.5 self-stretch text-primary mx-8"></div>
                    <span className="text-[36px] font-bold text-primary">
                        Susan Company
                    </span>
                </div>
                <div className="grow flex flex-col mt-[15vh] items-center">
                    <span className="text-[36px] text-primary my-1 font-bold">
                        ระบบคาดการณ์การประเมินบุคลากร
                    </span>
                    <span className="text-[18px] font-semibold">
                        กรุณาใส่ไฟล์นามสกุล .csv เพื่อทำการประเมิน
                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <div
                            id="DropArea"
                            className={`w-fit h-auto flex flex-col items-center justify-center my-4 border-dotted border-2 border-[#176B87] rounded-xl`}
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
                                <div className={`flex flex-col items-center shadow-xl justify-center px-8 py-4 w-auto`}

                                // style={{ textAlign: 'center', cursor: 'pointer' }}
                                >
                                    <div className={"cursor-pointer	 flex  items-center justify-center px-5 py-2 mb-5 w-auto bg-[#EAFBFA] rounded-full"}>
                                        drop or click to upload your file
                                    </div>
                                    <div className={"cursor-pointer	 flex  items-center justify-center px-5 py-2 w-auto bg-[#EAFBFA] rounded-full"}>
                                        <span className={"text-[36px] "}>
                                            csv file
                                        </span>
                                        <div className='h-10 min-w-24 mx-4 bg-[#FFFFFF] rounded-full flex items-center'>
                                            {files.length > 0 && (
                                                <div className="mx-3 ">
                                                    <span>Selected Files : </span>
                                                    <span>{files[0].name}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-[36px]">
                                            <FaFileDownload className='' />
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </FileUploader>

                        </div>
                    </div>
                    <div className='flex space-x-8'>
                    <button className=' w-auto space-x-3 mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center  rounded-[25px] hover:opacity-80' onClick={btnClickBack}>
                        <LuArrowLeftToLine />
                        <span> ก่อนหน้า</span>
                    </button>
                    <button className='w-auto space-x-3 mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center  rounded-[25px] hover:opacity-80' onClick={btnClick}>
                        <div> ถัดไป</div>
                        <LuArrowRightToLine />
                    </button>
                    </div>
                    

                </div>

            </div>

        </>
    )
}

export default HR
//${isDragOver ? 'bg-[#ffffff]' : 'bg-rose-400'}