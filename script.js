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
}

let tempDaysCourse = 0
let tempDaysUniversity = 0

let arrayStudyItems = [
    {
        name: "book",
        price: 0,
        exp: 300,
        days: 0,
        
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


let currentLevel = 1
let currentExp = 0
let needExp = 1000
function renderExp(countExp){
    const personLevel = document.querySelector(".person__level")
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
        rocketLeague.happiness += arrayHappinessItems[3].buffHappiness
        rocketLeague.food += arrayHappinessItems[3].buffFood
        rocketLeague.uah -= arrayHappinessItems[3].price
        displayHeroStats(rocketLeague)
    }
    if(countDays % 30 === 0 && arrayHealthItems[5].isHired === true){
        rocketLeague.health += arrayHealthItems[5].buffHealth
        rocketLeague.uah -= arrayHealthItems[5].price
        displayHeroStats(rocketLeague)
    }
    if(countDays % 30 === 0 && arrayFoodItems[3].isHired === true){
        rocketLeague.food += arrayFoodItems[3].buffFood
        rocketLeague.uah -= arrayFoodItems[3].price
        displayHeroStats(rocketLeague)
    }
    if (arrayStudyItems[1].isBought === true && tempDaysCourse === countDays){
        renderExp(arrayStudyItems[1].exp);
        displayHeroStats(rocketLeague)
        arrayStudyItems[1].isBought = false
    }
    if (arrayStudyItems[2].isBought === true && tempDaysUniversity === countDays){
        renderExp(arrayStudyItems[2].exp);
        displayHeroStats(rocketLeague)
        arrayStudyItems[2].isBought = false
    }

    displayHeroStats(rocketLeague)
    setTimeout(increaseGameDate, 100)
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
    if (currentMenuId != menuToOpen) {
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
            rocketLeague.happiness += arrayHappinessItems[1].buffHappiness
            rocketLeague.food += arrayHappinessItems[1].buffFood
            displayHeroStats(rocketLeague)
            break;
        case 'walk_menu':
            rocketLeague.happiness += arrayHappinessItems[0].buffHappiness
            rocketLeague.food += arrayHappinessItems[0].buffFood
            displayHeroStats(rocketLeague)  
            break;
        case 'cake_menu':
            rocketLeague.happiness += arrayHappinessItems[2].buffHappiness
            rocketLeague.food += arrayHappinessItems[2].buffFood
            rocketLeague.uah -= arrayHappinessItems[2].price
            displayHeroStats(rocketLeague)
            break;
        case 'marry_menu':
            button.innerHTML = arrayHappinessItems[3].isMarried === false ? "You are already married!"  : "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
            arrayHappinessItems[3].isMarried = arrayHappinessItems[3].isMarried === false? true : false
            arrayFoodItems[4].isMarried = arrayFoodItems[4].isMarried === false? true : false
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

function updateMarryButton() {
    let temp = document.querySelectorAll('marry_menu')
    if(arrayHappinessItems[3].isMarried === false && arrayHealthItems[4].isMarried === false){  
        temp.innerHTML = "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
    } else if(arrayHappinessItems[3].isMarried === true || arrayHealthItems[4].isMarried === true){
        temp.innerHTML = "You are already married!"
    }
}

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
            rocketLeague.health += arrayHealthItems[0].buffHealth
            rocketLeague.food += arrayHealthItems[0].buffFood
            displayHeroStats(rocketLeague)
            break;
        case 'pill_menu':
            rocketLeague.health += arrayHealthItems[1].buffHealth
            rocketLeague.happiness += arrayHealthItems[1].buffHappiness
            displayHeroStats(rocketLeague)
            break;
        case 'doctor_menu':
            rocketLeague.health += arrayHealthItems[2].buffHealth
            rocketLeague.food += arrayHealthItems[2].buffHappiness
            rocketLeague.uah -= arrayHealthItems[2].price
            displayHeroStats(rocketLeague)
            break;
        case 'hospital_menu':
            rocketLeague.health += arrayHealthItems[3].buffHealth
            rocketLeague.food += arrayHealthItems[3].buffFood
            rocketLeague.uah -= arrayHealthItems[3].price
            displayHeroStats(rocketLeague)
            break;
        case 'abroad_menu':
            rocketLeague.health += arrayHealthItems[4].buffHealth
            rocketLeague.usd -= arrayHealthItems[4].price
            displayHeroStats(rocketLeague)
            break;
        case 'personaldoctor_menu':
            button.innerHTML = arrayHealthItems[5].isHired === false ? "The doctor is already hired!"  : "Hire a personal doctor(+70&#10084; every month, -25000&#8372 every month)"
            arrayHealthItems[5].isHired = arrayHealthItems[5].isHired === false? true : false
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
            rocketLeague.happiness += arrayFoodItems[0].buffHappiness
            rocketLeague.food += arrayFoodItems[0].buffFood
            displayHeroStats(rocketLeague)
            break;
        case 'fastfood_menu':
            rocketLeague.uah -= arrayFoodItems[1].price
            rocketLeague.health += arrayFoodItems[1].buffHealth
            rocketLeague.food += arrayFoodItems[1].buffFood
            displayHeroStats(rocketLeague)
            break;
        case 'restaurant_menu':
            rocketLeague.uah -= arrayFoodItems[2].price
            rocketLeague.food += arrayFoodItems[2].buffFood
            displayHeroStats(rocketLeague)
            break;
        case 'personalchef_menu':
            button.innerHTML = arrayFoodItems[3].isHired === false ? "The chef is already hired!"  : "Hire a personal chef(+100&#127828 every month, -20000&#8372)"
            arrayFoodItems[3].isHired = arrayFoodItems[3].isHired === false? true : false
            break;
        case 'marry_menu': 
            button.innerHTML = arrayFoodItems[4].isMarried === false ? "You are already married!"  : "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
            arrayFoodItems[4].isMarried = arrayFoodItems[4].isMarried === false? true : false
            arrayHappinessItems[3].isMarried = arrayHappinessItems[3].isMarried === false ? true : false
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
            rocketLeague.exp += arrayStudyItems[0].exp
            break
        case "course_menu":
            arrayStudyItems[1].isBought = arrayStudyItems[1].isBought === false ? true : false
            rocketLeague.uah -= arrayStudyItems[1].price;
            tempDaysCourse = countDays + arrayStudyItems[1].days
            break
        case "university_menu":
            arrayStudyItems[2].isBought = arrayStudyItems[2].isBought === false ? true : false
            tempDaysUniversity = countDays + arrayStudyItems[2].days
            break
        default:
            break
    }
}



function workItem(button){}