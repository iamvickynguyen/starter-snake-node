const { SAFE, DANGER } = require('./constants');
class Point {
    constructor(x, y, weight) {
        this.x = x;
        this.y = y;
        this.weight = weight;
    }
}

class Board {
    constructor(data) {
        this.height = data.board.height;
        this.width = data.board.width;
        this.board = new Array(this.height).fill(SAFE).map(() => new Array(this.width).fill(SAFE));
        this.snakes = data.snakes.map(snake => new Snake(snake));

        // TODO: init board weight and food
    }

    neighbors(point) {
        const x = point.x;
        const y = point.y;
        const surroundingCoors = [[x+1, y], [x, y-1], [x-1, y], [x, y+1]]
        return surroundingCoors.filter(coor => this.inBounds(coor[0], coor[1]) && this.board[coor[1]][coor[0]].weight == SAFE)
            .map(coor => this.board[coor[1]][coor[0]]);
    }

    inBounds(x, y) {
        return 0 <= x && x < this.width && 0 <= y && y < this.height;
    }
}

class Snake {
    constructor(obj) {
        this.id = obj.id;
        this.health = obj.health;
        this.body = this.toPointArray(obj.body);
        this.head = this.body[0];
        this.tail = this.body[this.body.length - 1];
    }

    toPointArray(arr) {
        return arr.map((item) => new Point(item.x, item.y, constants.DANGER));
    }
}

module.exports = {
    Point, 
    Board,
    Snake
}