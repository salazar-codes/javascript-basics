
/**
 * @returns {Object}
 */
const fetchQuote = async () => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerText = 'Breaking Bad App';
    element.innerText = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerText = data.quote;
        authoLabel.innerText = data.author;
        element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton );
    }

    nextQuoteButton.addEventListener('click',async ()=> {

        element.innerText = 'Loading...';
        await fetchQuote()
        .then( renderQuote );
    })

    await fetchQuote()
        .then( renderQuote );
}


