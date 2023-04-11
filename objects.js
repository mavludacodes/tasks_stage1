// Create a car object, add a color property to it with the value equals 'black'
// Change the color property of the car object to 'green'
// Add the power property to the car object, which is a function and displays the engine power to the console

const car = {
  color: "black",
};

car.color = "green";

car["power"] = function () {
  console.log("power: 100W");
};

console.log(car);

// Pears and apples are accepted to the warehouse,
// write a function that returns the result of adding the number of accepted pears and apples
function wareHouse(pears, apples) {
  return pears + apples;
}

const sum = wareHouse(10, 5);
console.log(sum);

// Your name is saved in the payment terminal,
// write a function to define the name in the terminal
// (if you entered your name, then hello + name, if not, then there is no such name)
function enterName(name) {
  if (name) {
    console.log("Hello", name);
  } else {
    console.log("There is no such name");
  }
}

enterName("Mavluda");
enterName();

// Write a function for calculating the type of argument and type output to the console
function findType(input) {
  console.log(`Type of ${input}:`, typeof input);
}

findType(11);
findType("str");
findType(true);
findType([1, 2, 3]);

// Write a function that determines whether a number is prime or not
function isPrimeNumber(num) {
  let isPrime = true;
  if (num === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is a prime number`);
    } else {
      console.log(`${num} is a not prime number`);
    }
  }
}

isPrimeNumber(2);
isPrimeNumber(4);
isPrimeNumber(13);
