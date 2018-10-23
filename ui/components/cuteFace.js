const blessed = require('blessed')
const grid = require('../grid');
const screen = require('../screen');

grid.set(2, 4, 10, 4, blessed.ANSIImage, {file:"/Users/baron/code/tama/ui/assets/original.gif", parent:screen});

const setUp = (pet) => {

}

module.exports = {
  setUp
}