import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import About from "./AboutUs.js";
import Errorpage from "./Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Contact.js";
import RestaurantMenus from "./RestaurantMenu.js";
import Myprofile from "./profile.js";
import { Provider, useDispatch } from "react-redux";
import appStore from "../../Utils/appStore.js";
import Cart from "./Cart.js";
import Login from "./Login.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/firebase.js";
import { addUser, removeUser } from "../../Utils/userSlice.js";

const AppLayout = () => {
  const[maal,setMaal]=useState("hello");
  // console.log(maal,"---maal")
  // const dispatch=useDispatch();

  return (
    <>
    <Provider store={appStore}>
      <HeaderComponent setMaal={setMaal}/>
      <Outlet context={[setMaal]} />
      <Footer />
      </Provider>
    </>
  );
};


//list of paths  it is a  array of paths
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout  />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Body  />,
      },
      {
        path: "/About",
        element: <About />,
        children:[
          {
            path:"profile",
            element:<Myprofile />,
          }
        ],
      }, 
      {
        path: "/Contact",
        element: <ContactUs />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenus />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
