import React from "react";

import ItemList from "./itemList";
import ArrowIcon from "../../../assets/images/directions.svg";
import  Layout from "../../components/Layout";
import ADs from "../../../assets/images/ads.png";

const ContentPage = (props) => {

  const SideContent = () => {
    return (
      <div className="flex flex-col bg-white mt-10">
        <p className="ml-4 border-b text-xl py-3 ">Table of Contents</p>

        {
          ['', '', '', ''].map((intex, item) =>
            <div className="flex  w-96 py-3 items-center justify-between border-b">
              <p className="ml-4">Python</p>
              <img className=" w-6 h-6 mr-4"
                   src={ArrowIcon}/>
            </div>
          )
        }


      </div>
    )
  }


  return (
    <Layout>
      <div className="flex  bg-white"
        // style={{backgroundColor: "#fbfbfa"}}
      >

        {/*left side content */}

        <div className="flex  ">
          <SideContent/>
        </div>

        {/*middle side content*/}

        <div className="mt-12">
          <ItemList/>
        </div>

        {/*right side content*/}

        <div className="w-96 mr-4">

          <img className="w-80 cursor-pointer mt-12" src={ADs}/>

          <img className="w-80 cursor-pointer mt-12" src={ADs}/>

        </div>



      </div>
    </Layout>

  )
};
export default ContentPage;