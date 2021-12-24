import "./styles.css";

var clock = document.querySelector(".h2_clock");
get_time();

function get_time() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = hour + ":" + minutes + ":" + seconds;
}

function reroad() {
  setInterval(get_time, 1000);
}

reroad();

const button = document.querySelector(".button");
function handleButton_onClick(event) {
  console.log("클릭했음!");
}
window.onload = function start() {
  button.addEventListener("click", handleButton_onClick);
};
