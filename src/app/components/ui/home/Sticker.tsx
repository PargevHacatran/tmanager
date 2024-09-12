interface ISticker {
    title: string;
    bg: string;
}

export const Sticker = ({ title, bg }:ISticker) => {
    return (
        <div 
            className={`px-[6px] py-[2px] text-[#fff] text-[10px] rounded-[100px]`} 
            style={{ backgroundColor: bg }}
        >
            <p>{ title }</p>
        </div>
    )
}