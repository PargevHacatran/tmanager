interface IProgressBlock {
    procents: number;
}

export const ProgressBlock = ({ procents }:IProgressBlock) => {
    return (
        <div className="flex gap-x-[16px] items-center mt-[17px]">
            <div className="bg-[#353940] h-[6px] w-full">
                <div 
                    className="bg-[#7864F4] h-full" 
                    style={{ width: `${procents}%` }}
                >
                </div>
            </div>
            <p>{ procents }%</p>
        </div>
    )
}