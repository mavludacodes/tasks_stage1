// Perform addition of various types (string + boolean, string + number, number + boolean)

// string + boolean
let str = "str" + true; // "strtrue"
let str1 = false + "str"; // "falsestr"
let str2 = true + "2"; // "true2"
let str3 = "2" + false; // "2false"

// string + number
let str4 = "str" + 22; // "str22"
let str5 = 22 + "12"; // "2212"
let str6 = "12" + 13; // "1213"

// number + boolean
let num = 22 + true; // 23
let num1 = false + 12; // 12

console.log("str =", str);
console.log("str1 =", str1);
console.log("str2 =", str2);
console.log("str3 =", str3);
console.log("str4 =", str4);
console.log("str5 =", str5);
console.log("str6 =", str6);
console.log("num =", num);
console.log("num1 =", num1);

// Perform multiplication of various types (string * boolean, string * number, number * boolean)

// string * boolean
let output = "str" * true; // NaN
let output1 = false * "str"; // NaN
let output2 = true * "2"; // 2
let output3 = "2" * false; // 0

// string * number
let output4 = "str" * 22; // NaN
let output5 = 10 * "12"; //  120
let output6 = "11" * 10; // 110

// number * boolean
let output7 = 22 * true; // 22
let output8 = false * 12; // 0

console.log("output: ", output);
console.log("output1: ", output1);
console.log("output2: ", output2);
console.log("output3: ", output3);
console.log("output4: ", output4);
console.log("output5: ", output5);
console.log("output6: ", output6);
console.log("output7: ", output7);
console.log("output8: ", output8);

// Divide different types (string / boolean, string / number, number / Boolean)

// string / boolean
let result = "str" / true; // NaN
let result1 = false / "str"; // NaN
let result2 = true / "2"; // 0.5
let result3 = "2" / false; // Infinity
let result4 = "2" / true; // 2

// string * number
let result5 = "str" / 22; // NaN
let result6 = 12 / "12"; //  1
let result7 = "11" / 10; // 1.1

// number * boolean
let result8 = 22 / true; // 22
let result9 = false / 12; // 0

console.log("result: ", result);
console.log("result1: ", result1);
console.log("result2: ", result2);
console.log("result3: ", result3);
console.log("result4: ", result4);
console.log("result5: ", result5);
console.log("result6: ", result6);
console.log("result7: ", result7);
console.log("result8: ", result8);
console.log("result9: ", result9);

// Perform explicit conversion (number, string, boolean)

// number
console.log(Number("123")); // 123
console.log(Number("str")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("")); // 0

// string
console.log(String(22)); // "22"
console.log(String(0)); // "0"
console.log(String(false)); // "false"
console.log(String(true)); // "true"

// boolean
console.log(Boolean("123")); // true
console.log(Boolean("str")); // true
console.log(Boolean("")); // false
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(33)); // true
