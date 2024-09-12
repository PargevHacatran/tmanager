'use client';

import Image from "next/image";

import { Li } from "../../ui";
import { SideBarLabel } from "../../ui/home";
import { setSectionName } from "@/lib/feature/nav/navSlice";
import { useDispatch, useSelector } from "react-redux";

import { NavImages } from "@/utils/navImgs";

const navTypes = ['main', 'tasks', 'projects', 'handle'];

const lis = {
    mainMenuLi: [
        {
            img: NavImages.dashboard,
            activeImg: NavImages.dashboardActive,
            title: 'Dashboard'
        },
        {
            img: NavImages.projects,
            activeImg: NavImages.projectsActive,
            title: 'Project'
        },
        {
            img: NavImages.chat,
            activeImg: NavImages.chatActive,
            title: 'Chat'
        },
    ],
    tasksMenuLi: [
        {
            title: 'Team Task'
        },
        {
            title: 'Personal Task'
        },
    ],
    projectsMenuLi: [
        {
            title: 'ERP Website'
        },
        {
            title: 'Vifit Mobile App'
        },
        {
            title: 'Godomo Platform'
        },
        {
            title: 'xTrading Website'
        },
    ],
    handleMenuLi: [
        {
            imgURL: '/img/logout.png',
            title: 'Log out'
        },
        {
            imgURL: '/img/settings.png',
            title: 'Setting'
        }
    ],
}

const labels = {
    mainLabel: {
        title: 'main menu',
        add: false 
    },
    tasksLabel: {
        title: 'task',
        add: true
    },
    projectsLabel: {
        title: 'projects',
        add: true
    },
}

export const SideBar = () => {
    const dispatch = useDispatch();
    const sectionName = useSelector((state:any) => state.nav.sectionName);

    return (
        <div className="p-[20px] bg-[#1B1D21] h-[100vh] max-h-[100vh] fixed">
            <div className="relative w-[138px] h-[30px] mb-[40px]">
                <Image
                    layout="fill"   
                    src="/img/logo.png" 
                    alt="" 
                />
            </div>
            <div className="flex flex-col h-full gap-y-[40px]">
                {
                    navTypes.map((type, index) => (
                        <nav className={`flex gap-y-[20px] flex-col w-[254px] ${ index === navTypes.length - 1 ? 'h-full justify-end mb-[64px] border border-[#323539] border-t-1 border-l-0 border-r-0 border-b-0' : index === navTypes.length - 2 ? 'mb-[95px]' : null }`}>
                            <SideBarLabel 
                                title={labels[`${type}Label`]?.title}
                                add={labels[`${type}Label`]?.add}
                            />
                            <ul>      
                                {
                                    lis[`${type}MenuLi`]?.map((li) => (
                                        <Li 
                                            title={li.title}
                                            className={`flex text-[#6C717B] font-[400] gap-x-[8px] items-center mb-[16px] leading-[150%] ${ sectionName === li.title ? 'text-[#7864F4] border-[#7864F4] border-t-0 border-r-0 border-b-0 border-l-[6px] ml-[-18px] pl-[12px]' : null }`}   
                                            onClick={() => dispatch(setSectionName(li.title))}                             
                                        >
                                            { sectionName === li.title ? li.activeImg : li.img }
                                        </Li>
                                    ))     
                                }
                            </ul>
                        </nav>
                    ))
                }
            </div>
        </div>
    )
}