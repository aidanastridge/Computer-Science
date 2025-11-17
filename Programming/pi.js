function piSum(a, b) {
  return a > b ? 0 : ((a + 2) * a) / 1.0 + piSum(a + 4, b);
}

piSum(2, 6);

function sum(a, b) {
  return a > b ? 0 : ;
}

function inc(n) {
  return n + 1;
}

function cube(x) {
  return x * x * x;
}

function sumCubes(a, b) {
  return sum(cube(a, inc(b)));
}

function identity(x) {
  return x;
}

function sumIntegers(a,b) {
  return sum(identity(a), inc(b));
}

function piSum(a, b) {
  function piTerm(x) {
    return ((x+2)*x)
  }
}
