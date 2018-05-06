/* Prototypes in Javascript
* Each object in Javascript has a prototype. Prototype is also an object
*/

// object literals inherit from Object.prototype
// objects created by a constructor would be for example: Person.prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// calculate age should go in the prototype
Person.prototype.getAge = function() {
    const dateDiff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(dateDiff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`; 
}

Person.prototype.setLastName = function(lastName) {
    this.lastName = lastName;
}

 var person = new Person('Chad', 'Smith', '2-12-90');

 console.log(person);
 person.setLastName('Johnson');
 console.log(person.getFullName());

 // look at properties the object has
 console.log(person.hasOwnProperty('lastName')); // yes
 console.log(person.hasOwnProperty('getFullName')); // NO
 

