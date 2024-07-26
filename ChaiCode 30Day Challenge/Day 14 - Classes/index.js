// Activity 1: Class Definition
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greetings() {
        console.log(`Hello ${this.name}, welcome to This javascript series`);
    }

    // Task 2
    updateAge(newAge) {
        this.age = newAge;
    }

    // Task 5: static method 
    static genericGreet() {
        console.log(`Welcome to my world`);
    }

    // Task 7: add getter
    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    // Task 8: Add Setter
    setName(newFirstName, newLastName) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }
}

const p1 = new Person("Tahir", "Ahmed", 21);
p1.updateAge(26);
console.log(p1);
p1.greetings();


// Task 3
class Student extends Person {
    static numOfStudent = 0;

    constructor(studentId, firstName, lastName, age) {
        super(firstName, lastName, age); // call the parent class constructor 
        this.studentId = studentId;
        Student.numOfStudent++;
    }

    getStudentId() {
        return this.studentId;
    }

    greetings() {
        console.log(`Hello, ${this.name}, here is your details-\nStudentID: ${this.studentId}\nAge: ${this.age}`)
    }
}


const student1 = new Student('ST-233','John', 'Doe', 18);
const student2 = new Student('ST-234','Nandi', 'Khan' , 28);

console.log(student1);
student1.greetings();

// Activity 3: Static methods and properties 
// Task 5: static method
// Person.genericGreet = function() {
//     console.log(`Welcome to my world`);
// }

console.log("=== Task 5: Static method ===");
Person.genericGreet();

console.log("=== Task 6: Static Properties ===");
console.log(`Num of students: ${Student.numOfStudent}`);


console.log("=== Task 7: Getter ===");
console.log(`Person 1 Fullname: ${p1.getName()}`);

// Task 8
console.log("=== Task 8: Setter ===");
const p2 = new Person('Chai', 'Code', 32);
p2.setName('Hitesh', 'Choudhary');

console.log(`Updated Name: ${p2.getName()}`);

// Activity 5: Private Fields (Optional)
console.log("=== Task 9 ===");
class Account {
    #balance = 0; 

    deposite(money) {
        this.#balance += money;
    }

    withdraw(money) {
        if(this.#balance < money) {
            console.log(`Insufficient Balance, Please check your balance before withdrawals`);
        } else {
            this.#balance -= money;
            console.log(`Rupees ${money} is successfully withdrawn`);

        }
    }

    // Check Balance 
    checkBalance() {
        return `Your current balance is ${this.#balance}`;
    }

}

const acc1 = new Account;

acc1.deposite(2075);
acc1.withdraw(500);

console.log(acc1.checkBalance());

acc1.withdraw(750);

console.log(acc1.checkBalance());




