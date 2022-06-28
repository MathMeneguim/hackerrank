let arr = [1,2,3,3,3,3,2,2]
// ver quantas vezes o maxvalue eh contado 
let resultado = 0;
let comparador1 = Math.max(...arr);

for (let i=0;i<arr.length;i++) {

    if (comparador1==arr[i]){
      resultado++
    }
}
return resultado


function birthdayCakeCandles(candles) {
  // Write your code here
  let resultado = 0;
  let comparador1 = Math.max(...candles);

  for (let i = 0; i < candles.length; i++) {
      if (comparador1 == candles[i]) {
          resultado++
      }
  }
  return resultado
}
