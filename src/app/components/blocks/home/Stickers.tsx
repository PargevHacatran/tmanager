import { Sticker } from "../../ui/home";

interface IStickerData {
    title: string;
    bg: string;
}

interface ITaskStickers {
    levels?: IStickerData[];
    fields: string[];
}

interface IStickers {
    stickers: ITaskStickers
}

export const Stickers = ({ stickers }: IStickers) => {
    return (
        <div className="flex gap-x-[8px] mt-[12px]">
            <div className="flex gap-x-[8px]">
                {
                    stickers.fields
                        ?
                            stickers.fields.map((stickerTitle) => (
                                <Sticker
                                    title={stickerTitle}
                                    bg="#7864F4"
                                />
                            ))
                        : null
                }
            </div>
            <div>
                {
                    stickers.levels
                        ?
                            stickers.levels.map((sticker) => (
                                <Sticker
                                    title={sticker.title}
                                    bg={sticker.bg}
                                />
                            ))
                        : null
                }</div>
        </div>
    )
}