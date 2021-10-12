import React ,{useEffect, useState} from "react";
import Node from "../node/Node.jsx";

export default function Grid(){
    const [grid, setGrid] = useState([]);
    const [isMousePressed, setIsMousePressed] = useState(false);
    
    useEffect(() => {
        setGrid(getGrid);
    }, []);

    function getGrid(){
        const grid = [];
        for(let row=0; row < 20; row++){
            const currentRow = [];
            for(let col=0; col < 50; col++){
                currentRow.push(createNode(col, row))
            }
            grid.push(currentRow);
        }
        return grid;
    }

    function createNode(col, row){
        return {
            col,
            row,
            isStart: row === 10 && col === 5,
            isFinish: row === 10 && col === 45,
            isWall: false
        };

    }

    function handleMouseDown(row, col){
        const newGrid = newGridToggleWall(grid, row, col);
        setGrid(newGrid);
        setIsMousePressed(true);
    }

    function handleMouseEnter(row, col){
        if(!isMousePressed) return;
        const newGrid = newGridToggleWall(grid, row, col);
        setGrid(newGrid);
    }

    function handleMouseUp(){
        setIsMousePressed(false);
    }

    function newGridToggleWall(grid, row, col){
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        const newNode = {
            ...node,
            isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
        return newGrid;

    }

    function refreshGrid(){
        setGrid(getGrid);
    }


    return(
        <div className="m-24 select-none">
            <button onClick={refreshGrid} className="p-2 bg-green-500 rounded text-white m-4">Visualize Algorithm</button>
            <button onClick={refreshGrid} className="p-2 bg-green-500 rounded text-white m-4">Refresh</button>
            {grid.map((row, rowIdx) => {
                return <div key={rowIdx} className="font-none">
                    {row.map((node, nodeIdx) => {
                        const {row, col, isWall, isStart, isFinish} = node;
                        return (
                            <Node
                                isMousePressed={isMousePressed}
                                onMouseDown={(row, col) => handleMouseDown(row, col)}
                                onMouseEnter={(row, col) => handleMouseEnter(row,col)}
                                onMouseUp={() => handleMouseUp()}
                                isWall={isWall}
                                row={row}
                                col={col}
                                key={nodeIdx}
                                isStart={isStart}
                                isFinish={isFinish}></Node>
                        );
                    })}
                </div>
            })}
        </div>
    );
}
