// Day 7 - objects 
// Task 1
const Book = {
    title: "Learn anything",
    author: "Author name",
    year: 2017
};



console.log(Book);
// Task 2
console.log(Book.title);
console.log(Book.author);

// Activity: Object Methods
Book.Details = function(){
    console.log(`Name of the book ${this.title}\nAuthor Name: ${this.author}`);

}
console.log(Book.Details());

// Task 4
Book.UpdateYear = function(year) {
    this.year = year;
}

console.log(Book.UpdateYear(2016));

console.log(Book.year);

// Activity 3 
// Task 5
const Library = {
    name: 'Library 1',
    books: [
        {
            title: "learn anything faster",
            author: 'John Doe',
            Year: 2016

        },
        {
            title: 'Atitude is everything',
            author: 'Peter Parker',
            Year: 2019
        }
    ]
};

console.log(Library.books);

// Activity 4: The this keyword
Book.PrintDetails = function() {
    return "Book Name: " + this.title + "\nBook Release Year: " + this.year; 
}

console.log(Book.PrintDetails());

// Activity 5: Object Iteration 

console.log("Activity 5 - Object Iteration");
// for..in loop 

for(const key in Book) {
    //console.log(key + ": " + Book[key]);
    if(typeof Book[key] === 'function') {
        console.log(key + ": " + Book[key]());
    } else {
        console.log(key + ": " + Book[key]);
    }
}

// Task 9: 
console.log(Object.keys(Book));
console.log(Object.values(Book));