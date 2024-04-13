import React from 'react';

const ProjectItem = ({ img, title, languages, link}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-primary-400 rounded-xl group hover:bg-gradient-to-r'>
            <img src={img} className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-primary-600 tracking-wider text-center'>
                    {title}
                </h3>
                <ul className='pb-4 pt-2 text-primary-600 text-center list-disc'>
                    {languages.map((language, index) => (
                        <li key={index} className='mx-2'>{language}</li>
                    ))}
                </ul>
                <a href={link} target='_blank'>
                    <p className='text-center p-3 rounded-lg bg-primary-400 text-primary-600 font-bold cursor-pointer text-lg'>Lisätietoa</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem;