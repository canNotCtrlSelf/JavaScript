"use strict";
// switch

// let arg = prompt("Enter a number:");
// switch(arg) {
//     case "0":
//     case "1":
//         alert("You entered 0 or 1");
//         break;
//     case "2":
//         alert("You entered 2");
//         break;
//     case "3":
//     case "4":
//         alert("You entered 3 or 4");
//         break;
//     default:
//         alert("You entered a number other than 0, 1, 2, 3, or 4");
// }

// function
// function showMessage(from, text = "no text given") {
//     console.log(from + ": " + text);
// }

// showMessage("Ann", "Hello!");
// showMessage("Bob");

// // function expression
// let sayHi = function () {
//     console.log("Hi!");
// }
// sayHi();
// console.log(sayHi);

// callback function
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("click", function () {
    msg.textContent = "Processing...";
    setTimeout(function () {
        msg.textContent = "Done!";
    }, 2000);
});

// arrow function
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);