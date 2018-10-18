const status = require('../status');

class WakeUp {
  updateState(state) {
    state.timeInStatus = 0;
    state.status = status.WakeUp;
  }
}

module.exports = WakeUp;
