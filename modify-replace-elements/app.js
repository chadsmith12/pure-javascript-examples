/* 
* Modifying, Replacing, and Removing elements in pure javascript
* This example shows how to modify elements in pure javascript.
*/


// Replace elements Example

// create an element
const newHeading = document.createElement('h3');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Current Task List'));

// Get the old heading
const oldHeading = document.querySelector('#task-title');
const cardAction = document.querySelector('.card-action');

// replace the old heading with the new heading.
cardAction.replaceChild(newHeading, oldHeading);


// Remove elements Example
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// removes the first list item.
lis[0].remove();

// can also remove child element
list.removeChild(lis[1]);

// classes and attributes
const firstLi = document.querySelector('li:first-child');
const removeItem = firstLi.children[0];
let val;
val = removeItem.className; // the class(s) on the element
val = removeItem.classList; // DOMTokenList of all the classes
removeItem.classList.add('new-class');
removeItem.classList.remove('new-class');
val = removeItem;

// attributes
val = removeItem.getAttribute('href');
removeItem.setAttribute('href', 'http://www.github.com');
removeItem.setAttribute('name', 'list-item');
// does element have an attribute
val = removeItem.hasAttribute('name');
// remove an attribute
removeItem.removeAttribute('name');
val = removeItem;

console.log(val);
