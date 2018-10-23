const Clean = require("../actions/clean");

class CleanPoop {
  execute(pet) {
    pet.performAction(new Clean());
  }
}

module.exports = CleanPoop;
