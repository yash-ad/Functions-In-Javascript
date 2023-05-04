//NestedFunction :=
//You may nest a function within another function.
//The nested (inner) function is private to its containing (outer) function.
function squareOfNumbers(x,y){

    let squareOfX = square(x);
    let squareOfY = square(y);


function square(num){

    return num * num ;
    

}


return squareOfX + squareOfY;





}
console.log(squareOfNumbers(2,3)); 
// Here  the output of squareOfNumbers is 13 , how here we have given value in the parameter is 2 and 3 we know the square of 2 is 4 and square of 3 is 9 and both addition 13 so the output willbe 13.