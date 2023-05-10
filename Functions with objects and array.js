//Functions with objects and array in javascript


//1.addToCart example using function and spread operator:-

function addToCart(...setValue) //spread operator.
{

return setValue;

}

const getValue = addToCart(200,400,500,600,700,800,900);
console.log(getValue); //(7) [200, 400, 500, 600, 700, 800, 900]


//