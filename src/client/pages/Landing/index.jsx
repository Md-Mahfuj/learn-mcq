import React from "react";
import StartLearning from "./StartLearning";
import Footetr from "./Footer";
import Course from "../Landing/course";
import CourseItem from "../../components/CourseCards";

import SuccessStory from "../../components/SuccessStory";
import ProdectModel from "../../components/ProdectModel"

import Header from "./Header"

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Header/>


      {/*<StartLearning/>*/}
      {/*<Course/>*/}

      <div className="px-4">

        <div
          className=" flex flex-col flex-wrap  mt-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          {
            ['', '', ''].map((item, index) =>
              <CourseItem/>
            )
          }
        </div>

        <div className="">
          <p className="ml-4 text-sm py-6 cursor-pointer text-green-900">Some successful entrepreneurs</p>
          <div
            className=" flex flex-col flex-wrap items-center  sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  ">
            {
              ['', '', ''].map((item, index) =>
                <SuccessStory/>
              )
            }
          </div>
        </div>


        <div className="">
          <p className="ml-4 text-sm py-6 cursor-pointer text-green-900">Some project model</p>
          <div
            className=" flex flex-col flex-wrap items-center  sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  ">
            {
              ['', '', ''].map((item, index) =>
                <ProdectModel/>
              )
            }
          </div>
        </div>

        <Footetr/>

      </div>


    </div>
  )
};
export default Landing;