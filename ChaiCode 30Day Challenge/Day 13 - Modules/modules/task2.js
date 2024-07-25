// Task 2: Create a module that exports an object representing 
// person with properties and methods. 

export const Person = {
    name: 'Tahir Uddin Ahmed',
    age: 21,
    skills: ['PHP, JAVA, C++, JAVASCRIPT, HTML, CSS'],

    showDetails() {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Skills: ${this.skills}
        `)
    }
}