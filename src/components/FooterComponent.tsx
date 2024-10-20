import { useTranslation } from "react-i18next"

export const FooterComponent: React.FC = () => {
    const { t } = useTranslation()

    return(
        <footer className="w-screen flex flex-col h-fit justify-center items-center pt-14 px-5">
            <span className="bg-isabelline w-full h-[1px] my-2"> </span>
            <h6 className="text-isabelline font-normal p-2 text-sm sm:text-base">{t("global.footer.rights")}</h6>
        </footer>
    )
}