Learn Typescript

- Tuples are fixed length array with exact types [number,string] //[200,'ok']
  *enums are named constants enum orderStaus { PENDIND,DELIVERED }
  *interfaces are like type but objects with interface keyword interface Person {
  name: string;
  age: number;
  sayHi(): string;
  }
  \*type vs interfaces. interface can extend can be re declared only object types

/_Typescript compiler settings_/
\*"files": ["index.ts", "product.ts"] compile only these
// "include": ["src"],all in src direc
// "exclude": ["src/donotTouch.ts"] except this file
//good news vite handles all settings for frontend only allow null values have to setup if need
//express and tsx can be used for backend also bun like vite for backend
//type assertion tell ts that htmlElement as HtmlinputElement so we can get value from it
