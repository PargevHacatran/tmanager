'use client';

import Image from "next/image";

interface ILi {
    children?: React.ReactElement;
    title?: string;
    className: string;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
}

export const Li = ({ children, title, className, onClick }:ILi) => {
    return (
        <li 
            className={className}
            onClick={(e:React.MouseEvent<HTMLLIElement>) => onClick?.(e)}
        >
            { children }
            { title }
        </li>
    )
}