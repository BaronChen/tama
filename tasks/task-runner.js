const processSleepStatus = require('./processSleepAwakeStatus');
const becomeHungry = require('./becomeHungry');
const gotToPoop = require('./gotToPoop');

const scheduleTasks = (pet) => {
  setInterval(processSleepStatus(pet), 1000);
  setInterval(becomeHungry(pet), 5000);
  setInterval(gotToPoop(pet), 5000);
};

module.exports = {
  scheduleTasks
};