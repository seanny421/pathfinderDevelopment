import React, {useState}  from "react";

export default function Node({isFinish, isStart}){
    const [isWall, setIsWall] = useState(false);
    const [isHover, setIsHover] = useState(false);
    var mouseDown = false;
    document.body.onmousedown = function() { 
      mouseDown = true;
      console.log(mouseDown);
    }
    document.body.onmouseup = function() {
        mouseDown = false;
        console.log(mouseDown); 
    }     



    function test(){
        if(mouseDown){
            console.log("YE");
            setIsWall(true);
        }
    }

    return(
     <div onMouseEnter={test} className={`w-6 h-6 border border-gray-800 inline-block ${isStart ? "bg-green-600" : ""} ${isFinish ? "bg-red-600" : ""} ${isWall ? "bg-blue-900" : ""}`}>
     </div>
    );
}
