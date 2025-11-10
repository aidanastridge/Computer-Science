function factorial(n) {
    return n == 1 ? 1 : (n * factorial(n-1)); 
}

console.log(factorial(3));

function factorial(n) {
    
    function factIter(product,counter,max_count) {
    return counter > max_count ? product : factIter(counter*product,counter+1,max_count);
}
    return factIter(1,1,n);
}

function factIter(product,counter,max_count) {
    return counter > max_count ? product : factIter(counter*product,counter+1,max_count);
}

console.log(factorial(5));