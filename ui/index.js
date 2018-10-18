const statusIndicator = require('./components/statusIndicator');
const healthPointIndicator = require('./components/healthPointIndicator');
const poopIndicator = require('./components/poopIndicator');
const screen = require('./screen');

const render = (pet) => {
  statusIndicator.setUpStatusIndicator(pet);
  healthPointIndicator.setUpHealthPointIndicator(pet);
  poopIndicator.setUpPoopIndicator(pet);
  screen.render();

  setInterval(() => {
    screen.render();
  }, 100);
};


module.exports = {
  render
};
