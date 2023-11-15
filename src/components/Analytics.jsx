import React from "react";
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return(
        <div className="text-white w-full  bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="text-black flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold  uppercase ">InsightForecast & PersonaCraft</p>
                    <h1 className="md:text-2xl sm:text-2xl text-xl font-bold py-2 ">Predictive Analytics with Personalized Marketing </h1>
                    <p>AI models that analyze data to provide predictive insights, aiding companies in making informed decisions. 
                        And, utilizing AI to analyze customer behavior and preferences, enabling companies to tailor marketing strategies for better engagement.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] text-xl ">Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default Analytics