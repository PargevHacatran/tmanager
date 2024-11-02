import Image from "next/image";

import { taskImgs } from '@/utils/taskImag';

interface ITaskResponsible {
    peoples: string[];
}

export const Responsible = ({ peoples }:ITaskResponsible) => {
    return (
        <div className="flex justify-between mt-[17px] pt-[12px] border border-[#323539] border-t-1 border-l-0 border-r-0 border-b-0">
            <div className="flex ml-[10px]">
                {
                    peoples.map((people) => (
                        <div className="relative w-[24px] h-[24px] ml-[-10px]">
                            <Image 
                                layout="fill"
                                src={people}
                                alt=""
                            />
                        </div>
                    ))
                }
            </div>
            <div className="flex gap-x-[6px] items-center">
                { taskImgs.responsibleIcon }
                <p className="text-[#6C717B] text-[14px]">{ peoples.length }</p>
            </div>
        </div>
    );
}