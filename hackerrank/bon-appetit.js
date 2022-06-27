const bill = [2, 4, 6];
let didntEat = 2;
let anna = 0;
let cobrou = 6;

function bonAppetit(bill, k, b) {
  let anna = 0;
  for (let i = 0; i < bill.length; i++) {
    anna += bill[i];
  }
  anna = (anna - bill[k]) / 2;

  if (b > anna) {
    console.log(b- anna);
  } else {
    console.log("Bon Appetit");
  }
}

bonAppetit(bill,didntEat,cobrou)