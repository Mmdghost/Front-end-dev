// var today = new Date();
// var yesterday = new Date();

// var day = today.getDay();
// let hour = today.getHours();
// let year = today.getFullYear();

// console.log(today);
// console.log(yesterday);
// console.log(day);
// console.log(hour);
// console.log(year);


var today = new Date();

var day = today.getDay();

var dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

for(Day of dayList){
    console.log(Day);
}


var hour = today.getHours();

var minute = today.getMinutes();

var second = today.getSeconds();

var prepand = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour -12: hour;

if(hour === 0 && prepand === "PM"){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = "Noon";
    } else{
        hour = 12;
        prepand = "PM";
    }
}

if(hour === 0 && prepand === "AM"){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = "Midnight";
    } else {
        hour = 12;
        prepand = "AM";
    }
}

console.log("Current Time : " + hour + prepand + ":" + minute + ":" + second);

