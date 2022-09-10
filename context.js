function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
 eat();
/*Calling this.name evaluates to undefined*/

/********************************* Scenario 2 *********************************/
 nemo.eat = eat;
nemo.eat();
/* I honestly don't know what is going to happen here*/

/********************************* Scenario 3 *********************************/
 nemo.eat = eat;
 eat(); // ?
/*I don't get*/

/********************************* Scenario 4 *********************************/
 nemo.swim(); // Prints `Nemo swimmming in the water` as it is called using method invocation


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
 swim();   /*I know that this is going to return an error, but I don't know what type of error*/
