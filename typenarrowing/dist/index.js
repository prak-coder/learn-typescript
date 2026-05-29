//1.type of narrowing
function triple(params) {
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
const printWord = (word) => {
    if (word) {
        for (const char of word) {
            console.log(char);
        }
    }
    else {
        console.log("No Word given");
    }
};
printWord("troy");
printWord();
//3.equality narrowing
function some(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
    else {
        console.log(x, y);
    }
}
some("js", "js");
some("some", true);
function getRuntime(media) {
    if ("noOfEpisode" in media) {
        return `${media.title}: ${media.noOfEpisode * media.avgEpisodeDuration} minutes`;
    }
    return `${media.title}: ${media.duration} minutes`;
}
console.log(getRuntime({ title: "friends", noOfEpisode: 112, avgEpisodeDuration: 20 }));
console.log(getRuntime({ title: "moneyball", duration: 130 }));
export {};
