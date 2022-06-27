const matriz = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
function diagonalDifference(arr) {
  const count = arr.length;
  let diagonalP = 0;
  let diagonalS = 0;
  let result = 0;
  for (let i = 0; i < count; i++) {
    diagonalP += arr[i][i];
    diagonalS += arr[i][arr.length - 1 - i];
  }
  result = Math.abs(diagonalP - diagonalS);
  return result;
}
console.log(calculo(matriz));
