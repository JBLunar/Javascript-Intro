console.log('Hello world!');



function addNumbers(numberOne,numberTwo){

    let mySum = numberOne + numberTwo;
    return mySum;
}


function subtractNumbers(numberOne,numberTwo){

    let mySum = numberOne - numberTwo;
    return mySum;
}

function multiplyNumbers (numberOne,numberTwo){

    let mySum = numberOne * numberTwo;
    return mySum;
}

function divideNumbers (numberOne,numberTwo){

    let mySum = numberOne / numberTwo;
    return mySum;
}



console.log(addNumbers(numberOne,numberTwo));
console.log(subtractNumbers(numberOne,numberTwo));
console.log(multiplyNumbers(numberOne,numberTwo));
console.log(divideNumbers(numberOne,numberTwo));


console.log(addNumbers(subtractNumbers(varOne, varTwo) ,subtractNumbers(varThree, varFour)    )  );

let varOne = 10;
let varTwo = 20;
let varThree = 30;
let varFour = 1;



const myButton= document.getElementById('test');
myButton.addEventListener("click",test);

function test(){
    alert('Button was clicked!');
}