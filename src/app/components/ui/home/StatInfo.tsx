interface IStatInfo {
    top: number | null;
    left: number | null;
    infoValue: number;
    category: string;
}

export const StatInfo = ({ top, left, infoValue, category }:IStatInfo) => {
    if (top && left) {
        return (
            <div 
                className="absolute min-w-[100px]" 
                style={{ 
                    top: top, 
                    left: left, 
                    zIndex: 99999,
                    transform: 'translateY(-100%)'
                }}
            >
                <div className="bg-[#fff] py-[5px] px-[20px]">
                    <p className="text-[#000]">{ category }</p>
                    <p className="text-[#101010] text-[18px]">{ infoValue }</p>
                </div>
                <div className="mt-[-1px] border-1 border-[20px] border-[#fff] border-l-transparent border-r-transparent border-b-transparent w-[20px] h-[20px]"></div>
            </div>
        );
    }
}