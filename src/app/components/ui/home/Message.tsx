import Image from "next/image";

interface IMessage {
    author: string;
    message: string;
    time: string;
    userImg: string;
}

export const Message = ({ author, message, time, userImg }:IMessage) => {
    const username = localStorage.getItem('username');
    const thisUserMessage = author === username;

    return (
        <div className={`flex flex-col max-w-[50vw] ${ thisUserMessage ? 'justify-end' : '' }`}>
            <div className={`flex justify-end gap-x-[8px] items-center ${ !thisUserMessage ? 'flex-row-reverse' : 'flex-row' }`}>
                <p className="text-[14px] text-[#fff] opacity-[0.75]">{ time }</p>
                <p>{ thisUserMessage ? 'You' : author }</p>
                <div className="relative w-[16px] h-[16px]">
                    <Image 
                        layout="fill"
                        src={userImg}
                        alt=""
                    />
                </div>
            </div>
            <div className={`p-[20px] rounded-[10px] mt-[8px] ${ thisUserMessage ? 'bg-[#7864F4]' : 'bg-[#2A2D32]' }`}>
                <p>{ message }</p>
            </div>
        </div>
    );
}