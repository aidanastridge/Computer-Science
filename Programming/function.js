function f(n) {
      if (n === 0) return 0;
      if (n === 1) return 1;
      if (n === 2) return 2;
      return f(n-1)+2*f(n-2)+3*f(n-3);
}

console.log(f(4));

function f(n) {
    fIter(3,n);
}

function fIter(a,count) {
    return count < 3 ? a : fIter((count-1));
}
