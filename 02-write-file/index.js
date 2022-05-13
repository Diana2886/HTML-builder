const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');
const input = process.stdin;
const output = process.stdout;

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