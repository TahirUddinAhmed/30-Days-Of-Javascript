function doSomething() {
    let success = false;
    if(!success) {
        console.log('Failed');
    } else {
        console.log("Wow finally the code get executed");
    }
}

try {
    doSomething();
} catch(err) {
    console.log(err);
} finally {
    console.log('this will always run');
}