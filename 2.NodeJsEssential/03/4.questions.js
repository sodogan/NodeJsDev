// read from stdin
// process.stdin
// write to stdout
// process.stdout

// process.stdout.write('Hello ');
// process.stdout.write('World \n\n\n');

const questions = [
  'What is your name?',
  'What would you rather be doing?',
  'What is your preferred programming language?'
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write('\n > ');
};

ask();
