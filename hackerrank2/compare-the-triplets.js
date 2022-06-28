function compareTriplets(a, b) {
  aPoints = 0;
  bPoints = 0;

  for (i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    }
    if (a[i] < b[i]) {
      bPoints++;
    }
  }
  return [aPoints, bPoints];
}
