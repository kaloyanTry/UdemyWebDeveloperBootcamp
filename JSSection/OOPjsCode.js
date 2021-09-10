class Animal {
    constructor(kind, name, age) {
        this.kind = kind;
        this.name = name;
        this.age = age;
    }
    eat(food) {
        return `${this.name} is eateing ${food}`;
    }
}

class Pet extends Animal {
    constructor(kind, name, age, sound, owner) {
        super(kind, name, age);
        this.sound = sound;
        this.owner = owner;
    }
}

class Cat extends Pet {
    constructor(kind, name, age, sound, owner, livesLeft = 9) {
        super(kind, name, age, sound, owner);
        this.livesLeft = livesLeft;
    }
}

class Dog extends Pet {
    constructor(kind, name, age, sound, owner) {
        super(kind, name, age, sound, owner);
    }

    bark() {
        return "WOOOF!";
    }
}

const animalGena = new Animal("mammal", "Gena", 89);
const petBunny = new Pet("rabbet", "Bunny", 3, "Iii", "Yan");
const petKitty = new Cat("persian cat", "Kiti", 3, "Meoow", "Gesh", 7);
const dogBobi = new Dog("barak", "BObbi", 14, "Bauu", "Gocjo");
