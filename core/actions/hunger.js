class Hunger {
  updateState(pet) {
    pet.state.healthPoint = Math.max(0, pet.state.healthPoint  - 10);
  }
}

module.exports = Hunger;
