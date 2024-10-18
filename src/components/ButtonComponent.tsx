import IButtonComponent from "../interfaces/IButtonComponent";

export const ButtonComponent: React.FC<IButtonComponent> = ({ text, icon = null, type = "", styleType = "" }) => {
    const iconComponent = () => {
        if (styleType === "normal" && icon) {
            return (
                <span className="ml-2 content-center text-sm xl:text-xl 2xl:text-2xl">{icon}</span>
            );
        } else {
            return null;
        }
    };

    const handleType = (type: string) => {
        if (type === "submit") {
            return "submit";
        } else if (type === "reset") {
            return "reset";
        } else {
            return "button";
        }
    };

    return (
        <button
            type={handleType(type)}
            className={`flex flex-row items-center font-bold text-sm lg:text-base xl:text-base 2xl:text-lg rounded-xl w-28 xl:w-32 2xl:w-36 justify-center p-2 ${styleType === "normal" ? "text-van-dyke bg-dun hover:bg-opacity-75" : "border border-dun text-dun hover:bg-dun hover:text-van-dyke"}`}
        >
            {text} {iconComponent()}
        </button>
    );
};