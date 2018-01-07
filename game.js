document.addEventListener("DOMContentLoaded", function () {

    var playerClasses = {
        playerA: "red",
        playerB: "blue"
    };
    var playerNames = {
        playerA: "playerA",
        playerB: "playerB"
    };
    var playerAscores = 0;
    var playerBscores = 0;
    var currentPlayer;
    var emptyFields;
    var fields = document.querySelectorAll(".board > div");
    var roundInfo = document.querySelector("#round");

    var resetButton = document.querySelector("#reset");
    var renameAButton = document.querySelector("#renamePlayerA");
    var renameBButton = document.querySelector("#renamePlayerB");

    resetButton.addEventListener("click", resetScores);
    renameAButton.addEventListener("click", renamePlayerA);
    renameBButton.addEventListener("click", renamePlayerB);

    initGame();
    function initGame() {
        fields.forEach(field => field.classList = []);
        fields.forEach(field => {
            field.addEventListener("click", fieldClickHandler);
        });
        currentPlayer = "playerA";
        emptyFields = 9;
        roundInfo.classList = playerClasses[currentPlayer];
        roundInfo.textContent = `${playerNames[currentPlayer]}'s turn`;
    }

    function fieldClickHandler() {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);
        currentPlayer = currentPlayer === "playerA" ? "playerB" : "playerA";
        this.removeEventListener("click", fieldClickHandler);
        emptyFields -= 1;
        checkWinner();
        roundInfo.textContent = `${playerNames[currentPlayer]}'s turn`;
        roundInfo.classList = playerClasses[currentPlayer];
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
            setTimeout(function () {
                alert(`${playerNames.playerA} won!`);
                initGame();
            }, 100);
            playerAscores += 1;
            showScores();
        } else if (winning.includes("blueblueblue")) {
            setTimeout(function () {
                alert(`${playerNames.playerB} won!`);
                initGame();
            }, 100);
            playerBscores += 1;
            showScores();
        } else if (emptyFields === 0) {
            setTimeout(function () {
                alert("It is a tie");
                initGame();
            }, 100);
        }
    }

    function showScores() {
        var playerAElement = document.querySelector("#scores > .playerA");
        var playerBElement = document.querySelector("#scores > .playerB");
        playerAElement.textContent = `${playerNames.playerA}: ${playerAscores}`;
        playerBElement.textContent = `${playerNames.playerB}: ${playerBscores}`;
    }

    function resetScores() {
        playerAscores = 0;
        playerBscores = 0;
        showScores();
    }

    function renamePlayerA() {
        playerNames.playerA = prompt(`Please add new name for ${playerNames.playerA}`, playerNames.playerA);
        showScores();
        roundInfo.textContent = `${playerNames[currentPlayer]}'s turn`;
        renameAButton.textContent = `Rename ${playerNames.playerA}`;
    }

    function renamePlayerB() {
        playerNames.playerB = prompt(`Please add new name for ${playerNames.playerB}`, playerNames.playerB);
        showScores();
        roundInfo.textContent = `${playerNames[currentPlayer]}'s turn`;
        renameBButton.textContent = `Rename ${playerNames.playerB}`;
    }
});
