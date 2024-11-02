'use client';

import { useEffect, useState } from "react";
import { Message } from "../../ui/home";

const messages = [
    {
        author: 'User1',
        organizationName: 'company1',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque praesentium, excepturi eveniet ad quibusdam quaerat laboriosam modi velit sequi, consequuntur laborum obcaecati eaque quam. Magnam ex accusamus iusto natus?',
        time: '11:20',
        userImg: '/img/user.png'
    },
    {
        author: 'User2',
        organizationName: 'company1',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque praesentium, excepturi eveniet ad quibusdam quaerat laboriosam modi velit sequi, consequuntur laborum obcaecati eaque quam. Magnam ex accusamus iusto natus?',
        time: '11:21',
        userImg: '/img/user2.png'
    },
    {
        author: 'User1',
        organizationName: 'company1',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque praesentium, excepturi eveniet ad quibusdam quaerat laboriosam modi velit sequi, consequuntur laborum obcaecati eaque quam. Magnam ex accusamus iusto natus?',
        time: '11:55',
        userImg: '/img/user.png'
    },
]

export const Messages = () => {
    const [loaded, setLoaded] = useState<boolean>();
    // const [messages, setMessages] = useState<any[]>();
    
    return (
        <div className="py-[24px] px-[40px]">
            {
                messages.map((message) => {
                    const username = localStorage.getItem('username');
                    const thisUserMessage = message.author === username;
                    
                    return (
                        <div className={`flex mb-[32px] ${ thisUserMessage ? 'justify-end' : '' }`}>
                            <Message 
                                author={message.author}
                                message={message.message}
                                time={message.time}
                                userImg={message.userImg}
                                mxWidth="50vw"
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}