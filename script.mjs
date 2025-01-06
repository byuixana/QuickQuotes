import fetchQuotes from './requestHanlder.mjs';

//Get document body
var quoteBox = document.querySelector(".quote-container");
var quotesButton = document.getElementById("quote-button");
var dropDownButton = document.querySelector("dropbtn");
var dropDownContent = document.querySelector("drpdwn-content")
function formatQuote(quoteDict)
{
    return `"${quoteDict.quote}" - ${quoteDict.author}`
}

async function displayQuotes(quoteDict)
{
    quoteBox.textContent = ""
    const newQuote = document.createElement('div');
    let quote = formatQuote(quoteDict);
    newQuote.textContent = quote;
    quoteBox.append(newQuote);
}

quotesButton.addEventListener('click', () => {
    fetchQuotes.then(quoteDict => displayQuotes(quoteDict))
});

