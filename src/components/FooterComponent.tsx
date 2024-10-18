import { useTranslation } from "react-i18next"

export const FooterComponent: React.FC = () => {
    const { t } = useTranslation()

    return(
        <footer className="w-screen flex flex-col h-20 justify-center items-center p-10">
            <span className="border border-isabelline w-full h-px my-2 mx-2"></span>
            <h6 className="text-isabelline font-normal p-2">{t("global.footer.rights")}</h6>
        </footer>
    )
}