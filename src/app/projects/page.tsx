import Link from 'next/link';
import ProjectView from '@/components/common/ProjectView';

export default function ProjectsPage() {
    return (
        <div className="w-full h-full p-4 mt-5">
            <div className="relative p-4 mt-16 text-center justify-center mx-auto items-center md:w-1/2 w-[400px] md:scale-100 scale-75">
                <div className="mx-auto">
                    <Link href="/" className="default-glow-button bg-transparent mx-auto">
                        Voltar
                    </Link>
                </div>
                <div className='mt-32 max-h-full overflow-y-scroll scroll-smooth'>
                    <h3 className='text-center'><b>Meus Projetos</b></h3>
                    <ProjectView/>
                </div>
            </div>
        </div>
    );
}