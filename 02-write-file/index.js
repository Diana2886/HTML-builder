const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const stream = fs.createWriteStream(path.join(__dirname,'text.txt'));
const rl = readline.createInterface({ input, output });

rl.write('Hello! Please, enter some text\n');
rl.on('line', data => {
  if (data === 'exit') {
    rl.write('Goodbye!');
    process.exit();
  }
  stream.write(`${data}\n`);
});
rl.on('close', () => {
  rl.write('Goodbye!');
  process.exit();
});