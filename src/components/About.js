import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';


function About() {
    return(
        <div className='max-w-4xl mt-20 mx-auto'>
            <p className='text-2xl text-black md:text-4xl font-bold text-center'>
                Hey 👋
            </p>
            <p className='text-base sm:text-xl text-gray-600 leading-relaxed mt-4 text-center'>
            I'm an Enthusiastic and motivated Junior Full Stack React and JavaScript Developer with a passion for the FrontEnd and Design eager to kick-start a rewarding career in Software Development.
            </p>

            <ScrollIntoView selector = '#tech'>
                <div className='flex justify-center mx-auto p-20 '>
                    <FaChevronDown className='animate-bounce max-auto text-3xl text-blue-500'/>

                </div>
            </ScrollIntoView>
    


        </div>


    )
}

export default About;