/* 
* Input and keyboard events in javascript
*/

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');

// when form is submitted.
//form.addEventListener('submit', runEvent);

// keydown event - fires off when your key goes down.
// if the key is held down it will continue to fire.
//taskInput.addEventListener('keydown', runEvent);
// keyup event - when the key is released.
//taskInput.addEventListener('keyup', runEvent);
// keypress - generalized keyevent
// only fires once when the key is pressed. will not keep firing.
//taskInput.addEventListener('keypress', runEvent);
// input gets focus.
//taskInput.addEventListener('focus', runEvent);
// blue event - opposite of focus, when you leave input.
//taskInput.addEventListener('blur', runEvent);
// something is cut from the input.
//taskInput.addEventListener('cut', runEvent);
// something is pasted into the input.
//taskInput.addEventListener('paste', runEvent);
// copied from the input.
//taskInput.addEventListener('copy', runEvent);
// anything on the input
//taskInput.addEventListener('input', runEvent);
// change event - will fire off when you lose focus of the input and something did chagne
taskInput.addEventListener('change', runEvent);


function runEvent(e){
    //e.preventDefault();
    console.log(`Event Type: ${e.type}`);
    //heading.innerText = e.target.value;
    //console.log(taskInput.value);
}
