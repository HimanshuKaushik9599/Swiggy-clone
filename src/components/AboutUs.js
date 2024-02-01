import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from "./profile";
const About =()=>{
    return(
        <>
        <h1>About Us </h1>
        <p>This is a namaste React course </p>
        {/* <ProfileFunctionalComponent  name={"Himanshu From functional based component "}/> */}
        <ProfileClass name={"himanshu Sharma"} />
        </>
    )
}
export default About;