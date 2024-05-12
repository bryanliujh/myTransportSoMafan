import * as React from "react";
import ST from "../images/hamburger-top.png";
import SM from "../images/hamburger-mid.png";
import SB from "../images/hamburger-bottom.png";
import "../App.css";

export default function Hamburgermenu(){
    return(
        <>
            <img src={ST} className = "images"/>
            <img src={SM} onClick={()=>{window.location.href="/"}} className = "images"/>
            <img src={SB} className = "images"/>
        </>
    )

}