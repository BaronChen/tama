const screen = require('./screen');
const contrib = require('blessed-contrib');
const blessed = require('blessed');


const grid = new contrib.grid({rows: 12, cols: 12, screen: screen})

module.exports = grid;