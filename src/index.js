import "./styles.css";

var clock = document.querySelector(".h2_clock");
get_time(); /*클래스 불러오고, 함수 적용 */

function get_time() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = hour + ":" + minutes + ":" + seconds; /*innerhtml로 삽입 */
}

function reroad() {
  setInterval(get_time, 1000); /*단위는 밀리초, 1000초=1초 */
}

reroad();

const button = document.querySelector(".button");

window.onload = function start() {
  button.addEventListener("click", addAddr);
  function addAddr() {
    const result = document.getElementById("addrlist");
    const newAddr = document.getElementsByName("name")[0].value;
    const item = document.createElement("li");
    const txt = document.createTextNode(newAddr);

    item.appendChild(txt);
    result.appendChild(item);
  }
};
