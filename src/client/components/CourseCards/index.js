import React from "react";

import  bookIcon from "../../../assets/images/book.svg"


const CourseItem=(props)=>{
    return (
        <div className="flex flex-row bg-green-300 items-center py-3.5 rounded cursor-pointer focus:outline-none w-11/12 mt-3 ml-4  md:w-80 lg:w-72 xl:w-96 2xl:w-96 ">
            <img className="h-16 w-16 ml-7 rounded-full bg-red-200" src={bookIcon}/>
            <p className="ml-6 font-semibold text-white ">Nature Agriculture </p>
        </div>
    )
};

export default  CourseItem;