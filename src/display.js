function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('
╔╗ ╦  ╦ ╦╔╦╗  ╔╗ ╔═╗╔╦╗
╠╩╗║  ║ ║║║║  ╠╩╗║ ║ ║ 
╚═╝╩═╝╚═╝╩ ╩  ╚═╝╚═╝ ╩ 
'.cyan);
 console.log();
}

module.exports = { displayHeader };
