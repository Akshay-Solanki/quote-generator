const text = document.getElementById('text')
const author = document.getElementById('author')

const quoteButton = document.getElementById('quote-button')
const twitterButton = document.getElementById('twitter-button')

async function loadQuotes(){
  const quote = localQuotes[Math.floor(localQuotes.length * Math.random())]
  text.textContent = quote.text;
  author.textContent = quote.author || 'Unknown';
}

loadQuotes()

quoteButton.addEventListener('click', function() {
  loadQuotes();
})
twitterButton.addEventListener('click', function() {
  const url = "https://twitter.com/intent/tweet?text="+text.textContent + ' - '+ author.textContent;

  window.open(url, '_blank')
})

