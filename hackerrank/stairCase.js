let n = 4;
let simbol = '#';
let line = "";
let position = n - 1;


for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j < position) {
      line += " "
    } else {
      line += simbol;
    }
  }
    console.log(line);
    line = "";
    position--
}
