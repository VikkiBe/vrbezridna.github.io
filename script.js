const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todos = [];
let id = 0;
//const todo = {text, checked};

{/* <li>
  <input type = "checkbox">
    <span>text</span>
    <button>delete</button>
</li> */}

function newTodo() {
  //alert('New TODO button clicked!')
  let text = prompt('Enter a new task')
  const todo = { id: id++, text: text, checked: Math.random() < 0.5 ? false : true };
  todos.push(todo);
  console.log('todos', todos);
  render(todos);
}

function render() {
  list.innerHTML = "";
  todos.map(todo => renderTodo(todo)).forEach(todo => list.append(todo))
  itemCountSpan.textContent = todos.length;
  uncheckedCountSpan.textContent = todos.filter(todo => !todo.checked).length
}
function renderTodo(todo) {
  const li = document.createElement('li');
  li.innerHTML = `
  <input type = "checkbox"  ${todo.checked ? "checked" : ""}>
  <span>${todo.text}</span>
  <button class=tt onclick = "removeTodo(${todo.id})">Delete</button>
  `
  return li;
}

function removeTodo(id) {
  //console.log('from removeTodo', id); 
  todos = todos.filter(todo => todo.id !== id)
  render();

}


const nodes = document.querySelectorAll('span');
Array.prototype.forEach.call(nodes, node => {
  node.style.fontSize = '20px';
});
const nodes1 = document.querySelectorAll('ul');
Array.prototype.forEach.call(nodes1, node => {
  node.style.fontSize = '20px';
  node.style.lineHeight = 2.2;
  node.style.family = 'Georgia';
});
const nodes2 = document.querySelectorAll('button');
Array.prototype.forEach.call(nodes2, node => {
  node.style.backgroundColor = 'yellow';
  node.style.fontWeight  = 'bolder';
  node.style.fontSize = '15px';
});