const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
console.log(body);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;

      default:
        break;
    }
  });
});
