const blessed = require('blessed');

const screen = blessed.screen();

screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  return process.exit(0);
});


module.exports = screen;
