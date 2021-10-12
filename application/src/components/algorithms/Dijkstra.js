
export function Dijkstra(grid, startNode, finishNode){
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);



    while(!!unvisitedNodes.length){
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();

        if(closestNode.isWall)
            continue;

        if(closestNode.distance === Infinity) return visitedNodesInOrder;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        if(closestNode === finishNode) return visitedNodesInOrder;
        updateUnvisitedNodes(closestNode, grid);
    }


}

function updateUnvisitedNodes(node, grid){
    const unvisitedNeighbours = getUnvisitedNeighbours(node, grid);
    for(const neighbour of unvisitedNeighbours){
        neighbour.distance = node.distance + 1;
        neighbour.previousNode = node;
    }
}

function getUnvisitedNeighbours(node, grid){
   const neighbours = []; 
   if(node.row > 0)
        neighbours.push(grid[node.row - 1][node.col]);
    if(node.row < grid.length - 1)
        neighbours.push(grid[node.row + 1][node.col]);
    if(node.col > 0)
        neighbours.push(grid[node.row][node.col - 1]);
    if(node.col < grid[0].length - 1)
        neighbours.push(grid[node.row][node.col + 1]);

    return neighbours.filter(neighbour => !neighbours.isVisited);
}

function sortNodesByDistance(nodes){
    nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}


function getAllNodes(grid){
    const nodes = [];
    for(const row of grid){
        for(const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}
