import { useSelector } from "react-redux";
import { Input } from "../../ui";
import Image from "next/image";

export const TopBar = () => {
    const sectionName = useSelector((state:any) => state.nav.sectionName);
    
    return (
        <div className="py-[24px] px-[40px] flex justify-between w-full items-center border border-[#323539] border-b-1 border-t-0 border-l-0 border-r-0">
            <div>
                <h1 className="text-[32px] font-medium">{ sectionName }</h1>
            </div>
            <div className="flex items-center gap-x-[24px]">
                <Input
                    type="text"
                    name="searchField"
                    placeholder="Search"
                    className="bg-transparent text-[#6C717B] p-0 h-[16px] outline-none"
                    labelClassName="flex flex-row-reverse bg-[#2A2D33] py-[12px] px-[16px] rounded-[16px] gap-x-[11px] items-center"
                    imgClassName="relative w-[24px] h-[24px]"
                    onChange={() => {}}
                    imgURL="/img/search.png"
                />
                <div className="relative w-[48px] h-[48px]">
                    <Image 
                        layout="fill"
                        src="/img/user.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}