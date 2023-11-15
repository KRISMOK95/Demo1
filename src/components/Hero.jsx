import React from "react";
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2 text-2xl">Next-level business solutions with AI & Data Analysics</p>
                <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">Make online AI Solutions.</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-3xl sm:text-2xl text-xl font-bold py-3 ">Optimize, Analytics, Personalized for </p>
                    <Typed 
                    className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 "
                    strings={['Marketing', 'Financial Insights','Automation','Decision-Making']} 
                    typeSpeed={70} 
                    backSpeed={70} 
                    loop/>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">As a Swiss pioneer in the area of ​AI integrations, we support companies in the development of business solutions with artificial intelligence.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl ">More Info</button>
            </div>
        </div>
    )
}

export default Hero