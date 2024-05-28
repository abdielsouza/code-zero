import Link from 'next/link';
import ProjectCardDisplay from '@/components/ProjectCardDisplay';

export default function ProjectsPage() {
    return (
        <div className="w-full h-full p-4">
            <div className="relative p-4 mt-16 text-center justify-center mx-auto items-center md:w-1/2 w-[400px] md:scale-100 scale-75">
                <div className="mx-auto">
                    <Link href="/" className="default-glow-button bg-transparent mx-auto">
                        Voltar
                    </Link>
                </div>
                <div className='mt-32'>
                    <ProjectCardDisplay/>
                </div>
            </div>
        </div>
    );
}