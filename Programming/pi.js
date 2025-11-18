function piSum(a, b) {
  return a > b ? 0 : ((a + 2) * a) / 1.0 + piSum(a + 4, b);
}

function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
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

function sumIntegers(a, b) {
  return sum(identity(a), inc(b));
}

function piSum(a, b) {
  function piTerm(x) {
    return ((x + 2) * x) / 1.0;
  }
  function piNext(x) {
    return x + 4;
  }
  return sum(piTerm(a), piNext(b));
}

(x) => {
  x + 4;
};

function piSum(a, b) {
  return sum(
    (x) => {
      return ((x + 2) * x) / 1.0;
    },
    a,
    (x) => {
      return x + 4;
    },
    b,
  );
}

function integral(f, a, b, dx) {
  return sum(
    f,
    dx / 2.0 + a,
    (x) => {
      return x + dx;
    },
    b,
    dx,
  );
}
