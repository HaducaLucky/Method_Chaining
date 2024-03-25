// Method Chaining = Calling one method after another
//                   in one connection line of code.

//      NO METHOD CHAINING

// let username = window.prompt("Enter your username:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();
username = letter + extraChar;

console.log(username);

console.log(username);


//      METHOD CHAINING

// let username = window.prompt("Enter your username:");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);s