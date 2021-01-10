const { SAFE, FOOD, ATTACKABLE, DANGER } = require('./constants');

class Point {
    constructor(x, y, weight) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.neighbors = [];
    }

    manhattan(other) {
        var d1 = Math.abs(this.x - other.x);
        var d2 = Math.abs(this.y - other.y);
        return d1 + d2;
    }
}

class Board {
    constructor(data) {
        this.height = data.board.height;
        this.width = data.board.width;
        this.board = new Array(this.height).fill(SAFE).map(() => new Array(this.width).fill(SAFE));
        this.snakes = data.board.snakes.map(snake => new Snake(snake));
        this.mySnake = new Snake(data.you);
        this.foods = this.setFoods(data.board.food);
        // TODO: init board weight and food
    }

    setFoods(food) {
        let foodPoints = []
        let snakeEnemyHeads = this.snakes.filter(s => { s.id !== this.mySnake.id }).map(snake => snake.head);
        for (var i = 0; i < food.length; i++) {
            let foodPoint = new Point(food[i].x, food[i].y, FOOD);
            for (var j = 0; j < snakeEnemyHeads; j++) {
                foodPoint.weight -= foodPoint.manhattan(snakeEnemyHeads[j]) / 100;
            }
            foodPoint.weight += foodPoint.manhattan(this.mySnake.head);
            foodPoints.push(foodPoint);
        }
        return foodPoints;
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
        return arr.map((item) => new Point(item.x, item.y, DANGER));
    }
}

module.exports = {
    Point,
    Board,
    Snake
}