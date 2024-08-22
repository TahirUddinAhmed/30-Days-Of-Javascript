// Activity 2
const reg = /\b[A-Z][a-z]*\b/g;
const str = "The Event will start at 3pm on 15th August 2024 in New York City.";

console.log(str.match(reg));

const reg1 = /\d+/g;
const str1 = "Hello12 there are 75 chairs in the room";
console.log(str1.match(reg1));
