const decbtn = document.getElementById("decreaseBtn");
const incbtn = document.getElementById("increaseBtn");
const resetbtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

incbtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decbtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetbtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}