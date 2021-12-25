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
  /*실시간으로 숫자 보여주기.1초에 한 번씩 실행*/
  setInterval(get_time, 1000); /*단위는 밀리초, 1000초=1초 */
}

reroad();

const button = document.querySelector(".button"); /*class button불러오기*/
function register(event) {
  const result = document.getElementById("addrlist");
  const newAddr = document.getElementsByName("name")[0]
    .value; /*name에서 첫 번째 값 불러오기 */
  const item = document.createElement("li"); /*li생성, 줄바꿈 */
  const txt = document.createTextNode(newAddr); /*result들어갈 빈 칸 생성 */
  item.appendChild(txt);
  result.appendChild(item);
}

function start() {
  button.addEventListener(
    "click",
    register
  ); /*button에 함수실행기능과 이벤트추가 */
}

start();
