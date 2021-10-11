import React ,{useEffect, useState} from "react";
import Node from "../node/Node.jsx";

export default function Grid(){
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        const nodes = [];
        console.log("Component did mount");
        for(let row=0; row < 15; row++){
            const currentRow = [];
            for(let col=0; col < 50; col++){
                currentRow.push([]);
            }
            nodes.push(currentRow);
        }
        setNodes(nodes);
        console.log(nodes);
    }, []);

    return(
        <div className="grid m-24">
            
            {nodes.map((row, rowIdx) => {
                return <div>
                    {row.map((node, nodeIdx) => <Node></Node>)}
                </div>
            })}
        </div>

    );
}
