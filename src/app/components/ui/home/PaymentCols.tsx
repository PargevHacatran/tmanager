'use client';

import { useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { StatInfo } from "./StatInfo";

interface IPaymentCol {
    mounthName: string;
    dealsCount: number;
    earnedCash: number,
    largestValues: number[];
}

export const PaymentCols = ({ mounthName, dealsCount, earnedCash, largestValues }:IPaymentCol) => {
    const dealsColRef = useRef<HTMLDivElement | null>(null);
    const cashColRef = useRef<HTMLDivElement | null>(null);
    const [showInfo, setShowInfo] = useState(false);
    const [infoPosition, setInfoPosition] = useState<{top: number, left: number} | null>(null);
    const [infoValue, setInfoValue] = useState<number | null>(null);
    const [category, setCategory] = useState<string>('');

    const getColProcent = (largestValue:number, colValue:number) => (colValue * 100) / largestValue;

    const renderInfo = () => {
        if (!showInfo || !infoValue) return null;

        return ReactDOM.createPortal(
            <StatInfo 
                top={infoPosition ? infoPosition.top : null}
                left={infoPosition ? infoPosition.left : null}
                infoValue={infoValue}
                category={category}
            />,
            document.body
        );
    };

    useEffect(() => {
        const dealsCol = dealsColRef.current;
        const cashCol = cashColRef.current;

        const handleCol = (currentCol:HTMLDivElement, heightValue:number, linstenerArguments:any[]) => {
            currentCol.addEventListener('mouseover', (e) => renderMoreInformation(e, linstenerArguments[0], linstenerArguments[1]));
            currentCol.addEventListener('mouseout', () => setInfoPosition(null));
            currentCol.style.setProperty('--h', `${heightValue}%`);
            currentCol.classList.add('col');

            return () => {
                currentCol.removeEventListener('mouseover', (e) => renderMoreInformation(e, linstenerArguments[0], linstenerArguments[1]));
                currentCol.removeEventListener('mouseout', () => setInfoPosition(null));
            }
        }

        const renderMoreInformation = (e:MouseEvent, value:number, category:string) => {
            setInfoPosition({top: e.clientY, left: e.clientX});
            setInfoValue(value);
            setShowInfo(true);
            setCategory(category);
        }

        if (dealsCol && cashCol) {
            handleCol(dealsCol, getColProcent(largestValues[0], dealsCount), [dealsCount, 'deals']);
            handleCol(cashCol, getColProcent(largestValues[1], earnedCash), [earnedCash, 'cash']);
        }

    }, [dealsCount, earnedCash, largestValues])

    return (
        <div className="flex flex-col gap-y-[10px]">
            <div className="h-[90%] flex gap-x-[10px] items-end">
                <div 
                    className="w-[25px] bg-[#FFC123] max-h-[100%]" 
                    ref={dealsColRef}    
                ></div>
                <div 
                    className="w-[25px] bg-[#7864F4] max-h-[100%]" 
                    ref={cashColRef}    
                ></div>
                { renderInfo() }
            </div>
            <p className="text-center text-[18px]">{ mounthName.split('').slice(0, 3) }</p>
        </div>
    );
}