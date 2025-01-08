// Source: https://www.youtube.com/watch?v=9sT03jEwcaw
// let randomNum = Math.floor(Math.random() * (max - min)) + min; // random number between 50 and 100 where the function Math.random() returns a random number between 0 and 1 and the function Math.floor() returns the largest integer less than or equal to a given number
// console.log(randomNum);

const myButton = document.getElementById("btn");
const label1 = document.getElementById("Label1");
const label2 = document.getElementById("Label2");
const label3 = document.getElementById("Label3");

const min = 1;
const max = 5;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * (max - min)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min)) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
