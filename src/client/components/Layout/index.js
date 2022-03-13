import React from "react";
import  Header from "../../pages/Landing/Header";
import Footer from "../../pages/Landing/Footer";


const Layout = ({children}) => {
  return (
    <div className="flex flex-col w-full sm:w-full relative">
      <Header/>



      {children}
      <Footer/>


    </div>
  )

};
export default Layout;