import React from 'react'
import WorkItem from './WorkItem'

const workData = [
    {
        year: 2023,
        title: 'Varastotyöntekijä',
        employer: 'Nordic Sports Brand Oy',
        duration: '3 kuukautta',
        details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.'
    },
    {
        year: 2022,
        title: 'Varastotyöntekijä',
        employer: 'Kesko Oyj',
        duration: '5 kuukautta',
        details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.'
    },
    {
        year: 2019,
        title: 'Lasten- ja nuortenohjaaja',
        employer: 'KLVL ry, Kuuloliitto ry, Lapci ry, Kuurojen Palvelusäätiö ry',
        duration: 'keikkatyö',
        details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.'
    }
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-primary-100'>Work</h1>
            {workData.map((item, index) => (
                <WorkItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    employer={item.employer}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Work