import React from "react";
import Child from "./Child";
const Parent=(props)=>{
    return(
        <Child add={props.data}/>
    )
}
export default Parent