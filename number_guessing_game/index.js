const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum; // we set range of 100 for math.random. The +minNum at the end is so that the range starts from 1.

let attempts = 0;
let guess = 0;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert('Please enter a valid number');
    }
    else if(guess < minNum || guess > maxNum){
        window.alert('Please enter a valid number');
    }
    else{
        attempts++;
        if (guess < answer) {
            window.alert('Too low, try again');
        }
        else if(guess > answer){
            window.alert("Too High, try again!");
        }
        else{
            window.alert(`Congrats on guessing the right answer. It took you ${attempts} to get it right`);
            running = false;
        }
    }
}
