import ISectionTitle from "../interfaces/ISectionTitle"

export const SectionTitle: React.FC<ISectionTitle> = ({textNormal, textColor, py=10, textAlign="center", className, id}) => {
    return(
        <h1 id={id}className={`w-full text-${textAlign} text-3xl xl:text-5xl font-bold text-isabelline  ${py ? "pb-"+py: "pb-10"} xl:mt-0 ${className}`}>{textNormal} <span className="text-dun">{textColor}</span></h1>
    )
}
