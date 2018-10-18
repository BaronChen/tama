const Pet = require('./core/pet');
const ui = require('./ui');
const taskRunner = require('./tasks/task-runner');

const pet = new Pet();

taskRunner.scheduleTasks(pet);
ui.render(pet);

