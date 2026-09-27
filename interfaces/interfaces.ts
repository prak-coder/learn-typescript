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
  // nickname: "t-bone",
};
console.log(user.name);
console.log(user.sayHi());
console.log(user.nickname);

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
console.log(myDog.bark());

interface ServiceDog extends Dog {
  job: "drug dog" | "ptsd dog" | "bomb dog";
}

const dynamite: ServiceDog = {
  name: "dynamite",
  age: 6,
  breed: "bloodhound",
  bark: () => "Bark",
  job: "bomb dog",
};
console.log(dynamite);

console.log(dynamite.job);
//type vs interfaces interface can extend can be re declared only object types
//  can be redeclared add poperties after declaration

interface Human {
  name: string;
}

interface Employee {
  id: number;
  email: string;
}

//multiple inheritance
interface Engineer extends Human, Employee {
  level: "junior" | "senior" | "architect";
  languages: string[];
}

const abed: Engineer = {
  name: "abed",
  id: 1245,
  email: "abed@movie.com",
  level: "senior",
  languages: ["JS", "java"],
};
console.log(abed);
