let query = [
  [8, 8, 9],
  [8, 9, 10],
];
let n = query.length;

for (let i = 0; i < n; i++) {
  let elemento = query[i];
  let x = elemento[(i, 0)]; //cat A
  let y = elemento[(i, 1)]; //cat B
  let z = elemento[(i, 2)]; //mouse C

  let xToZ = Math.abs(x - z);
  let yToZ = Math.abs(y - z);

  if (xToZ < yToZ) {
    console.log("cat A");
  } else if (yToZ < xToZ) {
    console.log("cat B");
  } else {
    console.log("mouse C");
  }
}

function catAndMouse(x, y, z) {
  const xToZ = Math.abs(x - z);
  const yToZ = Math.abs(y - z);
  if (xToZ < yToZ) return "Cat A";
  else if (yToZ < xToZ) return "Cat B";
  return "Mouse C";  
}
catAndMouse()