const status = require('./status');

class Pet {
  constructor () {
    this.state = this.getInitialState();
    this.configValues = {
      maxTimeInStatus: 100,
      maxsatiety: 100,
      maxhealthPoint: 100,
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

  

}

module.exports = Pet;
