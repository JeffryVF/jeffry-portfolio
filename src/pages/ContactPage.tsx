import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../components/ButtonComponent"
import { SectionTitle } from "../components/SectionTitle"
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_xxt7psp';
        const templateId = 'template_hv09cyl';
        const publicKey = 'Lq2v1VIjGIPbCelC1';

        let errorToast = "";

        if (name === "" && email === "" && body === "") {
            errorToast =  t("global.contact.toast.errorGlobal") + "\n";
        }

        if(name === "" && !(name === "" && email === "" && body === "")){
            errorToast =  t("global.contact.toast.errorName") + "\n";
        }

        if(email === "" && !(name === "" && email === "" && body === "")){
            errorToast += t("global.contact.toast.errorEmail") +"\n";
        }

        if(body === "" && !(name === "" && email === "" && body === "")){
            errorToast += t("global.contact.toast.errorMessage") +"\n";
        }

        if(errorToast !== ""){
            toast.error(errorToast, {
                duration: 2500,
                position: 'top-right',
                iconTheme: {
                    primary: '#6A0D24',
                    secondary: '#F2F1EC',
                },
                style: {
                    background: '#EADEC7',
                    color: '#352526',
                },
            });
            return;
        } else {
            const templateParams = {
                to_name: 'Jeffry',
                from_name: name,
                from_email: email,
                message: body
            };
    
            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(() => {
                    setName("");
                    setEmail("");
                    setBody("");
                    toast.success(t("global.contact.toast.success"), {
                        duration: 4000,
                        position: 'top-right',
                        iconTheme: {
                            primary: '#628C8C',
                            secondary: '#F2F1EC',
                        },
                        style: {
                            background: '#EADEC7',
                            color: '#352526',
                        },
                    });
                }, (error) => {
                    console.log("Error sending the email: ", error.text);
                });
        }
    }

    return(
        <div id="contact-me" className="flex flex-col justify-center items-center h-fit py-14 w-screen">
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col justify-center items-center xl:items-end col-span-2 xl:col-span-1">
                    <div className="text-center xl:text-left w-5/6">
                        <SectionTitle textNormal={t("global.contact.titleNormal")} textColor={t("global.contact.titleColor")} py={1} textAlign="center" className="pb-2 xl:text-start"/>
                        <p className="text-isabelline text-center xl:text-left text-sm sm:text-lg">{t("global.contact.paragraph")}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center col-span-2 xl:col-span-1">
                    <form onSubmit={handleSendEmail} className="w-5/6 grid grid-cols-1">
                        <div className="grid grid-cols-2 gap-2 px-5 items-center">
                            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder={t("global.contact.formPlaceholder.name")} className="bg-dun rounded-lg p-2 placeholder:text-van-dyke placeholder:font-medium col-span-2 md:col-span-1 text-sm sm:text-base"/>
                            <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={t("global.contact.formPlaceholder.email")} className="bg-dun rounded-lg p-2  placeholder:text-van-dyke placeholder:font-medium col-span-2 md:col-span-1 text-sm sm:text-base"/>
                            <textarea name="body" value={body} onChange={(e)=> setBody(e.target.value)} placeholder={t("global.contact.formPlaceholder.message")} className="bg-dun rounded-lg p-2 h-36 placeholder:text-van-dyke placeholder:font-medium resize-none px-3 col-span-2 text-sm sm:text-base"/>
                            <div className="flex w-full col-span-2 justify-center xl:justify-start">
                                <ButtonComponent type="submit" text={t("global.contact.formPlaceholder.button")} styleType="normal" icon={<BsFillSendFill className="text-sm sm:text-base"/>}/>    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
