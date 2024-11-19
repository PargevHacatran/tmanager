import { PaymentCols } from "../../ui/home/PaymentCols";

export const PaymentAnaltic = () => {
    const paymentAnalytic = [
        {
            mounthName: "January",
            dealsCount: 1,
            earnedCash: 9567.67,
        },
        {
            mounthName: "February",
            dealsCount: 10,
            earnedCash: 20567.67,
        },
        {
            mounthName: "March",
            dealsCount: 21,
            earnedCash: 60567.67,
        },
        {
            mounthName: "April",
            dealsCount: 36,
            earnedCash: 320567.67,
        },
        {
            mounthName: "May",
            dealsCount: 8,
            earnedCash: 89567.67,
        },
        {
            mounthName: "Jun",
            dealsCount: 55,
            earnedCash: 100597.67,
        },
        {
            mounthName: "July",
            dealsCount: 11,
            earnedCash: 12057.98,
        },
        {
            mounthName: "August",
            dealsCount: 10,
            earnedCash: 76534.67,
        }, 
        {
            mounthName: "September",
            dealsCount: 3,
            earnedCash: 98765.67,
        },
        {
            mounthName: "October",
            dealsCount: 10,
            earnedCash: 83592.67,
        },
        {
            mounthName: "November",
            dealsCount: 12,
            earnedCash: 254820.67,
        },
        {
            mounthName: "December",
            dealsCount: 22,
            earnedCash: 120567.67,
        },
    ];

    const sortedByDeals = [...paymentAnalytic].sort((a, b) => a.dealsCount > b.dealsCount ? 1 : -1);
    const sortedByEarned = [...paymentAnalytic].sort((a, b) => a.earnedCash > b.earnedCash ? -1 : 1);
    const largestValues = [sortedByDeals.reverse()[0].dealsCount, sortedByEarned[0].earnedCash];
    
    return (
        <div className="relative bg-[#2A2D32] w-[985px] rounded-[10px] flex flex-col">
            <div className='border border-[#323539] border-b-1 border-t-0 border-l-1 border-r-0'>
                <p className='text-[24px] py-[16px] pl-[24px]'>Payments</p>
            </div>
            <div className="flex gap-x-[20px] py-[16px] px-[24px]">
                <div className='flex gap-x-[8px] items-center'>
                    <div className='bg-transparent border-2 border-[#FFC123] w-[10px] h-[10px] rounded-[50%]'></div>
                    <p>Deals</p>
                </div>
                <div className='flex gap-x-[8px] items-center'>
                    <div className='bg-transparent border-2 border-[#7864F4] w-[10px] h-[10px] rounded-[50%]'></div>
                    <p>Cash</p>
                </div>
            </div>
            <div className="relative bg-[#2A2D32] w-[985px] min-h-[300px] rounded-[10px] flex justify-between py-[16px] px-[24px]">
                {
                    paymentAnalytic.map((payment) => (
                        <PaymentCols 
                            key={btoa(payment.mounthName)}
                            mounthName={payment.mounthName}
                            earnedCash={payment.earnedCash}
                            dealsCount={payment.dealsCount}
                            largestValues={largestValues}
                        />
                    ))
                }
            </div>
        </div>
    );
}
