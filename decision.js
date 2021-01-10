const { Board } = require('./classes');

function decision(data) {
    const board = new Board(data);
    console.log(board.board);
    return 'up';
}

module.exports.decision = decision