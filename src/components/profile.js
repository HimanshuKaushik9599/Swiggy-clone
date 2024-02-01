import { useState } from "react";

const profile= (props)=>{

    const[count,setcount]=useState(0);

return(

    <div>
        <h2>hi  himanshu</h2>
        <h2>this is a profile component </h2>
        <h2> Name={props.name}</h2>
        <h2>Count:{count}</h2>
        <button onClick={()=>{
            setcount(1);
        }}>Count</button>
    </div>
)
} 
export default profile;