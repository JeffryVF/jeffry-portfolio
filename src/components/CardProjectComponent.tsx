import { TechnologiesComponent } from "./TechnologieComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

import ICardProjectComponent from "../interfaces/ICardProjectComponent";
import { useState } from "react";
import ModalProjectComponent from "./ModalProjectComponent";

export const CardProjectComponent: React.FC<ICardProjectComponent> = ({ title, shortDescription, icons, about, category, date, images}) => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen( open ? false : true);
    }

    return(
        <>
        <div>
        <div  onClick={()=>setOpen(true)} className="relative flex flex-col bg-white shadow-sm border border-dun rounded-xl w-80 h-full group hover:bg-dun cursor-pointer">
                <div className="relative h-40 mx-3 mt-3 overflow-hidden text-white rounded-md">
                    <img src={images[0]} className="border border-dun rounded-xl h-full w-full object-cover" />
                </div>
                <div className="px-4 pt-4">
                    <div className="flex items-center mb-2">
                        <h6 className="text-dun text-xl font-semibold group-hover:text-van-dyke">
                            {title}
                        </h6>
                    </div>
                    
                    <p className="text-isabelline leading-normal font-light group-hover:text-van-dyke h-12 overflow-scroll">{shortDescription}</p>
                </div>
                    <div className="group m-3 inline-flex flex-wrap justify-start items-start gap-2">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            className="hover:cursor-grab w-full"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            modules={[Autoplay]}
                            >
                                {
                                icons && icons.map((icon, index)=> {
                                    return (
                                        <SwiperSlide className="flex justify-center items-center" key={index}>
                                            <TechnologiesComponent className="group-hover:bg-van-dyke group-hover:border-van-dyke" icon={icon} p={2}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
            </div>  
            <ModalProjectComponent 
            handleModal={handleModal} 
            open={open} icons={icons} 
            title={title} 
            about={about}
            categorie={category}
            date={date}
            images={images}
            />
        </div>
        </>
    )
}