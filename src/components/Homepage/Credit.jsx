import React from 'react'
import Github from "/github.svg"

const Credit = () => {
    return (
        <div className='  w-full h-[20vh]  mx-auto text-center flex flex-col justify-center items-center'>
            <footer className='flex justify-center  items-center'>
                <a href='https://github.com/SkylabMak/miningProject'>
                    <img src={Github} className="size-12" alt="github" />
                </a>
                <div className='text-xs flex flex-col items-start justify-center mx-3'>
                    <span className='text-[18px] text-black'>project by 2nd year students</span>
                    <a href='https://github.com/SkylabMak/miningProject' className='mt-2'>
                        <span className='text-[18px] text-black font-normal '>github :https://github.com/SkylabMak/miningProject</span>
                    </a>
                    <a href='https://github.com/SkylabMak/EmpMinin_Backend' className='mt-2'>
                        <span className='text-[18px] text-black font-normal '>github :https://github.com/SkylabMak/EmpMinin_Backend</span>
                    </a>
                </div>
            </footer>
        </div>
    );
};


export default Credit