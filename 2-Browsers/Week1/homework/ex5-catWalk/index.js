'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const STEP = 10;
const WALK_INTERVAL = 50;
const DANCE_INTERVAL = 5000;

function catWalk() {
  const imgEl = document.querySelector('img');
  const position = imgEl.style.left
    ? imgEl.style.left
    : '-' + imgEl.width + 'px';
  const newPosition = Number(position.replace('px', ''));

  if (isInTheMiddle(newPosition, imgEl.width)) {
    dance(imgEl, newPosition);
  } else {
    walk(imgEl, newPosition);
  }
}

function dance(element, position) {
  clearInterval(interval);
  element.src =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
  setTimeout(() => {
    element.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    walk(element, position);
    interval = setInterval(catWalk, WALK_INTERVAL);
  }, DANCE_INTERVAL);
}

function walk(element, position) {
  position += STEP;
  if (isOutOfPage(position)) {
    position = '-' + element.width;
  }
  element.style.left = position + 'px';
}

const isInTheMiddle = (position, elementWidth) => {
  return (
    position + elementWidth / 2 > window.innerWidth / 2 - STEP / 2 &&
    position + elementWidth / 2 <= window.innerWidth / 2 + STEP / 2
  );
};

const isOutOfPage = (position) => position > window.innerWidth;

let interval = setInterval(catWalk, WALK_INTERVAL);
