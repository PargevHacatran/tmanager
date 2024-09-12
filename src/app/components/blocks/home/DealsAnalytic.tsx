import { BezieLine } from "./BezieLine";

export const DealsAnalytic = () => {
    return (
        <div className="bg-[#2A2D32] w-[475px] h-[375px] rounded-[10px]">
            <div className='border border-[#323539] border-b-1 border-t-0 border-l-1 border-r-0'>
                <p className='text-[24px] py-[16px] pl-[24px]'>Deals</p>
            </div>
            <div>
                <BezieLine />
            </div>
        </div>
    );
}