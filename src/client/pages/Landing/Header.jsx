import React from "react";
import weblogo from "../../../assets/images/logo_eduhive.svg";


const Header = () => {
  return (
    <div style={{}}>
      <nav className="bg-blue-200"
        // style={{backgroundColor: '#f8faf9'}}
      >
        <div className="mx-auto px-2 sm:px-4 lg:px-8">
          <div className=" lg:flex hidden justify-between h-16">
            <div className="flex px-2 lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto"
                     src={"https://download.blender.org/branding/blender_logo_socket.png"}
                     alt="Workflow"/>
                <img className="hidden lg:block h-8 w-auto cursor-pointer"
                     src={"https://download.blender.org/branding/blender_logo_socket.png"}
                     alt="Workflow"
                />
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
                <a href="#"
                   className="border-transparent text-gray-500  inline-flex items-center text-2xl px-3 pt-1 border-b-2 font-semibold">
                  +Resources
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

        <div className="flex py-3 px-4 items-center justify-between lg:hidden">
          {/*Mobile menu button */}


          <img className="flex h-8 "
               src={"https://download.blender.org/branding/blender_logo_socket.png"}
               alt="Workflow"
          />
          <a href="#"
             className="flex bg-white border-2 border-green-400 px-5 py-1 text-base font-bold text-green-400 text-center  rounded-lg"
          >
            Login
          </a>
        </div>

      </nav>

    </div>
  )
};

export default Header;