interface ITaskParams {
    title: string;
    img: React.ReactElement
}

export const TaskParams = ({ title, img }:ITaskParams) => {
    return (
        <div className="flex items-center gap-x-[8px]">
            { img }
            <p className="text-[#6C717B] text-[14px]">{ title }</p>
        </div>
    )
}