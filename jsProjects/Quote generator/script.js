const quoteEl=document.getElementById("quote");
const newQuoteBtn=document.getElementById("new-quote");


const quotes=["Believe in yourself and all that you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths."];

  function getRandomQuotes(){
    const randomINdex=Math.floor(Math.random()*quotes.length);
    return quotes[randomINdex];
  }

  newQuoteBtn.addEventListener("click",()=>{
    quoteEl.textContent=getRandomQuotes();
  });