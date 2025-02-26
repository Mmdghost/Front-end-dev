console.log('Hello World')

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

for(let i = 1; i < 10; i++){
    if(i == 1){
        console.log("Medaille d'or")
    } else if(i == 2){
        console.log("Medaille d'argent")
    } else if(i == 3){
        console.log("Medaille de bronze")
    } else {
        console.log(i);
    }
}

function letterFinder(word, match){
    for(let i = 0;  i < word.length; i++){
        if(word[i] == match){
            console.log("Found to the", match, "at", i)
        } else {
            console.log(" no match found at", i);
        }
    }
}