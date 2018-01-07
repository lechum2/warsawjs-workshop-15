document.addEventListener("DOMContentLoaded", function () {

    var playerClasses = {
        playerA: "red",
        playerB: "blue"
    };
    var currentPlayer;
    var emptyFields;
    var fields = document.querySelectorAll(".board > div");

    initGame();
    function initGame() {
        fields.forEach(field => {
            field.addEventListener("click", fieldClickHandler);
        });
        currentPlayer = "playerA";
        emptyFields = 9;
    }

    function fieldClickHandler() {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);
        currentPlayer = currentPlayer === "playerA" ? "playerB" : "playerA";
        this.removeEventListener("click", fieldClickHandler);
        emptyFields -= 1;
        checkWinner();
    }

    function checkWinner() {
        var row1 = fields[0].className + fields[1].className + fields[2].className;
        var row2 = fields[3].className + fields[4].className + fields[5].className;
        var row3 = fields[6].className + fields[7].className + fields[8].className;

        var col1 = fields[0].className + fields[3].className + fields[6].className;
        var col2 = fields[1].className + fields[4].className + fields[7].className;
        var col3 = fields[2].className + fields[5].className + fields[8].className;

        var diag1 = fields[0].className + fields[4].className + fields[8].className;
        var diag2 = fields[2].className + fields[4].className + fields[6].className;

        var redWon = "redredred";
        var blueWon = "blueblueblue";
        if (row1 === redWon
            || row2 === redWon
            || row3 === redWon
            || col1 === redWon
            || col2 === redWon
            || col3 === redWon
            || diag1 === redWon
            || diag2 === redWon) {
            alert("playerA won!");
        } else if (row1 === blueWon
            || row2 === blueWon
            || row3 === blueWon
            || col1 === blueWon
            || col2 === blueWon
            || col3 === blueWon
            || diag1 === blueWon
            || diag2 === blueWon) {
            alert("playerB won!");
        } else if (emptyFields === 0) {
            alert("It is a tie");
        }
    }
});
