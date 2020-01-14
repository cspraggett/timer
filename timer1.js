const argv = process.argv.slice(2).filter(value => !isNaN(value) || value >= 0);
console.log(argv);
for (let i = 0; i < argv.length; i++) {
  setTimeout(() => process.stdout.write("beep\n"), argv[i] * 1000);
}
