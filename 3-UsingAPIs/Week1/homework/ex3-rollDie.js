'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

const rollDie = () =>
  new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
        return reject(new Error('Oops... Die rolled off the table.'));
      }
      if (roll === randomRollsToDo) {
        return resolve(value);
      }
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    return rollOnce(1);
  });

function main() {
  rollDie()
    .then((res) => console.log(`Success! Die settled on ${res}.`))
    .catch((error) => console.log(error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/* 
Explanation:
In the first version of the code even if the function throws an Error 
it going on to run and in the end, it was printing success messages.

But in the last version of the code, I used Promises. 
After changing state of a promise from pending to resolved or rejected, 
it doesn't change again. Therefore it does not print a success message 
after throwing an error once.
*/
