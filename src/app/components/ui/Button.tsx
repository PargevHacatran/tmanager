'use client';

import Image from "next/image";

interface IButton {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    btnText: string;
    className: string;
    imgURL?: string;
}

export const Button = ({ onClick, btnText, className, imgURL }:IButton) => {
    return (
        <button
            onClick={(e:React.MouseEvent<HTMLButtonElement>) => onClick(e)}
            className={className}
        >
            {
                imgURL 
                    ? 
                        <div className="relative w-[35px] h-[35px]">
                            <Image 
                                layout="fill"
                                src={imgURL}
                                alt=""
                            />               
                        </div>
                    : null
            }
            { btnText }
        </button>
    );
}