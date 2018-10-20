const status = require('./status');

class Pet {
  constructor () {
    this.state = this.getInitialState();
    this.configValues = {
      maxTimeInStatus: 100,
      maxSatiety: 100,
      maxHealthPoint: 100,
      maxHappiness: 100
    };
  }

  getInitialState() {
    return {
      healthPoint: 100,
      timeInStatus: 0,
      satiety: 0,
      happiness: 50,
      age: 1,
      status: status.Awake,
      hasPoop: false
    };
  }

  performAction(action) {
    action.updateState(this);
  }

  receiveCommand(command) {
    command.execute(this);
  }
}

module.exports = Pet;
