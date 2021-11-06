import React from "react";
import banner from "../../../assets/images/Banner.svg";
import weblogo from "../../../assets/images/logo_eduhive.svg";

import man from "../../../assets/images/Banner image.webp";

import Header from "./Header"


const StartLearning = () => {
    return (
        <div className="flex flex-col w-full"
        >
            <Header/>

            <div
                className=" flex flex-col items-center justify-center" style={{height:"800px",backgroundColor:'#1f1d28'}}>
                <div className="flex flex-col items-center justify-center">

                    <h1 className="flex lg:text-6xl text-4xl text-center" style={{color: '#3bbfad'}}>
                        The best way to learn to code
                    </h1>
                    <p className="mt-4 text-2xl text-white">Courses designed by experts with real-world practice</p>
                    <p className="mt-2 text-xl text-white">Join our global community. <b>It's free.</b></p>

                    <div className=" flex items-center justify-center mt-10 w-full  lg:w-52  bg-green-400 rounded-lg items-center py-3 cursor-pointer">
                           <p className="text-xl font-bold text-white text-center">Start Learning </p>
                    </div>

                </div>


            </div>
        </div>
    )
};

export default StartLearning;