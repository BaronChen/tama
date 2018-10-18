const contrib = require('blessed-contrib');
const status = require('../../core/status');
const grid = require('../grid');

const sleepLabel = 'Time to awake...';
const awakeLabel = 'Time to sleep...';

const gauge = grid.set(0, 0, 2, 4, contrib.gauge, {label: awakeLabel, stroke: 'green', fill: 'white', percent: 0});

const updateGaugeData = (pet) => () => {
  gauge.setData(pet.state.timeInStatus/pet.configValues.maxTimeInStatus); 
  switch (pet.state.status) {
    case status.Awake:
      gauge.setLabel(awakeLabel);
      break;
    case status.Sleeping:
      gauge.setLabel(sleepLabel);
      break;
    default:
      break;
  }
};

const setUpStatusIndicator = (pet) => {
  updateGaugeData(pet)();
  setInterval(updateGaugeData(pet), 1000);
};

module.exports = {
  setUpStatusIndicator
};
