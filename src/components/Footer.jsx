import React from  'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-primary-200 text-primary-600 text-center py-10'>
        <hr className='my-4'></hr>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-[1920px] mx-4">
            <div className="mb-4 sm:mb-0">
                <ul className='flex flex-wrap justify-center sm:justify-start'>
                    <li className='mx-2 sm:mx-4'>
                        <a href="#saavutettavuusseloste">Saavutettavuusseloste</a>
                    </li>
                    <li className='mx-2 sm:mx-4'>
                        <a href="#tietoa-sivustosta">Tietoa sivustosta</a>
                    </li>
                </ul>
            </div>
            <div className="mb-4 sm:mb-0">
                <p>onnikoodaa! © 2024.</p>
            </div>
            <div>
                <ul className='flex'>
                    <li className='mx-2 sm:mx-4'>
                        <a href='https://github.com/Salonj' target='_blank'><FaGithub className='cursor-pointer' size={30} /></a>
                    </li>
                    <li className='mx-2 sm:mx-4'>
                        <a href='https://linkedin.com/in/onnisalomaa' target='_blank' ><FaLinkedinIn className='cursor-pointer' size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    )
}

export default Footer