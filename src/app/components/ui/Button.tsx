'use client';

import Image from "next/image";

interface IButton {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    btnText: string | React.ReactNode;
    className: string;
    imgClassName?: string;
    imgURL?: string;
}

export const Button = ({ onClick, btnText, className, imgURL, imgClassName }:IButton) => {
    return (
        <button
            onClick={(e:React.MouseEvent<HTMLButtonElement>) => onClick(e)}
            className={className}
        >
            {
                imgURL 
                    ? 
                        <div className={imgClassName}>
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