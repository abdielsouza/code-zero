import prisma from '@/lib/prisma';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import React from 'react';

interface ProjectCardProps {
    title: String;
    publishedAt: Date;
    updatedAt: Date;
    projectUrl: String;
    techUsed: String[];
    description: String;
}

function ProjectCardDefaultScrollArea({children}: {children: React.ReactNode}) {
    return (
        <ScrollArea className="relative flex-row overflow-x-auto">
            <div className="px-1 py-3 whitespace-nowrap overflow-x-auto">
                {children}
            </div>
            <ScrollBar orientation="horizontal"/>
        </ScrollArea>
    );
}

function ProjectCard(
    {
        title, publishedAt, updatedAt, projectUrl, techUsed, description
    }
    : ProjectCardProps) {
    return (
        <Card className="glowbox relative h-full bg-zinc-900 text-white border-red-600">
            <CardHeader>
                <CardTitle>
                    <ProjectCardDefaultScrollArea>
                        {title}
                    </ProjectCardDefaultScrollArea>
                </CardTitle>
                <CardDescription>
                    <ProjectCardDefaultScrollArea>
                        <Link href={new URL(projectUrl.toString())} target='_blank'>{projectUrl.toString()}</Link>
                    </ProjectCardDefaultScrollArea>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="inline">
                    <p className="font-bold">Tecnologias:</p>
                    <ProjectCardDefaultScrollArea>
                        {
                            techUsed.flatMap((tech) => (
                                <div className='inline-flex justify-center items-center text-center mx-1'>
                                    <p className='text-sm'>{tech.toString()}</p>
                                </div>
                            ))
                        }
                    </ProjectCardDefaultScrollArea>
                </div>
                <div className="inline">
                    <p className="font-bold">Publicado em: </p>
                    <p>{publishedAt.toLocaleDateString()}</p>
                </div>
                <div className="inline">
                    <p className="font-bold">Atualizado em: </p>
                    <p>{updatedAt.toLocaleDateString()}</p>
                </div>
                <ScrollArea className="block rounded-md border p-4 bg-zinc-800 mx-auto my-2">
                    {description}
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

export default async function ProjectCardDisplay() {

    const feed = await prisma.projectCard.findMany();

    return (
        <div id='project-card-display' className="relative">
            <Carousel dir='horizontal' opts={{
                containScroll: 'trimSnaps',
                dragThreshold: 0,
                watchDrag: false
            }} className="md:scale-100 scale-75">
                <CarouselContent className='p-5'>
                {
                    feed.map((card) => 
                        (
                            <CarouselItem draggable='false' className="mx-5">
                                <ProjectCard
                                title={card.title}
                                publishedAt={card.publishedAt}
                                updatedAt={card.updatedAt}
                                projectUrl={card.link}
                                techUsed={card.technologiesUsed}
                                description={card.description ?? "No description for this project!"}
                                />
                            </CarouselItem>
                        )
                    )
                }
                </CarouselContent>
                <CarouselPrevious className='bg-transparent border-red-600 border-4 hover:bg-red-600 miniglowbox inline-flex'/>
                <CarouselNext className='bg-transparent border-red-600 border-4 hover:bg-red-600 miniglowbox inline-flex'/>
            </Carousel>
        </div>
    );
}