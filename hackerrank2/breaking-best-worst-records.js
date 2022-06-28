const arr = [10, 5, 20, 18, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  // Write your code here
  let size = scores.length;
  let elemento = 0;
  let recordMaior = 0;
  let recordMenor = scores[0];
  let maior = 0;
  let menor = 0;

  for (let i = 0; i < size; i++) {
    elemento = scores[i];
    if (elemento > recordMaior && elemento > scores[0]) {
      recordMaior = elemento;
      maior++;
    } else if (elemento < recordMenor && elemento < scores[0]) {
      recordMenor = elemento;
      menor++;
    }
  }
  return [maior, menor];
}
breakingRecords(arr);
