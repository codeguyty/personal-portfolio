import React from 'react';
import profile from '../images/tyler.jpeg';
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Card() {
    return(
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-2'>
                <div className=''>
                <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt='profile face' />
                </div>

                <div className='text-center mt-5'>
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                        Tyler Moyer
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        Full-Stack Developer
                    </p>

                    <div className='flex align-center justify-center mt-4'>

                    <a className='text-xl m-1 p-1 sm:m-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-color duration-300' href='https://github.com/codeguyty'>
                        <FaGithub />
                        <span className='sr-only'>Github</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300' href='https://github.com/codeguyty'>
                        <FaFacebook />
                        <span className='sr-only'>FaceBook</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href='https://github.com/codeguyty'>
                        <FaLinkedin />
                        <span className='sr-only'>Linkedin</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 text-sky-400 hover:bg-sky-400 rounded-full hover:text-white transition-colors duration-300' href='https://github.com/codeguyty'>
                        <FaEnvelope />
                        <span className='sr-only'>Mail</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
