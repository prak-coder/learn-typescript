interface Person {
  readonly id: number;
  name: string;
  age: number;
  sayHi(): string;
  nickname?: string;
}

const user: Person = {
  id: 222,
  name: "troy",
  age: 18,
  sayHi: () => "Hi",
  nickname: "t-bone",
};
// console.log(user.name);
// console.log(user.sayHi());

// interface Dog {
//   name: string;
//   age: number;
// }

// interface Dog {
//   breed: string;
//   bark: () => string;
// }

// const myDog: Dog = {
//   name: "browny",
//   age: 5,
//   breed: "indog",
//   bark: () => "Woof Woof",
// };
// console.log(myDog);

// interface ServiceDog extends Dog {
//   name: string;
//   age: number;
//   breed: string;
//   bark: () => string;
//   job: "drug dog" | "ptsd dog" | "bomb dog";
// }

// const dynamite: ServiceDog = {
//   name: "dynamite",
//   age: 6,
//   breed: "bloodhound",
//   bark: () => "Bark",
//   job: "bomb dog",
// };
// console.log(dynamite.job);
//type vs interfaces interface can extend can be re declared only object types can be redeclared add poperties after declaration
