import { useTranslation } from "react-i18next";

// Icons
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCsharp } from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { SiDotnet } from 'react-icons/si';
import { CgFigma } from "react-icons/cg";

// Judging System
import judgingSystem0 from "../assets/projects/judging-system/judging-system-0.png";
import judgingSystem1 from "../assets/projects/judging-system/judging-system-1.png";
import judgingSystem2 from "../assets/projects/judging-system/judging-system-2.png";
import judgingSystem3 from "../assets/projects/judging-system/judging-system-3.png";
import judgingSystem4 from "../assets/projects/judging-system/judging-system-4.png";


// Simepci
import simepci0 from "../assets/projects/simepci/simepci-0.png";
import simepci1 from "../assets/projects/simepci/simepci-1.png";
import simepci2 from "../assets/projects/simepci/simepci-2.png";
import simepci3 from "../assets/projects/simepci/simepci-3.png";

// Personal Brand
import brandBook0 from "../assets/projects/personal-brand/brand-book-0.png";
import brandBook1 from "../assets/projects/personal-brand/brand-book-1.png";
import brandBook2 from "../assets/projects/personal-brand/brand-book-2.png";
import brandBook3 from "../assets/projects/personal-brand/brand-book-3.png";
import brandBook4 from "../assets/projects/personal-brand/brand-book-4.png";

export const ProjectsList = () => {
    const { t } = useTranslation();

    return[
        {
            title: t("projects.judgingSystem.title"),
            shortDescription: t("projects.judgingSystem.shortDescription"),
            about: t("projects.judgingSystem.about"),
            category: t("projects.judgingSystem.category"),
            date: t("projects.judgingSystem.date"),
            icons:[
                <FaReact className="text-dun text-2xl"/>, 
                <FaHtml5 className="text-dun text-2xl"/>, 
                <IoLogoJavascript className="text-dun text-2xl"/>, 
                <FaBootstrap className="text-dun text-2xl"/>, 
                <SiMysql className="text-dun text-2xl"/>,
                <FaGithub className="text-dun text-2xl"/>,
                <SiCsharp className="text-dun text-2xl"/>
            ],
            images: [judgingSystem0, judgingSystem1, judgingSystem2, judgingSystem3, judgingSystem4]
        },
        {
            title: t("projects.simepci.title"),
            shortDescription: t("projects.simepci.shortDescription"),
            about: t("projects.simepci.about"),
            category: t("projects.simepci.category"),
            date: t("projects.simepci.date"),
            icons: [
                <FaHtml5 className="text-dun text-2xl"/>, 
                <FaCss3Alt className="text-dun text-2xl"/>, 
                <FaBootstrap className="text-dun text-2xl"/>, 
                <SiMysql className="text-dun text-2xl"/>,
                <VscAzureDevops className="text-dun text-2xl"/>,
                <SiCsharp className="text-dun text-2xl"/>,
                <SiDotnet className="text-dun text-2xl"/>
            ],
            images: [simepci0, simepci1, simepci2, simepci3]
        },
        {
            title: t("projects.brandBook.title"),
            shortDescription: t("projects.brandBook.shortDescription"),
            about: t("projects.brandBook.about"),
            category: t("projects.brandBook.category"),
            date: t("projects.brandBook.date"),
            icons: [
                <CgFigma className="text-dun text-2xl"/>, 
            ],
            images: [brandBook0, brandBook1, brandBook2, brandBook3, brandBook4]
        }
    ]
}

export default ProjectsList;