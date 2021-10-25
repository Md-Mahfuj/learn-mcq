import React from "react";
import banner from "../../../assets/images/Banner.svg";
import weblogo from "../../../assets/images/logo_eduhive.svg";

import man from "../../../assets/images/Banner image.webp"


const StartLearning = () => {
    return (
        <div className=" bg-contain  w-full 	"
             style={{backgroundImage: `url(${banner}`, height: '800px'}}

        >
            <nav className="" style={{backgroundColor:'#ECF0F1 '}}>
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className=" lg:flex hidden justify-between h-16">
                        <div className="flex px-2 lg:px-0">

                            <div className="flex-shrink-0 flex items-center">

                                {/*<img className="block lg:hidden h-8 w-auto"*/}
                                {/*     src={weblogo} alt="Workflow"/>*/}


                                 <img className="hidden lg:block h-8 w-auto cursor-pointer"
                                     src={weblogo}
                                     alt="Workflow"/>
                            </div>

                               <div
                                className=" hidden lg:ml-44 lg:flex lg:space-x-8  flex flex-row flex-nowrap justify-center items-center">

                                {/*Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"*/}

                                 <a href="#"
                                   className="border-transparent text-gray-500  inline-flex items-center text-2xl px-3 pt-1 border-b-2 font-semibold">
                                    Courses
                                </a>
                                 <a href="#"
                                    className="border-transparent text-gray-500  inline-flex items-center text-2xl px-3 pt-1 border-b-2 font-semibold">
                                     Blog
                                 </a>



                            </div>
                        </div>

                        {/*right large size save and account icon section*/}
                        <div className=" lg:ml-4 lg:flex lg:items-center">

                            <div>
                                <a href="#"
                                   className="lg:block hidden px-5 py-1 flex px-5 py-1 text-base font-bold text-white text-center w-28 bg-green-400 rounded-lg  rounded-md "
                                >
                                    Login
                                </a>
                            </div>
                        </div>


                    </div>


                </div>


                {/*when mobile size this section work*/}

                <div className="flex mt-5 px-4 items-center justify-between lg:hidden">
                    {/*Mobile menu button */}


                    <img className="flex h-8 "
                         src={weblogo}
                         alt="Workflow"/>

                    <a href="#"
                       className="flex bg-white border-2 border-green-400		 px-5 py-1 text-base font-bold text-green-400 text-center  rounded-lg"
                    >
                        Login
                    </a>


                </div>

            </nav>



            <div
                className=" flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">

                          <h1 className="lg:text-6xl  text-4xl" style={{color:'#3bbfad'}}>

                            The best way to learn to code

                        </h1>

                         <div className="mt-10 w-full  lg:w-52  bg-green-400 rounded-lg items-center py-3 cursor-pointer">
							 
                                                    <p className="text-xl font-bold text-white text-center">Start Learning </p>

                        </div>

                </div>


            </div>
        </div>
    )
};

export default StartLearning;