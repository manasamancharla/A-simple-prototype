//'https://api.breakingbadquotes.xyz/v1/quotes'


const genButton = document.getElementById('genQuote')

const genQuote = () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        .then(response => response.json())
        .then(json => {
            const quote = json[0].quote
            //console.log(quote)
            document.querySelector('#quoteDiv').innerHTML = `<p> ${quote}</p>`
            const author = json[0].author
            document.querySelector('#authorDiv').innerHTML = `<p><b>- ${author}</b></p>`
            //console.log(author)
        })
}


// Adding event listener
genButton.onclick = () => genQuote()

