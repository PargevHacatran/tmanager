import Image from "next/image";
import React from "react";

interface IInput {
    type: string;
    name: string;
    placeholder: string;
    className: string;
    labelClassName?: string;
    imgClassName: string;
    onChange: React.ChangeEventHandler;
    value?: string;
    imgURL?: string;
}

export const Input = ({ type, name, placeholder, className, labelClassName, imgClassName, onChange, value, imgURL }:IInput) => {
    return (
        <label className={ labelClassName ? labelClassName : '' }>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value ? value : undefined}
                className={className}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            />
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
        </label>
    );
}