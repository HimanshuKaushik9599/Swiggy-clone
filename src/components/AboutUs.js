import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from "./profile";
const About =()=>{
    return(
        <>
        <h3 className="margin-div">About Us </h3>
        <ProfileFunctionalComponent  name={"Himanshu From functional based component "}/>
        </>
    )
}
export default About;