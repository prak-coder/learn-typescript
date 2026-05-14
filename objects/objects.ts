function printName(person: { first: string; last: string }): void {
  console.log(person);
}

const user = { first: "tom", last: "hanks" };
const halfUser = { first: "jimmy" };
printName(user);
printName(halfUser);
