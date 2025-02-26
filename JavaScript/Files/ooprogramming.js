// Task 1: Code a Person class
class Person{
    constructor(nom = "Tom", age = 20, energy = 100) {
        this.nom = nom;
        this.age = age;
        this.energy = energy;
    }
    slepp() {
        this.energy += 10;
    }
    doSomethingfun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(nom = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(nom, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    slepp() {
        return this.energy += 10;
    }
    doSomethingfun() {
        return this.energy -= 10;
    }
    goToWork() {
        return this.xp += 10;
    }

}
// Task 3: Code an intern object, run methods
function intern() {
    let booy = new Worker(
        'Bob',
        21,
        110,
        0,
        10,
    );
    booy.goToWork();

    return booy;
}

// Task 4: Code a manager object, methods
function manager() {
    const manag = new Worker(
        "Alice",
        30,
        120,
        100,
        30
    )
    manag.doSomethingfun();
    return manag;
}