import { Button } from "../../ui";
import { Project } from "./Project";

const projects = [
    {   
        createdAt: 'July 5, 2020',
        projectName: 'WireMan',
        projectSpecific: 'Web Application',
        progress: 90,
        peoples: ['/img/people1.png', '/img/people2.png'],
        projectColor: '#E84040'
    },
    {   
        createdAt: 'August 6, 2020',
        projectName: 'GoodDuck',
        projectSpecific: 'Design',
        progress: 30,
        peoples: ['/img/people1.png', '/img/people2.png', '/img/people2.png'],
        projectColor: '#3C79D6'
    },
]

export const ProjectsList = () => {
    return (
        <div className="flex gap-x-[40px] px-[40px] py-[24px]">
            {
                projects.map((project) => (
                    <Project 
                        key={btoa(project.projectName)}
                        createdAt={project.createdAt}
                        projectName={project.projectName}
                        projectSpecific={project.projectSpecific}
                        progress={project.progress}
                        peoples={project.peoples}
                        projectColor={project.projectColor}
                    />
                ))
            }
            <Button
                className="bg-[#292C32] w-[30%] p-[16px] rounded-[16px]"
                btnText={(
                    <p className="text-[72px] flex flex-col gap-y-[10px]">
                        <span>+</span>
                        <span className="text-[22px] text-[#6C717B]">Добавить проект</span>
                    </p>
                )}
                onClick={() => console.log()}
            />
        </div>
    );
}