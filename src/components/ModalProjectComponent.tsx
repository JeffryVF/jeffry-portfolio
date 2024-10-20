import { FaXmark } from "react-icons/fa6";
import IModalProjectComponent from '../interfaces/IModalProjectComponent';
import { EffectCards } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { TechnologiesComponent } from "./TechnologieComponent";

export const ModalProjectComponent: React.FC<IModalProjectComponent> = ({handleModal, open, icons, title, about, categorie, date, images}) => {
    return (
        <>
            {open && 
            <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-van-dyke opacity-75" aria-hidden="true"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg  md:max-w-xl lg:max-w-4xl">
                            <div className="bg-dun py-5">
                                <div className="grid grid-cols-2 gap-10 px-3">
                                    <div className="flex flex-col items-center justify-center col-span-2 lg:col-span-1 pt-5 lg:pt-0">
                                        <div className="flex items-center justify-center w-full">
                                            <Swiper
                                            effect={'cards'}
                                            grabCursor={true}
                                            modules={[EffectCards]}
                                            className="w-full h-auto px-10"
                                            >
                                                {
                                                    images.map((image, index)=>{
                                                        return (
                                                        <SwiperSlide className="flex items-center justify-items-center rounded-xl shadow-xl bg-van-dyke" key={index}>
                                                            <img src={image}  className="object-fit h-60 w-full"/>
                                                        </SwiperSlide>
                                                        )
                                                    })
                                                }
                                               
                                            </Swiper>
                                        </div>
                                        <div className="w-full flex flex-col items-center justify-center">
                                            <div className="h-full w-full flex items-center justify-center mt-5 px-10">
                                                <div className="bg-van-dyke rounded-xl w-full">
                                                    <h1 className="font-bold text-base sm:text-lg p-1 text-dun text-center">{title}</h1>
                                                </div>
                                            </div>
                                            <div className="h-full w-[21.5rem] px-10 flex items-center justify-center rounded-xl mt-1">
                                                <p className="font-bold text-sm p-1 text-van-dyke w-full text-center">{categorie} · {date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center col-span-2 lg:col-span-1 pb-5">
                                        <div className='absolute top-0 right-0 p-4'>
                                            <FaXmark onClick={() => handleModal()} className='cursor-pointer text-xl'/>
                                        </div>
                                        <div className="flex flex-col items-center justify-start h-80 overflow-y-auto space-y-3 pr-0 lg:pr-5">
                                            <div className="w-full px-10 lg:px-0">
                                                <h1 className="py-2 text-xl font-bold text-start text-van-dyke ">About</h1>
                                                <p className="text-base font-light">{about}</p>
                                            </div>
                                            <div className="w-full px-10 lg:px-0">
                                                <h1 className="py-2 text-xl font-bold w-full text-start text-van-dyke">Stack</h1>
                                                <div className="grid grid-cols-5 sm:grid-cols-8 gap-4">
                                                    {
                                                        icons.map((icon, index) => {
                                                            return (
                                                                <TechnologiesComponent className="bg-van-dyke border-none" key={index} icon={icon} p={2} />
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default ModalProjectComponent;