'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const style = `font-family: monospace, sans-serif;
                  font-size: 10em;
                  letter-spacing: 2px;
                  width: fit-content;
                  margin: auto;`;
  const timeContainer = document.createElement('div');
  timeContainer.style = style;
  document.body.appendChild(timeContainer);
  document.body.parentElement.style.height = '100%'
  document.body.style.height = '100%';
  document.body.style.display = 'flex';
  updateTime(timeContainer);
}

function updateTime(container) {
  const time = new Date();
  const hours = format(time.getHours());
  const minutes = format(time.getMinutes());
  const seconds = format(time.getSeconds());
  container.textContent = hours + ':' + minutes + ':' + seconds;
  setInterval(() => {
    updateTime(container);
  }, 1000);
}

function format(num) {
  return num < 10 ? '0' + num : num;
}

window.addEventListener('DOMContentLoaded', addCurrentTime);
