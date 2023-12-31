'use strict';

function setClock() {
  let dateInfo = new Date();
  let hour = modifyNumber(dateInfo.getHours());
  let min = modifyNumber(dateInfo.getMinutes());
  let sec = modifyNumber(dateInfo.getSeconds());
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth() + 1; //monthIndex를 반환해주기 때문에 1을 더해준다.
  let date = dateInfo.getDay();
  let dateto = dateInfo.getDate();

  let dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date];
  document.getElementById('time').innerHTML = hour + ':' + min;
  document.getElementById(
    'date'
  ).innerHTML = `${month}월 ${dateto}일 (${dayOfWeek})`;
}
function modifyNumber(time) {
  if (parseInt(time) < 10) {
    return '0' + time;
  } else return time;
}
// window.onload = function () {};

window.addEventListener('load', () => {
  setClock();
  setInterval(setClock, 1000); //1초마다 setClock 함수 실행
  console.log('작동중?');
});
