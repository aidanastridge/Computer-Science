function pascal(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return pascal(n-1)
    }
}