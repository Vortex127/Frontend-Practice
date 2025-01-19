function rollDice(){

    const numOfDice = document.getElementById('numOfDice').value; //.value here is useful because without it, I would only get the reference to the input element, not the value of the input element.
    const diceResults = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src ="dice_images/${value}.JPG">`);
    }

    diceResults.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}