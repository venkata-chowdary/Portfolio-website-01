import { SectionTitle } from '@/components/SectionTitle'
import Image from 'next/image'

export default function About() {
    return (
        <div className='px-6 py-0 lg:max-w-6xl m-auto text-center lg:text-left lg:mt-36 my-36'>

            <div className='flex justify-between items-center flex-col-reverse lg:flex-row relative my-4 lg:my-6'>
                <div className='lg:mt-0 mt-3'>
                    <h1 className='text-2xl lg:text-4xl font-bold'>Venkata Chowdary Immanni</h1>
                    <h3 className='text-lg'>Software Developer</h3>
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
                <p className='indent-4 text-lg lg:text-xl font-light leading-relaxed text-justify'>Hello, I’m Venkata Chowdary, a passionate Software Developer with extensive experience in building full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in designing user-centric interfaces, building responsive web applications, and delivering seamless user experiences with modern technologies. With a strong foundation in both front-end and back-end development, I am committed to crafting scalable, secure, and efficient solutions. Currently in my final year of B.Tech in Information Technology, I strive to innovate and create impactful software solutions that address real-world challenges.</p>
            </div>

            <div className='mt-6 text-left flex flex-col space-y-3'>
        
                <SectionTitle sectionName={'Achivements'} customClassName='text-xl'/>
                <ul className='list-disc pl-8'>
                    <li>Won First Prize in a poster design competition for Stepcone, demonstrating creativity.</li>
                    <li>Secured First Place in a frontend development competition, showcasing technical skills.</li>
                    <li>Received a Merit Scholarship for exceptional academic performance.</li>
                </ul>
            </div>
        </div>
    )
}