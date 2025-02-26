// DeepSeek

// #1
let car = {
    marque: 'toyota',
    annee: 2012,
    couleur: 'gray',

    afficheDetail: function() {
        console.log(`les details de la voiture sont: couleur: ${this.couleur}, marque: ${this.marque}, de l'annee: ${this.annee}`)
    }
}
car.afficheDetail();

// #2
const personne = {
    nom: 'Makhtar',
    age: 24,
    metier: 'developer',
}
console.log(personne.metier)
let clef = 'age';
console.log(personne.age)
console.log(personne);

// #3
let test = {
    a: 1,
    b: 2,
}
test.c = 3;
test.b = 4;
delete test.a;

console.log(test);
// #4

let compteBancaire = {
    solde: 1000,
    depense: function(montant){
        if(montant > 0 && montant <= 1000){
            this.solde -= montant;
            return this.solde;
        } else{
            return `Le montant doit etre superieur a 0`
        }
    },
    depot: function(montant){
        if(montant > 0){
            return this.solde += montant;
        } else {
            return `Erreur!`
        }
    },
    decrire:function(){
           return `solde: ${this.solde}`
    }
}
compteBancaire.depense(500);
compteBancaire.depense(150)
compteBancaire.depot(1000)
compteBancaire.depense(89)
compteBancaire.depot(300)
compteBancaire.depense(450)
console.log(compteBancaire.decrire());
// #5
let typshii = {
    nom: 'Makhtar',
    age: 25,
    ville: 'Dakar',
};
console.log('Cles de lobjet');
for(clef in typshii){
    console.log(clef)
}

const valeurs = Object.values(typshii);

console.log("Valeurs: ", valeurs);

const entry = Object.entries(typshii);

console.log("Les entrees: ", entry);
// #6
let bibliotheque = {
    etagere:[
        [ /*etagere 1 */ 
            {
                livre: 'h',
                auteur:'k'
            },
            {
                livre:'k',
                auteur: 'f'
            },
        ],
        [ /*etagere 2 */ 
            {
                livre:'Une si longue lettre',
                auteur:"Mariama Ba",
            },
            {
                livre: 'Une si longue lettre',
                auteur: 'Makhtar',
            }
        ],
    ],
}

console.log(bibliotheque.etagere);
const etagere1 = bibliotheque.etagere[1];


console.log(etagere1);
console.log(etagere1[0].auteur);

// #7
    function animal(nom, type, cri) {
        this.nom = nom;
        this.type = type;
        this.cri = cri;
    
    this.crier = function() {
       return(`le ${this.type} ${this.nom} fait ${this.cri}`)
  
      };
  }

let chien = new animal("Rex", "chien", "Wouaf");
console.log(chien.crier());
let chat = new animal("Minou", "chat", "miaou");
console.log(chat.crier());

// #8
animal.prototype.Affichee = function() {
    console.log(`Je suis un ${this.type}`)
}
chien.Affichee();

// #9

class animall{
    constructor(nom, type, cri){
        this.nom = nom;
        this.type = type;
        this.cri = cri;
    }
    crier(){
        console.log(`le ${this.type} ${this.nom} fait ${this.cri}`)
    }
    static decrire(){
        return `les animaux ont des ccris`;
    }
}
const moouton = new animall('balybaly', 'Mouton', 'mbee');
moouton.crier();


// #10
class bird extends animall{
    constructor(nom, type, cri, vitesseVol){
        super(nom, type, cri);
        this.vitesseVol = vitesseVol;
    }
    crier(){
        console.log(`${this.type} ${this.nom} fait ${this.cri} et  vol a ${this.vitesseVol} km/h!`)
    }

}

let Oiseau = new bird('Ramatou', 'Oiseau', 'kook', 99);
Oiseau.crier();

// #11
let config = {
    theme: 'Dark',
    version: 1,
}

let configBackup = Object.assign({}, config);

Object.freeze(config);
config.theme = 'light';

configBackup.version = 2;
console.log(config);
console.log(configBackup);

// #12
class rect{
    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
    }
    get surface(){
        return this.longueur * this.largeur;
    }
    get perimetre(){
        return 2 * (this.longueur + this.largeur);
    }
}

const rectangle = new rect(5, 6);
console.log(rectangle.surface);
console.log(rectangle.perimetre);