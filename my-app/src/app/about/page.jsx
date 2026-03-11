import { SectionTitle } from '@/components/SectionTitle'
import Image from 'next/image'
import ProfilePictue from '@/app/about/pp1.jpg'
export default function About() {
    return (
        <div className='px-6 py-0 lg:max-w-6xl m-auto text-center lg:text-left lg:mt-36 my-36'>

            <div className='flex justify-between items-center flex-col-reverse lg:flex-row relative my-4 lg:my-6'>
                <div className='lg:mt-0 mt-3'>
                    <h1 className='text-2xl lg:text-4xl font-bold'>Venkata Chowdary Immanni</h1>
                    <h3 className='text-lg'>Full Stack Developer and AI Engineer</h3>
                </div>
                <div className='w-44 h-44 rounded-full overflow-hidden relative '>
                    <Image
                        src={ProfilePictue}
                        alt="Venkata Chowdary Immanni"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
            </div>

            <div className='mt-8 lg:mt-0'>
                <p className='indent-4 text-lg lg:text-xl font-light leading-relaxed text-justify'>Founding Engineer and AI-focused Full-Stack Developer with hands-on experience building AI-native B2B SaaS products. I have built end-to-end systems using Python, Next.js, React.js, Node.js, and FastAPI, while integrating modern AI frameworks like LangChain, LangGraph, and MCP servers into production workflows. My work includes architecting multi-agent automation, RAG pipelines, and vector-search driven features that improve real-world business execution. I focus on building scalable GenAI tools, clean user-centric interfaces, and reliable backend systems that move quickly from idea to production.</p>
            </div>

            <div className='mt-6 text-left flex flex-col space-y-3'>
        
                <SectionTitle sectionName={'Achivements'} customClassName='text-xl'/>
                <ul className='list-disc pl-8'>
                    <li>Secured 1st place out of 150+ participants in a competitive Frontend Challenge.</li>
                    <li>Awarded Merit Scholarship for academic performance, ranking in the top 5% with a CGPA of 9.2.</li>
                    <li>Won the Poster Design Competition among 300+ participants, with the design selected as the official fest poster.</li>
                </ul>
            </div>
        </div>
    )
}
