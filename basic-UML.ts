// class with attributes and operations
export class Person {
  constructor(
    private name: string,
    public surname: string,
    protected age: number
  ) {}

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public setName(name: string): void {
    this.name = "Dudona";
  }

  public setAge(age: number): void {
    this.age = 19;
  }
}

// relationship between classes = herança
export class Shape {}
export class Circle extends Shape {}

// agregação e composição = uma classe que referencia outra
export class Car {
  private engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
}

export class Engine {}

const engine = new Engine();
const car = new Car(engine);

console.log(car);

// dependência ao referenciar uma class dentro de outra
export class Printer {
  print(document: Document): void {
    console.log(`Printing ${document}`);
  }
}

export class Document {}

// realization na relação entre interface e class
export interface RemoteControl {
  play(): void;
  pause(): void;
}

export interface SoundControl extends RemoteControl {
  changeRadio(): void;
}

export class Bluray implements RemoteControl {
  pause(): void {}
  play(): void {}
}

export class Sound implements SoundControl {
  changeRadio(): void {}
  pause(): void {}
  play(): void {}
}

// classe abstrata e método abstrata
export abstract class Animal {
  protected abstract makeNoise(): string;

  makeSound(): void {
    console.log(this.makeNoise());
  }
}

export class Dog extends Animal {
  protected makeNoise(): string {
    return "au au";
  }
}

const dog = new Dog();
dog.makeSound();
