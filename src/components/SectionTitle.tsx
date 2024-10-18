import ISectionTitle from "../interfaces/ISectionTitle"

export const SectionTitle: React.FC<ISectionTitle> = ({textNormal, textColor, py=10, textAlign="center", className}) => {
    return(
        <h1 className={`w-full text-${textAlign} text-3xl xl:text-5xl font-bold text-isabelline  ${py ? "py-"+py: "py-10"} xl:mt-0 ${className}`}>{textNormal} <span className="text-dun">{textColor}</span></h1>
    )
}
