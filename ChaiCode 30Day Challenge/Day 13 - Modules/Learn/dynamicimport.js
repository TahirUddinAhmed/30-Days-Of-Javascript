console.log('Learning Dynamic Import...');
// static import
// import { sayHi, sayHola } from "./greetings.js";

// const {sayHi, sayHola} = await import('./greetings.js');

const promises = Promise.all(
    [
        await import('./greetings.js'), 
        await import('./calc.js')
    ]
);

console.log(promises)

promises.then(result => {
    console.log(result);
    result[0].sayHi();
    result[0].sayHola();

    console.log(result[1].sum(5, 7))
})



// Tree Shaking - Important Topic 


// sayHi();
// sayHola();