/**
 * Created by LucyQiao on 10/12/16.
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
    addResultToStdin(chunk);
}).on('end', function() {
    var lines = stdin.split('\n');
    for(var i=0; i<lines.length; i++) {
        process.stdout.write(lines[i]);
    }
});

function addResultToStdin(chunk) {
    var output = '';
    var instructions = chunk.split('|');
    var method = instructions[0];
    tictactoe.reset();
    for (var i = 1; i < instructions.length; i++) {
        if(instructions[i] === 'undo') {
            if(i === instructions.length - 1) {
                output += JSON.stringify(tictactoe.undo());
            } else {
                tictactoe.undo();
            }
        } else {
            var moves = instructions[i].split(',');
            var x = moves[0].trim();
            var y = moves[1].trim();
            if(i === instructions.length - 1) {
                output += JSON.stringify(tictactoe[method](x, y));
            } else {
                tictactoe[method](x, y)
            }
        }
    }
    stdin += output;
}
// end of test evaluation code

function TicTacToe() {
    this.init();
}

TicTacToe.prototype.getCurrentState = function() {
    // return the current state of the application
    var index = this.state.length-1;
    return this.state[index];


}
TicTacToe.prototype.reset = function() {
    this.init();
}

TicTacToe.prototype.init = function() {
    this.state = [];
    // setting initial state
    this.state.push({
        activePlayer: 'x',
        currentBoard: this.freshBoard()
    });
}

TicTacToe.prototype.updatedBoard = function(x,y) {
    var state = this.getCurrentState();
    var activePlayer = state.activePlayer;
    var currentBoard = state.currentBoard;
    var newBoard = [];
    for (var i = 0; i < currentBoard.length; i++) {
        newBoard.push(currentBoard[i].concat());
    }
    newBoard[x][y] = activePlayer;
    return newBoard;
}

TicTacToe.prototype.freshBoard = function() {
    return [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}

TicTacToe.prototype.undo = function() {
//go back to the previous state
    this.state.pop();
}

TicTacToe.prototype.isValidTurn = function(x, y) {
    // 0,0 is the upper left.. 2,2 is the lower right.
    // return if x,y are valid as a boolean
    var theBoard = this.getCurrentState().currentBoard;
    for(var i = 0; i < theBoard.length; i++) {
        var row = theBoard[i];
        for(var z = 0; z < row.length; z++) {
            if(row[i] === null || row[z] === null) {
                return false;
            }
        }
    }

    return true;
}

TicTacToe.prototype.isWinningTurn = function(activePlayer, updatedBoard) {
    var checkVertical = function () {
        return false;
    };
    var checkHorizontal = function () {
        return false;
    };
    var checkDiagonal = function () {
        return false;
    };

    if(checkDiagonal() || checkHorizontal() || checkVertical()) {
        return true;
    }
    return false;
}

TicTacToe.prototype.takeTurn = function(x, y) {
    var state = this.getCurrentState();
    var valid = false;
    var winning = false;
    if(this.isValidTurn(x, y)) {
        var newState = {
            activePlayer: (state.activePlayer === 'x') ? 'o' : 'x'
        };
        valid = true;
        newState.currentBoard = this.updatedBoard(x, y);
        newState.winningMove = winning = this.isWinningTurn(state.activePlayer, newState.currentBoard);
        this.state.push(newState);
    }
    return {
        board: newState.currentBoard,
        moveBy: state.activePlayer,
        valid: valid,
        winning: winning
    }
}

var tictactoe = new TicTacToe();