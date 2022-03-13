import React from "react";
import Logo from "../../../assets/images/logo_eduhive.svg";
import fb from "../../../assets/images/fb.svg";
import Youtube from "../../../assets/images/youtube.svg";
import inst from "../../../assets/images/insta.svg";
import Twitter from "../../../assets/images/tw.svg";
import playSrore from "../../../assets/images/GooglePaly.svg";
import AppSrore from "../../../assets/images/App-store.svg";
import EmailIcon from "../../../assets/images/Email.svg"


const Footetr = (props) => {
    return (
        <div className="px-12 py-20 mt-24 flex-col flex lg:flex-row">

            <div>
                <div className=" flex items-center justify-center lg:justify-start" >
                    <img className="w-36 cursor-pointer" src={"https://download.blender.org/branding/blender_logo_socket.png"}/>

                </div>
                <div className="flex mt-10 items-center justify-center lg:justify-start">
                    <img className="cursor-pointer" src={fb}/>
                    <img className="ml-4 cursor-pointer" src={inst}/>
                    <img className="ml-4 cursor-pointer" src={Youtube}/>
                    <img className="ml-4 cursor-pointer" src={Twitter}/>

                </div>
                {/*<p className=" mt-9 text-base text-gray-500">© 2019 Tech Hive Limited. All Rights Reserved.</p>*/}
            </div>

            <div className="flex mt-16 lg:ml-20 lg:mt-0 md:items-center md:justify-center">

                <div>
                    <p className="text-base text-gray-500 cursor-pointer">About Us</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer" >Careers</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer" >Gallary</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer " >Blog</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer" >Featured</p>
                </div>
                <div className="ml-20 lg:ml-14">
                    <p className="text-base text-gray-500 cursor-pointer">Insights</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer" >Feedback</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer" >Support</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer" >Terms & Privacy</p>
                    <p className="text-base text-gray-500 mt-3 cursor-pointer" >Become Our Partner</p>
                </div>

            </div>

            <div className=" mt-16 lg:ml-32 lg:mt-0">
                <p className="text-base text-gray-500 text-center lg:text-left">Download Our Apps</p>

                <div className="flex mt-5 sm:ml-0 md:ml-44 lg:ml-0 xl:ml-0 2xl:ml-0 " >
                    <img className="w-32 h-11 cursor-pointer" src={playSrore}/>
                    <img className="w-32 h-11 ml-8 lg:ml-4 cursor-pointer" src={AppSrore}/>
                </div>

                <div className="flex flex-col items-center mt-10 lg:flex-row">
                    <img className="w-9 h-9 " src={EmailIcon}/>
                    <p className=" ml-2 mt-4 lg:mt-0 lg:text-xl text-base text-gray-500">Email Us: Support@Ekishi.com</p>

                </div>

            </div>


        </div>
    )
};
export default Footetr;