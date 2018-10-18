const status = require('../status');

class WakeUp {
  updateState(pet) {
    pet.state.timeInStatus = 0;
    pet.state.status = status.WakeUp;
  }
}

module.exports = WakeUp;
