import React from 'react'
import ProjectItem from './ProjectItem'
import woodImg from '../assets/metsä.png'
import campImg from '../assets/nuotio.png'
import mailImg from '../assets/postimies.png'
import storageImg from '../assets/varasto.png'

const projectData = [
    {
        img: woodImg,
        title: 'WoodImg',
        languages: ['JavaScript', 'Python', 'Java']
    },
    {
        img: campImg,
        title: 'CampImg',
        languages: ['JavaScript']
    },
    {
        img: mailImg,
        title: 'MailImg',
        languages: ['Css', 'Java']
    },
    {
        img: storageImg,
        title: 'StorageImg',
        languages: ['HTML', 'Css']
    }
]

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-primary-100'>Projektit</h1>
            <p className='text-center py-8 text-primary-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus praesentium, ipsum repellendus esse quia, unde explicabo, eos ratione quos nobis quas tempore! Exercitationem, deserunt recusandae facere veniam voluptatibus dignissimos.
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