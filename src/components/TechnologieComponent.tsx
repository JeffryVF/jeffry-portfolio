import ITechnologiesComponent from "../interfaces/ITechnologiesComponent"

export const TechnologiesComponent: React.FC<ITechnologiesComponent> = ({icon, p = 3, className}) => {
    return(
        <div className={`border border-dun w-fit h-fit rounded-xl ${"p-" + p} ${className}`}>
            {icon}
        </div> 
    )
}