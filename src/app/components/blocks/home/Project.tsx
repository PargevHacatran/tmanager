import { projectImgs } from "@/utils/projectImgs";
import { Responsible } from "./Responsible";
import { ProgressBlock } from "./ProgressBlock";

interface IProject {
    createdAt: string;
    projectName: string;
    projectSpecific: string;
    progress: number;
    peoples: string[],
    projectColor: string
}

export const Project = ({ createdAt, projectName, projectSpecific, progress, peoples, projectColor }:IProject) => {
    return (
        <div className="bg-[#292C32] w-[30%] p-[16px] rounded-[16px]">
            <div className="flex justify-between">
                <p className="text-[#fff] text-[14px] font-semibold mb-[12px]">{ createdAt }</p>
                { projectImgs.settings }
            </div>
            <div>
                <h3 className="w-full text-center text-[28px] mt-[40px] font-bold ">{ projectName }</h3>
                <p className="w-full text-center text-[20px] mt-[10px] mb-[40px] text-[#6C717B]">{ projectSpecific }</p>
            </div>
            <ProgressBlock 
                procents={progress}
                barColor={projectColor}
            />
            <Responsible 
                peoples={peoples}
            />
        </div>
    );
}