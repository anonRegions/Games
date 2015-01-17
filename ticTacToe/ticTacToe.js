//There are two players, one represented by X, the other by O.
var player = 0;

//Automatically switch from one player to the other after every move
function newPlayer () {
    var playerID = "";
    //playerX starts game by default
    if (player == 0) playerID = "X";
    else {
        // if playerX has already moved, switch players
        if (player == 1) playerID = "O";
    }
    getClicked(playerID);
}

//get value after user clicks on cell--
function getClicked () {
    var cell = document.getElementsByTagName("button");
    var cLen = cell.length;
    document.body.addEventListener("click", function (event) {
        for (var i = 0; i < cLen; i++) {
            if ((event.target.nodeName == "BUTTON") && (cell[i].innerHTML == '&nbsp;') && cell[i] == event.target) {
                cell[i].innerHTML = "X";
                buildArr(event);
            } else {
                cell[i].innerHTML = "O";
            }
        }
    });
}

/* Need to figure out where to insert result of user click
 * Rewrite this completely
 * Assign “X” or “O” to each cell based on user clicks on cells. */
function buildArr(score, gridRow, gridCell) {
    var gameArr = [[], [], []], len = 3;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            gameArr[i][j] = 0;
            if (gameArr[gridRow][gridCell] == 0) gameArr[gridRow][gridCell] = score;
        }
    }
    ticTacToeTest(gameArr);
}
//Rewrite this completely
//Tally tic-tac-toe rows [vert, horiz, diag]
//if (sum of any row == 3) {display winnerMsg)
function ticTacToeTest(gameArr) {
    var ticTacToe = false;
    var testVals = ["X", "O"], len = gameArr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            //Start with tests where ticTacToe == false
            if (((gameArr[i][j] != testVals[0]) || (gameArr[i][j + 1] != testVals[0]) || (gameArr[i][j + 2] != testVals[0])) && ((gameArr[i][j] != testVals[1]) || (gameArr[i][j + 1] != testVals[1]) || (gameArr[i][j + 2] != testVals[1]))) {
                ticTacToe = false;
            } else {
                j = 0;
                //if every cell in row has X or O, ticTacToe == true
                if ((gameArr[i][j] == testVals[i]) && (gameArr[i][j + 1] == testVals[i]) && (gameArr[i][j + 2] == testVals[i])) {
                    ticTacToe = true;
                }
            }
        }
    }
    //if not every cell in column has X or O, ticTacToe == false
    for (var k = 0; k < len; k++) {
        for (var l = 0; l < len; l++) {
            if (((gameArr[l][k] != testVals[0]) || (gameArr[l][k] != testVals[0]) || (gameArr[l][k] != testVals[0])) && ((gameArr[l][k] != testVals[1]) || (gameArr[l][k] != testVals[1]) || (gameArr[l][k] != testVals[1]))) {
                ticTacToe = false;
            }
        }
    }
    //if every cell in column has X or O, ticTacToe == false
    for (var k = 0; k < len; k++) {
        for (var l = 0; l < len; l++) {
            if (((gameArr[l][k] == testVals[0]) || (gameArr[l][k] == testVals[0]) || (gameArr[l][k] == testVals[0])) && ((gameArr[l][k] == testVals[1]) || (gameArr[l][k] == testVals[1]) || (gameArr[l][k] == testVals[1]))) {
                ticTacToe = false;
            }
        }
    }

    //if every cell in top-left-bottom right diagonal has X or O
    if ((gameArr[0][0] == "X") && (gameArr[1][1] == "X") && (gameArr[2][2] == "X")) {
        ticTacToe = true;
    } else {
        //if every cell in bottom left-top right diagonal has X or O
        if ((gameArr[0][2] == "X") && (gameArr[1][1] == "X") && (gameArr[2][0] == "X")) {
            ticTacToe = true;
        }
    }
    return winnerMsg(ticTacToe, testVals[i]);
}

//Instead of this, traverse HTMLElement & push values to array
function buildScoreHashes(gameArr) {
    //Build hash table totaling rows for X & O
    var len = gameArr.length, xList = {value: "", count: 0}, oList = {value: "", count: 0};
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (gameArr[i][j] == "X") {
                if (!xList.value) {
                    xList.value = gameArr[i][j];
                    xList.count++;
                    //console.log(xList);
                }
                else {
                    j++;
                    xList.value = gameArr[i][j];
                    xList.count++;
                    //console.log(xList);
                }
            } else {
                if (gameArr[i][j] == "O") {
                    if (!oList.value) {
                        oList.value = gameArr[i][j];
                        oList.count++;
                        //console.log(oList);
                    }
                    else {
                        j++;
                        oList.value = gameArr[i][j];
                        oList.count++;
                        //console.log(oList);
                    }
                }
            }
        }
        console.log(xList, oList);
    }
}
//REDO THIS
function tallyScores(xList, oList) {
    //Traverse each list, comparing total per row;
    // If row total == arr.length, list's player is winner
    for (var k in xList) {
        if ((xList[k].value < len) && (oList[k].value < len)) {
            //If no one has reached tic-tac-toe, keep playing
            //Player.newPlayer(playerID);
        }
        if (xList[k].value == len) {
            console.log("Tic-Tac-Toe! Player X is the winner!");
            //Player.winnerMsg();
        } else {
            if (oList[k].value == len) {
                console.log("Tic-Tac-Toe! Player O is the winner!");
                //Player.winnerMsg();
            } else {
                //If score tied & no winner
                if ((xList[k].value == len) && (oList[k].value == len)) {
                    alert("Game tied! Start another game.");
                }
            }
        }
    }
}

//var gameTable = "['x', 'o', 'x'], ['o', 'x', 'o'], ['x', 'x', 'o']";
console.log(buildScoreHashes(gameTable));