const blessed = require('blessed')
const grid = require('../grid')
const Feed = require('../../core/commands/feed')
const form = grid.set(6, 0, 6, 2, blessed.form, { content: 'Commands'})

const feedButton = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 1,
  top: 2,
  shrink: true,
  name: 'feed',
  content: 'Feed',
  style: {
    bg: 'blue',
    focus: {
      bg: 'red'
    },
    hover: {
      bg: 'red'
    }
  }
});

const cleanButton = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 1,
  top: 4,
  shrink: true,
  name: 'Clean',
  content: 'Clean',
  style: {
    bg: 'cyan',
    focus: {
      bg: 'red'
    },
    hover: {
      bg: 'red'
    }
  }
});

const putToBedButton = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 1,
  top: 6,
  shrink: true,
  name: 'Put To Bed',
  content: 'Put To Bed',
  style: {
    bg: 'magenta',
    focus: {
      bg: 'red'
    },
    hover: {
      bg: 'red'
    }
  }
});

const setUp = (pet) => {
  feedButton.on('press', () => {
    pet.receiveCommand(new Feed());
  });
}

module.exports = {
  setUp
}