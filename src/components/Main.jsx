import React from 'react'
import backgroundImg from '../assets/kone.png'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main' className="relative w-full h-full">
            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-10'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-primary-100'>Onni Salomaa</h1>
                    <h2 className='text-primary-100 sm:text-3xl text-2xl pt-4'>
                        <TypeAnimation
                            sequence={[
                                'Opiskelija',
                                2000,
                                'Ohjelmoija',
                                2000,
                                'Sportti-intoilija',
                                2000
                            ]}
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1.5em', display: 'inline-block', color: '#F9E082'}}
                        />
                    </h2>
                    <div className='flex justify-center pt-6 max-w-[200px] w-full text-primary-600'>
                    <a href='https://github.com/Salonj' target='_blank'><FaGithub className='cursor-pointer mx-4' size={30} /></a>
                    <a href='https://linkedin.com/in/onnisalomaa' target='_blank'><FaLinkedinIn className='cursor-pointer mx-4' size={30} /></a>
                    </div>
                </div>
            </div>
            <img className='w-full h-screen object-cover' src={backgroundImg} alt="Background"/>
        </div>
    )
}

export default Main