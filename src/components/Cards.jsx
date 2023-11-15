import React from "react";
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8 uppercase">Basic</h2>
                    <p className="text-center text-4xl font-bold">199.–/mth</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Limited Access to AI Resources</p>
                        <p className="py-2 border-b mx-8">Priority Email Support</p>
                        <p className="py-2 border-b mx-8">Monthly AI Newsletter</p>
                    </div>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] text-xl">Start Trial</button>
                </div>
                <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Double} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8 uppercase">Advanced</h2>
                    <p className="text-center text-4xl font-bold">299.–/mth</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Expanded Access to AI Models and Tools</p>
                        <p className="py-2 border-b mx-8">Priority Email and Chat Support</p>
                        <p className="py-2 border-b mx-8">Exclusive Webinars and Tutorials</p>
                    </div>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] text-xl">Start Trial</button>
                </div>
                <div className="w-full  shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8 uppercase">Unlimited</h2>
                    <p className="text-center text-4xl font-bold">399.–/mth</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Full Access to All AI Resources</p>
                        <p className="py-2 border-b mx-8">24/7 Priority Support</p>
                        <p className="py-2 border-b mx-8">Custom AI Solutions and Consultation</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl">Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards