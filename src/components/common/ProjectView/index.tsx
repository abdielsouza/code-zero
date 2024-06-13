import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from '@/components/ui/label';
import { Badge } from "@/components/ui/badge";
import { cookies } from 'next/headers';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

// Supabase Project Password: ZeroWatch2745

export default async function ProjectView() {

    const cookieStore = cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                  return cookieStore.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                  try {
                    cookieStore.set({ name, value, ...options })
                  } catch (error) {
                    // The `set` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                  }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: '', ...options })
                    } catch (error) {
                        // The `delete` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    );

    const { data, error } = await supabase.from("projects").select();

    return (
        <Accordion type='single' collapsible className='w-full'>
            {
                data && data.length > 0 ?
                data!.map((info, index) => (
                    <AccordionItem key={index.toString()} value={index.toString()}>
                        <AccordionTrigger>{info.title}</AccordionTrigger>
                        <AccordionContent className='text-justify leading-5'>
                            <Label className='font-normal my-1'><b>Atualização:</b> {info.last_update}</Label>
                            <br/>
                            <Label className='font-normal my-1'>
                                <b>Status: </b>
                                {
                                    info.project_status == 'Em Desenvolvimento' ?
                                    <Badge className="bg-yellow-500 text-white">{info.project_status}</Badge>
                                    : info.project_status == 'Concluído' ?
                                    <Badge className="bg-green-500 text-white">{info.project_status}</Badge>
                                    : <Badge className="bg-red-600 text-white">{info.project_status}</Badge>
                                }
                            </Label>
                            <br/>
                            <Label className='font-normal my-1'><b>Link do projeto:</b> {(<a href={info.link} className='underline text-blue-400'>{info.link}</a>)}</Label>
                            <br/>
                            <Label className='font-normal my-3'>
                                <b>Tech Stack: </b>
                                <div className="inline-grid grid-cols-5 gap-2 py-5">
                                    {
                                        info.techstack.map((tech: string) => (
                                            <Badge>{tech}</Badge>
                                        ))
                                    }
                                </div>
                            </Label>
                            <br/>
                            <Label className='font-normal my-1'><b>Descrição:</b> {info.description}</Label>
                        </AccordionContent>
                    </AccordionItem>
                ))
                :
                error ?
                <div className=' text-white'>
                    <p><b>Error Code:</b> {error.code}</p>
                    <p><b>Error Message:</b> {error.message}</p>
                    <p><b>Details:</b> {error.details}</p>
                </div>
                :
                <div className=' text-white'>
                    No data to display!
                </div>
            }
        </Accordion>
    );
}