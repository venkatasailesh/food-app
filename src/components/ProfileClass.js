import { Component } from "react";

class ProfileClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            userInfo :{
                name:"dummy name",
                created_at :"dummy date",
            } 
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/venkatasailesh");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });

    }
    
    componentDidUpdate(){
        console.log( "component did upadate");
    }

    componentWillUnmount(){
        console.log("component Will Unmount");
    }

    render(){
   return(
    <div>
        <h1>THIS IS MY PROFILE OF GITHUB</h1>
    <h2>NAME : {this.state?.userInfo?.name}</h2>
    <h2>Created at : {this.state?.userInfo?.created_at}</h2>
    <h4>@this was created by class based component</h4>
    </div>
);
}
}

export default ProfileClass;
/*
   ORDER OF LIFE CYCLE PROCESS OF METHODS IN CLASS BASED COMPONENTS 
    1.constructor
    2.render
    3.componentDidMount 
        1. if any api call then it will again render
   4. componentDidUpdate
   5.componentWillUnmount

*/


