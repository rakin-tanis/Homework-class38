'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

document.getElementById('nickname').textContent = 'akin';
document.getElementById('fav-food').textContent = 'yellow-melon';
document.getElementById('hometown').textContent = 'istanbul';

Array.from(document.getElementsByTagName('li')).forEach((liEl) => {
  liEl.classList.add('list-item');
});
