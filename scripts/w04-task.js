/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : 'Marquis Jackson',
    photo : 'images/marquis_portrait_photo.jpg',
    favoriteFoods : ['kiwis', 'milk', 'cheescake', 'hamburgers'],
    hobbies : ['videogames', 'music', 'cooking', 'programming'],
    placesLived : [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : 'Kent, WA',
        length : '8 years'
    })
myProfile.placesLived.push(
    {
        place : 'Rainier, WA',
        length : '10 years' 
    })
myProfile.placesLived.push(
    {
        place : 'Santiago, Chile',
        length : '1.5 years' 
    })
myProfile.placesLived.push(
    {
        place : 'Rexburg, ID',
        length : '2 years' 
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let item = document.createElement('li');
    item.textContent = food;
    document.querySelector('#favorite-foods').appendChild(item);
})

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let item = document.createElement('ul');
    item.textContent = hobby;
    document.querySelector('#hobbies').appendChild(item);
})

/* Places Lived DataList */

myProfile.placesLived.forEach((place) => {
    let placeItem = document.createElement('dt');
    placeItem.innerText = place.place;
    let lengthItem = document.createElement('dd');
    lengthItem.innerText = place.length;
    document.querySelector('#places-lived').appendChild(placeItem);
    document.querySelector('#places-lived').appendChild(lengthItem);
})
