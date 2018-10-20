const Poop = require('../core/actions/poop');

module.exports = (pet) => () => {
  if (!pet.state.hasPoop && pet.state.satiety >= pet.configValues.maxSatiety * 0.75) {
    pet.performAction(new Poop());
  }
};
