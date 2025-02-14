"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SocialIcon } from 'react-social-icons';

const inspirations = [
  {
    imgPath: "/inspiration-1.jpg",
    link: "https://colorlib.com/wp/template/action/"
  },
  {
    imgPath: "/inspiration-2.jpg",
    link: "https://colorlib.com/wp/template/stellar/"
  },
  {
    imgPath: "/inspiration-3.jpg",
    link: "https://colorlib.com/wp/template/glint/"
  },
  {
    imgPath: "/inspiration-4.jpg",
    link: "https://colorlib.com/wp/template/pato/"
  }
];

const templates = [
  {
    imgPath: "/template-1.png",
    link: "https://gym-template-seven.vercel.app"
  },
  {
    imgPath: "/template-2.png",
    link: "https://robot-portfolio-template.vercel.app"
  },
];

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col w-full justify-center items-start">
      <motion.div
      className="flex flex-col justify-center items-center red-energize bg-cover w-full h-[80vh]"
      >
        <div className="mt-20 text-center lg:w-[300px]">
          <motion.h1 
          className="font-bold"
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: 1.5}}
          >
            Code Zero
          </motion.h1>
          <motion.h2
          className="text-lg font-semibold"
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: 2.0}}
          >
            Desencadeando potenciais para seu projeto
          </motion.h2>
        </div>
      </motion.div>
      <div className="flex flex-col mt-10 justify-start items-center px-4">
          <motion.div
          className="text-center w-[80%] lg:w-1/2 mt-20"
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
          viewport={{once: true}}
          >
              <h1 className="text-xl lg:text-2xl text-bold">O que é a CodeZero?</h1>
              <p className="text-sm">
                  A CodeZero é uma prestadora de serviços recém-formada, focada na construção de websites,
                  automação de tarefas e manutenção de software. A CodeZero não apenas
                  foca em trazer soluções para seus clientes como também se dedica a entregar um serviço justo,
                  preciso e com a qualidade que o cliente merece!
              </p>
          </motion.div>

          

          <div className='mb-20'>
            <h2 className="text-center font-bold">Modelos recentes</h2>
            <Carousel className="w-[300px] h-[200px] lg:w-[500px] lg:h-[400px] mt-10">
              <CarouselContent>
                {
                  templates.map((template, index) => (
                    <CarouselItem key={index}>
                      <div className="p-4 mx-auto">
                        <Image src={template.imgPath} alt="Error on loading" quality={100} width={300} height={200} className="w-full h-full"/>
                        <Link href={template.link} target='_blank'>{template.link}</Link>
                      </div>
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
              <CarouselPrevious className='hidden lg:block'/>
              <CarouselNext className='hidden lg:block'/>
            </Carousel>
          </div>

          <div className="mb-20">
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
      <footer className="flex flex-col w-full h-[100px] justify-start items-center bg-zinc-950">
        <p className="mt-5">Copyright &copy; CodeZero</p>
      </footer>
    </div>
  );
}
