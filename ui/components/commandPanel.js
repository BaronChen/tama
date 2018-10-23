const contrib = require('blessed-contrib')
const grid = require('../grid');
const Feed = require('../../core/commands/feed')
const CleanPoop = require('../../core/commands/cleanPoop')
const screen = require("../screen");
grid.set(6, 0, 6, 2, contrib.markdown, {label:"Commands", markdown: "Feed(ctrl+f)\nClean(ctrl+c)\nBedding(ctrl+b)\nQuit(q)"})


const setUp = (pet) => {
  screen.key(['C-f'], (ch, key) => {
    pet.receiveCommand(new Feed());
  });
  screen.key(['C-c'], (ch, key) => {
    pet.receiveCommand(new CleanPoop());
  });
}

module.exports = {
  setUp
}