const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');




let apiQuotes =[];
//Show New Quote
const newQuotes=()=>{
    //Picking Random Quote
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    //Checking for author
    if(!quote.author){
        authorText.textContent = 'Unknown'
    }
    else{
        authorText.textContent = quote.author;
    }

    //check quote length

    if(quote.text.length>100){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}




//Get Quote
const getQuotes= async()=>{
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes[13]);
        newQuotes()
    }catch(error){
        console.log(error)
    }
}


//Tweet Quote
const tweetQuote=()=>{
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteButton.addEventListener('click',newQuotes);
twitterButton.addEventListener('click',tweetQuote)

//On Load
getQuotes();