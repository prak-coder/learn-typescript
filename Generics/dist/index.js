// const username = document.querySelector<HTMLInputElement>('#username')!;
// const btn =document.querySelector<HTMLButtonElement>('.btn')!;
// console.dir(username)
// console.log(btn)
// function identity(item:number):number{
//     return item
// }
// function identitystring(item:string):string{
//     return item
// }
function identity(item) {
    return item;
}
const cat = {
    name: 'pussy',
    numLives: 9
};
identity('something');
identity(21);
identity(cat);
function randomElement(list) {
    // if(list.length ===0) throw new Error('not an empty array')
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(randomElement([5, 6, 9, 256, 87, 87, 66, 47, 24, 65, 78, 21, 43, 67, 19]));
console.log(randomElement(['ball', 'tap', 'nut']));
console.log(randomElement([true, false, true, true]));
function merge(object1, object2) {
    return {
        ...object1,
        ...object2
    };
}
console.log(merge({ name: 'troy' }, { age: 25, work: 'student' }));
export {};
