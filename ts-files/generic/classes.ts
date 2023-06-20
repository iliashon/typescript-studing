class User<T, S> {
  name: T;
  age: S;

  constructor(name: T, age: S) {
    this.age = age;
    this.name = name;
  }

  sayMyFullName<T>(surname: T): string {
    if (typeof surname !== 'string') {
      return `I ${this.name}`;
    } else {
      return `${this.name} ${surname}`;
    }
  }
}

class AdminUser<T> extends User<string, number> {
}

const ivan = new User("ivan", 30);
console.log(ivan);

const alex = new User<string, number>('Alex', 30);
