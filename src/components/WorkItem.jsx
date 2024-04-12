import React from 'react'

const WorkItem = ({year, title, employer, duration, details}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-primary-600'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-primary-600 rounded-full mt-1.5 -left-1.5 border-primary-600' />
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-primary-600 bg-primary-400 rounded-md'>{year}</span>
                    <span className='text-lg font-semibold text-primary-600'>{title}</span>
                    <span className='my-1 text-sm font-normal leading-none text-primary-300'>{duration}</span>
                </p>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm text-primary-600 mt-2'>{employer}</p>
                <p className='text-primary-600'>{details}</p>
            </li>
        </ol>
    )
}

export default WorkItem