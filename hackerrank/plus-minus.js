let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  let size = arr.length;
  let negative = 0;
  let positive = 0;
  let zeros = 0;

  for (let i = 0; i < size; i++) {
    let elemento = arr[i];

    if (elemento < 0) {
      negative++;
    } else if (elemento > 0) {
      positive++;
    } else {
      zeros++;
    }
  }

  function limitarDecimal(conta) {
    conta.toFixed(6);
    return conta;
  }

  return console.log(
    `${(positive / size).toFixed(6)}\n${(negative / size).toFixed(6)}\n${(
      zeros / size
    ).toFixed(6)}`
  );
}

plusMinus(arr)