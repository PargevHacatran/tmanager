import { taskImgs } from "@/utils/taskImag";
import { Stickers, ProgressBlock } from "../home";
import { TaskParams } from "../../ui/home";
import { Responsible } from "./Responsible";

interface IStickerData {
    title: string;
    bg: string;
}

interface ITaskStickers {
    levels?: IStickerData[];
    fields: string[];
}

interface ITask {
    title: string;
    description?: string;
    stickers?: ITaskStickers;
    deadline: string;
    projectName: string;
    proccessProcent?: number;
    peoples: string[];
}

export const Task = ({ title, description, stickers, deadline, projectName, proccessProcent, peoples }:ITask) => {
    return (
        <div className="bg-[#2A2D32] max-w-[250px] p-[16px] rounded-[16px]">
            <div className="flex justify-between">
                <p className="text-[#fff] text-[14px] font-semibold mb-[12px]">{ title }</p>
                { taskImgs.taskSettingsIcon }
            </div>
            {
                description
                    ? <p className="text-[#6C717B] text-[14px]">{ description }</p>
                    : null
            }
            {
                stickers
                    ? 
                        <Stickers 
                            stickers={stickers} 
                        />
                    : null
            }   
            <div className="mt-[12px]">
                <TaskParams 
                    img={taskImgs.deadlineIcon}
                    title={deadline}
                />
                <TaskParams 
                    img={taskImgs.projectIcon}
                    title={projectName}
                />
            </div>
            {
                proccessProcent
                    ?
                        <ProgressBlock
                            procents={proccessProcent}
                        />
                    : null
            }
            <Responsible 
                peoples={peoples} 
            />
        </div>
    );
}