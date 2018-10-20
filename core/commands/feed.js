const Eat = require('../actions/eat');

class Feed {
  execute(pet) {
    pet.performAction(new Eat());
  }
}

module.exports = Feed;
