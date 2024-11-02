'use client';

import { useSelector } from "react-redux";
import { useState } from "react";

import { HomeScreenes } from "@/utils/homeScreenes";
import { Button } from "../../ui";
import { SupportWindow } from "../home";

export const HomeContent = () => {
    const sectionName = useSelector((state:any) => state.nav.sectionName);
    const [isSupportWindowOpen, setIsSupportWindowOpen] = useState(false);

    return (
        <div className="pl-[302px] w-[100vw]" id="main-container">
            { HomeScreenes[sectionName + 'Block'] }
            
            <Button 
                imgURL="/img/support-img.png"
                btnText=""
                className="fixed right-[40px] bottom-[100px]"
                imgClassName="relative w-[75px] h-[75px]"
                onClick={() => setIsSupportWindowOpen(true)}
            />

            {
                isSupportWindowOpen ? 
                    <SupportWindow 
                        closeWin={() => setIsSupportWindowOpen(false)}
                    />
                    : null
            }
        </div>
    );
};