let n = document.querySelectorAll(".btn");
let flag = 1;
let turn = document.querySelector("h3");

let box = new Array(3);
for (let i = 0; i < 3; i++) {
    box[i] = new Array(3);
}

document.querySelector(".reset").addEventListener("click", function () {
    location.reload();
});


for (let index = 0; index < n.length; index++) {

    n[index].addEventListener("click", function () {

        if (flag == 1 && !winnerCheck()) {
            if (this.innerText == "X" || this.innerText == "O") {

            }
            else {
                turn.innerText = "Player O's Turn";
                this.innerText = "X";
                this.classList.add("appear");
                let list = this.classList
                if (list.length == 3) {
                    let i = list[0];
                    box[i][i] = 1;
                }
                else {
                    box[list[0]][list[1]] = 1;
                }
                flag = 0;

                let x = new Audio("sounds/cross-pop.wav");
                x.play();

                setTimeout(function () {
                    let ans = winnerCheck();
                    if (!ans) {
                        drawCheck();
                    }
                }, 200);
            }
        }
        else if (flag == 0 && !winnerCheck()) {

            if (this.innerText == "X" || this.innerText == "O") {

            }
            else {
                turn.innerText = "Player X's Turn";
                this.innerText = "O";
                this.classList.add("appear");
                let list = this.classList
                if (list.length == 3) {
                    let i = list[0];
                    box[i][i] = 0;
                }
                else {
                    box[list[0]][list[1]] = 0;
                }
                flag = 1;

                let o = new Audio("sounds/circle-pop.mp3");
                o.play();


                setTimeout(function () {
                    let ans = winnerCheck();
                    if (!ans) {
                        drawCheck();
                    }
                }, 200);
            }
        }

    });

}

function winnerCheck() {
    // Row wise check
    for (let i = 0; i < 3; i++) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += box[i][j];
        }

        if (sum == 3) {
            turn.innerText = "Player X is the Winner!";
            gameOverAnimation();

            return true;
        }
        else if (sum == 0) {
            turn.innerText = "Player O is the Winner!";
            gameOverAnimation();

            return true;
        }
    }

    // columns wise
    for (let i = 0; i < 3; i++) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += box[j][i];
        }

        if (sum == 3) {
            turn.innerText = "Player X is the Winner!";
            gameOverAnimation();

            return true;

        }
        else if (sum == 0) {
            turn.innerText = "Player O is the Winner!";
            gameOverAnimation();

            return true;

        }
    }

    // left diagonal
    // right diagonal
    let rdsum = 0;
    let ldsum = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i == j) {
                ldsum += box[i][j];
                rdsum += box[i][2 - j]
            }
        }
    }

    if (ldsum == 3) {
        turn.innerText = "Player X is the Winner!";
        gameOverAnimation();

        return true;

    }
    else if (ldsum == 0) {
        turn.innerText = "Player O is the Winner!";
        gameOverAnimation();

        return true;

    }

    if (rdsum == 3) {
        turn.innerText = "Player X is the Winner!";
        gameOverAnimation();

        return true;

    }
    else if (rdsum == 0) {
        turn.innerText = "Player O is the Winner!"
        gameOverAnimation();

        return true;

    }

    return false;
}

function gameOverAnimation() {
    for (let i = 0; i < 9; i++) {
        n[i].classList.add("game-over");
    }

    let music = new Audio("sounds/win.wav")
    music.play();
}


function drawAnimation() {
    for (let i = 0; i < 9; i++) {
        n[i].classList.add("game-over");
    }

    let music = new Audio("sounds/draw.wav");
    music.play();
}

function drawCheck() {

    let sum = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            sum += box[i][j];
        }
    }

    if (sum == 5) {
        turn.innerText = "Draw!";
        drawAnimation();
    }
}

