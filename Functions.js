///Basics-Of-Functions :-




//1)Function declaration :=


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
const result = multiplyTheNumbers(h,i); //Here we called a function at the top, yes we can do that its a behaviour of javascript so called hoisting.

function multiplyTheNumbers(x,y){


    const multiplyOperation = x * y;

    return multiplyOperation;


}

console.log("Result is : ",result); //Result is :  72





//4.Division :-
//Lets take an example of hoisting:-
//Here we  have used a hoisting example or hoisting term that means its a behaviour of javascript declarations are hoisted to the top of scope,its basically relation to the  memory management.
//Ofcourse we can declare our function at the top.

function divideTheNumbers(x,y){

    const divisionOperation = x % y;

    return divisionOperation;

}



let k = 10;

let l = 20;

const getResult = divideTheNumbers(k,l);

console.log("Dividation is : ",getResult); //Here the result is division of 10 and 20 is 10.




//2)Function Expression:=

//Here is between the function declaration and function expression the minor diferrence is function expression cannot hoisted.

//1.Example square :-

const squareOfNumber = function(num)
{

    return num * num
}

console.log(squareOfNumber(3)); //9
console.log(squareOfNumber(4));//16
console.log(squareOfNumber(5));//25



//2.Example of addition :-

let additionOfNumber = function(num){

    return num + num;
}

console.log(additionOfNumber(6)); //12
console.log(additionOfNumber(7)); //14
console.log(additionOfNumber(8)); //16



//3.Example of Subtraction :-

let subtractionOfNumber = function(value)
{

    return value - value;
}


console.log(subtractionOfNumber(9)); //0



//4.Example :-
//Task 1: Write a function named letterFinder that accepts two parameters: word and match.
//Task 2: Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.
//Task 3: Add an if statement inside the for loop whose condition works as follows:

 //Access each of the letters inside the passed in word using the counter variable, with word[i]. 

 //Check if the current word[i] is equal to the value of match.

 //Task 4:console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

 //Task 5:Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

 //Task 6:Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".


function letterFinder(word,match){
for(let i = 0 ; i < word.length ; i++)
{
if(word[i] === match){

    console.log('Found the', match, 'at position', i)
}
else{
    console.log('---No match found at', i)

}

}

}

letterFinder("TEST","T");



















