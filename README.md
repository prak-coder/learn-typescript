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
//The ! (Non-null assertion operator) and as (Type assertion) are tools used in TypeScript to override the compiler's default type inference. They tell TypeScript that you know more about the value's type than the compiler does eg. htmlelement as htmlinputelement so input.value works and input=doc.get()! no null there is element
//classes js revision class constructor extends super() before using this
//setter and getter for reading or changing property can also do validation in set get methods.
//static keyword for prop and method exist only on class not instance
//#for private prop and set and get to acces that prop

////////GENERICS///////
\*little confusing.. funct doSomething(thing:number | string):number | string but if u want to say u give a number it return number and if string return string generics do that eg Array<number> or document.querySelector<HTMLInputElement>('#username')!;
// when in tsx and using arrow func use <T,>
