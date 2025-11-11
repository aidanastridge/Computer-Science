function pascal(n,k) {
  if (k === 0 || k === n) {
    return 1;}
    else {
        return pascal(n-1,k-1)+pascal(n-1,k);
    }
}

console.log(pascal(4,2));
