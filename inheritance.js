// Create 2 objects: animal and cat,
// add move property to animal object,
// cat object must inherit move property from object animal

class Animal {
  move() {
    console.log("I can move");
  }
}

class Cat extends Animal {}

const cat = new Cat();

cat.move();
