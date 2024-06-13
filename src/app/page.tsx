'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Link from 'next/link';
import Loading from './loading';

export default function Home() {

  return (
    <div className="w-full h-full p-4">
      <div className="relative p-4 mt-16 text-center justify-center mx-auto items-center w-1/2 max-w-fit sm:scale-75 md:scale-95 lg:scale-100">
        <div className="relative mb-20 py-2" id="neon-title">
          <div id="title-lightbar"></div>
          <div id="title-toplayer"></div>
          <h1 className="m-auto text-5xl">Central Code Zero</h1>
        </div>
        <Avatar className="glowbox flex mx-auto my-32 w-40 h-40">
          <AvatarImage src="photo-for-avatar.jpg" alt="@shadcn"/>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div id="intro-text" className="mb-20">
          <p className="text-sm">
            Bem-vindo ao Code Zero! Me chamo Abdiel Souza e sou um desenvolvedor web fullstack. Eu construí esse ambiente
            para servir como ponte de acesso aos meus projetos seja lá onde eles estiverem hospedados. <b>Esta página ainda
            está em estágio de desenvolvimento</b> e futuramente receberá novas atualizações para atender um propósito maior.
          </p>
        </div>
        <div id="buttons-wrapper">
          <Link href="/projects" onClick={() => <Loading/>}>
            <span></span><span></span><span></span><span></span>
            Ver projetos
          </Link>
          <Link href="/aboutme" onClick={() => <Loading/>}>
            <span></span><span></span><span></span><span></span>
            Informações
          </Link>
        </div>
      </div>
      <div className="mt-6">

      </div>
    </div>
  );
}
