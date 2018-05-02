/* 
* Traversing the DOM in Pure JavaScript
* This gives example of different ways you can traverse
* the dom in modern javascript without using jQuery.
* Just comment out the lines after everything you want to see console logged
* to see the what val is.
*/

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;

// get child nodes
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// The differen nodeType's
// 1: Element
// 2: Attribute (deprecated)
// 3: Text Node
// 8: Comment
// 9: Document itself
// 10: Doctype

// children - Get the children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = "Hello";

// children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// first child.
val = list.firstChild; // includes text nodes
val = list.firstElementChild; // elements only.

// last child
val = list.lastChild; // includes text nodes.
val = list.lastElementChild; // elements only.

// count of the child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement.previousElementSibling;

// get next sibling
val = listItem.nextSibling; // includes text nodes.
val = listItem.nextElementSibling; // element only.

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);