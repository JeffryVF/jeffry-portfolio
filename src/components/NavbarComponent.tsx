import { useState } from "react";
import imgLogo from "../assets/jeffry-logo.svg";
import { useTranslation } from "react-i18next";

export const NavbarComponent: React.FC = () => {
    const [textLanguage, setTextLanguage] = useState("es");
    const { i18n } = useTranslation();

    const handleChangeLanguage = () => {
        setTextLanguage(textLanguage === "en" ? "es" : "en");
        i18n.changeLanguage(textLanguage);
    };

    return (
        <nav className="w-full flex flex-row justify-between items-center sticky xl:fixed h-16 px-20 backdrop-blur-md z-50">
            <img className="xl:w-12 w-10" src={imgLogo} alt="Logo Jeffry" />
            <a className="text-isabelline text-2xl font-light cursor-pointer" onClick={handleChangeLanguage}>{textLanguage.toUpperCase()}</a>
        </nav>
    );
};
