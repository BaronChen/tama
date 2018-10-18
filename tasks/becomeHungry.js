const Hunger = require('../core/actions/hunger');

module.exports = (pet) => () => {
  pet.performAction(new Hunger());
};
