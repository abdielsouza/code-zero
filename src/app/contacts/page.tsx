"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"; 
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Resend } from "resend";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SocialIcon } from "react-social-icons";

interface FormParams {
    fullname: string; email: string; request: string;
};

const formSchema = yup.object().shape({
    fullname: yup.string().nullable().required("Insira seu nome"),
    email: yup.string().email().nullable().required("Insira seu email"),
    request: yup.string().nullable().required("Insira sua requisição")
});

export default function Contacts() {

    const {toast} = useToast();

    const form = useForm<FormParams>({
        resolver: yupResolver(formSchema),
        mode: "onChange"
    });

    const handleSubmitData = (data: FormParams) => {

        toast({
            title: "Aguarde!",
            description: "Estamos enviando sua resposta..."
        });

        axios.post("/api/sendmail", data)
        .then(response => response.data)
        .then(data => {
            toast({
                title: "Sucesso!",
                description: "Seu email foi enviado!"
            });
            form.reset();
        })
        .catch(err => {
            toast({
                title: "Erro!",
                description: "Houve um erro ao enviar resposta. Se o erro persistir, faça contato via Whatsapp pelo link abaixo do formulário."
            });
            console.error(err);
        });
    };

    return (
        <div className="flex flex-col w-full justify-start items-center">
            <div className="mt-20 text-center w-[300px] lg:w-[400px]">
                <h2>Tem interesse em nossos serviços?</h2>
                <p>Faça já seu pedido e feche um orçamento conosco:</p>
            </div>
            <div className="my-10">
                <form className="space-y-8 my-4" onSubmit={form.handleSubmit(handleSubmitData)}>

                    <Label htmlFor="fullname">
                        Seu nome (completo de preferência)
                        <Input {...form.register("fullname")} type="text" className="text-black" />
                    </Label>
                    
                    <Label htmlFor="email">
                        Seu email
                        <Input {...form.register("email")} type="email" className="text-black" />
                    </Label>

                    <Label htmlFor="request">
                        Mande para nós qual é sua necessidade:
                        <Textarea {...form.register("request")} className="text-black" />
                    </Label>

                    <Button type="submit" variant="outline" className="bg-transparent border-red text-red">Submit</Button>

                </form>
            </div>
            <div className="my-10">
                <Link href="https://wa.me/553193350829" target="_blank" className="font-semibold underline glowtext-green">
                    Ou converse diretamente pelo Whatsapp clicando aqui!
                </Link>
            </div>
            <div className="my-20">
                <h2 className="text-xl font-semibold underline">Redes sociais do administrador:</h2>
                <div className="flex flex-row py-2 gap-x-2 justify-center items-center mx-auto">
                <SocialIcon
                network="github"
                url="https://github.com/abdielsouza"
                bgColor="transparent"
                color="white"
                className="drop-shadow-glowing-ghost-blue"
                />
                <SocialIcon
                network="instagram"
                url="https://instagram.com/abdielsouza988"
                bgColor="transparent"
                color="white"
                className="drop-shadow-glowing-pink-mix"
                />
                <SocialIcon
                network="telegram"
                url="https://t.me/AbdielSouza"
                bgColor="transparent"
                color="white"
                className="drop-shadow-glowing-clean-blue"
                />
                <SocialIcon
                network="whatsapp"
                url="https://wa.me/553193350829"
                bgColor="transparent"
                color="white"
                className="drop-shadow-glowing-green"
                />
                </div>
            </div>
        </div>
    );
}