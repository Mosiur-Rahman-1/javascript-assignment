
// Feet to mile Convert start

function feetToMile (inputFeet) {

    var oneMile = 0.000189394;
    var mile = inputFeet*oneMile;
    return mile;
}
var result = feetToMile (10560);
console.log (result, "Mile");

// Feet to mile Convert finish




// Wood calculator start

function woodCalculator (chair, table, bed) {
    var totalChair = chair * 1;
    var totalTable = table * 3;
    var totalBed = bed * 5;
    var totalWoodRequired = totalChair + totalTable + totalBed;
    return totalWoodRequired;
}
var userInput = woodCalculator (5, 5, 5);
console.log ("You need", userInput, "qb wood");

// Wood calculator end




// Brick calculator start

function brickCalculator (kotoTala) {

    var perFeetBricksNeed = 1000;
    var firstTenTala = 15;
    var secondTenTala = 12;
    var restAllTala = 10;

    if (kotoTala <= 10) {

        var totalBricksNeed = kotoTala * firstTenTala * perFeetBricksNeed;
    } else if (kotoTala <= 20) {
    
        var totalBricksNeed = kotoTala * secondTenTala * perFeetBricksNeed;

    } else if (kotoTala >= 21) {

        var totalBricksNeed = kotoTala * restAllTala * perFeetBricksNeed;
    } else {

        console.log ("You typed either a text or invalid number. Please input and positive integer number")
    }

    return totalBricksNeed;

}

var result = brickCalculator (9);
console.log ("You need", result, "brick to build your building");

// Brick calculator end





// Finding the tiny named friend start

function tinyFriend (friends) {

    var tinyName = friends [0];
    for (var i = 0; i < friends.length; i++) {
        var currentName = friends [i];
        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }
    }
    return tinyName;

}
var result = tinyFriend (["rahim", "karim", "mosiur", "rahaman", "jodua", "kodhu", "modhu", "ayan"]);
console.log ("This is the tiniest name among all of your friends :", result);

// Finding the tiny named friend end