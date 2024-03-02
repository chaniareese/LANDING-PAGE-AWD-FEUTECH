const squares = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let activeSquare;

document.querySelectorAll('.day-button').forEach(button => {
    button.addEventListener('click', function() {
        changeColor(this.id);
    });
});

function changeColor(day) {
    if (activeSquare) {
        if (activeSquare === day) {
            document.getElementById(activeSquare + "-square").className = activeSquare + "-up";
            activeSquare = null;
        } else {
            document.getElementById(activeSquare + "-square").className = activeSquare + "-up";
            document.getElementById(day + "-square").className = day + "-down";
            activeSquare = day;
        }
    } else {
        document.getElementById(day + "-square").className = day + "-down";
        activeSquare = day;
    }
}