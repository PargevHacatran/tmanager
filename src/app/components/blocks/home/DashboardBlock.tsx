import { DealsAnalytic, TasksAnalytic } from "../home";
import { TopBar } from "./TopBar";

export const DashboardBlock = () => {
    return (
        <div>
            <TopBar />
            <div className="py-[24px] px-[40px] flex gap-[35px] flex-wrap">
                <TasksAnalytic />
                <DealsAnalytic />
            </div>
        </div>
    );
}