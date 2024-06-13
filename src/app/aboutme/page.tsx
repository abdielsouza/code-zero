import React from "react";
import Link from 'next/link';

export default function AboutMePage() {
    return (
        <div className="w-full h-full p-4 mt-5">
            <div className="relative p-4 mt-16 text-center justify-center mx-auto items-center md:w-1/2 w-[400px] md:scale-100 scale-75">
                <div className="mx-auto">
                    <Link href="/" className="default-glow-button bg-transparent mx-auto">
                        Voltar
                    </Link>
                </div>
                <div className='mt-32 overflow-y-scroll'>
                    <h3 className='text-center'><b>Sobre o Desenvolvedor</b></h3>
                    <p className='text-justify mb-5'>
                        Me chamo Abdiel Souza e sou desenvolvedor de software há bastante tempo (cerca de 5 anos).
                        Eu venho da área
                        de aplicações desktop e scripting para automação de tarefas, tive muitas experiências com
                        Python e C++. Mais recentemente, tenho aprimorado conhecimentos sobre desenvolvimento web
                        e atualmente estou focado nessa área. Apesar de possuir uma certa especialidade em
                        frameworks como NextJS, Django, Phoenix e Flask, eu sou autodidata e posso aprender uma
                        grande parte de outras ferramentas com facilidade, pois estou sempre disposto a estudar
                        e aprender coisas novas. Estou buscando publicar mais coisas no Github para uso.
                    </p>
                    <h3 className='text-center'><b>Sobre a página</b></h3>
                    <p className='text-justify'>
                        A página do Code Zero ainda está em estágio inicial de desenvolvimento e está sendo feita
                        em cima do framework NextJS. Code Zero tem o propósito de, futuramente, ser uma plataforma
                        de ensino para curiosos e iniciantes na programação, seja desenvolvimento web ou em alguma
                        outra área específica. Isso será trabalhoso, mas creio que irei conseguir dar bons passos
                        com isso quando eu tiver mais apoio. Até o momento, essa página é apenas um portfólio.
                    </p>
                </div>
            </div>
        </div>
    );
}