import { FaReact } from "react-icons/fa";
import { TechnologiesComponent } from "../components/TechnologieComponent";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { SiCplusplus } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { SiDotnet } from 'react-icons/si';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

export const TechnologiesPage: React.FC = () => {
    return(
        <div className="flex justify-center items-center h-fit my-28">
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                className="hover:cursor-grab w-5/6"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<FaReact className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<FaHtml5 className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<FaCss3Alt className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<IoLogoJavascript className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<FaBootstrap className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<SiMysql className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<GrOracle className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<FaGithub className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<SiCplusplus className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<SiCsharp className="text-dun text-5xl"/>}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <TechnologiesComponent icon={<SiDotnet className="text-dun text-5xl"/>}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}