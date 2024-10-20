import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';

export const AboutMePage: React.FC = () => {
    const [t] = useTranslation();

    return (
        <div className='w-screen flex flex-col items-center h-fit pb-14'>
            <SectionTitle textNormal={t('global.aboutMe.titleNormal')} textColor={t('global.aboutMe.titleColor')}/>
            <div className='flex flex-col w-5/6 md:w-4/6 xl:w-3/6 border border-dun rounded-xl'>
                <p className='px-7 pt-7 text-isabelline'>
                    {t('global.aboutMe.paragraphOne')}
                </p>
                <p className='px-7 py-3 text-isabelline'>
                    {t('global.aboutMe.paragraphTwo')}
                </p>
                <p className='px-7 pb-7 text-isabelline'>
                    {t('global.aboutMe.paragraphThree')}
                </p>
            </div>
        </div>
    )
}