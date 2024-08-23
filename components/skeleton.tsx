import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AppSkeleton = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-2 h-full w-full">
                <div className="w-full sm:h-52">
                    <Skeleton height={208} />
                </div>
                <div className="text-lg font-bold flex-grow">
                    <Skeleton width={`100%`} height={24} />
                </div>
                <div className="text-gray-600 flex-grow">
                    <Skeleton width={`100%`} height={18} count={3} />
                </div>
                <div className="flex justify-between items-center mt-auto text-sm gap-5">
                    <div className="w-full">
                        <Skeleton width={`100%`} height={20} />
                    </div>
                    <div className="text-red-600 cursor-pointer">
                        <Skeleton circle={true} height={28} width={28} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSkeleton;
