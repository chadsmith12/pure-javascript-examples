/* Constructors and this keyword in ES5
* Demonstrates a constructor using ES5 and and the this keyword.
*/

// Person Constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.getAge = function() {
        const dateDiff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(dateDiff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const me = new Person("Chad", '2-12-1990');
console.log(me);