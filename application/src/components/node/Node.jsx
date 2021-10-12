import React, {useState}  from "react";

export default function Node({row, col, isFinish, isStart, onMouseDown, isWall, onMouseUp, onMouseEnter}){

    return(
     <div 
        onMouseDown={() => onMouseDown(row, col)} 
        onMouseUp={() => onMouseUp()} 
        onMouseEnter={() => onMouseEnter(row, col)} 
        className={` node  ${isStart ? "bg-green-600" : ""} ${isFinish ? "bg-red-600" : ""} ${isWall ? "bg-blue-900" : ""}`}>
     </div>
    );
}
