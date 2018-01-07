document.addEventListener('DOMContentLoaded', function () {

    initGame();
    function initGame() {
        var fields = document.querySelectorAll('.board > div');
        console.log('fields', fields);

        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler);
        });
    }

    function fieldClickHandler() {
        console.log('clicked', this);
    }
});
