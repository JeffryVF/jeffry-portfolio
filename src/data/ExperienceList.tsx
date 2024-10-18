import { useTranslation } from "react-i18next";

export const ExperienceList = () => {
    const { t } = useTranslation();

    return [
            {
                startDate: t("experience.experienceOne.startDate"),
                endDate: t("experience.experienceOne.endDate"),
                position: t("experience.experienceOne.position"),
                place: t("experience.experienceOne.place"),
                description: t("experience.experienceOne.description")
            },
            {
                startDate: t("experience.experienceTwo.startDate"),
                endDate: t("experience.experienceTwo.endDate"),
                position: t("experience.experienceTwo.position"),
                place: t("experience.experienceTwo.place"),
                description: t("experience.experienceTwo.description")
            },
            {
                startDate: t("experience.experienceThree.startDate"),
                endDate: t("experience.experienceThree.endDate"),
                position: t("experience.experienceThree.position"),
                place: t("experience.experienceThree.place"),
                description: t("experience.experienceThree.description")
            },
        ]
}
export default ExperienceList;