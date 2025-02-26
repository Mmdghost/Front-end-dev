let car ={
    engine: true,
    color: "red",
    speed: 'slow',
}

const sportCar = Object.create(car);
sportCar.speed = 'fast';
sportCar.color = 'blue';

console.log(sportCar);
// for in
// for in is unreliable
for(prop in sportCar){
    console.log(prop);
}
console.log('-----------------------------');
// for of is reliable
for(prop of Object.keys(sportCar)){
    console.log(`${prop} : ${sportCar[prop]}`);
}

const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// map
let notes = [20,19, 20, 13, 11, 16, 17]
notes.map(function(note, index) {
    if(notes[index] <= 19){
        console.log(note + 1);
    } else{
        console.log(note);
    }
})

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result);

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// set 
let repetitifFruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple', 'orange', 'banana'];

let uniqueFruits = new Set(repetitifFruits);
console.log(uniqueFruits);