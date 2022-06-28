function countingValleys(n, s) {
  let valleys = 0;
  let elevation = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] == "D") {
      elevation--;
    } else {
      if (elevation == -1) {
        valleys++;
      }
      elevation++;
    }
  }
  return valleys;
}
