'use client';

import { setFilterName, setFilterTypes } from "@/lib/feature/filter/filterSlice";
import { Li } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import { FilterImages } from "@/utils/filterImgs";

const filterLis = [
    { title: 'All Task' },
    { title: 'On Going' },
    { title: 'Completed' },
    { title: 'Upcoming' },
    { title: 'Paused' },
];

const filterImages = [
    {
        title: 'columnTasks',
        img: FilterImages.columnTasks,
        activeImg: FilterImages.columnTasksActive,
    },
    {
        title: 'calendar',
        img: FilterImages.calendar,
        activeImg: FilterImages.calendarActive,
    },
    {
        title: 'filter',
        img: FilterImages.filter,
        activeImg: FilterImages.filterActive,
    },
];

export const FilterBlock = () => {
    const dispatch = useDispatch();

    const filterName = useSelector((state:any) => state.filter.filterName);
    const filterType = useSelector((state:any) => state.filter.filterType);

    return (
        <div className="flex justify-between py-[32px] px-[40px]">
            <ul className="flex gap-x-[40px]">
                {
                    filterLis.map((li) => (
                        <Li 
                            title={li.title}
                            className={`font-medium text-[#6C717B] pb-[17px] ${ filterName === li.title ? 'text-[#fff] border border-[#fff] border-b-1 border-t-0 border-r-0 border-l-0' : '' }`}
                            onClick={() => dispatch(setFilterName(li.title))}
                        />
                    ))
                }
            </ul>

            <ul className="flex gap-x-[16px]">
                {
                    filterImages.map((li) => (
                        <Li
                            onClick={() => {
                                filterType === li.title 
                                    ? dispatch(setFilterTypes(''))
                                    : dispatch(setFilterTypes(li.title))
                            }}
                            className=""
                        >
                            { li.title === filterType ? li.activeImg : li.img }
                        </Li>
                    ))
                }
            </ul>
        </div>
    );
}