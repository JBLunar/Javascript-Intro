// 2.5.1 - Variabler pg konstante værdier// 
// Variabler //
// const firstName = 'Krstian';
// const number_1 = 5;
// const number_2 = 12;
// const result = number_1 + number_2;
// console.log(result);
// result = result * 7; // Dette virker ikke fordi 'result' er deklareret med 'const' og kan ikke ændres.
// console.log(result);


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
let mainSection = document.getElementById('main');
let NewParagraph = document.createElement('p');
let FavoriteFood = 'Pasta with chicken and greens';
NewParagraph.innerText = 'My favorite foods are ' + FavoriteFood;
NewParagraph.classList.add('TextStyle')
mainSection.appendChild(NewParagraph);

let SecondSection = document.getElementById('SecondSection');
let SecondParagraph = document.createElement('p');
let SecondFavoriteFood = ' pizza ';
SecondParagraph.innerText = 'My favorite foods are ' + SecondFavoriteFood;
SecondParagraph.classList.add('TextStyle')
SecondSection.appendChild(SecondParagraph);

let ThirdSection = document.getElementById('ThirdSection');
let ThirdParagraph = document.createElement('p');
let ThirdFavoriteFood = ' burgers';
ThirdParagraph.innerText = 'My favorite foods are ' + ThirdFavoriteFood;
ThirdParagraph.classList.add('TextStyle')
ThirdSection.appendChild(ThirdParagraph);

