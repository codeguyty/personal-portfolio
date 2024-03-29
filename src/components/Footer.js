import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return(
        <div className='py-5 border-t-3/2'>
            <div className='flex justify-center mt-4'>

            <a className='text-xl m-1 p-1 sm:m-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-color duration-300' href='https://github.com/codeguyty'>
                <FaGithub />
                <span className='sr-only'>Github</span>
            </a>
            <a className='text-xl m-1 p-1 sm:m-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href='https://www.linkedin.com/in/tyler-moyer-5a70971a2'>
                <FaLinkedin />
                <span className='sr-only'>Linkedin</span>
            </a>
            <a className='text-xl m-1 p-1 sm:m-2 text-blue-400 hover:bg-blue-400 rounded-full hover:text-white transition-colors duration-300' href='mailto:codeguyty@icloud.com'>
                <FaEnvelope />
                <span className='sr-only'>Mail</span>
            </a>

            </div>
            <div className='flex justify-center mt-4'>
                <p className='text-black mb-4'>
                    Made with <span className='mr-2' role='link' aria-label='heart'>💙</span>by <a className='text-blue-500 hover:underline' href='mailto:codeguyty@icloud.com'>Tyler Moyer</a>
                </p>
            </div>
        </div>
    )
}

export default Footer;