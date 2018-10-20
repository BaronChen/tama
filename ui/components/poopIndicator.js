const contrib = require('blessed-contrib');
const status = require('../../core/status');
const grid = require('../grid');

const cleanLabel = "CLEAN";
const poopLabel = "POOP";

const options = { segmentWidth: 0.06 // how wide are the segments in % so 50% = 0.5
  , segmentInterval: 0.11 // spacing between the segments in % so 50% = 0.550% = 0.5
  , strokeWidth: 0.11 // spacing between the segments in % so 50% = 0.5
  , elements: 5 // how many elements in the display. or how many characters can be displayed.
  , display: cleanLabel // what should be displayed before first call to setDisplay
  , elementSpacing: 4 // spacing between each element
  , elementPadding: 2 // how far away from the edges to put the elements
  , color: 'green' // color for the segments
  , label: 'Poop Alert!'};

const lcd = grid.set(2, 0, 4, 4, contrib.lcd, options);

const updateLcdData = (pet) => () => {
  lcd.setDisplay(pet.state.hasPoop ? poopLabel : cleanLabel);
  lcd.setOptions({
    color: pet.state.hasPoop ? "red" : "green"
  });
};

const setUp = (pet) => {
  updateLcdData(pet)();
  setInterval(updateLcdData(pet), 100);
};

module.exports = {
  setUp
};
