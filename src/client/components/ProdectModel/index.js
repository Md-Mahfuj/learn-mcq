import React from "react";


const ProdectModel = (props) => {
  return(
      <div className="flex flex-col w-96 bg-red-200 rounded-t-lg cursor-pointer ml-4 " >
          <img className="w-full  rounded-t-lg " src={"https://beautygreenbd.com/wp-content/uploads/2019/12/Rooftop-organic-Farming.jpg"} />

          <div className="flex ">
              {
                  ["","",""].map((item,index)=>
                      <div>
                          <img className=" w-24 h-16 ml-4 mt-4 mb-4 rounded-md cursor-pointer" src={"https://beautygreenbd.com/wp-content/uploads/2019/12/Rooftop-organic-Farming.jpg"} />

                      </div>
                  )
              }
          </div>




      </div>
  )
};
export default ProdectModel;



