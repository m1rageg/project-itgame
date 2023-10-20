//Javascript не використовується

class MainHero{
    constructor(name,){
        this.name = name;
        this.health = 50;
        this.happiness = 50;
        this.food = 50;
        this.exp = null;
        this.usd = 10000
        this.uah = 10000
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

// const bodyElem = document.body
// bodyElem.style.cursor = "default"
// bodyElem.addEventListener('selectstart', (event) => {
//     event.preventDefault();
// })

let tempDaysCourse = 0
let tempDaysUniversity = 0
let tempDaysBook = 0
let timeoutTimer = 1000



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

//stats exp
let currentLevel = 9
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
    if(rocketLeague.food === 0){
        alert(`WARNING, you have 0 food, you will die in ${5 - countDatsWithoutFood} days`)
    }
    if(rocketLeague.happiness === 0){
        alert(`WARNING, you have 0 happiness, you will die in ${5 - countDatsWithoutHappiness} days`)
    }
    if(rocketLeague.health === 0){
        alert(`WARNING, you have 0 health, you will die in ${5 - countDatsWithoutHealth} days`)
    }
    addStats({food: -2, happiness: -4, health: -2})
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
        arrayWorkItems[3].conditions.coursesEnd = true
        arrayStudyItems[1].isBought = false
        document.querySelector(".course_menu").setAttribute("onclick", "studyItem(this)")
        document.querySelector(".course_menu").innerHTML = "Buy courses(+1500exp, -7000&#8372, 90 days)"
        
    }
    if (arrayStudyItems[2].isBought === true && tempDaysUniversity === countDays){
        renderExp(arrayStudyItems[2].exp);
        arrayStudyItems[2].isBought = false
        arrayWorkItems[4].conditions.universityEnd = true
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
    calculateSalary(arrayWorkItems)
    displayHeroStats(rocketLeague)
    renderImg(currentLevel)
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

//function to logic happiness
function happinessItem(button){
    const buttonClass = button.classList[0];
    switch (buttonClass) {
        case 'sleep_menu':
            addStats({food : arrayHappinessItems[1].buffFood, happiness: arrayHappinessItems[1].buffHappiness})
            break;
        case 'walk_menu':
            addStats({food : arrayHappinessItems[0].buffFood, happiness: arrayHappinessItems[0].buffHappiness}) 
            break;
        case 'cake_menu':
            if(checkBalance(arrayHappinessItems[2].price, rocketLeague.uah)){
                addStats({happiness : arrayHappinessItems[2].buffFood, food: arrayHappinessItems[2].buffFood})
                rocketLeague.uah -= arrayHappinessItems[2].price
            } else {
                openModal("myModalHappiness","text__modalHappiness", "Not enough money :c")
            }
            break;
        case 'marry_menu':
            button.innerHTML = arrayHappinessItems[3].isMarried === false ? "You are already married!"  : "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
            arrayHappinessItems[3].isMarried = arrayHappinessItems[3].isMarried === false
            arrayFoodItems[4].isMarried = arrayFoodItems[4].isMarried === false
            updateMarryButton()
            break;
        default:
            console.log('unknown')
        }
}

function updateMarryButton() {
    if(arrayHappinessItems[3].isMarried === true || arrayFoodItems[4].isMarried === true){
        let temp = document.querySelectorAll(".marry_menu")
        temp.forEach((elem) => elem.innerHTML = "You are already married!")
    }else {
        let temp = document.querySelectorAll(".marry_menu")
        temp.forEach((elem) => elem.innerHTML = "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)")  
    }
}

function healthItem(button){
    const buttonClass = button.classList[0];
    switch (buttonClass) {
        case 'workout_menu':
            addStats({food : arrayHealthItems[0].buffFood, health: arrayHealthItems[0].buffHealth})
            break;
        case 'pill_menu':
            addStats({happiness : arrayHealthItems[1].buffHappiness, health: arrayHealthItems[1].buffHealth})
            break;
        case 'doctor_menu':
            if(checkBalance(arrayHealthItems[2].price, rocketLeague.uah)){
                addStats({happiness : arrayHealthItems[2].buffHappiness, health: arrayHealthItems[2].buffHealth})
                rocketLeague.uah -= arrayHealthItems[2].price
            } else {
                openModal("myModalHealth","text__modalHealth", "Not enough money :c")
            }
            break;
        case 'hospital_menu':
            if(checkBalance(arrayHealthItems[3].price, rocketLeague.uah)){
                addStats({food : arrayHealthItems[3].buffFood, health: arrayHealthItems[3].buffHealth})
                rocketLeague.uah -= arrayHealthItems[3].price
            } else {
                openModal("myModalHealth","text__modalHealth", "Not enough money :c")
            }
            break;
        case 'abroad_menu':
            if(checkBalance(arrayHealthItems[4].price, rocketLeague.usd)){
                addStats({health: arrayHealthItems[4].buffHealth})
                rocketLeague.usd -= arrayHealthItems[4].price
            } else {
                openModal("myModalHealth","text__modalHealth", "Not enough money :c")
            }
            break;
        case 'personaldoctor_menu':
            button.innerHTML = arrayHealthItems[5].isHired === false ? "The doctor is already hired!"  : "Hire a personal doctor(+70&#10084; every month, -25000&#8372 every month)"
            arrayHealthItems[5].isHired = arrayHealthItems[5].isHired === false
            break;
        default:
            console.log('unknown')
        }
}

function foodItem(button){
    const buttonClass = button.classList[0];
    switch (buttonClass) {
        case 'meal_menu':
            addStats({food : arrayFoodItems[0].buffFood, happiness: arrayFoodItems[0].buffHappiness})
            break;

        case 'fastfood_menu':
            if(checkBalance(arrayFoodItems[1].price, rocketLeague.uah)){
                addStats({food : arrayFoodItems[1].buffFood, health: arrayFoodItems[1].buffHealth})
                rocketLeague.uah -= arrayFoodItems[1].price
            } else {
                openModal("myModalFood","text__modalFood", "Not enough money :c")
            }
            break;

        case 'restaurant_menu':
            if(checkBalance(arrayFoodItems[2].price, rocketLeague.uah)){
                addStats({food : arrayFoodItems[2].buffFood})
                rocketLeague.uah -= arrayFoodItems[2].price
            } else {
                openModal("myModalFood","text__modalFood", "Not enough money :c")
            }
            break;

        case 'personalchef_menu':
            button.innerHTML = arrayFoodItems[3].isHired === false ? "The chef is already hired!"  : "Hire a personal chef(+100&#127828 every month, -20000&#8372)"
            arrayFoodItems[3].isHired = arrayFoodItems[3].isHired === false
            break;

        case 'marry_menu': 
            button.innerHTML = arrayFoodItems[4].isMarried === false ? "You are already married!"  : "Marry(+70&#128525 every month, +70&#127828 every month, -10000&#8372 every month)"
            arrayFoodItems[4].isMarried = arrayFoodItems[4].isMarried === false
            arrayHappinessItems[3].isMarried = arrayHappinessItems[3].isMarried === false
            updateMarryButton()
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
            if(checkBalance(arrayStudyItems[1].price, rocketLeague.uah)){
                arrayStudyItems[1].isBought = arrayStudyItems[1].isBought === false
                rocketLeague.uah -= arrayStudyItems[1].price;
                tempDaysCourse = countDays + arrayStudyItems[1].days
                button.setAttribute("onclick", null)
                decrementTimer(".course_menu", arrayStudyItems[1].days)
            } else {
                openModal("myModalStudy","text__modalStudy", "Not enough money :c")
            }
            break
        case "university_menu":
            arrayStudyItems[2].isBought = arrayStudyItems[2].isBought === false
            tempDaysUniversity = countDays + arrayStudyItems[2].days
            button.setAttribute("onclick", null)
            decrementTimer(".university_menu", arrayStudyItems[2].days)
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
        if (job.name === workClass && isEnoughLvlToWork(job.conditions.needLvl)) {
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

function openModal(modalId, textId, text) {
    let modal = document.getElementById(modalId);
    let modalCont = document.getElementById(textId);
    if (modal) {
        modal.style.display = "block";
        modalCont.innerText = text
    }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}


function workItem(button){
    const buttonClass = button.classList[0];
    let res = `.${buttonClass}`
    if(!checkIsAvailableToWork(arrayWorkItems, res)){
        openModal("myModalWork", "text__modalWork", "You cant work here now :c")
        return false
    }
    changeWork(res)
}

// check is available work + end later
function checkIsAvailableToWork(array, button) {
    let available = true;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.name === button) {
            if (currentLevel < item.conditions.needLvl) {
                available = false;
            }
            if (item.conditions.hasOwnProperty("coursesEnd") && !item.conditions.coursesEnd) {
                available = false;
            }
            if (item.conditions.hasOwnProperty("universityEnd") && !item.conditions.universityEnd) {
                available = false;
            }
            if (item.conditions.hasOwnProperty("needDaysWorked") && item.conditions.needDaysWorked > array[i - 1].howMuchWorking) {
                available = false;
            }
        }
    }
    return available;
}


// salary for job
function calculateSalary(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const salary = parseFloat(item.salary);
      const exp = parseFloat(item.exp)
      if(item.isWorking){
        item.howMuchWorking += 1
      }
      if (item.isWorking && countDays % 30 === 0) {
        renderExp(exp);
          if (item.currency === "usd") {
            rocketLeague.usd += salary
          } else if (item.currency === "uah") {
            rocketLeague.uah += salary
          }
        }
    }
}

//function to render IMG
function renderImg(level) {
    const imgClass = document.querySelector(".character__img");

    if (level >= 10 && level < 20) {
        imgClass.src = "img/student.png";
    } else if (level >= 20 && level < 40) {
        imgClass.src = "img/trainee.png";
    } else if (level >= 40 && level < 60) {
        imgClass.src = "img/junior.png";
    } else if (level >= 60 && level < 80) {
        imgClass.src = "img/middle.png";
    } else if (level >= 80) {
        imgClass.src = "img/senior.png";
    }
}

function checkBalance(price, currentMoney){
    if (price > currentMoney){
        return false
    }
    return true
}

function addStats(stats) {
    rocketLeague.health += stats.health || 0;
    rocketLeague.food += stats.food || 0;
    rocketLeague.happiness += stats.happiness || 0;
    if(rocketLeague.health > 100){
        rocketLeague.health = 100
    }
    if(rocketLeague.food > 100){
        rocketLeague.food = 100
    }
    if(rocketLeague.happiness > 100){
        rocketLeague.happiness = 100
    }
    if(rocketLeague.health < 0){
        rocketLeague.health = 0
    }
    if(rocketLeague.food < 0){
        rocketLeague.food = 0
    }
    if(rocketLeague.happiness < 0){
        rocketLeague.happiness = 0
    }
    displayHeroStats(rocketLeague);
}

//func for death(end game)
let countDatsWithoutFood = 0
let countDatsWithoutHealth = 0
let countDatsWithoutHappiness = 0
function endGame(){
    if(rocketLeague.food === 0){
        countDatsWithoutFood += 1
        if(countDatsWithoutFood > 4){
            return showAlertAndReload()
        }
    } else {
        countDatsWithoutFood = 0
    }
    if(rocketLeague.health === 0){
        countDatsWithoutHealth += 1
        if(countDatsWithoutHealth > 4){
            return showAlertAndReload()
        }
    } else {
        countDatsWithoutHealth = 0
    }
    if(rocketLeague.happiness === 0){
        countDatsWithoutHappiness += 1
        if(countDatsWithoutHappiness > 4){
            return showAlertAndReload()
        }
    } else {
        countDatsWithoutHappiness = 0
    }
}

setInterval(endGame, timeoutTimer)

function showAlertAndReload() {
    alert("You are dead. Click 'OK' to restart the game.");
    location.reload();
  }
  