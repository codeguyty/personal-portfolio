import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';


function Skills() {
    return(
        <div className="max-w-4xl mx-auto py-12">
            <p className="text-2xl text-black sm:text-4xl text-center pt-4 font-bold">
                Tech I use 🧳
            </p>

        <div className="flex flex-wrap justify-center pt-2" id="tech">

            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FaReact color="#2196f3" className="mx-auto text-4xl"/>
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                   React
                </p>
            </div>

            <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                    TailwindCSS
                </p>
            </div>

            <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                    JavaScript
                </p>
            </div>

            <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <TbBrandVscode color="#60a5fa" className="mx-auto text-4xl" />
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                    VSCode
                </p>
            </div>

            <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <BsGit color="#ef4444" className="mx-auto text-4xl" />
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                    Git
                </p>
            </div>

            <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiExpress color="#475569" className="mx-auto text-4xl" />
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                    ExpressJS
                </p>
            </div>

            <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FaNodeJs color="#4ade80" className="mx-auto text-4xl" />
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                    NodeJS
                </p>
            </div>

            <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiMongodb color="#4ade80" className="mx-auto text-4xl" />
                <p className="mt-6 text-base sm:text-2xl font-semibold text-center">
                    MongoDB
                </p>
            </div>
            
            </div>
        </div>
    )
}


export default Skills;