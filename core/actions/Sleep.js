const status = require('../status');

class Sleep {
  updateState(state) {
    state.timeInStatus = 0;
    state.status = status.Sleeping;
  }
}

module.exports = Sleep;
