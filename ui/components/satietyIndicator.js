const contrib = require('blessed-contrib');
const grid = require('../grid');

const donut = grid.set(0, 8, 4, 4, contrib.donut, {
  label: '^^...^^',
  radius: 16,
  arcWidth: 4,
  yPadding: 2,
  data: [{ label: 'Satiety', percent: 87 }]
});

const updateDonut = (pet) => () => {
  const pct = pet.state.satiety / pet.configValues.maxSatiety;
  let color = "green";
  if (pct >= 0.25) color = "cyan";
  if (pct >= 0.5) color = "yellow";
  if (pct >= 0.75) color = "red";  
  donut.setData([
    {percent: parseFloat(pct.toFixed(2)), label: 'satiety', 'color': color}
  ]);
};

const setUp = (pet) => {
  updateDonut(pet)();
  setInterval(updateDonut(pet), 100);
};

module.exports = {
  setUp
};
