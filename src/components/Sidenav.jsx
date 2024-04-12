import React, {useState} from 'react'
import { FaHamburger, FaUser, FaEnvelope, FaProjectDiagram, FaBriefcase, FaHome, FaSuitcase} from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
const Sidenav = () => {
    const [nav, setNav] = useState(false)
    let icon = 'AiOutlineMenu'
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            {
                nav ? (
                    <FaXmark size={40} onClick={handleNav} className='absolute top-4 right-4 z-[99] text-white md:hidden'/>
            ) : (
                    <FaHamburger size={40} onClick={handleNav} className='absolute top-4 right-4 z-[99] text-white md:hidden'/>
            
            )}
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-primary-200/80 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaHome size={20} />
                            <span className='pl-4'>Etusivu</span>
                        </a>
                        <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaUser size={20} />
                            <span className='pl-4'>Tietoa minusta</span>
                        </a>
                        <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaBriefcase size={20} />
                            <span className='pl-4'>Työkokemus</span>
                        </a>
                        <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaProjectDiagram size={20} />
                            <span className='pl-4'>Projektit</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaEnvelope size={20} />
                            <span className='pl-4'>Ota yhteyttä</span>
                        </a>
                    </div>
                )
                : (
                    ''
                )
            }
            <div className='md:block hidden fixed top-[25%] z-[99]'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaHome size={20} />
                    </a>
                    <a href="#about" className='rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaUser size={20} />
                    </a>
                    <a href="#work" className='rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaBriefcase size={20} />
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaProjectDiagram size={20} />
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg bg-primary-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav