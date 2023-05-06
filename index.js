////VARIABLES//////

const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const apiUrl = 'https://type.fit/api/quotes';


async function fetchQuotes() {
  try {
    // Fetch the quotes array from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    // Return the array of quotes
    return data;
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
}

btn.addEventListener("click", function(){
    fetchQuotes().then(quotes=>{
        let random = Math.floor(Math.random() * quotes.length);
        quote.innerText = '"' + quotes[random].text + '"';
        if(quotes[random].author === null){
            person.innerText = "Unknown";
        }else{
            person.innerText = quotes[random].author;
        }
    })
})

