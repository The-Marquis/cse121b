/* Final Project JS file */

/* variables */
let quotesElement = document.querySelector('#quotes');
let quotesList = [];

/* ping API */
const getQuotes = async () => {
    const response = await fetch('https://run.mocky.io/v3/b93544ba-fb73-4975-993b-3179b5720873');
    quotesList = await response.json();
    console.log(quotesList);
    displayQuote(quotesList);

}
/* make file usable */

/* create quote as an article on quotes element*/

const displayQuote = (quotes) => {
    reset();
    quote = quotes[randomInt(quotes.length)];
    console.log(quote);
    let article = document.createElement('article');
       

       let text = document.createElement('h3');
       text.textContent = quote["text"];

       let person = document.createElement('h5');
       person.textContent = quote["person"];

       article.appendChild(text);
       article.appendChild(person);
       quotesElement.appendChild(article);
}
/* reset function */
const reset = () => {
    if (quotesElement.firstElementChild) {
        quotesElement.removeChild(quotesElement.firstElementChild);
    }
}

function filterQuote(filter) {
    let filteredList = [];
    switch(filter) {
        case 'song':
            quotesList.forEach((quote) => {
                if (quote["category"] == "song") {
                    filteredList.push(quote);
                }
            })
            displayQuote(filteredList);

            break;
        case 'book':
            quotesList.forEach((quote) => {
                if (quote["category"] == "book") {
                    filteredList.push(quote);
                }
            })
            displayQuote(filteredList);
            break;
        default:
            displayQuote(quotesList);
    }
}


/* other */

function randomInt(max) {
    return Math.floor(Math.random() * (max));
}

/* main */
getQuotes();
document.querySelector('#getQuote').addEventListener("click", () => {filterQuote(document.getElementById("sortBy").value)});
