import React ,{useState}from "react";
import Login from "./login";
import Signup from "./Signup";
import "./sl.css";




function App1(){
const [state,setState]=useState(false)
    return(
      <div>
         <div className="buttons">
        <button
          onClick={function name(params) {
            setState(true);
          }}
        >
          Login
        </button>
        <button onClick={function name(params) {
          setState(false)
        }}>Signup</button>
      </div>
{state?<Login/>:<Signup/>}

      </div>
    )
    }












    export default App1;