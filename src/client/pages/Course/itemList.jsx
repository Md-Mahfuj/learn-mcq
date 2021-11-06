import React from "react";
import dr from "../../../assets/images/dr.jpg";

const ItemList = (props) => {
  return(
      <div className="flex flex-col w-3/5  ">
          <p className="mt-4 text-3xl ">লেবু গাছের কলম করবেন যেভাবে </p>
          <p className="mt-7 text-xl leading-relaxed	">
              গাছ ও শাখা নির্বাচন: কলম করার জন্য দেড়-দুই বছর বয়সী গাছের ডাল নির্বাচন করতে হবে। বা এর বেশি বয়সী গাছের পেন্সিলের মতো মোটা ডালের মধ্যেও গুটি কলম করা যায়। মাতৃ গাছ থেকে পেন্সিলের মতো মোটা ডালকে বেছে নিতে হবে। পেন্সিলের মতো ডালটির মধ্যে একটি গিঁটের নিচে কলমটি করতে হবে।
          </p>

          <img className="flex mt-4 w-full" src={dr} style={{height:"450px"}}/>

      </div>
  )
};

export default ItemList;