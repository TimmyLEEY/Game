function game() {
    let input1 = document.getElementById('input1')
    let input = input1.value
    let randomNum = (Math.ceil(Math.random()*10))
    let output = document.getElementById('display')
    let answer = document.getElementById('math')
    
    if (input == randomNum) {
        output.innerHTML = "Congratulations You are Amazing"
        answer.innerHTML = randomNum
    } else {
        output.innerHTML = "What is Cashout"
        answer.innerHTML = randomNum
    }
}