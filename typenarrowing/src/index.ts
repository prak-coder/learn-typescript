//1.type of narrowing
function triple(params: string | number) {
  if (typeof params === "string") {
    return params.repeat(3);
  }
  return params * 3;
}

console.log(triple(3));
console.log(triple("hello-world "));

//2.truthiness narrowing
const el = document.getElementById("name");
if (el) {
  console.log(el.innerHTML);
}

const printWord = (word?: string) => {
  if (word) {
    for (const char of word) {
      console.log(char);
    }
  } else {
    console.log("No Word given");
  }
};
printWord("troy");
printWord();

//3.equality narrowing
function some(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase());
    console.log(y.toUpperCase());
  } else {
    console.log(x, y);
  }
}
some("js", "js");
some("some", true);

//4. using in operator in object/interface
interface Movie {
  title: string;
  duration: number;
}
interface Tvshow {
  title: string;
  noOfEpisode: number;
  avgEpisodeDuration: number;
}

function getRuntime(media: Movie | Tvshow) {
  if ("noOfEpisode" in media) {
    return `${media.title}: ${media.noOfEpisode * media.avgEpisodeDuration} minutes`;
  }
  return `${media.title}: ${media.duration} minutes`;
}
console.log(
  getRuntime({ title: "friends", noOfEpisode: 112, avgEpisodeDuration: 20 }),
);
console.log(getRuntime({ title: "moneyball", duration: 130 }));
// instanceof Date,Array or our owm classes
console.log([] instanceof Date);

//type predictes

interface Cat {
  name: string;
  numLives: number;
}
interface Dog {
  name: string;
  breed: string;
}
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}
function animalSound(value: Cat | Dog) {
  if (isCat(value)) {
    return "meaw";
  } else {
    return "Woof Woof";
  }
}

//discriminated union.. big word but just add a kind key and make it rooster
interface Cow {
  name: string;
  age: number;
  weight: number;
  kind: "cow";
}

interface Rooster {
  name: string;
  age: number;
  weight: number;
  kind: "rooster";
}

interface Pig {
  name: string;
  age: number;
  weight: number;
  kind: "pig";
}

function farmAnimalSound(a: Cow | Pig | Rooster) {
  switch (a.kind) {
    case "rooster":
      return "kokra ko ko";
      break;
    case "cow":
      return "mooooow";
      break;
    case "pig":
      return "oink";
      break;
    default:
      const _exhaustiveCheck: never = a;
      return _exhaustiveCheck;
  }
}
const cow: Cow = {
  name: "liter",
  weight: 120,
  age: 5,
  kind: "cow",
};
console.log(farmAnimalSound(cow));

//_exhaustiveCheck
