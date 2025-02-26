// Spread operator (...)

let filles = ['Fatima', 'Saba', 'Sadiya'];
let garcons = ['Ali', 'Mohamed', 'Omar'];

let enfants = [...filles, ...garcons];
console.log(enfants);

let enfants2 = [...enfants, 'Sulaiman'];
console.log(enfants2);

const car = {
    marque: 'Toyota',
    modelle: 'Corolla',
    annee: 2015,
}

console.log(car);
console.log('-----------------------------');
const clone = {...car};
console.log(clone); 

// rest operator

function getMarried(...married){
     console.log(...married)
     return married;
}

getMarried('un homme', 'et', 'une', 'femme', 'vont', 'se', 'marier');

const union = getMarried('un homme', 'et', 'une', 'femme', 'vont', 'se', 'marier');
console.log(union)

function calculNote(a, b,c, ...rest){
    console.log(a, b, c, ...rest);
}

calculNote(12, 17, 18, 16, 20, 15, 12,14,13);

