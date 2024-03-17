class Key {
  constructor(private signature: number) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: object) {}
  getKey(): object {
    console.log(this.key);
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  protected door: boolean = false;
  constructor(key: object) {}

  comeIn(key: object) {
    if (this.door) {
      const tenant = new Person(key);
      this.tenants.push(tenant);
      console.log(this.tenants);
    }
  }

  public abstract OpenDoor(personKey: object): boolean;
}

class MyHouse extends House {
  constructor(key: object) {
    super(key);
  }
  public OpenDoor(personKey: object): boolean {
    if (personKey === key) {
      return true;
    }
    return false;
  }
}

const key = new Key(Math.random());
const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
