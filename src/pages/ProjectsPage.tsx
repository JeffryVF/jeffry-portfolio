import { CardProjectComponent } from "../components/CardProjectComponent"
import { SectionTitle } from "../components/SectionTitle"
import { useTranslation } from "react-i18next";
import ProjectList from "../data/ProjectsList";

export const ProjectsPage: React.FC = () => {
    const { t } = useTranslation();
    const projectList = ProjectList();

    return(
        <div id="projects" className="w-screen flex flex-col justify-center items-center h-fit my-28">
            <SectionTitle textNormal={t("global.projects.titleNormal")} textColor={t("global.projects.titleColor")}/>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
                {
                    projectList.map((project, index)=> {
                        return(
                            <CardProjectComponent
                                key={index} 
                                title={project.title}
                                shortDescription={project.shortDescription}
                                about={project.about}
                                category={project.category} 
                                date={project.date}
                                icons={project.icons}
                                images={project.images} 
                            />
                        )
                    })
                }
                
            </div>
        </div>
    )
}