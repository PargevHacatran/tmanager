import { ChatBlock, DashboardBlock, TeamTaskBlock } from "@/app/components/blocks/home";

interface IHomeScreenes {
    [key:string]: React.ReactElement;
}

export const HomeScreenes:IHomeScreenes = {
    "ChatBlock": <ChatBlock />,
    "Team TaskBlock": <TeamTaskBlock />,
    "DashboardBlock": <DashboardBlock />
}