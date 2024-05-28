'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

export default function Home() {

  Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
  });
  
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <div className="w-full h-full p-4">
      <div className="relative p-4 mt-16 text-center justify-center mx-auto items-center md:w-1/2 w-[800px] max-w-fit md:scale-100 scale-75">
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
            para servir como ponte de acesso aos meus projetos seja lá onde eles estiverem hospedados. Esta página ainda
            está em estágio de desenvolvimento e futuramente receberá novas atualizações para atender um propósito maior.
          </p>
        </div>
        <div id="buttons-wrapper">
          <Link href="/projects">
            <span></span><span></span><span></span><span></span>
            Ver projetos
          </Link>
        </div>
      </div>
      <div className="mt-6">

      </div>
    </div>
  );
}
