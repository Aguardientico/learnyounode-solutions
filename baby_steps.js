var total = 0;
length = process.argv.length;
for (var i = length - 1; i > 1; i--) {
  total += Number(process.argv[i]);
}
console.log(total);
