// Get Quotes from API
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementsByClassName("loader");

let apiQuotes = [];

// SHow New QUote

newQuote = () => {
  //Pick random quote from apiQuotes array
  startloader();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;

  for (let i = 0; i < 5000; i++) {
    console.log(i);
  }
  completeloader();
};

function startloader() {
  console.log("hi");
  loader[0].hidden = false;
  quoteContainer.hidden = true;
}

function completeloader() {
  console.log("Bye");
  loader[0].hidden = true;
  quoteContainer.hidden = false;
}

async function getQuotes() {
  startloader();
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log("Error");
  }
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

getQuotes();

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Twitter Quote
