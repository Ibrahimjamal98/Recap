var user = prompt("enter a number:");

var number = parseFloat(user);

if (!isNaN(number)) {
    var evenOddMessage = (number % 2 === 0) ? "even" : "odd";

    switch (evenOddMessage) {
        case "even":
            console.log("the number " + number + " is even.");
            break;
        case "odd":
            console.log("he number " + number + " is odd.");
            break;
        default:
            console.log("something wrong.");
            break;
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}