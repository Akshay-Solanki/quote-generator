const text = document.getElementById('text')
const author = document.getElementById('author')

const quoteButton = document.getElementById('quote-button')

async function loadQuotes(){
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const response = await fetch(proxy + 'http://zenquotes.io/api/random')
  const quote = await response.json()
  console.log(quote)
  text.textContent = quote[0].q;
  author.textContent = quote[0].a;
}

quoteButton.addEventListener('click', function() {
  loadQuotes();
})

