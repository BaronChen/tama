const statusIndicator = require('./statusIndicator');
const healthPointIndicator = require('./healthPointIndicator');
const screen = require('./screen');

const render = (pet) => {
  statusIndicator.setUpStatusIndicator(pet);
  healthPointIndicator.setUpHealthPointIndicator(pet);
  screen.render();

  setInterval(() => {
    screen.render();
  }, 100);
};


module.exports = {
  render
};
