import React, { useState } from "react"
import { SectionTitle } from "../components/SectionTitle"
import { BackgroundComponent } from "../components/BackgroundComponent"
import { useTranslation } from "react-i18next";
import ExperienceList from "../data/ExperienceList";
import StudiesList from "../data/StudiesList";

export const BackgroundPage: React.FC = () => {
    const { t } = useTranslation();

    const [background, setBackground] = useState("Experience")

    const handleChangeBackground = () => {
        setBackground((prev) => (prev === "Experience" ? "Studies" : "Experience"));
      };
    
    const experienceList = ExperienceList(); 
    const studiesList = StudiesList();

    const handleChangeBackgroundComponents = (background: string) => {
        if(background === "Experience"){
            return (
                <>
                    {
                        experienceList.map((experience, index) => {
                            return(
                                <BackgroundComponent 
                                    key={index} startDate={experience.startDate} endDate={experience.endDate} position={experience.position} place={experience.place} description={experience.description} isLast={index === experienceList.length - 1 ? true : false}
                                />
                            )
                        })
                    }
                </>
            )
        } else {
            return(
                <>
                    {
                        studiesList.map((studie, index) => {
                            return(
                                <BackgroundComponent 
                                    key={index} startDate={studie.startDate} endDate={studie.endDate} position={studie.position} place={studie.place} description={studie.description} isLast={index === studiesList.length - 1 ? true : false}
                                />
                            )
                        })
                    }
                </>
            )
        }
    }

    return(
        <div className="w-screen flex flex-col justify-center items-center h-fit my-28">
            <SectionTitle textNormal={t('global.background.titleNormal')} textColor={t('global.background.titleColor')}/>
            <div className="rounded-xl bg-dun space-x-1 p-3 mb-5 transition-all">
                <label 
                    className={`hover:bg-isabelline p-2 px-3 rounded-xl text-van-dyke font-bold transition-all duration-300 cursor-pointer ${ background === "Experience" ? "bg-isabelline":"" }`} 
                    onClick={handleChangeBackground}
                >
                    {t('global.background.toggleExperience')}
                </label> 
                <label 
                    className={`hover:bg-isabelline p-2 px-3 rounded-xl text-van-dyke font-bold transition-all duration-300 cursor-pointer ${ background === "Studies" ? "bg-isabelline":"" }`} 
                    onClick={handleChangeBackground}
                >
                    {t('global.background.toggleStudies')}
                </label> 
            </div>
            {handleChangeBackgroundComponents(background)}
        </div>
    )
}