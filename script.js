let score = 0;
let misses = 0;

function game() {
    let input1 = document.getElementById('input1');
    let input = parseInt(input1.value);
    let randomNum = Math.ceil(Math.random() * 5);
    let output = document.getElementById('display');
    let answer = document.getElementById('math');
    
    if (isNaN(input) || input < 1 || input > 5) {
        alert("Please enter a valid number between 1 and 5.");
        return;
    }

    if (input === randomNum) {
        output.innerHTML = "🎉 Congratulations! You guessed right!";
        score++;
    } else {
        output.innerHTML = "❌ Wrong guess! Try again.";
        misses++;
    }
    
    answer.innerHTML = `The number was: <b>${randomNum}</b>`;
    
    // Update Scoreboard
    document.getElementById('score').innerText = score;
    document.getElementById('misses').innerText = misses;
}

// Reset Function
function resetGame() {
    score = 0;
    misses = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('misses').innerText = misses;
    document.getElementById('display').innerText = "";
    document.getElementById('math').innerText = "";
    document.getElementById('input1').value = "";
}
