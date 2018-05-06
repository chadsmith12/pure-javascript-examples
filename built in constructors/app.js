/* There are built in constructors for the primitive types
* They are very rarely used and shows issues with using primitive types and objects.
*/

// String
const name1 = 'Chad';
const name2 = new String('Chad');

console.log(typeof(name1)); // string
console.log(typeof(name2)); // object

// this will print out NO because string primitive types ARE different than String object.
if(name2 === 'Chad') {
    console.log("YES");
}
else {
    console.log('NO');
}

// Numbers
const num1 = 5;
const num2 = new Number(5);

console.log(typeof(num1)); // number
console.log(typeof(num2)); // object

// again, print out NO because num2 is not a primitive type. It is an object.
if(num2 === 5) {
    console.log("YES");
}
else {
    console.log('NO');
}

// Booleans
const isTrue = true;
const isTrue2 = new Boolean(true);

console.log(typeof(isTrue)); // boolean
console.log(typeof(isTrue2)); // object

// again, print out NO because isTrue2 is an object, not a primitive.
if(isTrue2 === true) {
    console.log("YES");
}
else {
    console.log('NO');
}

// functions
const getSum1 = function(x, y) {
    return x + y;
}

// very weird way of making a function
const getSum2 = new Function('x', 'y', 'return x + y');

// Objects
const me = {name: 'Chad'};
const me2 = new Object({name: 'Chad'});

// arrays
const array1 = [1,2];
const array2 = new Array(1,2);

// regular expressions
const reg1 = /[1-10]/;
const reg2 = new RegExp('[1-10]');
