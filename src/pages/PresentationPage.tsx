import imgCard from '../assets/perfil.jpg';
import { MdEmail } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { LuDownload } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { AButtonComponent } from '../components/AButtonComponent';
import resume from "../assets/pdf/Resume - English.pdf"

export const PresentationPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="h-full w-full xl:h-screen xl:w-screen flex items-center justify-center py-14 lg:14 xl:mt-0">
            <div className="grid xl:grid-cols-3 sm:grid-cols-1 items-center">
                <div className="xl:col-span-2 sm:col-span-1 xl:mr-20 flex flex-col justify-center items-center xl:items-start w-auto">
                    <h1 className="text-isabelline text-2xl xl:text-5xl 2xl:text-6xl sm:text-5xl font-bold w-fit mb-3 xl:text-left text-center">{t('global.presentation.title')} <span className="text-dun">{t('global.presentation.name')}</span><br /> 
                    {t('global.presentation.titleFinal')}<span className="text-dun">.</span>
                    </h1>
                    <p className="text-isabelline 2xl:text-3xl text-sm sm:text-2xl font-light w-fit xl:text-left text-center">{'<p>'}{t('global.presentation.phrasePartOne')}<br />{t('global.presentation.phrasePartTwo')}{'<p>'}</p>
                    <div className='mt-3 flex flex-row space-x-2 justify-center'>
                        <AButtonComponent text={t('global.presentation.buttonResume')} styleType='normal' icon={<LuDownload />}  href={resume} target={true}/>
                        <AButtonComponent text={t('global.presentation.buttonProjects')} icon={<LuDownload />}  href={"#projects"} target={false}/>
                    </div>
                </div>
                <div className='flex flex-col items-center col-span-1'>
                    <div className="w-72 my-10 xl:my-0 2xl:w-80 rounded-xl overflow-hidden shadow-2xl">
                        <img className="w-full max-h-72 xl:max-h-64 2xl:max-h-80 object-cover" src={imgCard} alt="Presentation Face"/>
                        <div className="px-6 pt-2 pb-2 bg-isabelline flex items-center justify-between">
                            <h1 className='text-van-dyke font-bold text-xl p-3 col-span-2'>{t('global.presentation.cardText')}</h1>
                            <div className='flex flex-row items-center space-x-2'>
                                <a href="#contact-me"><MdEmail className='text-[27px] 2xl:text-[35px] text-van-dyke'/></a>
                                <a href="https://www.linkedin.com/in/jeffryvalverde" target='_blank'><RxLinkedinLogo className='text-[22px] 2xl:text-[31px] text-van-dyke'/></a>
                            </div>      
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}