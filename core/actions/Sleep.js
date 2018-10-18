const status = require('../status');

class Sleep {
  updateState(pet) {
    pet.state.timeInStatus = 0;
    pet.state.status = status.Sleeping;
  }
}

module.exports = Sleep;
