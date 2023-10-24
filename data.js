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
        price: -7000,
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
let arrayOfRandomItemsHealth = [
    {
        name: "gym",
        price: -2000,
        buffHealth: 30,
        buffHappiness: 10,
        buffFood: 0,
        isMonthly: true,
        daysRequired: 110,
        isAvailable: false,
        isBought: false
    },
    {
        name: "psychologist",
        price: -1200,
        buffHealth: 20,
        buffHappiness: 25,
        buffFood: 0,
        daysRequired: 20,
        isAvailable: false
    }
]

let arrayOfRAndomItemsHappiness = [
    {
        name: "vacation",
        price: -8000,
        buffHappiness: 70,
        buffHealth: 0,
        buffFood: 0,
        daysRequired: 250,
        isAvailable: false
    },
    {
        name: "citymall",
        price: -2000,
        buffHappiness: 35,
        buffHealth: 0,
        buffFood: 15,
        daysRequired: 365,
        isAvailable: false
    },
    {
        name: "zoo",
        price: 0,
        buffFood: -15,
        buffHealth: 0,
        buffHappiness: 25,
        daysRequired: 450,
        isAvailable: false
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
        price: -100,
        buffHappiness: 20,
        isMonthly: false,
        buffFood: 10, 
        buffHealth: 0, 
    },
    {
        name: "marry",
        price: -10000,
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
        price: -1000,
        buffHealth: 25,
        buffHappiness: -5,
        buffFood: 0,
        isMonthly: false, 
    },
    {
        name: "hospital",
        price: -4000,
        buffHealth: 50,
        buffHappiness: 0,
        buffFood: -15,
        isMonthly: false, 
    },
    {
        name: "abroad",
        price: -4000,
        currency: "usd",
        buffHealth: 100,
        buffHappiness: 0,
        buffFood: 0,
        isMonthly: false, 
    },
    {
        name: "personaldoctor",
        price: -25000,
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
        price: -300,
        buffHealth: -10,
        buffHappiness: 0,
        buffFood: 30,
        isMonthly: false,  
    },
    {
        name: "restaurant",
        price: -1000,
        buffHealth: 0,
        buffHappiness: 0,
        buffFood: 40,
        isMonthly: false, 
    },
    {
        name: "personalchef",
        price: -20000,
        buffHealth: 0,
        buffHappiness: 0,
        buffFood: 100,
        isMonthly: true,
        isHired: false 
    },
    {
        name: "marry",
        price: -10000,
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
        conditions: {
            needLvl: 0,
        },
        description: "Work on a construction site(salary: 7000&#8372)",
        ifWorking: "You are already working on a construction site.",
        howMuchWorking: 0
    },
    {
        name: ".courier_menu",
        salary: "12000",
        currency: "uah",
        exp: 0,
        isWorking: false,
        conditions: {
            needLvl: 5,
        },
        description: "Work as a courier(salary: 12000&#8372). Required lvl: 5.",
        ifWorking: "",
        howMuchWorking: 0
    },
    {
        name: ".waiter_menu",
        salary: "17000",
        currency: "uah",
        exp: 0,
        isWorking: false,
        conditions: {
            needLvl: 13,
        },
        description: "Work as a waiter(salary: 17000&#8372). Required lvl: 13",
        ifWorking: "",
        howMuchWorking: 0
    },
    {
        name: ".trainee_menu",
        salary: "1000",
        currency: "usd",
        exp: 600,
        isWorking: false,
        conditions:{
            needLvl: 20,
            coursesEnd: false
        },
        description: "Trainee(salary: 1000$, + 600exp every month). Required lvl: 20, courses must be taken.",
        ifWorking: "",
        howMuchWorking: 0
    },
    {
        name: ".junior_menu",
        salary: "1500",
        currency: "usd",
        exp: 900,
        isWorking: false,
        conditions: {
            needLvl: 40,
            universityEnd: false
        },
        description: "Junior(salary: 1500$, + 900exp every month). Required lvl: 40, university must be finished.",
        ifWorking: "",
        howMuchWorking: 0
    },
    {
        name: ".middle_menu",
        salary: "2500",
        currency: "usd",
        exp: 1200,
        isWorking: false,
        conditions: {
            needLvl: 60,
            needDaysWorked: 730,
        },
        description: "Middle(salary: 2500$, + 1200exp every month). Required lvl: 60, have to work as a junior at least 2 years.",
        ifWorking: "",
        howMuchWorking: 0
    },
    {
        name: ".senior_menu",
        salary: "5000",
        currency: "usd",
        exp: 1600,
        isWorking: false,
        conditions: {
            needLvl: 80,
            needDaysWorked: 1095,
        },
        description: "Senior(salary: 5000$, + 1600exp every month). Required lvl: 80, have to work as a middle at least 3 years.",
        ifWorking: "",
        howMuchWorking: 0
    },
    {
        name: ".teamlead_menu",
        salary: "10000",
        currency: "usd",
        exp: 2000,
        isWorking: false,
        conditions: {
            needLvl: 100,
            needDaysWorked: 1825,
        },
        description: "TeamLead(salary: 10000$, + 2000exp every month). Required lvl: 100, have to work as a senior at least 5 years.",
        ifWorking: "",
        howMuchWorking: 0
    }
]

for (let i = 1; i < arrayWorkItems.length; i++) {
    arrayWorkItems[i].ifWorking = `You are already working as a ${arrayWorkItems[i].name.split("_")[0].replace(".", " ")}.`;
}