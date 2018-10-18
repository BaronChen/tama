const UpdateStatus = require('../core/actions/updateStatus');

module.exports = (pet) => () => {
  pet.performAction(new UpdateStatus());
};
