/* 
* Different mouse events in javascript.
* This gives example of some different mouse events you can listen too.
*/

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// different events
//clearBtn.addEventListener('click', runEvent);
// double click
//clearBtn.addEventListener('dblclick', runEvent);
// mouse down event
//clearBtn.addEventListener('mousedown', runEvent);
// mouse up event
//clearBtn.addEventListener('mouseup', runEvent);
// mouse enter event
//card.addEventListener('mouseenter', runEvent);
// mouse leave event
//card.addEventListener('mouseleave', runEvent);
// mouse over - these fire off when you go in any element that is in the element of the event.
//card.addEventListener('mouseover', runEvent);
// mouse out - these fire off when you go out any element that is out of the element of the event.
//card.addEventListener('mouseout', runEvent);
// mouse move - move the mouse anywhere in the elemtn
card.addEventListener('mousemove', runMouseMove);

// event handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);
}

function runMouseMove(e){
    heading.textContent = `Current Mouse X: ${e.offsetX} Current Mouse Y: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 70)`; 
}