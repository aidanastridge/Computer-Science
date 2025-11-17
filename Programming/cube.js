function cube(x){
    return x*x*x;
}

function sumIntegers(a,b) {
    return a > b ? 0 : a + sumIntegers((a+1),b);
}

function sumCubes(a,b) {
    return a > b ? 0 : cube(a) + sumCubes((a+1),b);
}
