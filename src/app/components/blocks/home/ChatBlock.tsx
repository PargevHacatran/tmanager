'use client';

import { useState } from "react";

import { Input } from "../../ui";
import { TopBar } from "../home";
import { Messages } from "../home";
import axios from "axios";

export const ChatBlock = () => {
    const [massage, setMassage] = useState<string>();

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
                className="fixed bottom-[24px] w-[75vw] px-[24px] py-[12px] bg-transparent border-[#323539] border-4 rounded-[10px] text-[18px] outline-none" // вставить иконку телеграма покрашенную
            />  
        </div>
    );
}