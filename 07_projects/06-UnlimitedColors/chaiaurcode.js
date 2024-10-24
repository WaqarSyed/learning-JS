let swap;
const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const startChangingColor = () => {
  if (!swap) {
    swap = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
      console.log("Activated");
    }, 1000);
  }
};
const stopChangingColor = () => {
  clearInterval(swap);
  console.log("Deactivated");
  swap = null;
};
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
