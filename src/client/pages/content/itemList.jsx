import React from "react";
import dr from "../../../assets/images/dr.jpg";

const ItemList = (props) => {

  const List=[
    {
      id:1,
      title:"লেবু গাছের কলম করবেন যেভাবে ",
      image:dr,
    }
  ];

  return (
    <div className="flex flex-col w-full px-8">





      <div>
        <p className="mt-4 text-3xl text-center ">লেবু গাছের কলম করবেন যেভাবে </p>
        <p className="mt-7 text-xl leading-relaxed	">
          গাছ ও শাখা নির্বাচন: কলম করার জন্য দেড়-দুই বছর বয়সী গাছের ডাল নির্বাচন করতে হবে। বা এর বেশি বয়সী গাছের
          পেন্সিলের মতো মোটা ডালের মধ্যেও গুটি কলম করা যায়। মাতৃ গাছ থেকে পেন্সিলের মতো মোটা ডালকে বেছে নিতে হবে।
          পেন্সিলের মতো ডালটির মধ্যে একটি গিঁটের নিচে কলমটি করতে হবে।
        </p>
        <img className="flex mt-4 w-full" src={dr} style={{height: "450px"}}/>
      </div>


      <div className="flex w-full justify-between">
        <div
          className="flex items-center justify-center mt-10 w-full lg:w-52 rounded-lg border-2 border-green-400 items-center py-3 cursor-pointer">
          <p className="text-xl font-bold text-green-500	 text-center">Back</p>
        </div>

        <div
          className="flex items-center justify-center mt-10 w-full lg:w-52 bg-green-400 rounded-lg items-center py-3 cursor-pointer">
          <p className="text-xl font-bold text-white text-center">Continue</p>
        </div>

      </div>



    </div>
  )
};

export default ItemList;