/* Final Project JS file */

/* variables */
let quotesElement = document.querySelector('#quotes');
let quotesList = [];

/* ping API */
const getQuotes = async () => {
    const response = await fetch('https://run.mocky.io/v3/b06a7510-15aa-40ef-ae9d-f81e23de780c');
    quotesList = await response.json();
    console.log(quotesList);
    displayQuote(quotes);

}
/* make file usable */

/* create quote as an article on quotes element*/

const displayQuote = () => {
    reset();
    quote = quotesList[randomInt(quotesList.length)];
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


/* other */

function randomInt(max) {
    return Math.floor(Math.random() * (max-1));
}

/* main */
getQuotes();
document.querySelector('#getQuote').addEventListener("click", () => {displayQuote()});