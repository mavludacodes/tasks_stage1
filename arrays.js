// Given an array consisting of movie names,
// iterate over the array with the output of the names of each movie to the console

const arr = ["Avatar", "Avengers", "Titanic", "Spider Man", "Captain America"];
arr.map((name) => console.log(name));

// Given an array of car manufacturers, convert the array to a string and back to an array

const brands = ["Kia", "Honda", "Hyundai", "Tesla"];
const a = brands.join();
const b = a.split(",");
console.log("arr to str:", a);
console.log("str to arr:", b);

// Given an array of the names of your friends, add the words hello to each element of the array

const friends = ["Alice", "Bob", "Joe", "Martin"];
const result = friends.map((el) => "Hello " + el);
console.log(result);

// Convert numeric array to Boolean

let numArr = [11, 22, 20, 31, 45];
numArr.map((el) => {
  console.log("el => ", Boolean(el));
});

// Sort the array [1,6,7,8,3,4,5,6] in descending order

const nums = [1, 6, 7, 8, 3, 4, 5, 6];
const sorted = nums.sort(function (a, b) {
  return b - a;
});
console.log(sorted);

// Filter array [1,6,7,8,3,4,5,6] by value> 3

const list = [1, 6, 7, 8, 3, 4, 5, 6];
const newList = list.filter((el) => el > 3);
console.log(newList);

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function outputIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      console.log("index: ", i);
      break;
    }
  }
}

outputIndex([1, 2, 3, 4], 4);
outputIndex([1, 2, 3, 4], 3);
outputIndex([1, 2, 3, 4], 5);

// Implement a loop that will print the number 'a' until it is less than 10

for (let i = 0; i < 10; i++) {
  console.log("a");
}

// Implement a loop that prints prime numbers to the console
console.log("Prime numbers:");
for (let i = 2; i < 10; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % 2 == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Implement a loop that prints odd numbers to the console
console.log("Odd numbers:");
for (let i = 2; i < 10; i++) {
  let isOdd = false;
  for (let j = 2; j < i; j++) {
    if (i % 2 == 1) {
      isOdd = true;
      break;
    }
  }
  if (isOdd) {
    console.log(i);
  }
}
