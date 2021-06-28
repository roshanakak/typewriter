const typewriter = function() {
  const sentence = "hello there from lighthouse labs\n";
  let delay = 0;
  let counter = 0;
  for (const char of sentence) {
    counter++;
    delay += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  }
};

typewriter();