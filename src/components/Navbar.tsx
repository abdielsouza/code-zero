'use client';

import { SocialIcon } from 'react-social-icons';
import { Tabs, Tab } from "@nextui-org/tabs";
import MobileNavbar from './MobileNavbar';
import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="relative bg-transparent text-white sm:px-1 md:px-1 lg:px-4 py-3 md:flex md:justify-between md:items-center w-full m-0 top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className='inline-flex items-center gap-2'>
                    <Image src="/czLogo.png" quality={100} alt="" width={64} height={64}/>
                    <div className="flex flex-col max-w-fit">
                        <h1 className="text-2xl font-bold">Code Zero</h1>
                        <h2 className='text-sm'>codezero.service@gmail.com</h2>
                    </div>
                </div>
                <Tabs className='hidden lg:block'>
                    <Tab key="home" title="Início" href="/"/>
                    <Tab key="news" title="Notícias" href="/news"/>
                    <Tab key="services" title="Serviços" href="/services"/>
                    <Tab key="contact" title="Contatos" href="/contacts"/>
                </Tabs>
                <div className='lg:hidden'>
                    <MobileNavbar/>
                </div>
            </div>
        </nav>
    );
};
