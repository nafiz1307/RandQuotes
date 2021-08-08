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
    quoteText.textContent = quote.text;
    authorText.textContent=quote.author;
  
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

//On Load
getQuotes();