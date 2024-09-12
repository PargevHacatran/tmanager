'use client';

import { Button } from "../Button";

interface ISideBarLabel {
    title: string;
    add?: boolean;
}

export const SideBarLabel = ({ title, add }:ISideBarLabel) => {
    return (
        <label className="uppercase text-[#6C7178] text-[12px] font-bold w-full flex justify-between items-center">
            { title }
            { 
                add 
                    ? 
                        <Button 
                            btnText="+"
                            onClick={(e:React.MouseEvent<HTMLButtonElement>) => console.log()}
                            className="text-[20px] font-normal" 
                        />
                    : null
            }
        </label>
    );
}