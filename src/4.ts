class Key {
  constructor(private signature: number) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    console.log(this.key);
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  protected door: boolean = false;
  constructor(readonly key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract OpenDoor(personKey: Key): boolean;
}

class MyHouse extends House {
  public OpenDoor(personKey: Key): boolean {
    if (personKey.getSignature === this.key.getSignature) {
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
