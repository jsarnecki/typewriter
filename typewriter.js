let sentence = "Well hello there Lighthouse labs";

let lastDur = sentence.length * 50;

let duration = 0;
for (const letter of sentence) {
  duration += 50;
  setTimeout( ()=>{
    process.stdout.write(letter);
  }, duration);
};

setInterval(() => {
  process.stdout.write("\n");
  process.exit();
}, lastDur);

