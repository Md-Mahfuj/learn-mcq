import React from "react";

import ItemList from "./itemList";

const CoursePage = (props) => {
    return (
        <div className="flex flex-col mt-24 w-full items-center justify-center"
             style={{backgroundColor:"#fbfbfa"}}
        >
            <ItemList/>

            <div className="flex w-full items-center justify-center">

                <div className="flex w-3/5 justify-between">

                    <div className="flex items-center justify-center mt-10 w-full lg:w-52 rounded-lg border-2 border-green-400 items-center py-3 cursor-pointer">
                        <p className="text-xl font-bold text-green-500	 text-center">Back</p>
                    </div>

                    <div className="flex items-center justify-center mt-10 w-full lg:w-52 bg-green-400 rounded-lg items-center py-3 cursor-pointer">
                        <p className="text-xl font-bold text-white text-center">Continue</p>
                    </div>

                </div>

            </div>

        </div>
    )
};
export default CoursePage;