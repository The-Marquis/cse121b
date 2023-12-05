/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Marquis Jackson';
let currentYear = '2023';
let picturePath = 'images/marquis_portrait_photo.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.images.item(0);


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', picturePath)
imageElement.setAttribute('alt', 'Profile image of picturePath');





/* Step 5 - Array */

let faveFoods = ['kiwis', 'milk', 'cheescake', 'hamburgers'];

faveFoods.forEach((food) => {foodElement.innerHTML += `<br>${food}`})


let faveFood = "Spaghetti";
faveFoods.push(faveFood);
foodElement.innerHTML ='';
faveFoods.forEach((food) => {foodElement.innerHTML += `<br>${food}`})
faveFoods.reverse();
faveFoods.pop();
faveFoods.reverse();
foodElement.innerHTML = '';
faveFoods.forEach((food) => {foodElement.innerHTML += `<br>${food}`})



