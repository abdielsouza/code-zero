'use client';

import { SocialIcon } from 'react-social-icons';

export const Navbar = () => {
    return (
        <nav className="fixed bg-black z-10 text-white sm:px-1 md:px-1 lg:px-4 sm:scale-95 md:scale-95 lg:scale-100 md:flex md:justify-between md:items-center w-full m-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Code Zero</h1>
                <div>
                    <SocialIcon
                    url="https://wa.me/553193350829"
                    network="whatsapp"
                    bgColor="transparent"
                    fgColor="white"
                    target="_blank"
                    className="mx-2"
                    />
                    <SocialIcon
                    url="https://instagram.com/dev_engenharias"
                    network="instagram"
                    bgColor="transparent"
                    fgColor="white"
                    target="_blank"
                    className="mx-2"
                    />
                    <SocialIcon
                    url="https://github.com/abdielsouza"
                    network="github"
                    bgColor="transparent"
                    fgColor="white"
                    target="_blank"
                    className="mx-2"
                    />
                </div>
            </div>
        </nav>
    );
};
