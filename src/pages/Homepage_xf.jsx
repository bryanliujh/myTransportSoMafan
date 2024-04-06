import * as React from "react";
import ST from "../images/Menu Selection_top.png";
import SM1 from "../images/Menu Selection_mid_1.png";
import SM2 from "../images/Menu Selection_mid_2.png";
import SM3 from "../images/Menu Selection_mid_3.png";
import SM4 from "../images/Menu Selection_mid_4.png";
import SB from "../images/Menu Selection_bottom.png";
import "../App.css";

export default function Menu(){
    return(
        <>
            <img src={ST} className="images"/>
            <div style={{display:"flex"}}>
                <img src={SM1} className="images" style={{float: "left", width: "25%"}} />
                <img src={SM2} onClick={() => {
                    window.location.href = "/search-bus-service"
                }} className="images"
                     style={{float: "right", width: '25%'}} />
                <img src={SM3} onClick={() => {
                    window.location.href = "/busat"
                }} className="images"
                     style={{float: "right", width: "25%"}}/>
                <img src={SM4} onClick={() => {
                    window.location.href = "/hamburgerMenu"
                }} className="images"
                     style={{float: "right", width: "25%"}}/>
            </div>
            <img src={SB} className="images"/>
        </>
    )

}