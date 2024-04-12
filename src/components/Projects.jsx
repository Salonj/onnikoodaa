import React from 'react'
import ProjectItem from './ProjectItem'
import woodImg from '../assets/metsä.png'
import campImg from '../assets/nuotio.png'
import mailImg from '../assets/postimies.png'
import storageImg from '../assets/varasto.png'
import appImg from '../assets/app.png'

const projectData = [
    {
        img: appImg,
        title: 'Portfoliosivut',
        languages: ['React', 'TailwindCSS', 'Vite', 'Html']
    },
    {
        img: mailImg,
        title: 'Tulossa',
        languages: ['Pascal']
    },
    {
        img: mailImg,
        title: 'Tulossa',
        languages: ['Pascal']
    },
    {
        img: mailImg,
        title: 'Tulossa',
        languages: ['Pascal']
    }
]

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
            <h1 className='text-4xl font-bold text-center text-primary-100'>Projektit</h1>
            <p className='text-center py-8 text-primary-600'>
                Tässä muutamia esimerkkejä projekteista, joita olen tehnyt.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                {projectData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        img={project.img}
                        title={project.title}
                        languages={project.languages}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects