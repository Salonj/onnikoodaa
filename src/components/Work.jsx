import React from 'react'
import WorkItem from './WorkItem'

const workData = [
    {
        year: 2023,
        title: 'Varastotyöntekijä',
        employer: 'Nordic Sports Brand Oy',
        duration: '3 kuukautta',
        details:
        'Asiakkaiden palveleminen, varaston järjestely ja tilausten käsittely.'
    },
    {
        year: 2022,
        title: 'Varastotyöntekijä',
        employer: 'Kesko Oyj',
        duration: '5 kuukautta',
        details:
        'Ääniohjattu keräily, tavaroiden kuljettaminen lähetysalueille, vastaanottoalueen tilausten purkaminen ja muut varaston avustavat tehtävät.'
    },
    {
        year: 2019,
        title: 'Lasten- ja nuortenohjaaja',
        employer: 'KLVL ry, Kuuloliitto ry, Lapci ry, Kuurojen Palvelusäätiö ry',
        duration: 'keikkatyö',
        details:
        'Leikkien, pelien ja tapahtumien suunnittelu ja toteutus, sekä leiriläisten ohjaaminen eri toiminnoissa ja lasten turvallisuudesta huolehtiminen.'
    }
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
            <h1 className='text-4xl font-bold text-center text-primary-100 mb-4'>Työkokemus</h1>
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