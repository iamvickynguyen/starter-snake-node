const { SAFE, FOOD, ATTACKABLE, DANGER } = require('./constants');

class Point {
    constructor(x, y, weight) {
        this.x = x;
        this.y = y;
        // this.weight = weight;
        this.neighbors = [];
        this.f = 0;
        this.g = weight;
        this.h = 0;
        this.visited = false;
        this.closed = false;
        this.parent = null;
    }

    cleanNode() {
        this.f = 0;
        this.g = SAFE;
        this.h = 0;
        this.visited = false;
        this.closed = false;
        this.parent = null;
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
        this.dirtyNodes = [];
        this.foodEndPoint = setFoodEndPoints();
        // TODO: init board weight and food

    }

    getSnakeHeads() {
        snakeHeads = this.snakes.map(snake => snake.head);
        return snakeHeads;
    }

    getSnakeTails() {
        return this.snakes.map(snake => snake.tail);
    }

    setWeightPoint(x, y, weight) {
        this.board[x][y].weight = weight;
    }

    setWeightBoard() {
        this.snakes.forEach(snake => {
            snake.body.forEach(point => { this.setWeightPoint(point.x, point.y, DANGER) });
        })

        this.snakes.filter(snake => {
            snake.body.length < this.mySnake.body.length
        }).forEach(snake => {
            this.setWeightPoint(snake.head.x, snake.head.y, ATTACKABLE)
        })
    }

    setFoods(food) {
        let foodPoints = []
        let snakeHeads = this.snakes.filter(s => { s.id !== this.mySnake.id }).map(snake => snake.head);
        for (var i = 0; i < food.length; i++) {
            let foodPoint = new Point(food[i].x, food[i].y, FOOD);
            for (var j = 0; j < snakeHeads; j++) {
                foodPoint.weight -= foodPoint.manhattan(snakeHeads[j]) / 100;
            }
            foodPoint.weight += foodPoint.manhattan(this.mySnake.head);
            foodPoints.push(foodPoint);
        }
        return foodPoints;
    }

    setFoodEndPoints() {
        const foodEndPoint = new Point(1000, 1000, FOOD);
        foodEndPoint.neighbors = this.foods;
        for (var i = 0; i < this.foods; i++) {
            this.foods[i].neighbors.push(foodEndPoint);
        }

        return foodEndPoint;
    }

    setNeighbors(point, option) {
        if (option === food) {
            point.neighbors = this.food;
        }
        const x = point.x;
        const y = point.y;
        const surroundingCoors = [[x + 1, y], [x, y - 1], [x - 1, y], [x, y + 1]]
        return surroundingCoors.filter(coor => this.inBounds(coor[0], coor[1]) && this.board[coor[1]][coor[0]].weight !== DANGER)
            .map(coor => this.board[coor[1]][coor[0]]);
    }

    inBounds(x, y) {
        return 0 <= x && x < this.width && 0 <= y && y < this.height;
    }

    cleanDirty() {
        for (var i = 0; i < this.dirtyNodes.length; i++) {
            this.dirtyNodes[i].cleanNode();
        }
        this.dirtyNodes = [];
    };

    markDirty(node) {
        this.dirtyNodes.push(node);
    };
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