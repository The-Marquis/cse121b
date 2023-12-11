/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (newTempleList) => {
    newTempleList.forEach((temple) => {

       let article = document.createElement('article');
       

       let name = document.createElement('h3');
       name.textContent = temple["templeName"];

       let image = document.createElement('img');
       image.setAttribute('src', temple["imageUrl"]);
       image.setAttribute('alt', temple["location"]);

       article.appendChild(name);
       article.appendChild(image);
       templesElement.appendChild(article);


    });
}


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);

}

/* reset Function */
const reset = () => {
    while (templesElement.children.length > 0) {
        templesElement.removeChild(templesElement.firstChild);
    }
    
}

/* sortBy Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById("sortBy").value;
    let filteredList = [];
    switch(filter) {
        case 'utah':
            temples.forEach((temple) => {
                if (temple["location"].search("Utah")>0) {
                    filteredList.push(temple);
                }
            })
            displayTemples(filteredList);

            break;
        case 'notutah':
            temples.forEach((temple) => {
                if (temple["location"].search("Utah")==-1) {
                    filteredList.push(temple);
                }
            })
            displayTemples(filteredList);
            break;
        case 'older':
            temples.forEach((temple) => {
                if (new Date(temple["dedicated"]).getFullYear() < 1950) {
                    filteredList.push(temple);
                }
            })
            displayTemples(filteredList);
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
    }
}


getTemples();

console.log(templeList);
/* Event Listener */

document.querySelector('#sortBy').addEventListener("change", () => {filterTemples(templeList)});