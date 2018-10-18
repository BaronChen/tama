const status = require('../status');

class UpdateStatus {
  updateState(pet) {
    pet.state.timeInStatus += 5;
    if (pet.state.timeInStatus > pet.configValues.maxTimeInStatus) {
      if (pet.state.status === status.Awake) {
        pet.state.status = status.Sleeping;
      } else {
        pet.state.status = status.Awake;
      }
      pet.state.timeInStatus = 0;
    }
  }
}

module.exports = UpdateStatus;
