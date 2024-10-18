import { useTranslation } from "react-i18next";

export const StudiesList = () => {
    const { t } = useTranslation();

    return [
        {
            startDate: t("studies.studieOne.startDate"),
            endDate: t("studies.studieOne.endDate"),
            position: t("studies.studieOne.position"),
            place: t("studies.studieOne.place"),
            description: t("studies.studieOne.description")
        },
        {
            startDate: t("studies.studieTwo.startDate"),
            endDate: t("studies.studieTwo.endDate"),
            position: t("studies.studieTwo.position"),
            place: t("studies.studieTwo.place"),
            description: t("studies.studieTwo.description")
        }
    ]
}

export default StudiesList;