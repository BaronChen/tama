const contrib = require('blessed-contrib');
const status = require('../../core/status');
const grid = require('../grid');

const gauge = grid.set(0, 4, 2, 4, contrib.gauge, {label: 'Health Point', stroke: 'red', fill: 'white', percent: 0, showLabel: true});

const updateGaugeData = (pet) => () => {
  gauge.setData(pet.state.healthPoint/pet.configValues.maxHealthPoint);
};

const setUp = (pet) => {
  updateGaugeData(pet)();
  setInterval(updateGaugeData(pet), 100);
};

module.exports = {
  setUp
};
