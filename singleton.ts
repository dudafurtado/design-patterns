export class Singleton {
  private static _instance: Singleton | null = null;

  private constructor() {}

  // um getter
  static get instance(): Singleton {
    if (Singleton._instance === null) {
      // caso esse seja o primeiro get, o valor da instancia está nulo para a partir dai criar algo dentro
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}

const instance1 = Singleton.instance;
const instance2 = Singleton.instance;

console.log(instance1 === instance2)