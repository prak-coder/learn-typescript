

// function printDouble(msg:string):void{
//     console.log(msg);
//     console.log(msg);
// }

// printDouble('printed two times')
// printDouble('printed two times')

interface Todo{
    text:string,
    completed:boolean
}
const btn= document.getElementById('btn');
const input = document.getElementById('todoinput') as HTMLInputElement
const form = document.querySelector('form')!;
const list = document.querySelector('#todolist')!

 const todos:Todo[]=readTodos()
 todos.forEach(createTodo)


function readTodos():Todo []{
    const todoJSON = localStorage.getItem('todos')
    if (todoJSON===null) return  [];
    return JSON.parse(todoJSON)
}

function handleSubmit(e:SubmitEvent){
    e.preventDefault();
    const newTodo:Todo={
        text:input.value,
        completed:false
    }
    createTodo(newTodo)
    todos.push( newTodo)
    saveTodos()
    input.value='';
}
function saveTodos(){
        localStorage.setItem('todos',JSON.stringify(todos))

}
function createTodo(todo:Todo){
    const newLi = document.createElement('li')
    const checkbox= document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.checked=todo.completed
    checkbox.addEventListener('change',function(){
        todo.completed =checkbox.checked;
        saveTodos()
    })
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
form.addEventListener('submit',handleSubmit);

