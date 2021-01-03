const constants = require('./constants');
class Point {
    constructor(x, y, weight) {
        this.x = x;
        this.y = y;
        this.weight = weight;
    }
}

class Board {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.board = new Array(height).fill(constants.SAFE).map(() => new Array(width).fill(constants.SAFE));
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