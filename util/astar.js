let { PriorityQueue } = require("./PQueue");

function shortestPath(board, start, goal) {
    let frontier = new PriorityQueue();
    frontier.enqueue(start, 0);
    let cameFrom = {};
    let costSoFar = {};
    cameFrom[start] = null;
    costSoFar[start] = 0;

    while (!frontier.isEmpty()) {
        let current = frontier.dequeue();

        if (current == goal)
            break;

        board.neighbors(current).forEach(next => {
            let newCost = costSoFar[current] + board[next.y][next.x];
            if (!costSoFar.hasOwnProperty(next) || newCost < costSoFar[next]) {
                costSoFar[next] = newCost;
                const priority = newCost + heuristic(goal, next);
                frontier.enqueue(next, priority);
                cameFrom[next] = current;
            }
        });
    }

    // get the path
    let tmpNode = cameFrom[goal]
    let path = [];
    while (tmpNode != null) {
        path.push(tmpNode);
        tmpNode = cameFrom[tmpNode];
    }

    path.reverse();
    path.push(goal);
    return path;
}

function heuristic(start, goal) {
	return Math.abs(start.x - goal.x) + Math.abs(start.y - goal.y);
}

module.exports = { shortestPath };