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
