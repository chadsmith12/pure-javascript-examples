/* 
* using the local storage api in javascript
* local storage stays until you clear it out yourself
* storage is there until browser is closed.
*/

// set local storage item.
//localStorage.setItem('name', 'Chad');
//localStorage.setItem('age', '28');

// set session storage item.
//sessionStorage.setItem('name', 'John');

// remove from storage
//localStorage.removeItem('name');

// get from storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

// // clear the storage
// localStorage.clear();

var form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const task = document.getElementById('task').value;
    let currentTasks = [];

    if(localStorage.getItem('tasks') !== null){
        currentTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    currentTasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
});