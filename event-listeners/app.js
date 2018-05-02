/* 
* Listening to events in pure javascript.
* This gives example of event listeners in javascript.
* Event listeners are how you actually add interaction to the page.
*/

var clearTaskBtn = document.querySelector('.clear-tasks');

// add a click event;
clearTaskBtn.addEventListener('click', onClick);

// named event function
// e is the event object.
function onClick(e){
    let val;
    val = e;

    // the target element of the event
    val = e.target;
    val = e.target.className;
    e.target.innerText = 'Tasks Cleared!';

    // The event type;
    val = e.type;

    // timestamp
    val = e.timeStamp;

    // coordinates of the event relative to the window.
    val = e.clientX;
    val = e.clientY;
    // or coordinates of the event relative to the element itself
    // starts from the top left.
    val = e.offsetX;
    val = e.offsetY;

    console.log(val);
}