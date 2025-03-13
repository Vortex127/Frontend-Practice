// .checked is a property that returns true if the checkbox is checked and false if it is not checked.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subResult = document.getElementById("subResult");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.textContent = "You are subscribed!";
    }
    else {
        subResult.textContent = "You are not subscribed!";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = "You are paying with Visa!";
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = "You are paying with MasterCard!";
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = "You are paying with PayPal!";
    }
    else {
        paymentResult.textContent = "You must select a payment type!";
    }
} 
