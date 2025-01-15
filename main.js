// main.js (main-project-repo)
const { greet } = require('./demo/submodule-repo/utils');  // Importing greet from submodule

console.log(greet('Alice'));  // This will use the submodule's function
