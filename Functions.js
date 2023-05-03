///Basics-Of-Functions :-




//Function declaration :=


//1.Example Addition:-

//Given examples
let a = 1;
let b = 2;
let c = 3;


function sumOfTheNumbers(a,b) //Parameters
{

console.log("The result of a + b is : ",(a+b));
console.log("The result of a + b is : ",(b+c));    
console.log("The result of a + b is : ",(c+a));        

}


sumOfTheNumbers(a,b);  //This is a calling for function
//The result of a + b is :  3
//The result of a + b is :  5 
//The result of a + b is :  4






//2.Example Subtraction:-

const e = 6;
const f = 5;
const g = 4;

function subtractionOfNumbers(x,y)
{
const subtraction = x - y;         //Code to be exeucted or perform an operations.
console.log("The result is ",subtraction);
console.log("Done");
}

subtractionOfNumbers(e,f); // The result is   1
subtractionOfNumbers(f,g); // The result is   1
subtractionOfNumbers(g,e); // The result is  -2






//3.Example Multiplication :-
//.Using Return keyword in the function:-

const h = 9;
const i = 8;

function multiplyTheNumbers(x,y){

    const multiplyOperation = x * y;

    return multiplyOperation;


}

const result = multiplyTheNumbers(h,i);


console.log("Result is : ",result); //Result is :  72





//4.Division :-
