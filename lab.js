window.alert(`There will be days when coding feels impossible, when every line you write seems to break rather than build. 
    The errors pile up, the logic gets blurry, and the thought of giving up creeps in. It's okay to feel frustrated, it's okay to doubt yourself.
     But remember, coding—like life—isn't about perfection, it's about persistence. 
     So keep going. One line, one function, one breakthrough at a time. The storm will pass, and when it does, you'll stand taller, stronger, and prouder for having weathered it.
   Remember: Every great developer was once where you are now. They didn't quit, and neither will you. 
   Because greatness isn’t found in comfort—it's earned through challenge.`);

let quoteDisplay = document.getElementById("Quote")
let newQuoteBtn = document.querySelector("#newQuoteBtn")

let createQuotes = document.createElement("form")
createQuotes.setAttribute("id", "quoteInput")
createQuotes.setAttribute("class", "quoteStyling")

let textInput = document.createTextNode("send us your own quotes")
createQuotes.appendChild(textInput);

let inputField = document.createElement("input")
inputField.setAttribute("type", "text")
inputField.setAttribute("required", "")
inputField.setAttribute("minlength", "6")
inputField.setAttribute("maxlength", "60")
inputField.setAttribute("placeholder", "your inspiration here");
createQuotes.appendChild(inputField)

let subButton = document.createElement("button")
subButton.setAttribute("type", "submit")
subButton.textContent = "Submit"
createQuotes.appendChild(subButton)

document.body.appendChild(createQuotes)

newQuoteBtn.addEventListener("click", quoteRandom)
newQuoteBtn.addEventListener("mouseleave", resetHover)
newQuoteBtn.addEventListener("mouseover", hover)
createQuotes.addEventListener("submit", noBadWords)


let quotes = [
    "The function of good software is to make the complex appear to be simple",
    "Programming isn’t about what you know; it’s about what you can figure out",
    "Code is like humor. When you have to explain it, it’s bad"
];



function quoteRandom(event) {
    let randIndex = Math.floor(Math.random() * quotes.length)
    quoteDisplay.textContent = quotes[randIndex]
    console.log(quotes[randIndex])

};

function hover(event) {
    event.target.style.backgroundColor = "yellow"
    event.target.innerText = "Click me!"
};

function resetHover(event) {
    event.target.style.backgroundColor = ""
    event.target.innerText = "New Quote! 🎉"
};

function noBadWords(event) {
    let input = inputField.value
    event.preventDefault()
    let badWords = [
        "badword1", "badword2", "badword3", "badword4"
    ]
    for (let i = 0; i < badWords.length; i++) {
        if (input.indexOf(badWords[i]) !== -1) {
            event.preventDefault()
            alert("input includes prohibited words")
            return;
        }
    }
}
