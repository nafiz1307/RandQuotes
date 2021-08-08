const quoteContainer = document.getElementById('quote-container')




let apiQuotes =[];
//Show New Quote
const newQuotes=()=>{
    //Picking Random Quote
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote)
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