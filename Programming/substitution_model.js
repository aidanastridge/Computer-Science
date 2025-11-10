function inc(a) {
    return a + 1;
}

function dec(a) {
    return a - 1;
}

function plus(a,b) {
    return a == 0 ? b : (plus(dec(a),inc(b)));
}

function plus(a,b) {
    return a == 0 ? b : inc(plus(dec(a),b));
}

console.log(plus(4,5));

