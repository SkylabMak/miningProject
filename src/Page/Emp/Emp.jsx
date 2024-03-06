import { useState } from 'react'
import { LuArrowRightToLine } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import Selector from './Selector';
import { postData } from '../../Utils/predictions';
import { LuArrowLeftToLine } from "react-icons/lu";
import { Input } from 'postcss';


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


    const [department, setDepartment] = useState(Department[7]);
    const [education, setEducation] = useState(Education[2]);
    const [recruitment_channel, setRecruitment_channel] = useState(Recruitment_channel[0]);
    const [no_of_trainings, setNo_of_trainings] = useState(3);
    const [previous_year_rating, setPrevious_year_rating] = useState(5);
    const [length_of_service, setLength_of_service] = useState(3);
    const [awards_won, setAwards_won] = useState(Awards_wonList[1]);
    const [avg_training_score, setAvg_training_score] = useState(100);
    // const [count, setCount] = useState(0)

    const prediction = async () => {
        const body = [
            department.name,
            education.name,
            recruitment_channel.name,
            no_of_trainings,
            previous_year_rating,
            length_of_service,
            (awards_won.name == "Yes" ? 1 : 0),
            avg_training_score
        ];
        console.log(body);
        const pred = await postData(body);
        console.log(pred);
        return pred;
    }

    let navigate = useNavigate();
    const btnClick = async () => {
        const resultPred = await prediction();
        if (resultPred === 1) {
            console.log("compldasdaedf")
            navigate('/Emp/resultPass');
        }
        else {
            navigate('/Emp/resultUnpass');
        }
    };
    const btnClickBack = async () => {
        navigate(-1);
    };

    return (
        <div className="bg-[#ffffff] h-screen w-screen text-black flex flex-col items-center">
            <div className="bg-[#F0F9F8]  flex justify-start items-center w-screen py-5">
                <div className="inline-block h-max min-h-full w-0.5 self-stretch text-primary mx-8"></div>
                <span className="text-[36px] font-bold text-primary">
                    Susan Company
                </span>
            </div>
            <div className='w-[57vw]  bg-[#EAFBFA] shadow-xl rounded-xl mt-4 pb-9 pt-[60px] px-9 space-y-5 '>
                <div className=''>
                    <span className='flex text-[36px] text-primary font-bold px-14'>Employee</span>
                </div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-1 md:gap-4'>
                    <div className=''>
                        <p className='text-[22px]  text-primary font-semibold mx-2'>Department :</p>
                        <Selector data={Department} selected={department} setSelected={setDepartment} />
                    </div>
                    <div className=''>
                        <p className='text-[22px] text-primary font-semibold mx-2'>Education :</p>
                        <Selector className='w-fit	' data={Education} selected={education} setSelected={setEducation} />
                    </div>
                    <div className=''>
                        <p className='text-[22px] text-primary font-semibold mx-2 '>Recruitment Channel :</p>
                        <Selector data={Recruitment_channel} selected={recruitment_channel} setSelected={setRecruitment_channel} />
                    </div>
                    <div className=''>
                        <p className='text-[22px] text-primary font-semibold mx-2 '>Awards Won :</p>
                        <Selector data={Awards_wonList} selected={awards_won} setSelected={setAwards_won} />
                    </div>
                    <div className="mb-5">
                        <p className='text-[22px] text-primary font-semibold mx-2'>No Of Trainings :</p>
                        <input placeholder="3" onChange={(e) => {
                            setNo_of_trainings(parseInt(e.target.value))
                        }}
                            value={no_of_trainings}
                            type="number" id="base-input" min="0" className="relative outline-none border-none w-[15vh] font-bold mt-1 text-gray-500 p-3 cursor-default overflow-hidden rounded-lg border-white bg-white text-left shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-sm"></input></div>
                    <div>
                        <p className='text-[22px] text-primary font-semibold mx-2'>Previous Year Rating :</p>
                        <input placeholder="0" onChange={(e) => {
                            setPrevious_year_rating(parseInt(e.target.value))
                        }}
                            value={previous_year_rating} type="number" min="0" max="5" className='relative outline-none border-none w-[15vh] font-bold mt-1 text-gray-500 p-3 cursor-default overflow-hidden rounded-lg border-white bg-white text-left shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-sm'></input>
                    </div>
                    <div>
                        <p className='text-[22px] text-primary font-semibold mx-2'>Length Of Service :</p>
                        <input placeholder="0" onChange={(e) => {
                            setLength_of_service(parseInt(e.target.value))
                        }}
                            value={length_of_service} type="number" min="0" className='relative outline-none border-none w-[15vh] font-bold mt-1 text-gray-500 p-3 cursor-default overflow-hidden rounded-lg border-white bg-white text-left shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-sm'></input>
                    </div>
                    <div>
                        <p className='text-[22px] text-primary font-semibold mx-2'>Avg Training Score :</p>
                        <input placeholder="0" onChange={(e) => {
                            setAvg_training_score(parseInt(e.target.value))
                        }}
                            value={avg_training_score} type="number" min="0" className='relative outline-none border-none w-[15vh] font-bold mt-1 text-gray-500 p-3 cursor-default overflow-hidden rounded-lg border-white bg-white text-left shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-sm'></input>
                    </div>

                </div>
            </div>
            <div className='w-[57vw] my-2 flex justify-between'>
                <button className=' w-auto mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center space-x-3 rounded-[25px] hover:opacity-80' onClick={btnClickBack}>
                    <LuArrowLeftToLine />
                    <span> ก่อนหน้า</span>
                </button>
                <button className=' w-auto mt-4 shadow-xl bg-secondary border-white text-white text-[24px] flex items-center space-x-3 rounded-[25px] hover:opacity-80' onClick={btnClick}>
                    <span> ถัดไป</span>
                    <LuArrowRightToLine />
                </button>
            </div>
        </div>
    )
}

export default Emp
