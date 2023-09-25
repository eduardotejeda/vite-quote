import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";


function QuoteFecher() {   
    const [quote, setQuote] = useState({text: "", author: ""});
    const [isLoading, setIsLoading] = useState(true)

//Can't put async functions on useEffect
    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
        setIsLoading(false)
    }
    
    

    return (
    <div>
        {isLoading && <p>Loadding...</p>}
        <button onClick={fetchQuote}>Get quote using handler</button>
        <h1>{quote.text}</h1>
        <h3>{quote.author}</h3>
    </div>
    )

}

export default QuoteFecher;