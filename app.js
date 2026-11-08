// let startTime = 0;
// let elapsedTime = 0;
// let timer = null;


// function updateDisplay() {
//     let totalTime = elapsedTime;

//     let hours = Math.floor(totalTime / 3600000)
//     let minutes = Math.floor((totalTime % 3600000) / 60000);
//     let seconds = Math.floor((totalTime % 60000) / 1000);


//     document.getElementById("display").textContent =
//     String(hours).padStart(2,"0") + ":" +
//     String(minutes).padStart(2,"0") + ":" +
//     String(seconds).padStart(2,"0");
// }

// function startWatch(){
//     if (timer !== null) return;

//     startTime = Date.now() - elapsedTime;
    
//     timer = setInterval(function () {
//         elapsedTime = Date.now() - startTime;
//         updateDisplay();
//     }, 10);             
// }
// function pauseWatch() {
//     if (timer !== null) {
//         clearInterval(timer);
//         timer = null;
//     }
// }
// function resetWatch() {
//         clearInterval(timer);
//         timer = null;
//         elapsedTime = 0;
//         startTime = 0;
// //         updateDisplay();
//     }
// let container = document.getElementById('container')
//     let h1 = document.createElement('h1')
//         h1.innerHTML = 'Hello World'
//         // container.appendChild(h1)
//         console.log(h1)



//         let btn = document.createElement("button")
//         btn.innerHTML = 'clickme'
//         container.appendChild(btn)
//         console.log(btn)

 



let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {
    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    document.getElementById("display").textContent =
        h + ":" + m + ":" + s;
}

function start() {
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);

    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
}

updateDisplay();
