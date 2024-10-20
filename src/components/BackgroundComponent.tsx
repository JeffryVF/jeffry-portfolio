import IBackgroundComponent from '../interfaces/IBackgroundComponent';

export const BackgroundComponent: React.FC<IBackgroundComponent> = ({startDate, endDate, position, place, description, isOne = false, isLast = false}) => {
    return(
        <div className="flex flex-row h-full w-5/6 xl:w-4/6">
            <div  className="flex flex-col px-5 justify-center items-center">
                <span className="border border-isabelline rounded-full flex items-center p-0.5">
                    <span className="rounded-full bg-dun p-2"></span>
                </span>
                <span className="w-px bg-isabelline h-full"></span>
            </div>
            <div className={`${isLast || isOne ? '' : 'mb-5'}`}>
                <h6 className="text-dun font-light text-base md:text-lg">{startDate} - {endDate}</h6>
                <h1 className="text-dun font-bold text-lg md:text-xl lg:text-2xl">{position} · {place}</h1>
                <p className="text-isabelline text-sm md:text-base">{description}</p>
            </div>
        </div>
    )
}