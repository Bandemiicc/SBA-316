let quoteDisplay = document.getElementById("Quote")
let newQuoteBtn = document.querySelector("#newQuoteBtn")

let createQuotes = document.createElement("form")
createQuotes.setAttribute("id", "quoteInput")
createQuotes.setAttribute("class" "quoteStyling")

let textInput = document.createTextNode("send us your own quotes")
createQuotes.appendChild(textInput);

let inputField = document.createElement("input")
inputField.setAttribute("type","text")
inputField.setAttribute("placeholder", "your inspiration here");
createQuotes.appendChild(inputField)

let subButton = document.createElement("button")
subButton.setAttribute("type","submit")
subButton.textContent("submit")



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

