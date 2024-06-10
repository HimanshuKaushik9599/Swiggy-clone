import { useState } from "react";

const profile= (props)=>{

    const[count,setcount]=useState(0);

return(

    // <div>
    //     <h2>hi  himanshu</h2>
    //     <h2>this is a profile component </h2>
    //     <h2> Name={props.name}</h2>
    //     <h2>Count:{count}</h2>
    //     <button onClick={()=>{
    //         setcount(1);
    //     }}>Count</button>
    // </div>
//)


<div className=" ">
<p>
  Welcome to [FoodVilla], where we are passionate about [describe the main goal or purpose of your app].
  Our mission is to [briefly describe the mission or purpose of your app] to [target audience].
</p>

<h3>Our Story</h3>
<p>
  [Your App Name] was founded in [year] with the vision of [briefly describe the initial vision or idea behind the app].
  Since then, we have been dedicated to providing [key features or services] to our users, striving for excellence
  in [mention any specific areas or aspects where your app excels].
</p>

<h3>Our Values</h3>
<p>
  At [Your App Name], we uphold a set of core values that guide our decisions and actions:
</p>
<ul>
  <li><strong>Innovation:</strong> We embrace creativity and continuously seek innovative solutions.</li>
  <li><strong>User-Centric:</strong> Our users are at the heart of everything we do; we prioritize their needs and experiences.</li>
  <li><strong>Transparency:</strong> We believe in open communication and transparency in our processes.</li>
  <li><strong>Reliability:</strong> Providing a reliable and trustworthy service is our commitment to our users.</li>
</ul>


<h3>Contact Us</h3>
<p>
  We value your feedback and are here to assist you. If you have any questions or suggestions, please don't hesitate
  to <a href="/contact">contact us</a>.
</p>
</div>

)}
export default profile;