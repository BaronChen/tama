class Eat {
  updateState(pet) {
    pet.state.satiety = Math.min(pet.configValues.maxSatiety, pet.state.satiety  + 25);; 
    pet.state.healthPoint = Math.min(pet.configValues.maxHealthPoint, pet.state.healthPoint  + 20);
  }
}

module.exports = Eat;
