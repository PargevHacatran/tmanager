'use client';

import '@/app/globals.css';
import { useEffect, useState } from 'react';

export const TasksAnalytic = () => {
    const [gradientStyle, setGradientStyle] = useState<object>({}); 

    const pused = 10;
    const completed = 60;
    const onGoing = 20;
    const upcoming = 10;

    useEffect(() => {
        setGradientStyle({
            '--completed': `${completed}%`,
            '--upcoming': `${completed + upcoming}%`,
            '--pused': `${completed + upcoming + pused}%`,
            '--ongoing': `${ 100 }`
        });

        document.querySelector("#diogram")?.classList.add('tasks-analytic-canvas');
    }, [])

    return (
        <div className="bg-[#2A2D32] w-[475px] h-[375px] rounded-[10px]">
            <div className='border border-[#323539] border-b-1 border-t-0 border-l-1 border-r-0'>
                <p className='text-[24px] py-[16px] pl-[24px]'>Tasks</p>
            </div>
            <div className="w-[225px] h-[225px] pl-[48px] pt-[33px] flex items-center gap-x-[48px]">
                <div>
                    <div id="diogram" className='flex justify-center items-center w-[224px] h-[224px] rounded-[50%]' style={gradientStyle}>
                        <div className='bg-[#2A2D32] w-[200px] h-[200px] rounded-[50%] flex justify-center items-center'>
                            <p className='text-[48px] text-[#55DD4A]'>{ completed }</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-x-[8px] items-center'>
                        <div className='bg-transparent border-2 border-[#55DD4A] w-[10px] h-[10px] rounded-[50%]'></div>
                        <p>Complited</p>
                    </div>
                    <div className='flex gap-x-[8px] items-center'>
                        <div className='bg-transparent border-2 border-[#E84040] w-[10px] h-[10px] rounded-[50%]'></div>
                        <p>Paused</p>
                    </div>
                    <div className='flex gap-x-[8px] items-center'>
                        <div className='bg-transparent border-2 border-[#FFC123] w-[10px] h-[10px] rounded-[50%]'></div>
                        <p>Upcoming</p>
                    </div>
                    <div className='flex gap-x-[8px] items-center'>
                        <div className='bg-transparent border-2 border-[#3C79D6] w-[10px] h-[10px] rounded-[50%]'></div>
                        <p>On Going</p>
                    </div>
                </div>
            </div>
        </div>
    );
}