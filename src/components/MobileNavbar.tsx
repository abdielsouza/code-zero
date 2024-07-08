import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export default function MobileNavbar() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu size={32}/>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-start items-center bg-black text-white">
                <div className="flex flex-col justify-center items-center mt-10">
                    <h3 className="font-bold">Code Zero</h3>
                    
                </div>
                <div className='flex flex-col justify-center items-center gap-y-4'>
                    <Link href="/">Início</Link>
                    <Link href="/news">Notícias</Link>
                    <Link href="/services">Serviços</Link>
                    <Link href="/contacts">Contatos</Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}