// Newton 
function square(x) {
    return x*x;
};

function abs(x) {
    return x < 0 ? -x:x;
}

function sqrt(x){
    return sqrtIter(1,x);
}

function goodEnough(guess,x) {
    return abs(square(guess)-x) < 0.001;
}

function improve(guess,x) {
    return average(guess,(x/guess));
}

function average(x,y){
    return (x+y)/2;
}


/*function sqrtIter(guess, x) {
    return goodEnough(guess,x) ? guess : sqrtIter(improve(guess,x),x);

}*/

function newIf(predicate, then_clause, else_clause) {
    return predicate ? then_clause: else_clause;
}

function sqrtIter(guess,x) {
    return newIf(goodEnough(guess,x),guess,sqrtIter(improve(guess,x),x)); 
}


function sqrt(x) {
    
    function goodEnough(guess,x){
        return abs(square(guess))-x < 0.001; 
    }
    function improve(guess,x) {
        return average(guess,(x/guess));
    }
    function sqrtIter(guess, x) {
        return goodEnough(guess,x) ? guess : sqrtIter(improve(guess,x),x);
    }
    sqrtIter(1,x);
    
}
