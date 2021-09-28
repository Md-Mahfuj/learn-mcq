import React from "react";
import StartLearning from "./StartLearning";
import Footetr from "./Footer";
import Course from "../Landing/course"


const Landing =()=>{
    return(
        <div className="flex flex-col">
            <StartLearning/>
            <Course/>
            <Footetr/>
        </div>
    )
};
export default Landing;