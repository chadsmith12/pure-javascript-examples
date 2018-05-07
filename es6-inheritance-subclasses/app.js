/* inheritance with ES6
* Examples of extending classes using ES6.
* This can also sometimes be called "Subclasses"
*/

// a Person object
class Person {
    // the constructor for the person object
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    // methods automatically get added to the prototype.
    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    setLastName(newLastName) {
        this.lastName = newLastName;
    }
}

// Customer inherits Person
class Customer extends Person {
    constructor(firstName, lastName, dob, phone, membership) {
        // cal the person constructor
        super(firstName, lastName, dob);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const customer = new Customer('Chad', 'Smith', '2-12-90', '555-555-5555', 'Premium');
console.log(customer);
// can still access person methods
console.log(customer.greeting());
console.log(Customer.getMembershipCost());
