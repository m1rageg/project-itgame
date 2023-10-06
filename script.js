//Javascript не використовується
class MainHero{
    constructor(name,){
        this.name = name;
        this.health = 50;
        this.happiness = 50;
        this.food = 50;
        this.exp = null;
        this.usd = 0
        this.uah = 0
    }
    addHealth(value){
        this.health += value
        if (this.health > 100){
            this.health = 100
        }
    }
    addHappiness(value){
        this.happiness += value
        if (this.happiness > 100){
            this.happiness = 100
        }
    }
    addFood(value){
        this.food += value
        if (this.food > 100){
            this.food = 100
        }
    }
}

let tempDaysCourse = 0
let tempDaysUniversity = 0
let tempDaysBook = 0
let timeoutTimer = 100

let arrayStudyItems = [
    {
        name: "book",
        price: 0,
        exp: 300,
        days: 10,
        isBought: false
        
    },
    {
        name: "course",
        price: 7000,
        exp: 1500,
        days: 90,
        isBought: false
    },
    {
        name: "university",
        price: 0,
        exp: 5000,
        days: 1095,
        isBought: false
    }
]

let rocketLeague = new MainHero('Rocket League')

function displayHeroStats (hero) {
    setBar ("health", hero.health)
    setBar ("happiness", hero.happiness)
    setBar ("food", hero.food)
    setBar("experience", currentExp)
    const statsUsd = document.getElementById("stats__dollars")
    const statsUah = document.getElementById("stats__local-money")
    statsUsd.innerText = `${hero.usd.toFixed(2)} $`
    statsUah.innerHTML = `${hero.uah.toFixed(2)} &#8372;`
}

// array with hero roles matching bottom levels
arrayOfMainHeroes = [
    {
        name: "poorstudent",
        value: 0
    },
    {
        name: "student",
        value: 20
    },
    {
        name: "trainee",
        value: 40
    },
    {
        name: "junior",
        value: 60
    },
    {
        name: "middle",
        value: 80
    },
    {
        name: "senior",
        value: 100
    }]

// function to set value to bar (health / happiness / food / exp)
function setBar (id, value) {
    const bar = document.getElementById(`${id}__meter`)
    bar.value = value
}

const personLevel = document.querySelector(".person__level")

let currentLevel = 1
let currentExp = 0
let needExp = 1000
function renderExp(countExp){
    const needExpDisplay = document.querySelector(".need__exp")
    let tempExp = currentExp + countExp
    while (tempExp >= 1000) {
        currentLevel += 1;
        tempExp -= 1000;
    }
    currentExp = tempExp
    personLevel.textContent = `Current level: ${currentLevel}`
    needExpDisplay.textContent = `${currentExp}/${needExp}`
}


// function to set character picture depending on hero role
function setPicture(nameOfPicture){
    const img = document.querySelector('.character__img');
    let newWay = `img/${nameOfPicture}.png`
    return img.src = newWay
    }

// function to match hero level to hero role
function checkHeroLevel(hero) {
    arrayOfMainHeroes.forEach(element => {
        if(element.value <= hero.exp){
            setPicture(element.name)
        }
    });
}

// array of possible items to be rendered
const arrayOfRandomItems = [
    {
        name: "Gym workout",
        price: 10,
        currency: "USD",
        buff: 15,
        category: "health",
        isMonthly: false,
        isAvailable: true
    }
]
// function to render list items in the menu
function renderMenu (menuName) {
    const healthList = document.getElementById(`${menuName}__items__li`)
    arrayOfRandomItems.forEach((item) => {
        if (item.isAvailable && item.category === menuName) {
            const listItem = document.createElement("li")
            listItem.innerText = `${item.name} (+${item.buff}, -${item.price}) ${item.currency}`
            healthList.appendChild(listItem)
        }
    })
}

// function for changing date
function incrementDate(date) {
    date.setDate(date.getDate() + 1);
}

let gameDate = new Date(2000, 0, 1)
let countDays = 0


// function for increasing current game date
function increaseGameDate() {
    incrementDate(gameDate);
    const month = gameDate.toLocaleString('eng', { month: 'long' }); 
    const day = gameDate.getDate();
    const year = gameDate.getFullYear();
    countDays +=1
    document.querySelector('.count__days').innerHTML = `Current Date: <br><span>${day}-${month}-${year}</span><br>Total days lived: ${countDays}`;
    if (countDays % 10 === 0){
        generateCurrency()
        displayExchangeRates()
    }
    // rocketLeague.food -= 2
    // rocketLeague.happiness -= 4
    // rocketLeague.health -= 1.5
    if(countDays % 30 === 0 && arrayHappinessItems[3].isMarried === true){
        rocketLeague.addHappiness(arrayHappinessItems[3].buffHappiness)
        rocketLeague.addFood(arrayHappinessItems[3].buffFood)
        rocketLeague.uah -= arrayHappinessItems[3].price
    }
    if(countDays % 30 === 0 && arrayHealthItems[5].isHired === true){
        rocketLeague.addHealth(arrayHealthItems[5].buffHealth)
        rocketLeague.uah -= arrayHealthItems[5].price
    }
    if(countDays % 30 === 0 && arrayFoodItems[3].isHired === true){
        rocketLeague.addFood(arrayFoodItems[3].buffFood)
        rocketLeague.uah -= arrayFoodItems[3].price
    }
    if (arrayStudyItems[1].isBought === true && tempDaysCourse === countDays){
        renderExp(arrayStudyItems[1].exp);
        arrayStudyItems[1].isBought = false
        document.querySelector(".course_menu").setAttribute("onclick", "studyItem(this)")
        document.querySelector(".course_menu").innerHTML = "Buy courses(+1500exp, -7000&#8372, 90 days)"
        
    }
    if (arrayStudyItems[2].isBought === true && tempDaysUniversity === countDays){
        renderExp(arrayStudyItems[2].exp);
        arrayStudyItems[2].isBought = false
        document.querySelector(".university_menu").setAttribute("onclick", "studyItem(this)")
        document.querySelector(".course_menu").innerHTML = "University(+5000exp, 1095 days)"
    }
    if (arrayStudyItems[0].isBought === true && tempDaysBook === countDays){
        renderExp(arrayStudyItems[0].exp);
        arrayStudyItems[0].isBought = false
        document.querySelector(".book_menu").setAttribute("onclick", "studyItem(this)")
        document.querySelector(".book_menu").innerHTML = "Read book(+300exp, 10 days)"
        
    }
    personLevel.innerHTML = `Current level: ${currentLevel}`


    displayHeroStats(rocketLeague)
    setTimeout(increaseGameDate, timeoutTimer)
}
increaseGameDate()
//end function for changing date

//function for currency change
let exchangeRateBuy = 0
let exchangeRateSell = 0
function generateCurrency() {
    exchangeRateBuy = (Math.random() * 4 + 38).toFixed(2)
    exchangeRateSell = (exchangeRateBuy - (Math.random() * 2)).toFixed(2)
}

//function to display exchange rates
function displayExchangeRates () {
    const buyUsdEl = document.getElementById("buy__usd")
    const sellUsdEl = document.getElementById("sell__usd")
    buyUsdEl.innerText = `Buy usd for ${exchangeRateBuy}`
    sellUsdEl.innerHTML = `Sell usd for ${exchangeRateSell}`
}
generateCurrency()
displayExchangeRates()

// function to convert currencies
function currencyExchangeRate (value, currency) {
    if (currency === "USD") {
        return value * exchangeRateSell
    } else if (currency === "UAH") {
        return value * exchangeRateBuy
    } else {
        return null
    }
}

// function to complete exchange
function completeExchange (value, currency, person) {
    const exchangedSum = currencyExchangeRate(value, currency)
    if (currency === "USD") {
        person.usd -= +value
        person.uah += exchangedSum
    } else if (currency === "UAH") {
        person.usd += +value
        person.uah -= exchangedSum
    } else {
        console.log(currency)
        console.log("ERROR")
    }
}

// function to handle exchange forms
function exchangeFormHandler (event) {
    event.preventDefault();
    const form = event.target;
    const currencyInput = form.elements["currency"].value;
    const sumInput = form.elements["sum"].value;
    completeExchange(sumInput, currencyInput, rocketLeague)
    return false
}

// function to open/close game menus
let currentMenuId = "character__syka"
function changeMenuDisplay (menuToOpen) {
    if (currentMenuId !== menuToOpen) {
        const currentMenu = document.getElementById(currentMenuId)
        currentMenu.classList.add("no-display")
        const newMenu = document.getElementById(menuToOpen)
        newMenu.classList.remove("no-display")
        currentMenuId = menuToOpen
    } else if ( currentMenuId === menuToOpen) {
        const currentMenu = document.getElementById(currentMenuId)
        currentMenu.classList.add("no-display")
        const newMenu = document.getElementById("character__syka")
        newMenu.classList.remove("no-display")
        currentMenuId = "character__syka"
    }
}


//function to exit game menus
function exitMenus(openedMenu){
    const currentMenu = document.getElementById("character__syka")
    openedMenu.classList.add("no-display")
    currentMenu.classList.remove("no-display")
    currentMenuId = "character__syka"

}

let arrayHappinessItems = [
    {
        name: "walk",
        price: 0,
        buffHappiness: 5,
        isMonthly: false,
        buffFood: -2,
    },
    {
        name: "sleep",
        price: 0,
        buffHappiness: 10,
        isMonthly: false,
        buffFood: -5,  
    },
    {
        name: "cake",
        price: 100,
        buffHappiness: 20,
        isMonthly: false,
        buffFood: 10, 
        buffHealth: 0, 
    },
    {
        name: "marry",
        price: 10000,
        buffHappiness: 70,
        isMonthly: true,
        isMarried: false,
        buffFood: 70, 
    }
]

//function to logic happiness
function happinessItem(button){
    const buttonClass = button.classList[0];
    switch (buttonClass) {
        case 'sleep_menu':
            rocketLeague.addHappiness(arrayHappinessItems[1].buffHappiness)
            rocketLeague.addFood(arrayHappinessItems[1].buffFood)
            displayHeroStats(rocketLeague)
            break;
        case 'walk_menu':
            rocketLeague.addHappiness(arrayHappinessItems[0].buffHappiness)
            rocketLeague.addFood(arrayHappinessItems[0].buffFood)
            displayHeroStats(rocketLeague)  
            break;
        case 'cake_menu':
            rocketLeague.addHappiness(arrayHappinessItems[2].buffHappiness)
            rocketLeague.addFood(arrayHappinessItems[2].buffFood)
            rocketLeague.uah -= arrayHappinessItems[2].price
            displayHeroStats(rocketLeague)
            break;
        case 'marry_menu':
            button.innerHTML = arrayHappinessItems[3].isMarried === false ? "You are already married!"  : "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
            arrayHappinessItems[3].isMarried = arrayHappinessItems[3].isMarried === false
            arrayFoodItems[4].isMarried = arrayFoodItems[4].isMarried === false
            if(arrayHappinessItems[3].isMarried === true || arrayFoodItems[4].isMarried === true){
                let temp = document.querySelectorAll(".marry_menu")
                temp.forEach((elem) => elem.innerHTML = "You are already married!")
            }else {
                let temp = document.querySelectorAll(".marry_menu")
                temp.forEach((elem) => elem.innerHTML = "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)")  
            }
            break;
        default:
            console.log('unknown')
        }
}

// function updateMarryButton() {
//     let temp = document.querySelectorAll('marry_menu')
//     if(arrayHappinessItems[3].isMarried === false && arrayHealthItems[4].isMarried === false){  
//         temp.innerHTML = "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
//     } else if(arrayHappinessItems[3].isMarried === true || arrayHealthItems[4].isMarried === true){
//         temp.innerHTML = "You are already married!"
//     }
// }

let arrayHealthItems = [
    {
        name: "workout",
        price: 0,
        buffHealth: 5,
        buffHappiness: 0,
        buffFood: -3,
        isMonthly: false,
        
    },
    {
        name: "pill",
        price: 0,
        buffHealth: 15,
        buffHappiness: -5,
        buffFood: 0,
        isMonthly: false,  
    },
    {
        name: "doctor",
        price: 1000,
        buffHealth: 25,
        buffHappiness: -5,
        buffFood: 0,
        isMonthly: false, 
    },
    {
        name: "hospital",
        price: 4000,
        buffHealth: 50,
        buffHappiness: 0,
        buffFood: -15,
        isMonthly: false, 
    },
    {
        name: "abroad",
        price: 4000,
        currency: "usd",
        buffHealth: 100,
        buffHappiness: 0,
        buffFood: 0,
        isMonthly: false, 
    },
    {
        name: "personaldoctor",
        price: 25000,
        currency: "uah", 
        buffHealth: 70,
        buffHappiness: 0,
        buffFood: 0,
        isMonthly: true,
        isHired: false, 
    }
]
function healthItem(button){
    const buttonClass = button.classList[0];
    switch (buttonClass) {
        case 'workout_menu':
            rocketLeague.addHealth(arrayHealthItems[0].buffHealth)
            rocketLeague.addFood(arrayHealthItems[0].buffFood)
            displayHeroStats(rocketLeague)
            break;
        case 'pill_menu':
            rocketLeague.addHealth(arrayHealthItems[1].buffHealth)
            rocketLeague.addHappiness(arrayHealthItems[1].buffHappiness)
            displayHeroStats(rocketLeague)
            break;
        case 'doctor_menu':
            rocketLeague.addHealth(arrayHealthItems[2].buffHealth)
            rocketLeague.addHappiness(arrayHealthItems[2].buffHappiness)
            rocketLeague.uah -= arrayHealthItems[2].price
            displayHeroStats(rocketLeague)
            break;
        case 'hospital_menu':
            rocketLeague.addHealth(arrayHealthItems[3].buffHealth)
            rocketLeague.addFood(arrayHealthItems[3].buffFood)
            rocketLeague.uah -= arrayHealthItems[3].price
            displayHeroStats(rocketLeague)
            break;
        case 'abroad_menu':
            rocketLeague.addHealth(arrayHealthItems[4].buffHealth)
            rocketLeague.usd -= arrayHealthItems[4].price
            displayHeroStats(rocketLeague)
            break;
        case 'personaldoctor_menu':
            button.innerHTML = arrayHealthItems[5].isHired === false ? "The doctor is already hired!"  : "Hire a personal doctor(+70&#10084; every month, -25000&#8372 every month)"
            arrayHealthItems[5].isHired = arrayHealthItems[5].isHired === false
            break;
        default:
            console.log('unknown')
        }
}

let arrayFoodItems = [
    {
        name: "meal",
        price: 0,
        buffHealth: 0,
        buffHappiness: -5,
        buffFood: 20,
        isMonthly: false,
        
    },
    {
        name: "fastfood",
        price: 300,
        buffHealth: -10,
        buffHappiness: 0,
        buffFood: 30,
        isMonthly: false,  
    },
    {
        name: "restaurant",
        price: 1000,
        buffHealth: 0,
        buffHappiness: 0,
        buffFood: 40,
        isMonthly: false, 
    },
    {
        name: "personalchef",
        price: 20000,
        buffHealth: 0,
        buffHappiness: 0,
        buffFood: 100,
        isMonthly: true,
        isHired: false 
    },
    {
        name: "marry",
        price: 10000,
        buffHealth: 0,
        buffHappiness: 70,
        buffFood: 70,
        isMonthly: true,
        isMarried: false 
    }
]

function foodItem(button){
    const buttonClass = button.classList[0];
    switch (buttonClass) {
        case 'meal_menu':
            rocketLeague.addFood(arrayFoodItems[0].buffFood)
            rocketLeague.addHappiness(arrayFoodItems[0].buffHappiness)
            displayHeroStats(rocketLeague)
            break;
        case 'fastfood_menu':
            rocketLeague.addHealth(arrayFoodItems[1].buffHealth)
            rocketLeague.addFood(arrayFoodItems[1].buffFood)
            rocketLeague.uah -= arrayFoodItems[1].price
            displayHeroStats(rocketLeague)
            break;
        case 'restaurant_menu':
            rocketLeague.addFood(arrayFoodItems[2].buffFood)
            rocketLeague.uah -= arrayFoodItems[2].price
            displayHeroStats(rocketLeague)
            break;
        case 'personalchef_menu':
            button.innerHTML = arrayFoodItems[3].isHired === false ? "The chef is already hired!"  : "Hire a personal chef(+100&#127828 every month, -20000&#8372)"
            arrayFoodItems[3].isHired = arrayFoodItems[3].isHired === false
            break;
        case 'marry_menu': 
            button.innerHTML = arrayFoodItems[4].isMarried === false ? "You are already married!"  : "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
            arrayFoodItems[4].isMarried = arrayFoodItems[4].isMarried === false
            arrayHappinessItems[3].isMarried = arrayHappinessItems[3].isMarried === false
            if(arrayHappinessItems[3].isMarried === true || arrayFoodItems[4].isMarried === true){
                let temp = document.querySelectorAll(".marry_menu")
                temp.forEach((elem) => elem.innerHTML = "You are already married!")
            } else{
                let temp = document.querySelectorAll(".marry_menu")
                temp.forEach((elem) => elem.innerHTML = "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)")  
            }
            break;
        default:
            console.log('unknown')
    }
}



function studyItem(button){
    const buttonClass = button.classList[0];
    switch (buttonClass) {
        case "book_menu":
            arrayStudyItems[0].isBought = arrayStudyItems[0].isBought === false
            tempDaysBook = countDays + arrayStudyItems[0].days
            button.setAttribute("onclick", null)
            decrementTimer(".book_menu", arrayStudyItems[0].days)
            break
        case "course_menu":
            arrayStudyItems[1].isBought = arrayStudyItems[1].isBought === false
            rocketLeague.uah -= arrayStudyItems[1].price;
            tempDaysCourse = countDays + arrayStudyItems[1].days
            button.setAttribute("onclick", null)
            decrementTimer(".course_menu", arrayStudyItems[1].days)
            
            console.log("clicked")
            break
        case "university_menu":
            arrayStudyItems[2].isBought = arrayStudyItems[2].isBought === false
            tempDaysUniversity = countDays + arrayStudyItems[2].days
            button.setAttribute("onclick", null)
            decrementTimer(".university_menu", arrayStudyItems[2].days)
            break
        default:
            break
    }
}

function decrementTimer(buttonName, days) {
    days -= 1;
    document.querySelector(buttonName).innerHTML = `Already studying, days left: ${days}`;
    if (days > 0) {
        setTimeout(() => decrementTimer(buttonName, days), timeoutTimer);
    }
}

arrayWorkItems = [
    {
        name: ".constructionsite_menu",
        salary: "7000",
        currency: "uah",
        exp: 0,
        isWorking: false,
        needLvl: 0,
        description: "Work on a construction site(+7000&#8372 every month)",
        ifWorking: "You are already working on a construction site."
    },
    {
        name: ".courier_menu",
        salary: "12000",
        currency: "uah",
        exp: 0,
        isWorking: false,
        needLvl: 5,
        description: "Work as a courier(+12000&#8372 every month)",
        ifWorking: ""
    },
    {
        name: ".waiter_menu",
        salary: "17000",
        currency: "uah",
        exp: 0,
        isWorking: false,
        needLvl: 13,
        description: "Work as a waiter(+17000&#8372 every month)",
        ifWorking: ""
    },
    {
        name: ".trainee_menu",
        salary: "1000",
        currency: "usd",
        exp: 2000,
        isWorking: false,
        needLvl: 20,
        description: "Trainee(+1000$ every month, + 2000exp every month)",
        ifWorking: ""
    },
    {
        name: ".junior_menu",
        salary: "1500",
        currency: "usd",
        exp: 4000,
        isWorking: false,
        needLvl: 40,
        description: "Junior(+1500$ every month, + 4000exp every month)",
        ifWorking: ""
    },
    {
        name: ".middle_menu",
        salary: "2500",
        currency: "usd",
        exp: 6000,
        isWorking: false,
        needLvl: 60,
        description: "Middle(+2500$ every month, + 6000exp every month)",
        ifWorking: ""
    },
    {
        name: ".senior_menu",
        salary: "5000",
        currency: "usd",
        exp: 8000,
        isWorking: false,
        needLvl: 80,
        description: "Senior(+5000$ every month, + 8000exp every month)",
        ifWorking: ""
    },
    {
        name: ".teamlead_menu",
        salary: "10000",
        currency: "usd",
        exp: 10000,
        isWorking: false,
        needLvl: 100,
        description: "TeamLead(+10000$ every month, + 10000exp every month)",
        ifWorking: ""
    }
]

for (let i = 1; i < arrayWorkItems.length; i++) {
    arrayWorkItems[i].ifWorking = `You are already working as a ${arrayWorkItems[i].name.split("_")[0].replace(".", " ")}.`;
}

function isEnoughLvlToWork(targetLvl){
    return currentLevel >= targetLvl;
}

function switchJobState(job) {
    if (job.isWorking) {
        const jobContainer = document.querySelector(job.name)
        jobContainer.innerHTML = job.description
        job.isWorking = false
    } else {
        const jobContainer = document.querySelector(job.name)
        jobContainer.innerHTML = job.ifWorking
        job.isWorking = true
    }
}

function changeWork(workClass){
    arrayWorkItems.forEach((job) => {
        if (job.name === workClass && isEnoughLvlToWork(job.needLvl)) {
            switchJobState(job)
            arrayWorkItems.forEach((job) => {
                const jobContainer = document.querySelector(job.name)
                if (job.name !== workClass) {
                    if (job.isWorking === true) {
                        jobContainer.innerHTML = job.description
                        job.isWorking = false
                    }
                }
            })
        }
    })
}


function workItem(button){
    const buttonClass = button.classList[0];
    changeWork(`.${buttonClass}`)
}

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

// Display random card and its info
function displayRandomCard() {
    const randomCard = getRandomCard()
    if (cardHolder.hasChildNodes()){
        cardHolder.removeChild(cardHolder.firstChild)
    }
    cardHolder.appendChild(randomCard.element.cloneNode(true))
    document.getElementById("casino__card__info__suit").innerText = randomCard.suit
    document.getElementById("casino__card__info__rank").innerText = randomCard.rank
    document.getElementById("casino__card__info__color").innerText = randomCard.color
    document.getElementById("casino__card__info__color").style.color = randomCard.color === "red" ? "red" : "black"
}

// Add event listener
document.getElementById("casino__bet__button").addEventListener("click", displayRandomCard)
