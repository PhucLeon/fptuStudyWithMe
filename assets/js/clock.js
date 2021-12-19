// console.log(w_minutes);
// console.log(w_seconds);
// console.log(b_minutes);
// console.log(b_seconds);
// console.log(cycles);

var startTimer;

function timer() {
    // Count down work timer
    if(w_seconds.innerText != 0) {
        w_seconds.innerText--;
    }
    else if(w_minutes.innerText != 0 && w_seconds.innerText == 0) {
        w_seconds.innerText = 59;
        w_minutes.innerText--;
    }

    // Count down break timer
    if(w_minutes.innerText == 0 && w_seconds.innerText == 0) {
        if(b_seconds.innerText != 0) {
            b_seconds.innerText--;
        }
        else if(b_minutes.innerText != 0 && b_seconds.innerText == 0) {
            b_seconds.innerText = 59;
            b_minutes.innerText--;
        }
    }

    // Increase counter cycles
    if(
        w_minutes.innerText == 0 && w_seconds.innerText == 0
        && b_minutes.innerText == 0 && b_seconds.innerText == 0
    ) {
        w_minutes.innerText = 25;
        w_seconds.innerText = '00';
        
        b_minutes.innerText = 5;
        b_seconds.innerText = '00';

        cycles.innerText++;
    }
}

function handleEvent() {
    start.addEventListener('click', function() {
        if (startTimer === undefined) {
            startTimer = setInterval(timer, 1000);
        }
        else {
            alert('Timer is still running!');
        }
    })

    stop.addEventListener('click', function() {
            alert('Do not give up!');
            stopInterval();
            startTimer = undefined;
    })

    reset.addEventListener('click', function() {
        w_minutes.innerText = 25;
        w_seconds.innerText = '00';
        
        b_minutes.innerText = 5;
        b_seconds.innerText = '00';

        cycles.innerText = 0;

        stopInterval();
        startTimer = undefined;
    })
}

function stopInterval() {
    clearInterval(startTimer);
  }

handleEvent();