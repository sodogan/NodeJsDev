const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting . . . ${currentTime / 1000} seconds`);
};

console.log(`Setting a ${waitTime / 100} seconds delay`);

const timerFinished = () => {
  clearInterval(interval);
  console.log('Done');
};

const interval = setInterval(incTime, waitInterval);

setTimeout(timerFinished, waitTime);
