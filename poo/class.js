// Exercise chatgpt
// #1
class car{
    constructor(marque, modelle, annee){
        this.marque = marque;
        this.modelle = modelle;
        this.annee = annee;
    }
    afficheDetail(){
        console.log(`Marque : ${this.marque} , Model : ${this.modelle} , annee : ${this.annee}`);
    }
}

var voiture = new car('Toyota', 'Corolla', 2015);
let myCar = new car('Mercedes', 'GLE', 2025);

console.log(voiture);
console.log(myCar);

// #2
class personne {
     constructor(nom, age){
        this.nom = nom;
        this.age = age;
     }
}

class student extends personne{
    constructor(nom, age, classe = '5A'){
        super(nom, age);
        this.classe = classe;
    }
    afficheDetails(){
        console.log(`Nom : ${this.nom} , age : ${this.age} , classe : ${this.classe}`)
    }
}
let student1 = new student('John', 20);
student1.afficheDetails();
console.log(student1);

// #3
class Calculator{
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
            return "erreur";
        }
        return a / b;
    }
}

console.log(Calculator.addition(2,3))
console.log(Calculator.soustraction(10,5))
console.log(Calculator.multiplication(5,5))
console.log(Calculator.division(25, 5))

// 4
class rectangle{
    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
    }
    get area(){
        return this.longueur * this.largeur;
    }
    set area(newArea){
        this.longueur = Math.sqrt(newArea)
        this.largeur = Math.sqrt(newArea)
    }
}
let rect = new rectangle(5, 6);
console.log(rect.area);

rect.area = 27;
console.log(rect.longueur, rect.largeur);

// #5
class BankAccout{
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
                if(montant <= this.solde){
                    this.solde -= montant;
                    console.log(`Retrait : ${montant}. Nouveau solde : ${this.solde}`);
                } else{
                    console.log("Solde insuffisant");
                }
            } else{
                console.log("Montant a retirer doit etre supérieure a zero");
            }
        }
        afficheSolde() {
            console.log(`Solde actuel : ${this.solde}$`)
        }
}

let compte = new BankAccout(1000);
compte.deposer(1000);
compte.retirer(500);
compte.afficheSolde();