interface IProgressBlock {
    procents: number;
    barColor?: string;
}

export const ProgressBlock = ({ procents, barColor }:IProgressBlock) => {
    return (
        <div className="flex gap-x-[16px] items-center mt-[17px]">
            <div className="bg-[#353940] h-[6px] w-full">
                <div 
                    className={`bg-[${ barColor ? barColor : '#7864F4' }] h-full`} 
                    style={{ width: `${procents}%`, backgroundColor: barColor ? barColor : '#7864F4' }}
                >
                </div>
            </div>
            <p>{ procents }%</p>
        </div>
    )
}