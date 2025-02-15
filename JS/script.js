let StartAgainBtn = document.querySelector(".start-again-container");
let winner = null;
console.log(btnProperties);

function getCurrentPlayer() {
    return document.querySelector(".current-player").textContent;
}

function ChangePlayer() {
    getCurrentPlayer() == "X" ? document.querySelector(".current-player").textContent = "O" :
    document.querySelector(".current-player").textContent = "X";
}

function SetXO(element) {
    const currentPlayer = getCurrentPlayer();
    if (element.textContent === "-" && !winner) {
        element.textContent = currentPlayer;
        ChangePlayer();
        element.style.backgroundColor = currentPlayer === "X" ? "#ffcccc" : "#cceeff";
        winner = CheckWinner();
        if (winner) {
            if (winner === "draw") {
                document.querySelector(".current-player").textContent = "Draw!";
            } else {
                document.querySelector(".current-player").textContent = winner + " wins!";
            }
            StartAgainBtn.style.display = "flex";
        }
    }
}

function CheckWinner() {
    const boxes = document.querySelectorAll(".x-o-boxes div");
    
    if (boxes[0].textContent !== "-" && boxes[0].textContent === boxes[1].textContent && boxes[0].textContent === boxes[2].textContent) {
        return boxes[0].textContent;
    } else if (boxes[3].textContent !== "-" && boxes[3].textContent === boxes[4].textContent && boxes[3].textContent === boxes[5].textContent) {
        return boxes[3].textContent;
    } else if (boxes[6].textContent !== "-" && boxes[6].textContent === boxes[7].textContent && boxes[6].textContent === boxes[8].textContent) {
        return boxes[6].textContent;
    }

    if (boxes[0].textContent !== "-" && boxes[0].textContent === boxes[3].textContent && boxes[0].textContent === boxes[6].textContent) {
        return boxes[0].textContent;
    } else if (boxes[1].textContent !== "-" && boxes[1].textContent === boxes[4].textContent && boxes[1].textContent === boxes[7].textContent) {
        return boxes[1].textContent;
    } else if (boxes[2].textContent !== "-" && boxes[2].textContent === boxes[5].textContent && boxes[2].textContent === boxes[8].textContent) {
        return boxes[2].textContent;
    }

    if (boxes[0].textContent !== "-" && boxes[0].textContent === boxes[4].textContent && boxes[0].textContent === boxes[8].textContent) {
        return boxes[0].textContent;
    } else if (boxes[2].textContent !== "-" && boxes[2].textContent === boxes[4].textContent && boxes[2].textContent === boxes[6].textContent) {
        return boxes[2].textContent;
    }
    
    if (Array.from(boxes).every(box => box.textContent !== "-")) {
        return "draw";
    }
    
    return null;
}

document.querySelector(".x-o-boxes").addEventListener("click", function (event) {
    if (event.target.tagName === "DIV" && event.target.textContent === "-") {
        SetXO(event.target);
    }
});

let btnProperties = document.querySelector(".x-o-boxes div").style;
function ResetGame() {
    StartAgainBtn.style.display = "none";
    document.querySelector(".current-player").textContent = "X";
    const boxes = document.querySelectorAll(".x-o-boxes div");
    boxes.forEach(function(box) {
        box.textContent = "-";
        box.style = btnProperties;
    });
    winner = null;
}
