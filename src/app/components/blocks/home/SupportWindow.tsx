'use client';

import Image from "next/image";
import { Message } from "../../ui/home";
import React, { ReactElement, useEffect, useState } from "react";
import { Input } from "../../ui";
import { useActiveInput } from "@/hooks/useActiveInput";

interface ISupportWindow {
    closeWin: Function;
}

const messages = [
    {
        author: 'TAssistent',
        message: 'Здравствуйте! 🖐',
        userImg: '/img/support-img.png'
    },
    {
        author: 'TAssistent',
        message: 'Чем я могу вам помочь ? 🤗',
        userImg: '/img/support-img.png'
    },
];

export const SupportWindow = ({ closeWin }:ISupportWindow) => {
    const [message, setMassage] = useState<string>();
    const isInputChanged = useActiveInput();

    return (
        <div className="fixed bottom-[175px] right-[115px] w-[500px] h-[650px] bg-[#1B1D21] rounded-[20px] p-[20px] flex flex-col justify-between">
            <div className="flex justify-between items-center border border-[#323539] border-t-0 border-l-0 border-r-0 border-b-1">
                <div className="flex gap-x-[15px] pb-[20px]">
                    <div className="relative w-[70px] h-[70px]">
                        <Image
                            layout="fill"
                            src="/img/support-img.png"
                            alt=""
                        />
                    </div>
                    <div className="text-[#fff] flex flex-col gap-x-[10px] justify-center">
                        <h3 className="text-[20px] font-bold">TAssistent</h3>
                        <p>Онлайн-консультант</p>
                    </div>
                </div>
                <div className="pb-[10px]" onClick={() => closeWin()}>
                    <div className="rotate-[45deg] w-[40px] h-[1px] rounded-[2px] bg-[#fff]"></div>
                    <div className="rotate-[-45deg] w-[40px] h-[1px] rounded-[2px] bg-[#fff]"></div>
                </div>
            </div>
            <div className="flex flex-col gap-y-[10px] flex-1 mt-[20px]">
                {
                    messages.map((message) => (
                        <Message 
                            author={message.author}
                            message={message.message}
                            userImg={message.userImg}
                            mxWidth='70%'
                        />
                    ))
                }
            </div>
            <Input
                type="text"
                name="massage"
                placeholder="Введите сообщение"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMassage(e.target.value)}
                imgClassName="relative w-[35px] h-[35px]"
                imgURL={ isInputChanged ? '/img/send-message-active.png' : '/img/send-message.png' }
                labelClassName={`w-full px-[24px] py-[12px] flex border-[${ isInputChanged ? '#7864F4' : '#323539'}] border-4 rounded-[10px] gap-x-[10px]`}
                className={`bg-transparent border-0 text-[18px] outline-none flex-1`}
            />  
        </div>
    );
}