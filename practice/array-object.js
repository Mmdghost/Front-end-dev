// exercices sur les tableaux 
// #1
let tab = [1, 2, 3, 4, 5];

console.log(tab[2]);

let tab2 = ["Mouhamed", "Maktar", "Diop"];

console.log(tab2[0]);
// #2
let tab3 = [1, 2, 3, 4, 5];
// add  to the beginning of the array
tab3.unshift(0);
// add a new element at the end of the array
tab3.push(8);
// remove the first element of the array
tab3.shift();
// remove the last element of the array
tab3.pop();

console.log(tab3)
// #3
let tab4 = ["james", "jordan", "lebron", "kobe", "curry"];

for(let i = 0; i < tab4.length; i++){
    console.log(tab4[i]);
}

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    let message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`

    console.log(message, style);

}

// Task 2: Build another console log message generator
function celebrateStyler(reason, message, style) {
    let fontStyle = "color: tomato; fony-size: 50px";

    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle)
    } else if (reason === " champions") {
        console.log(`%cCongrats on this title!`, fontStyle);
    } else {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it', 'champions');

try{
    styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it', 'champions');
} catch (error) {
    console.log(error);
}




function faireDesPhrases(sujet, verbe, complement){
    return sujet + verbe +complement
}

faireDesPhrases('Makhtar', 'est parti', 'au etats unis');

