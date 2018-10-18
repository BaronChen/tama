class Poop {
  updateState(pet) {
    pet.state.satiety = 0;
    pet.state.hasPoop = true;
  }
}

module.exports = Poop;
