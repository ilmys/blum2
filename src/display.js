function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('╔╗ ╦  ╦ ╦╔╦╗  ╔╗ ╔═╗╔╦╗'.green);
  console.log('╠╩╗║  ║ ║║║║  ╠╩╗║ ║ ║ '.green);
  console.log('╚═╝╩═╝╚═╝╩ ╩  ╚═╝╚═╝ ╩ '.green);
  console.log('by:signalrekt'.cyan);
  console.log();
}

module.exports = { displayHeader };
