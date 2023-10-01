class Main_hero{
    constructor(name,){
        this.name = name;
        this.health = null;
        this.happiness = null;
        this.food = null;
        this.exp = null;
    }
    set_food(){}
    set_health(){}
    set_happiness(){}
    set_exp(){}
}


function setsBar (id, value) {
    const bar = document.getElementById(`${id}__meter`)
    bar.value = value
}

