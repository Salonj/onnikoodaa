import React from 'react'
import backgroundImg from '../assets/kone.png'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-full object-cover object-left' src={backgroundImg}/>
            <div className='w-full h-full absolute top-0 left-0 bg-black/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-primary-100'>Onni Salomaa</h1>
                <h2 className='text-primary-100 sm:text-3xl text-2xl pt-4 flex}'>
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
                <div className='flex justify-between pt-6 max-w-[200px] w-full text-primary-600'>
                    <a href='#contact'><FaEnvelope className='cursor-pointer' size={30} /></a>
                    <a href=''><FaGithub className='cursor-pointer' size={30} /></a>
                    <a href=''><FaLinkedinIn className='cursor-pointer' size={30} /></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main