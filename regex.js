// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const str = "ahb acb aeb aeeb adcb axeb";
const regex = /a+[a-z]b/g;
const result = str.match(regex);
console.log(result);

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const str2 = "2 + 3 223 2223";
const regex2 = /2 \+ 3/g;
const result2 = str2.match(regex2);
console.log(result2);

// Get the day, month and year of the current date and output it to the console separately

const date = new Date();
console.log("Day:", date.getDate());
console.log("Month:", date.getMonth() + 1);
console.log("Year:", date.getFullYear());
