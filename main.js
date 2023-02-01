let timer = document.getElementById('timer')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// タイムアウトID
let timeoutID;

// 時間を表示する関数
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  timer.textContent = `${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

// スタートボタンがクリックされたら時間を進める
start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
  startTime = Date.now();
  displayTime();
});

// ストップボタンがクリックされたら時間を止める
stop.addEventListener('click', function() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

// リセットボタンがクリックされたら時間を0に戻す
reset.addEventListener('click', function() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  timer.textContent = '00:00.000';
  stopTime = 0;
});