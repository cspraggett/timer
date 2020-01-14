const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

const keys = {
  b: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

stdin.on("data", key => {
  if (!isNaN(keys[key]) || keys[key] > 0) {
    if (keys[key] > 0) {
      console.log(`Setting timer for ${keys[key]} seconds...`);
    }
    setTimeout(() => console.log("beep"), keys[key] * 1000);
  } else if (key === "\u0003") {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
  console.log(key);
});
