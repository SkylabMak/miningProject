import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { FaFileDownload } from "react-icons/fa";
import { RxTrackNext } from "react-icons/rx";
import { toList } from '../../Utils/toList';
import { fetchPredictions_List } from '../../Utils/predictions';
import { useNavigate } from 'react-router-dom';


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
            console.log("click")
            // const list = toList(files[0])
            const predictions = await fetchPredictions_List(files[0]);
            navigate('/hr/print', { state: { data: predictions } });
            console.log(predictions)

        }
    };

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
                <div className="grow flex flex-col justify-center items-center">
                    <span className="text-[36px] my-4">
                        ระบบคาดการณ์การประเมินบุคลากร
                    </span>
                    <span className="text-[18px] my-4">
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
                                <div className={`flex flex-col items-center justify-center px-8 py-4 w-auto`}

                                // style={{ textAlign: 'center', cursor: 'pointer' }}
                                >
                                    <div className={"cursor-pointer	 flex  items-center justify-center px-5 py-2 mb-5 w-auto bg-[#D9D9D9] rounded-full"}>
                                        drop or click to upload your file
                                    </div>
                                    <div className={"cursor-pointer	 flex  items-center justify-center px-5 py-2 w-auto bg-[#D9D9D9] rounded-full"}>
                                        <span className={"text-[36px]"}>
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
                                            <FaFileDownload />
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </FileUploader>

                        </div>
                    </div>
                    <button className='px-8 py-2 flex items-center justify-center w-fit bg-[#176B87] text-white text-[36px]' onClick={btnClick}>
                        <div className='mr-6'> ถัดไป</div>
                        <RxTrackNext />
                    </button>

                </div>

            </div>

        </>
    )
}

export default HR
//${isDragOver ? 'bg-[#ffffff]' : 'bg-rose-400'}