import React from "react";
import add from "./script";


const Inputs = ()=>{
    return(
        <div className="main-container">
        <h2 className="main-heading">
            Enter Details
        </h2>
        <input type="text" className="input-box " id="name" placeholder="Full Name"/>
        <input type="tel" className="input-box " id="phone" placeholder="Enter Phone no" />
        <input type="email" className="input-box" id="email" placeholder="Enter email"/>
        <button type="button" value="Submit" id="submit-button" onClick={add}>Submit</button>
    </div>
        
    )
};

export default Inputs;