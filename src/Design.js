import React from "react";
import './app.css';


function Design(pros){
    return(
        <div >
        <div className="ph1"><img  className="ab" src={pros.img}></img></div>
        <div className="ph2" >
            <h4 className={pros.color}>{pros.name}</h4>
            <p className={pros.color}>{pros.desc}</p>
            <button className={pros.color}>{pros.button}</button>

        </div>
        </div>
    )
}
export default Design