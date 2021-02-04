console.log("time to start the timer!");
const p = document.querySelector('p');

const timerButtons = document.querySelector('.timer-buttons');
const startButton = timerButtons.children[0];
const stopButton = timerButtons.children[1];
const resetButton = timerButtons.children[2];
let countdown = 60;


startButton.addEventListener('click',function() {
    let timer = setInterval(function(){ 
        countdown--;
        p.textContent = `0:${countdown}`;
        if (countdown === 0) {
            clearInterval(timer);
        }
    }, 1000);
    stopButton.addEventListener('click', function() {
        clearInterval(timer);
    })
    resetButton.addEventListener('click', function() {
        clearInterval(timer);
        countdown = 60;
        p.textContent = `0:${countdown}`;
    })
})


