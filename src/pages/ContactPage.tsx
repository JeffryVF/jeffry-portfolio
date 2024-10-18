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
        <div id="contact-me" className="flex flex-col justify-center items-center h-fit mb-28 mt-36">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center w-[32rem] col-span-2 xl:col-span-1 text-center xl:text-left">
                    <SectionTitle textNormal={t("global.contact.titleNormal")} textColor={t("global.contact.titleColor")} py={1} textAlign="center" className="pb-2 xl:text-start"/>
                    <p className="text-isabelline text-center xl:text-left">{t("global.contact.paragraph")}</p>
                </div>
                <form onSubmit={handleSendEmail} className="flex flex-col justify-center items-center col-span-2 xl:col-span-1">
                    <div className="space-x-3">
                        <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder={t("global.contact.formPlaceholder.name")} className="bg-dun rounded-lg p-2 w-[11.7rem] placeholder:text-van-dyke placeholder:font-medium px-3"/>
                        <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={t("global.contact.formPlaceholder.email")} className="bg-dun rounded-lg p-2 w-[11.7rem] placeholder:text-van-dyke placeholder:font-medium px-3"/>
                    </div>
                    <textarea name="body" value={body} onChange={(e)=> setBody(e.target.value)} placeholder={t("global.contact.formPlaceholder.message")} className="my-3 bg-dun rounded-lg p-2 w-96 h-36 placeholder:text-van-dyke placeholder:font-medium resize-none px-3"></textarea>
                    <div className="flex flex-row justify-center xl:justify-start items-center xl:items-start w-full xl:px-16">
                        <ButtonComponent type="submit" text={t("global.contact.formPlaceholder.button")} styleType="normal" icon={<BsFillSendFill className="text-base"/>}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
