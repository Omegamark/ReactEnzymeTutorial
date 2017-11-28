class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log("Hi, I'm " + this.name + ", and I'm " + this.color);
    console.log(`Hi, I'm ${this.name} and I'm ${this.color}`);
  }
}

class Lion extends Animal {
  constructor(name, color, role, home) {
    super(name, color);
    this.role = role;
    this.home = home;
  }
  roar() {
    console.log(`I'm the ${this.role} of ${this.home}!!!`);
  }
}

let lion = new Lion("Mufasa", "golden", "king", "disney");

console.log(lion);
lion.speak();
lion.roar();

let lion2 = new Lion("Simba", "Also Golden", "Prince", "Mufasa's house");

console.log(lion2);
lion2.speak();
lion2.roar();
