import { ChatBlock, DashboardBlock, TeamTaskBlock } from "@/app/components/blocks/home";
import { ProjectBlock } from "@/app/components/blocks/home/ProjectBlock";
import { SettingBlock } from "@/app/components/blocks/home/SettingBlock";

interface IHomeScreenes {
    [key:string]: React.ReactElement;
}

export const HomeScreenes:IHomeScreenes = {
    "ChatBlock": <ChatBlock />,
    "Team TaskBlock": <TeamTaskBlock />,
    "DashboardBlock": <DashboardBlock />,
    "ProjectBlock": <ProjectBlock />,
    "SettingBlock": <SettingBlock />
}