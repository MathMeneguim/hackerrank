function miniMaxSum(arr) {

  arr.sort()
  let max = 0;
  let min = 0;

  for (let i = 0; i < arr.length - 1; i++) {
      min += arr[i];
  }

  let arrReversed = arr.reverse();
  for (let i = 0; i < arr.length - 1; i++) {
      max += arrReversed[i];

  }
  console.log(min, max)
}