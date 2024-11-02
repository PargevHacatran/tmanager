'use client';

import { useState } from "react";

import { Input } from "../../ui";
import { TopBar } from "../home";
import { Messages } from "../home";
import axios from "axios";
import { useActiveInput } from "@/hooks/useActiveInput";

export const ChatBlock = () => {
    const [massage, setMassage] = useState<string>();
    const isInputChanged = useActiveInput();

    // const sendMessage = () => {
    //     axios
    //         .post('http://localhost/tmanager.com/send_message.php', `organizationName: ${localStorage.getItem('organizationName')}`)
    //         .then((resp) => console.log(resp.data))
    // }

    return (
        <div className="relative">
            <TopBar />
            <Messages />
            <Input
                type="text"
                name="massage"
                placeholder="Введите сообщение"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMassage(e.target.value)}
                imgClassName="relative w-[35px] h-[35px]"
                imgURL={ isInputChanged ? '/img/send-message-active.png' : '/img/send-message.png' }
                labelClassName={`fixed bottom-[20px] w-[78vw] px-[24px] py-[12px] flex border-[${ isInputChanged ? '#7864F4' : '#323539'}] border-4 rounded-[10px] gap-x-[10px]`}
                className={` bg-transparent border-0 text-[18px] outline-none flex-1`}
            />  
        </div>
    );
}