let timer = null;

// const $minutes = select(".minutes");
const $seconds = select(".seconds");
const $centi = select(".centi");

// let minutes = 0;
let seconds = 55;
let centi = 0;

function appendZero(number) {
  if (number < 10) {
    return "0" + String(number);
  }
  return String(number);
}

function calcMinuts(seconds) {
  let minutes = seconds / 60;
  return Math.floor(minutes);
}

function calcSeconds(centi) {
  let _seconds = centi / 100;
  return Math.floor(_seconds);
}

function startCountingUp() {
  let _timePassed = 0;
  timer = setInterval(() => {
    if (_timePassed > 99) {
      _timePassed = 0;
      centi = 0;
    }

    _timePassed = _timePassed + 1;
    centi = _timePassed;
    seconds = calcSeconds(seconds * 100 + centi);
    minutes = calcMinuts(seconds);
  }, 10);
}

function renderTime() {
  setInterval(() => {
    $seconds.innerHTML = appendZero(seconds);
    $centi.innerHTML = appendZero(centi);
    // $minutes.innerHTML = appendZero(minutes);
  }, 10);
}

function Timer() {
  select(".start-btn").addEventListener("click", () => {
    startCountingUp();
    renderTime();
  });
}
