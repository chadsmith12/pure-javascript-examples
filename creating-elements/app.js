/* 
* Creating Elements in pure javascript
* This example shows how to create an element and insert it into the dom.
* Will create an extra list item at the bottom.
*/


// create the element
const li = document.createElement('li');
// create the text node
const textNode = document.createTextNode('New List Item');

// Add a class to it
li.className = 'collection-item';

// can add an attribute
li.setAttribute('title', 'New Item');

// append a text node.
li.appendChild(textNode);

// create a link element (the x icon)
const removeIcon = document.createElement('a');
removeIcon.className = 'delete-item secondary-content';
// icon html
removeIcon.innerHTML = `<i class="fa fa-remove"></i>`;

// append the removeIcon into the li
li.appendChild(removeIcon);

// append the li as a child of the ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);