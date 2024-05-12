import * as React from "react";
import TT from "../images/Bus Arrival Time_top_top.png";
import TBL from "../images/Bus Arrival Time_top_bottom_left.png";
import TBR from "../images/Bus Arrival Time_top_bottom_right.png";
import M from "../images/Bus Arrival Time_mid.png";
import B from "../images/Bus Arrival Time_bottom.png";
import "../App.css";

export default function BusArrivalTime(){
    return(
        <>
            <img src={TT} className="images"/>
            <div style={{display:"flex"}}>
            <img src={TBL} onClick={() => {
                window.location.href = "/"
            }} className="images" style={{float: "left", width: "16%"}}/>
            <img src={TBR} className="images" style={{float: "left", width: "84%"}}/>
            </div>
            <img src={M} onClick={() => {
                window.location.href = "/search-arrival"
            }} className="images"/>
            <img src={B} className="images"/>
        </>
    )

}