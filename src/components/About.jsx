import React from 'react'
import meitsiImg from '../assets/minä.png'
import javaIcon from '/java.svg'
import jsIcon from '/js.svg'
import pythonIcon from '/python.svg'
import reactIcon from '/react.svg'
import htmlIcon from '/html5.svg'
import cssIcon from '/css.svg'
import gitIcon from '/git.svg'
import cplusplusIcon from '/cplusplus.svg'
import viteIcon from '/vite.svg'
import wpIcon from '/wordpress.svg'

const About = () => {
    return (
        <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
            <h1 className='text-4xl font-bold text-center text-primary-100'>Tietoa minusta</h1>
            <div className='grid sm:grid-cols-2 gap-12 my-4 pt-4'>
                <div>
                    <img src={meitsiImg} alt='Self portrait'></img>
                </div>
                <div className=''>
                    <h2 className='text-3xl font-bold text-primary-100 w-auto h-auto'>Kuka olen?</h2>
                    <p className='text-primary-600 py-4'>
                        Morjens! Olen 20-vuotias toisen vuoden ohjelmistotekniikan opiskelija Tampereelta. Olen kiinnostunut ohjelmoinnista, tietotekniikasta yleisesti ja urheilusta. Vapaa-ajallani harrastan lenkkeilyä ja kuntosalilla käymistä.
                    </p>
                    <h2 className='text-3xl font-bold text-primary-100'>Osaaminen</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 sm:gap-8 pt-8'>
                        <div className='flex items-center'>
                            <img src={javaIcon} alt='Java icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={jsIcon} alt='JavaScript icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={pythonIcon} alt='Python icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={reactIcon} alt='React icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={htmlIcon} alt='HTML icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={cssIcon} alt='CSS icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={gitIcon} alt='Git icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={cplusplusIcon} alt='C++ icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={viteIcon} alt='Vite icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                        <div className='flex items-center'>
                            <img src={wpIcon} alt='Vite icon' className='h-20 w-20 sm:h-24 sm:w-24 shadow-x bg-primary-600 rounded-xl px-2 py-2'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About