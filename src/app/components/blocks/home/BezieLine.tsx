'use client';

import React, { useEffect, useRef } from "react";

const data = [50, 45, 33, 15, 54, 13, 20, 17, 58, 10, 48, 33, 50, 39, 19, 26, 55, 18, 51, 33, 31, 23, 27, 28, 32, 37, 59, 55, 90, 100, 87];

export const BezieLine = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const date: any = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear(); // Исправленный расчет года
    const currentDate = new Date(currentYear, currentMonth, 0);
    const labels = [...Array(currentDate.getDate())].map((_, i) => i + 1); // Количество дней в месяце

    const drawBezieLine = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx:any = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const padding = 0; 

        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.strokeStyle = "transparent";
        ctx.stroke();

        const maxData = Math.max(...data);
        const xStep = (width - 2 * padding) / (labels.length - 1);
        const yStep = (height - 2 * padding) / maxData; 

        const points = data.map((value, index) => {
            const x = padding + index * xStep;
            const y = height - padding - value * yStep;
            return { x, y };
        });

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 0; i < points.length - 1; i++) {
            const current = points[i];
            const next = points[i + 1];

            const controlX1 = (current.x + next.x) / 2;
            const controlY1 = current.y;
            const controlX2 = (current.x + next.x) / 2;
            const controlY2 = next.y;

            ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, next.x, next.y);
        }

        ctx.lineTo(points[points.length - 1].x, height - padding);

        ctx.lineTo(points[0].x, height - padding);

        ctx.closePath();

        ctx.fillStyle = "rgba(120, 100, 244, 0.2)";
        ctx.fill();

        ctx.strokeStyle = '#7864F4';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = 400;
            canvas.height = 220;
            drawBezieLine();
        }
    }, []);

    return (
        <div className="relative h-[225px] ml-[24px] mt-[24px] mr-[16px] flex gap-x-[12px] items-center">
            <div className="relative top-0 w-full h-full pb-[5px]">
                <div className="absolute bottom-[95%] w-full flex gap-x-[12px] items-center">
                    <p>100</p>
                    <div className="w-full border border-dased border-[#6C717B] opacity-50 border-t-1 border-l-0 border-r-0 border-b-0"></div>
                </div>
                <div className="absolute bottom-[70%] w-full flex gap-x-[12px] items-center">
                    <p>75</p>
                    <div className="w-full border border-dased border-[#6C717B] opacity-50 border-t-1 border-l-0 border-r-0 border-b-0"></div>
                </div>
                <div className="absolute bottom-[45%] w-full flex gap-x-[12px] items-center">
                    <p>50</p>
                    <div className="w-full border border-dased border-[#6C717B] opacity-50 border-t-1 border-l-0 border-r-0 border-b-0"></div>
                </div>
                <div className="absolute bottom-[20%] w-full flex gap-x-[12px] items-center">
                    <p>25</p>
                    <div className="w-full border border-dased border-[#6C717B] opacity-50 border-t-1 border-l-0 border-r-0 border-b-0"></div>
                </div>
                <div className="absolute bottom-[0%] w-full flex gap-x-[12px] items-center">
                    <p>0</p>
                    <div className="w-full border border-dased border-[#6C717B] opacity-50 border-t-1 border-l-0 border-r-0 border-b-0"></div>
                </div>
            </div>
            <div className="absolute ml-[24px] w-[94%] h-full top-0">
                <canvas id="canvas" ref={canvasRef} className="w-full h-full z-[100]"></canvas>
            </div>
        </div>
    );
}
