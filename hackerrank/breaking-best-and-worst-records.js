const arr = [10, 5, 20, 20, 4, 5, 2, 25, 1];

let size = arr.length;
let elemento = 0;
let comparador = 0;
let maior = 0;
let menor = 0;

for (i=0;i<size;i++) {
  comparador = arr[0]
  elemento = arr[i];
  if (elemento > comparador) {
    if (elemento > maior) {
      maior += arr[i];
    }
    
  } else if (elemento < comparador) {
    menor++
  }  
  
}