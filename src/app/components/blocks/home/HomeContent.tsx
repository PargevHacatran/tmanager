'use client';

import { useSelector } from "react-redux";

import { HomeScreenes } from "@/utils/homeScreenes";

export const HomeContent = () => {
    const sectionName = useSelector((state:any) => state.nav.sectionName);

    return (
        <div className="pl-[302px] w-[100vw]">
            { HomeScreenes[sectionName + 'Block'] }
        </div>
    );
};