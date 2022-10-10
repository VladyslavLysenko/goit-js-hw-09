function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector("body");
console.log(startBtn);
console.log(stopBtn);
let interval = null;

startBtn.addEventListener("click", (onClickStart))

function onClickStart(e) {
  body.style.backgroundColor = `${getRandomHexColor()}`
  
  interval = setInterval(
    () => {
      body.style.backgroundColor = `${getRandomHexColor()}`
    },
    1000);
  startBtn.setAttribute("disabled", true)
  stopBtn.removeAttribute("disabled")

}

stopBtn.addEventListener("click", onClickStop)
function onClickStop(e) {
  clearInterval(interval)
  startBtn.removeAttribute("disabled")
  stopBtn.setAttribute("disabled", true)
  
}

