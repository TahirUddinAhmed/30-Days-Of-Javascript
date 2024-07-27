// function counter () {
//     let num = 0;

//     return num += 1;
// }

// const counter1 = counter();

// console.log(counter1);
// console.log(counter1);
// console.log(counter1);

function Counter() {
    let num = 0; // initial value 

    function add() {
        num += 1;
        console.log(num);
    }

   return add;
}

const c1 = Counter();

c1();
c1();
c1();
c1();
c1();
