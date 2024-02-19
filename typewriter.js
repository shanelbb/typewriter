const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 100);
}
setTimeout(() => {
  process.stdout.write('\n');
}, sentence.length * 100);
