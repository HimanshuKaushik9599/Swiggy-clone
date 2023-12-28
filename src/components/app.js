import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./Header";
import Body from "./Body";
import Footer from "./Footer";
    
const AppLayout=()=>{
  return(
      <>
           {<HeaderComponent />}
           {<Body />}
           {<Footer/>}
      </>
  );
};



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);