import React from "react";



const SuccessStory = (props) => {
    return(
        <div className="flex flex-col bg-red-200 items-center justify-center rounded-t-lg ml-4 mr-4 mt-4 md:mr-0 sm:w-64 md:w-80 lg:w-96 xl:w-96 2xl:w-96">

            <img className=" w-20 h-20 mt-4 rounded-full " src={"https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/171294043_1464116690602286_781261474309050_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHoDBL8XAFZUyoTsBDcW0ORKy7b5My3Z1grLtvkzLdnWFYBQifaMdvxgECZK1PAqVYTR-3qm1cm7eLPhKWadCx_&_nc_ohc=qgANNBQHcG8AX91hNeS&_nc_ht=scontent.fdac8-1.fna&oh=00_AT9ENpXGQhwTBoEYP0eD4wbFX-WuMLtFc--irX2-eE-4lw&oe=6235CA1A"}/>
            <div className="flex  mt-3 ">
                <p className="mr-2">Md.Mahfuj</p>,
                <p className="ml-2">Dhaka</p>
            </div>

            <p className="text-justify px-4 mt-4">I want to thank my mentor Pragy Agarwal for keeping me motivated and Scaler Academy for making me believe that there is light at the end of the tunnel... Whether it is for upskilling or for a better opportunity, if you commit to this course, the learnings that you take away are worth a lifetime.</p>

            <p className="text-sm py-3 cursor-pointer text-green-900">Read full story</p>
        </div>
    )
};

export default SuccessStory;