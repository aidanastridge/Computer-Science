function a(x,y) {
    if (y==0) {
        return 0;
    }
    else if (x==0) {
        return 2 * y;
    }
    else if (y==1) {
        return 2;
    }
    else {
       return a((x-1),a(x,(y-1))); 
    }
}

console.log(a(1,10));
console.log(a(2,4));
console.log(a(3,3));