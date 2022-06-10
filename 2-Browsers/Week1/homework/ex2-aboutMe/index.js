'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const map = new Map([
  ['nickname', 'akin'],
  ['fav-food', 'yellow-melon'],
  ['hometown', 'istanbul'],
]);

const list = document.querySelector('ul');
const arr = Array.from(list.children);

arr.forEach((li) => {
  li.classList.add('list-item');
  Array.from(li.children).forEach((el) => {
    if (map.has(el.id)) {
      el.textContent = map.get(el.id);
    }
  });
});
