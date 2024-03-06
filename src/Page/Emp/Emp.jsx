import { useState } from 'react'
import { LuArrowRightToLine } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import Selector from './Selector';
import { postData } from '../../Utils/predictions';


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

    const Awards_wonList = [
        { id: 1, name: "No" },
        { id: 2, name: "Yes" },
    ];


    //"No_of_trainings""Previous_year_rating"
    //"Length_of_service""Awards_won""Avg_training_score"
    const [department, setDepartment] = useState(Department[0]);
    const [education, setEducation] = useState(Education[0]);
    const [recruitment_channel, setRecruitment_channel] = useState(Recruitment_channel[0]);
    const [no_of_trainings, setNo_of_trainings] = useState(1);
    const [previous_year_rating, setPrevious_year_rating] = useState(5);
    const [length_of_service, setLength_of_service] = useState(3);
    const [awards_won, setAwards_won] = useState(Awards_wonList[0]);
    const [avg_training_score, setAvg_training_score] = useState(50);
    // const [count, setCount] = useState(0)

    const prediction = async () => {
        const body = [
            department.name,
            education.name,
            recruitment_channel.name,
            no_of_trainings,
            previous_year_rating,
            length_of_service,
            (awards_won.name == "Yes" ? 1:0),
            avg_training_score
        ];
        console.log(body);
        const pred = await postData(body);
        console.log(pred);
        return pred;
    }

    let navigate = useNavigate();
    const btnClick = async () => {
        const resultPred = prediction();
        if(resultPred == 1){
            navigate('/Emp/resultPass');
        }
        else{
            navigate('/Emp/resultUnpass');
        }
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
                    <div className="mb-5">
                        <p className='text-[25px] font-semibold mx-2'>No Of Trainings:</p>
                        <input onChange={(e)=>{
                            setNo_of_trainings(parseInt(e.target.value))
                        }} 
                        value={no_of_trainings} 
                            type="number" id="base-input" className="relative w-[10vh] p-3 cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"></input>
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
