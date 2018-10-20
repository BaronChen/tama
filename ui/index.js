const statusIndicator = require('./components/statusIndicator');
const healthPointIndicator = require('./components/healthPointIndicator');
const poopIndicator = require('./components/poopIndicator');
const commandPanel = require('./components/commandPanel');
const satietyIndicator = require('./components/satietyIndicator');
const screen = require('./screen');

const render = (pet) => {
  statusIndicator.setUp(pet);
  healthPointIndicator.setUp(pet);
  poopIndicator.setUp(pet);
  commandPanel.setUp(pet);
  satietyIndicator.setUp(pet);
  screen.render();

  setInterval(() => {
    screen.render();
  }, 100);
};


module.exports = {
  render
};
