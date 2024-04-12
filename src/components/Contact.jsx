import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-primary-100'>Ota yhteyttä</h1>
            <form action='https://getform.io/f/nbdodrda' method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-primary-100' >Nimi</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-primary-100'>Puhelin</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone'/>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-primary-100'>Sähköposti</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-primary-100'>Viesti</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'></textarea>
                </div>
                <button className='bg-primary-100 text-primary-200 mt-4 w-full p-4 rounded-lg'>Lähetä</button>
            </form>
        </div>
    )
}

export default Contact