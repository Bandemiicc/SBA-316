let quoteDisplay = document.getElementById("Quote")
let newQuoteBtn = document.getElementById("newQuoteBtn")

newQuoteBtn.addEventListener("click", quoteRandom)
newQuoteBtn.addEventListener("mouseleave", resetHover)
newQuoteBtn.addEventListener("mouseover", hover)

let quotes = [
    "The function of good software is to make the complex appear to be simple",
    "Programming isn’t about what you know; it’s about what you can figure out",
    "Code is like humor. When you have to explain it, it’s bad"
];

function quoteRandom() {
    let randIndex = Math.floor(Math.random() * quotes.length)
    quoteDisplay.textContent = quotes[randIndex]
    console.log(quotes[randIndex])

};

function hover() {
    event.target.style.backgroundColor = "yellow"
    event.target.innerText = "Click me!"
};

function resetHover() {
    event.target.style.backgroundColor = ""
    event.target.innerText = "New Quote! 🎉"
};