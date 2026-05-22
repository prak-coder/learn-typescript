interface Person {
  name: string;
  age: number;
  sayHi(): string;
}

const user: Person = {
  name: "prakash",
  age: 30,
  sayHi: () => "Hi",
};
console.log(user.name);
console.log(user.sayHi());

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark: () => string;
}

const myDog: Dog = {
  name: "browny",
  age: 5,
  breed: "indog",
  bark: () => "Woof Woof",
};
console.log(myDog);
