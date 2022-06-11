'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
let timeContainer;

function addCurrentTime() {
  if (!timeContainer) return;
  const time = new Date();
  const hours = format(time.getHours());
  const minutes = format(time.getMinutes());
  const seconds = format(time.getSeconds());
  timeContainer.textContent = hours + ':' + minutes + ':' + seconds;
}

const format = (num) => {
  return num < 10 ? '0' + num : num;
};

const initialize = () => {
  const style = `font-family: monospace, sans-serif;
                  font-size: 10em;
                  letter-spacing: 2px;
                  width: fit-content;
                  margin: auto;`;
  timeContainer = document.createElement('div');
  timeContainer.style = style;
  document.body.appendChild(timeContainer);
  document.body.parentElement.style.height = '100%';
  document.body.style.height = '100%';
  document.body.style.display = 'flex';
};

setInterval(addCurrentTime, 1000);

window.addEventListener('DOMContentLoader', initialize());
