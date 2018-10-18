const processSleepStatus = require('./processSleepAwakeStatus');
const becomeHungry = require('./becomeHungry');

const scheduleTasks = (pet) => {
  setInterval(processSleepStatus(pet), 1000);
  setInterval(becomeHungry(pet), 5000);
};

module.exports = {
  scheduleTasks
};