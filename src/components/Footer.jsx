import React from  'react'
import { FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
    return (
        <div class='bg-primary-200 text-primary-600 text-center py-4'>
            <hr class='my-4'></hr>
            <div class="flex justify-between items-center max-w-[1920px] mx-4">
                <div>
                    <ul class='flex'>
                        <li class='mx-4'>
                            <a href="#saavutettavuusseloste">Saavutettavuusseloste</a>
                        </li>
                        <li class='mx-4'>
                        <a href="#tietoa-minusta">Tietoa minusta</a>
                        </li>
                    </ul>
                </div>
                <div flex='flex'>
                    <p>onnikoodaa! © 2024.</p>
                </div>
                <div class='flex'>
                    <ul class='flex'>
                        <li class='mx-4'>
                            <a href="#github-link"><FaGithub class='cursor-pointer' size={30} /></a>
                        </li>
                        <li class='mx-4'>
                            <a href="#linkedin-link"><FaLinkedinIn class='cursor-pointer' size={30} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer