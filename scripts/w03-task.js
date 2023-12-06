/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    return num1 + num2;
}

function addNumbers(){
    let num1 = Number(document.querySelector('#add1').value);
    let num2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(num1,num2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(num1, num2){
    return num1 - num2;
}

function subtractNumbers(){
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(num1,num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (num1,num2) => num1 * num2;

const multiplyNumbers = () =>{
    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1,num2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (num1,num2) => num1 / num2;

function divideNumbers(){
    let num1 = Number(document.querySelector('#dividend').value);
    let num2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(num1,num2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function calculateTotal(){
    let numericValue = document.querySelector('#subtotal');
    if (document.querySelector('#member')){
        numericValue -= numericValue *0.15;
    }
    document.querySelector('#total').innerHTML = '$'+ numericValue;
}

document.querySelector('#getTotal').addEventListener('click', calculateTotal);

/* ARRAY METHODS - Functional Programming */
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').value = array;

/* Output Odds Only Array */
const odd = (num) => num % 2 != 0;
document.querySelector('#odds').innerHTML = array.filter(odd);

/* Output Evens Only Array */
const even = (num) => num % 2 == 0;
document.querySelector('#evens').innerHTML = array.filter(even);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = array.reduce((sum, num) => sum + num);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = array.map(num => num*2);

/* Output Sum of Multiplied by 2 Array */

function getSumOfMultiplied(array){
    multipliedArray = array.map(num => num*2);
    return multipliedArray.reduce((sum, num) => sum + num)
}
document.querySelector('#sumOfMultiplied').innerHTML = getSumOfMultiplied(array);