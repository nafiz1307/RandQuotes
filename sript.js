let apiQuotes =[];
//Show New Quote
const getQuotes= async()=>{
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[13]);
    }catch(error){
        console.log(error)
    }
}

//On Load
getQuotes();