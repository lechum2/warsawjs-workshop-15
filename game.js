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
        var winning = [
            fields[0].className + fields[1].className + fields[2].className,
            fields[3].className + fields[4].className + fields[5].className,
            fields[6].className + fields[7].className + fields[8].className,
            fields[0].className + fields[3].className + fields[6].className,
            fields[1].className + fields[4].className + fields[7].className,
            fields[2].className + fields[5].className + fields[8].className,
            fields[0].className + fields[4].className + fields[8].className,
            fields[2].className + fields[4].className + fields[6].className
        ];
        if (winning.includes("redredred")) {
            alert("playerA won!");
        } else if (winning.includes("blueblueblue")) {
            alert("playerB won!");
        } else if (emptyFields === 0) {
            alert("It is a tie");
        }
    }
});
