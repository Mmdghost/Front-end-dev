// exercice deepseek
// #1
class person {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    afficheDetail(){
        console.log(`My name is ${this.nom}, i am ${this.age} years old.`)
    }
}

const myName = new person('Makhtar', 24);

myName.afficheDetail();

// #2
class student extends person {
    constructor(nom, age, course){
        super(nom, age);
        this.course = course;
    }
    display(){
        console.log(`My name is ${this.nom}, i am ${this.age} years old , and i am studying ${this.course
        }.`)
    }
}

const makhoulaye = new student('Makhtar', 24, 'Computer Science');

makhoulaye.display();

makhoulaye.afficheDetail();

class teacher extends person {
    constructor(nom, age, role){
        super(nom, age);
        this.role = role;
    }
    displayTeacher(){
        console.log(`My name is ${this.nom}, i am ${this.age} years old , and i am a ${this.role}.`)
    }
}
const teacher1 = new teacher('biteye', 24, 'Teacher');
teacher1.displayTeacher();
// #3

class calculator{
    static addition(a, b){
        return a + b;
    }
    static soustraction(a, b){
        return a - b;
    }
    static multiplication(a, b){
        return a * b;
    }
    static division(a, b){
        if(b == 0){
            return "error";
        }else{
            return a / b;
        }
        
    }
    
}
const calc = new calculator();
console.log(calculator.addition(5, 6))

class temperature{
    constructor(celsius){
        this.celsius = celsius;
    }
    get Fahrenheit(){
        return this.celsius * 9 / 5 + 32;
    }
    set Fahrenheit(Fahrenheit){
        this.celsius = (Fahrenheit -32) * 5 / 9;
    }
}

const temp = new temperature(36);
console.log(temp.Fahrenheit);
temp.Fahrenheit = 100;
console.log(temp.celsius);

// #5
class BankAccount{
    constructor(solde){
        this.solde = solde;
    }
    deposer(montant){
        if(montant > 0){
            this.solde += montant;
            console.log(`Deposer : ${montant}. Nouveau solde : ${this.solde}`);
        } else{
            console.log("Montant depose doit etre positif");
        }
    }
    retirer(montant){
        if(montant > 0){
            this.solde -= montant;
            console.log(`Retirer : ${montant}. Nouveau solde : ${this.solde}`);
        } else{
            console.log("Montant retirer doit etre positif");
        }
    }
    afficheSolde(){
        console.log(`Solde actuel : ${this.solde}$`)
    }
}
const compte = new BankAccount(1000);
compte.deposer(500);
compte.retirer(200);
compte.afficheSolde();
