import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGitSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaYoutubeSquare,
    FaLinkedin

} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">ATSolutions.</h1>
                <div className="py-3">
                    <p>Tannenrauchstrasse 30</p>
                    <p>CH-8038 Zurich</p>  
                </div>

                <div className="py-3">
                    <p>+41 0782264323</p>
                    <p>info@ATsolutions.ch</p>
                </div>

                <p>More Info</p>

                <div className="flex justify-between md:w-[75%] my-6  ">
                    <FaSquareXTwitter size={25} />
                    <FaFacebookSquare size={25} />
                    <FaInstagramSquare size={25} />
                    <FaYoutubeSquare size={25} />
                    <FaLinkedin size={25} />
                </div>
            </div>

            <div className="lg:col-span-2 flex justify-between ">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Services</li>
                        <li className="py-2 text-sm">About Us</li>
                        <li className="py-2 text-sm">Insights</li>
                        <li className="py-2 text-sm">Miscellaneous</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                    </ul>
                </div>
            </div>

        </div>
        
    )
}

export default Footer