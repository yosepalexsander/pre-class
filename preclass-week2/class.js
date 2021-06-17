class Hero {
  constructor(name, darah) {
    this.name = name;
    this.darah = darah;
  }

  attack() {
    console.log("Attack......")
  }

  attacked() {
    this.darah -= 10;
  }
}

class Mage extends Hero {
  constructor(name, darah) {
    super(name, darah)
    this.type = "mage";
  }

  attack() {
    console.log(this.name, ": abakadabra")
  }

  attacked() {
    this.darah -= 20
  }
}

class Warrior extends Hero {
  constructor(name, darah) {
    super(name, darah);
    this.type = "warrior"
  }

  attack() {
    console.log(this.name, ": sretttt")
  }

  attacked() {
    this.darah -= 5
  }
}

// instances
const player1 = new Mage("Adi", 90);
const player2 = new Warrior("Kelvin", 100);

player1.attack()
player2.attacked()

player2.attack()
player1.attacked()

console.log("Darah si Adi: ", player1);
console.log("Darah si Kelvin: ", player2);