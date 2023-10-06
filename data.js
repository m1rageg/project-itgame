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

// NEED TO ADD MORE
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