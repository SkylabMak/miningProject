import React from 'react'
import { GoPeople } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();
    
    const hrPage = async () => {
        navigate('/hr');
    }
    const empPage = async () => {
        navigate('/emp');
    }
    return (
        <section className=' w-full h-[80vh] mx-auto text-center flex flex-col justify-center items-center'>
            <div className='flex items-center justify-center'>
                <div className='flex h-[600px] justify-center '>
                    <div>
                        <div className=' w-[415px] h-[415px] bg-accent opacity-10 rounded-full '></div>
                    </div>
                    <div className='flex flex-col-reverse '>
                        <div className=' w-[415px] h-[415px] bg-accent opacity-10 rounded-full '></div>
                    </div>
                </div>
                <div className='absolute flex justify-center space-x-[600px] h-[350px]'>
                    <div className='flex flex-col-reverse'>
                        <div className=' w-[284px] h-[284px] bg-accent opacity-10 rounded-full '></div>
                    </div>
                    <div className=' '>
                        <div className=' w-[257px] h-[257px] bg-accent opacity-10 rounded-full '></div>
                    </div>
                </div>
            </div>
            <div className='absolute flex flex-col justify-center'>
                <div >
                    <h1 className='text-[100px] text-primary font-sans-serif font-bold'>Susan Company</h1>
                    <h1 className='text-[18px] text-black'>Promoted prediction Program</h1>
                </div>
                <div className='flex flex-row justify-center space-x-[100px] my-6 text-black'>
                    <div className='flex flex-col items-center'>
                        <GoPeople className=' size-[77px]' />
                        <button onClick={(event) => hrPage(event)} className='bg-secondary w-[316px] rounded-full font-medium my-3 mx-auto py-3 text-white text-[24px] hover:bg-[#3A9FC1]'>HR</button>
                    </div>
                    <div className='flex flex-col items-center'>
                        <BsBoxSeam className=' size-[77px]' />
                        <button onClick={empPage} className='bg-secondary w-[316px] rounded-full font-medium my-3 mx-auto py-3 text-white text-[24px] hover:bg-[#3A9FC1]'>Employee</button>
                    </div>
                </div>
            </div>
            
        </section>


    );
};


export default Home