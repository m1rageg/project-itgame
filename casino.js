// CASINO
const cardHolder = document.body.querySelector(".card__wrapper") // Declaring main container
const allCards = []

const suitsList = [] // Creating standard suits images
const cardNames = ["clubs", "spades", "diamonds", "hearts"]
for (let suitName of cardNames) {
    let image = document.createElement("img", )
    image.src = `img/card_images/${suitName}.svg`
    image.alt = suitName
    const colorName = (suitName === "clubs") || (suitName === "spades") ? "black" : "red"
    suitsList.push({
        suitName: suitName,
        color: colorName,
        element: image,
    })
}

for (let number = 2; number <=10; number++) { // Creating numerical cards
    suitsList.forEach((suit) => {
        const card = document.createElement("div")
        card.className = "card"
        for (let i = 0; i < 2; i++) {
            const cardSign = document.createElement("div")
            cardSign.className = "card__info"
            cardSign.innerHTML = String(number)
            cardSign.appendChild(suit.element.cloneNode(true))
            card.appendChild(cardSign)
        }
        allCards.push({
            rank: number.toString(),
            suit: suit.suitName,
            color: suit.color,
            element: card.cloneNode(true)
        })
    })
}

// Creating person img and cards
const personNames = ["jack", "queen", "king"]

personNames.forEach((personName) => {
    let personImage = document.createElement("img", )
    personImage.src = `img/card_images/${personName}.svg`
    personImage.alt = personName
    personImage.className = "person"

    suitsList.forEach((suit) => {
        const card = document.createElement("div")
        card.className = "card card--person"
        const cardSign = document.createElement("div")
        cardSign.className = "card__info"
        cardSign.innerHTML = personName[0].toUpperCase()
        cardSign.appendChild(suit.element.cloneNode(true))
        card.appendChild(cardSign.cloneNode(true))
        card.appendChild(personImage.cloneNode(true))
        card.appendChild(cardSign)

        allCards.push({
            rank: personName,
            suit: suit.suitName,
            color: suit.color,
            element: card.cloneNode(true)
        })
    })
})

suitsList.forEach((suit) => { // Creating spades cards
    const card = document.createElement("div")
    card.className = "card card--person"
    const cardSign = document.createElement("div")
    cardSign.className = "card__info"
    cardSign.innerHTML = "A"
    cardSign.appendChild(suit.element.cloneNode(true))
    card.appendChild(cardSign.cloneNode(true))
    const bigImage = suit.element.cloneNode(true)
    bigImage.className = "person"
    card.appendChild(bigImage)
    card.appendChild(cardSign)

    allCards.push({
        rank: "ace",
        suit: suit.suitName,
        color: suit.color,
        element: card.cloneNode(true)
    })
})

// Get random card from the array
function getRandomCard() {
    const randomIndex = Math.floor(Math.random()*allCards.length)
    return allCards[randomIndex]
}

function displayCard(card) {
    if (!card) {
        document.getElementById("casino__card__info__suit").innerText = "You must select color first"
    } else {
        if (cardHolder.hasChildNodes()){
            cardHolder.removeChild(cardHolder.firstChild)
        }
        cardHolder.appendChild(card.element.cloneNode(true))
        document.getElementById("casino__card__info__suit").innerText = card.suit
        document.getElementById("casino__card__info__rank").innerText = card.rank
        document.getElementById("casino__card__info__color").innerText = card.color
        document.getElementById("casino__card__info__color").style.color = card.color === "red" ? "red" : "black"
    }
}

// Display random card and its info
function makeBet(event) {
    const betOptions = document.getElementsByName("colorChoice")
    let currentBetOption = false
    betOptions.forEach((option) => {
        if (option.checked) {
            currentBetOption = option.value
        }
    })
    let randomCard = false
    if (currentBetOption) {
        const betValue = +document.getElementById("inputBetValue").value
        randomCard = getRandomCard()
        console.log(currentBetOption, randomCard.color)
        if (currentBetOption === randomCard.color) {
            rocketLeague.uah += betValue
        } else {
            rocketLeague.uah -= betValue
        }
    }
    displayCard(randomCard)
}

// Add event listener
document.getElementById("casino__bet__button").addEventListener("click", makeBet)