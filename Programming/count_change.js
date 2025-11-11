function countChange(amount) {
    return cc(amount,5)
}

function cc(amount, kinds_of_coins) {
  if (amount === 0) return 1;
  if (amount < 0 || kinds_of_coins === 0) return 0;

  return cc(amount, kinds_of_coins - 1) +
         cc(amount - firstDenomination(kinds_of_coins),
            kinds_of_coins);
}

function firstDenomination(kinds_of_coins) {
    if (kinds_of_coins === 1) {return 1;}
    else if (kinds_of_coins === 2) {return 5;}
    else if (kinds_of_coins === 3) {return 10;}
    else if (kinds_of_coins === 4) {return 25;}
    else {return 50;}
}

console.log(countChange(100));