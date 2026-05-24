function printDouble(msg) {
    console.log(msg);
    console.log(msg);
}
printDouble('printed two times');
printDouble('printed two times');
function handleClick() {
    //   console.log('i am a button i was clicked');
    alert('button got clicked');
}
const btn = document.querySelector('button');
btn?.addEventListener('click', handleClick);
export {};
//# sourceMappingURL=index.js.map