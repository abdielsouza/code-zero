"use client";

import { Bot, CodeXml, Smartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import '@/app/extra.css';

const iconStyles = "mx-auto mb-5";

const services = [
    {
        title: "Construção de Websites",
        icon: <CodeXml className={iconStyles} size={32}/>,
        description: "Realizamos construções de sites do zero (fullstack), desde o design até o server-side, utilizando as \
        melhores tecnologias e estratégias para o seu projeto.",
        additionalStyle: "glowcard-red"
    },
    {
        title: "Automação de Tarefas",
        icon: <Bot className={iconStyles} size={32}/>,
        description: "Automatizamos aquelas tarefas enormes e chatas que você geralmente faz na mão. Aqui ela se torna \
        automática, mais fácil e rápida. Isso inclui também envio de emails em massa e bots automatizados para \
        atendimento de clientes.",
        additionalStyle: "glowcard-green"
    },
    {
        title: "Manutenção de Software",
        icon: <Wrench className={iconStyles} size={32}/>,
        description: "Consertamos falhas em códigos e em sistemas como e-commerces, paǵinas institucionais, landing pages e outros \
        tipos de sistema semelhantes. Ao consertar as falhas, promovemos também a prevenção de falhas futuras no seu sistema.",
        additionalStyle: "glowcard-yellow"
    },
    {
        title: "Construção de Aplicativos Mobile",
        icon: <Smartphone className={iconStyles} size={32}/>,
        description: "Além de websites, realizamos também a construção de aplicativos para dispositivos móveis e compatível com \
        várias plataformas. Também trabalhamos com aplicações desktop.",
        additionalStyle: "glowcard-blue"
    },
];

export default function Services() {

    const titleAnimation = {
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 90
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 90,
                duration: 0.2
            }
        }
    };

    return (
        <motion.div
        className="flex flex-col w-full h-full justify-start items-center"
        initial={{opacity: 0, top: 0}}
        animate={{opacity: 1, top: 100}}
        exit={{opacity: 0, top: 0}}
        transition={{duration: 1, ease: [0.83, 0.50, 0.31, 0.20]}}
        >
            <div className="text-center">
                <motion.h1
                className="text-2xl font-bold"
                variants={titleAnimation}
                initial="hidden"
                animate="visible"
                >
                    Nossos Serviços
                </motion.h1>
                <hr className="border-white mt-3" style={{borderWidth: 1}}></hr>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 mt-10">
                {
                    services.map((service, index) => (
                        <motion.div
                        key={index}
                        className={`w-[300px] p-8 border-white ${service.additionalStyle}`} style={{borderWidth: "1px"}}
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.3, ease: "easeInOut"}}
                        >
                            {service.icon}
                            <h2>{service.title}</h2>
                            <p className="text-thin text-sm text-left mt-2">{service.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    );
}