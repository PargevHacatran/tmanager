import { Task } from "../home";

const tasks:object = {
    "On Going": [
        {
            title: 'Create Home screen ERP Website',
            description: 'Design the Home screen according to the selected concept. Read the requirements in the brief carefully. Pay attention to style, color and font.',
            stickers: {
                levels: [
                    {
                        title: 'High',
                        bg: "#ED3159"
                    }
                ],
                fields: [
                    'UI Design',
                    'Mobile'
                ]
            },
            deadline: 'September 28, 2024',
            projectName: 'ERP Website',
            proccessProcent: 80,
            peoples: ['/img/people1.png', '/img/people2.png']
        },
        {
            title: 'Desk Research about market of fitness',
            description: 'Research at your desk and provide relevant data in the Fitness market along with reputable sources',
            stickers: {
                levels: [
                    {
                        title: 'Low',
                        bg: "#8B929D"
                    }
                ],
                fields: [
                    'UX Research',
                    'Mobile App'
                ]
            },
            deadline: 'September 28, 2024',
            projectName: 'Vifit Mobile App',
            proccessProcent: 50,
            peoples: ['/img/people1.png']
        },
    ],
    "Completed": [
        {
            title: 'Create Log in/ Log out ERP Website',
            stickers: {
                fields: [
                    'UI Design',
                    'Website'
                ]
            },
            deadline: 'September 26, 2024',
            projectName: 'ERP Website',
            peoples: ['/img/people1.png', '/img/people3.png']
        },
        {
            title: 'Create Walkthrough screens',
            stickers: {
                fields: [
                    'UX Research',
                    'Mobile App'
                ]
            },
            deadline: 'September 26, 2024',
            projectName: 'ERP Website',
            peoples: ['/img/people1.png', '/img/people2.png', '/img/people3.png']
        },
    ],
    "Upcoming": [
        {
            title: 'Plan to interview 15 users',
            stickers: {
                fields: [
                    'UI Design',
                    'Website'
                ],
                levels: [
                    {
                        title: 'Low',
                        bg: '#8B929D'
                    }
                ]
            },
            deadline: 'September 26, 2024',
            projectName: 'ERP Website',
            peoples: ['/img/people1.png', '/img/people3.png']
        },
        {
            title: 'Plan to survey 80 users',
            stickers: {
                fields: [
                    'UX Research',
                    'Mobile App'
                ],
                levels: [
                    {
                        title: 'Low',
                        bg: '#8B929D'
                    }
                ]
            },
            deadline: 'September 26, 2024',
            projectName: 'ERP Website',
            peoples: ['/img/people1.png', '/img/people2.png', '/img/people3.png']
        },
        {
            title: 'Conduct analysis of Godomo\'s competitors',
            stickers: {
                fields: [
                    'UX Research',
                    'Mobile App'
                ],
                levels: [
                    {
                        title: 'Low',
                        bg: '#8B929D'
                    }
                ]
            },
            deadline: 'September 26, 2024',
            projectName: 'ERP Website',
            peoples: ['/img/people1.png']
        },
    ],
    "Paused": [
        {
            title: '3 Demo concepts for Home page',
            stickers: {
                fields: [
                    'UI Design',
                    'Website'
                ],
                levels: [
                    {
                        title: 'Medium',
                        bg: '#ED9731'
                    }
                ]
            },
            deadline: 'September 26, 2024',
            projectName: 'ERP Website',
            proccessProcent: 40,
            peoples: ['/img/people1.png', '/img/people3.png']
        },
        {
            title: 'Synthesize data from interviews and surveys',
            stickers: {
                fields: [
                    'UX Research',
                    'Mobile App'
                ],
                levels: [
                    {
                        title: 'Medium',
                        bg: '#ED9731'
                    }
                ]
            },
            deadline: 'September 26, 2024',
            projectName: 'ERP Website',
            proccessProcent: 40,
            peoples: ['/img/people1.png', '/img/people2.png', '/img/people3.png']
        }
    ]
};

const tasksType = [
    {
        title: "On Going",
        color: '#3C79D6'
    },
    {
        title: "Completed",
        color: '#55DD4A'
    },
    {
        title: "Upcoming",
        color: '#FFC123'
    },
    {
        title: "Paused",
        color: '#E84040'
    },
];

export const Tasks = () => {
    return (
        <div className="flex gap-x-[23px] w-full px-[40px]">
            {
                tasksType.map((taskType) => (
                    <div>
                        <div className="flex gap-x-[12px] items-center mb-[24px]">
                            <div className="w-[12px] h-[12px] rounded-[50%]" style={{ background: taskType.color }}></div>
                            <p className="text-[16px]">{ taskType.title }</p>
                            <p className="text-[#6C717B] text-[16px]">{ tasks[taskType.title].length }</p>
                        </div>
                        <div className="flex flex-col gap-y-[24px]">
                            {
                                tasks[taskType.title]?.map((task) => (
                                    <Task 
                                        title={task.title}
                                        description={task.description ? task.description : ''}
                                        stickers={task.stickers ? task.stickers : []}
                                        deadline={task.deadline}
                                        projectName={task.projectName}
                                        proccessProcent={task.proccessProcent}
                                        peoples={task.peoples}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}