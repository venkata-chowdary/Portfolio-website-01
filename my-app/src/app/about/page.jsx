import { SectionTitle } from '@/components/SectionTitle'
import Image from 'next/image'

export default function About() {
    return (
        <div className='px-6 py-0 lg:max-w-6xl m-auto text-center lg:text-left lg:mt-36 my-36'>

            <div className='flex justify-between items-center flex-col-reverse lg:flex-row relative my-4 lg:my-6'>
                <div className='lg:mt-0 mt-3'>
                    <h1 className='text-2xl lg:text-4xl font-bold'>Venkata Chowdary Immanni</h1>
                    <h3 className='text-lg'>Software Engineer</h3>
                </div>
                <div className='w-44 h-44 rounded-full overflow-hidden relative '>
                    <Image
                        src="/pp.jpg"
                        alt="Venkata Chowdary Immanni"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
            </div>

            <div className='mt-8 lg:mt-0'>
                <p className='indent-4 text-lg lg:text-xl font-light leading-relaxed text-justify'>Software Engineer with expertise in full-stack web development and AI-first platforms. Core contributor in building scalable web applications, integrating advanced AI tools, and automating workflows. Experienced with modern web technologies including React.js, Node.js, Next.js, and Python. Passionate about delivering user-centric, production-ready features and solving complex problems at the intersection of software engineering and AI. Known for taking ownership, continuously learning, and approaching challenges with creativity and determination.</p>
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