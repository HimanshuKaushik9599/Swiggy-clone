import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        // create State 
        this.state={
            count:0,
            count2:1,  //another state variable 
        };
    }
    render(){
        // const {Count}=this.state;
        return(
        <div>
        <h2>This is a class based component </h2>
        <h2>Name : {this.props.name} </h2>
        <h2>Count:{this.state.count}</h2>
        <button onClick={()=>{
            //We do not  mutate state directly 
            //Never do this..state=something 
            this.setState({
                count:4,
            })
        }}>SetCount</button>
        </div>
        )
    };
}
export default Profile;