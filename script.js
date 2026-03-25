// 2.5.1 - Variabler pg konstante værdier// 
// Variabler //
// const firstName = 'Krstian';
// const number_1 = 5;
// const number_2 = 12;
// const result = number_1 + number_2;
// console.log(result);
// result = result * 7; // Dette virker ikke fordi 'result' er deklareret med 'const' og kan ikke ændres.
// console.log(result);

const myData = {
    name: 'Kristian',
    age: 20,
    city: 'Hurup Thy',

}


function myDataFunction(myData) {
    return myData.name + ' is ' + myData.age + ' years old and lives in ' + myData.city + '.';
}
const header=document.getElementById('test');
const myInfo=document.createElement('h2');
myInfo.innerText = myDataFunction(myData);
header.appendChild(myInfo);



// 
// const myNameElement = document.createElement('h2');

// const myAgeElement = document.createElement("h2")

// const myCityElement = document.createElement("h2")

// myNameElement.innerText = myData.name;

// myAgeElement.innerText = myData.age;

// myCityElement.innerText = myData.city;
// header.appendChild(myNameElement);

// header.appendChild(myAgeElement);

// header.appendChild(myCityElement);


// Assignment 2.5.2 - Strings
// FirstPart of the assignment
let favoriteCity = 'Hurup Thy';
let cityLength = favoriteCity.length;
let Sentence = favoriteCity + ' har ' + cityLength + ' bogstaver.';
console.log(Sentence);
// SecondPart of the assignment
let fullName = 'Kristian Gustav Lund Nielsen';
let veryFirstName = fullName.substring (0, 8);
console.log(veryFirstName);
let LastName = fullName.substring (21, 28);
console.log(LastName);


// assignment 3.3 - DOM'en
let mainSection = document.getElementById('mainSection');



let NewParagraph = document.createElement('p');
let FavoriteFood = 'Pasta with chicken and greens';
NewParagraph.innerText = 'My favorite foods are ' + FavoriteFood;
NewParagraph.classList.add('textStyle')
mainSection.appendChild(NewParagraph);


let SecondParagraph = document.createElement('p');
let SecondFavoriteFood = ' pizza ';
SecondParagraph.innerText = 'My favorite foods are ' + SecondFavoriteFood;
SecondParagraph.classList.add('textStyle')
mainSection.appendChild(SecondParagraph);


let ThirdParagraph = document.createElement('p');
let ThirdFavoriteFood = ' burgers';
ThirdParagraph.innerText = 'My favorite foods are ' + ThirdFavoriteFood;
ThirdParagraph.classList.add('textStyle')
mainSection.appendChild(ThirdParagraph);
