import { useState } from 'react'
import { LuArrowRightToLine } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import Selector from './Selector';


function Emp() {
    const Department = [
        { id: 1, name: 'Analytics' },
        { id: 2, name: 'Finance' },
        { id: 3, name: 'HR' },
        { id: 4, name: 'Legal' },
        { id: 5, name: 'Operations' },
        { id: 6, name: 'Procurement' },
        { id: 7, name: 'R&D' },
        { id: 8, name: 'Sale & Marketing' },
        { id: 9, name: 'Technology' },
    ];

    const Education = [
        { id: 1, name: "Below Secondary" },
        { id: 2, name: "Bachelor's" },
        { id: 3, name: "Master's & above" },
    ];

    const Recruitment_channel = [
        { id: 1, name: "referred" },
        { id: 2, name: "sourcing" },
        { id: 3, name: "other" },
    ];


    //"No_of_trainings""Previous_year_rating"
    //"Length_of_service""Awards_won""Avg_training_score"
    const [department, setDepartment] = useState(Department[0]);
    const [education, setEducation] = useState(Education[0]);
    const [recruitment_channel, setRecruitment_channel] = useState(Recruitment_channel[0]);
    // const [count, setCount] = useState(0)

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
            <div className='w-[120vh] h-[70vh] bg-[#EEEEEE] rounded-xl mt-4 pt-[60px] px-9 space-y-10 '>
                <div className=''>
                    <span className='flex text-[36px] font-bold px-14'>Employee</span>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className=''>
                        <p className='text-[25px] font-semibold mx-2'>Department :</p>
                        <Selector data={Department} selected={department} setSelected={setDepartment} />
                    </div>
                    <div className=''>
                        <p className='text-[25px] font-semibold mx-2'>Education :</p>
                        <Selector data={Education} selected={education} setSelected={setEducation} />
                    </div>
                    <div className=''>
                        <p className='text-[25px] font-semibold mx-2'>Recruitment Channel:</p>
                        <Selector data={Recruitment_channel} selected={recruitment_channel} setSelected={setRecruitment_channel} />
                    </div>
                    <div class="mb-5">
                        <p className='text-[25px] font-semibold mx-2'>No Of Trainings:</p>
                        <input type="int" id="base-input" class="relative w-[10vh] p-3 cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"></input>
                    </div>
                </div>
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
