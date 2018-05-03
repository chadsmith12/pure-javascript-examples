/* 
* Event Bubbling and Event Delegation.
* Event Bubbling is the bubbling up of the event in the dom.
* the event bubbles up to its parents.

* Event Delegation is when you put the event on the parent and you target the element you want that event for
*/

// Event bubbling
// Clicking on the card title will bubble all the way up.
const cardTitle = document.querySelector('.card-title');
const cardContent = document.querySelector('.card-content');
const card = document.querySelector('.card');
const col = document.querySelector('.col');

// cardTitle.addEventListener('click', function(){
//     console.log("card title");
// });

// cardContent.addEventListener('click', function(){
//     console.log("card content");
// });

// card.addEventListener('click', function(){
//     console.log("card")
// });

// col.addEventListener('click', function(){
//     console.log("col")
// });

// Event Delegation.
// in this example querySelector only grabbed the first x.
// the event only works for the first x, not the others.
const removeItem = document.querySelector('.delete-item');

//removeItem.addEventListener('click', deleteItem);

function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
        console.log('delete item');
    }
}

// with event delegation you put the event onto a parent
// you must do this for items that could be dynamically added
document.body.addEventListener('click', deleteItem);