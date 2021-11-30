let sentence = "hello there from lighthouse labs";

sentence += "\n";

let i = 1;

for (const char of sentence) {
  i++;
  setTimeout(() => {
    process.stdout.write(char);
  }, i * 50);
}