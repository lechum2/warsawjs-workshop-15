document.addEventListener("DOMContentLoaded", function () {

    var playerClasses = {
        playerA: "red",
        playerB: "blue"
    };

    var currentPlayer;

    initGame();
    function initGame() {
        var fields = document.querySelectorAll(".board > div");
        fields.forEach(field => {
            field.addEventListener("click", fieldClickHandler);
        });
        currentPlayer = "playerA";
    }

    function fieldClickHandler() {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);
        currentPlayer = currentPlayer === "playerA" ? "playerB" : "playerA";
        this.removeEventListener("click", fieldClickHandler);
    }
});
