'use client';

import { SocialIcon } from 'react-social-icons';

export const Navbar = () => {
    return (
        <nav className="text-white p-4 sm:p-4 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Code Zero</h1>
                <div>
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