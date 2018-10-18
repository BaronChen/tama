const processSleepStatus = require('./processSleepAwakeStatus');

const scheduleTasks = (pet) => {
  setInterval(processSleepStatus(pet), 1000);
};

module.exports = {
  scheduleTasks
};