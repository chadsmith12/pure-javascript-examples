/* Prototypical inheritence in Javascript
* If we want to have one object type inherit from another.
*/

// our person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
}

// a customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);
// we need to make the Customer.prototype return a customer
Customer.prototype.constructor = Customer;
// override the greeting
Customer.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}. You are a ${this.membership} member`; 
}

 var person = new Person('Chad', 'Smith'); 
 var customer = new Customer('Jimmy', 'Joe', '555-555-5555', 'Premium'); 

 console.log(person.greeting()); // still get the person greeting
 console.log(customer); // we can see we have the person attributes with the customer ones, plus the customer constructor
 console.log(customer.greeting()); // get the customer greeting now.

 

