// // Task 1
// const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

// function logDairy() {
//     for (const item of dairy) {
//         console.log(item);
//     }
// }

// // Task 2
// const animal = {
//     canJump: true
// };

// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;

// function birdCan() {
//     for (const prop in bird) {
//         if (bird.hasOwnProperty(prop)) {
//             console.log(`${prop}: ${bird[prop]}`);
//         }
//     }
// }

// // Task 3
// function animalCan() {
//     for (const prop in animal) {
//         console.log(`${prop}: ${animal[prop]}`);
//     }
// }

// // Execute all tasks
// console.log("Task 1 - Dairy items:");
// logDairy();

// console.log("\nTask 2 - Bird properties:");
// birdCan();

// console.log("\nTask 3 - Animal properties:");
// animalCan();


// Task 1
var diary = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy()
{
    for (let d of diary)
    {
        console.log(d);
    }
}

logDairy();

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan()
{
    for(const key of Object.keys(bird))
    {
        console.log(key, ": ", bird[key]);
    }
}

birdCan();

// Task 3
function animalCan()
{
    for(let b in bird)
    {
        console.log(b, ": ", bird[b]);
    }
}

animalCan();

function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();