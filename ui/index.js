const statusIndicator = require('./components/statusIndicator');
const healthPointIndicator = require('./components/healthPointIndicator');
const poopIndicator = require('./components/poopIndicator');
const satietyIndicator = require('./components/satietyIndicator');
const commandPanel = require('./components/commandPanel');
const cuteFace = require('./components/cuteFace');

const screen = require('./screen');

const render = (pet) => {
  statusIndicator.setUp(pet);
  healthPointIndicator.setUp(pet);
  poopIndicator.setUp(pet);
  satietyIndicator.setUp(pet);

  commandPanel.setUp(pet);

  screen.render();

  setInterval(() => {
    screen.render();
  }, 100);
};


module.exports = {
  render
};
